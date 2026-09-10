#!/usr/bin/env node
/**
 * Deterministic linter for a content library.
 *
 * It measures only what can be counted. It cannot see fabrication, monotony, or
 * whether a page has a pulse — a file can pass every target here and still be a 4
 * on the rubric. Use it to catch mechanical defects cheaply and to verify what
 * writing agents claim, never as the grade itself.
 *
 *   node ailint.mjs <dir> [file]        table
 *   FORMAT=json node ailint.mjs <dir>   json
 *
 * Reads ./audit-config.json (or AUDIT_CONFIG=path) for house style. See
 * templates/audit-config.json.
 */
import fs from "fs";
import path from "path";

const DEFAULTS = {
  contentGlobExt: [".md", ".mdx"],
  targets: {
    flagsPer500: 0, emDashPer500: 2, titleCaseHeadings: 0, sentenceSD: 6.5,
    contractionsPer500: 5, externalLinks: 3, faqItems: 0, faqLengthSD: 0,
  },
  headingCase: "sentence",
  frontmatterDateField: null,
  expectedDate: null,
  bannedPhrases: [],
};

const cfgPath = process.env.AUDIT_CONFIG || "audit-config.json";
const cfg = { ...DEFAULTS, ...(fs.existsSync(cfgPath) ? JSON.parse(fs.readFileSync(cfgPath, "utf8")) : {}) };
cfg.targets = { ...DEFAULTS.targets, ...(cfg.targets || {}) };

// Patterns that are AI tells regardless of house style. Kept deliberately short:
// a long list produces false positives and trains people to ignore the output.
const VOCAB = ["additionally","moreover","furthermore","delve","crucial","pivotal","testament","showcase","showcasing","underscore","underscores","underscoring","robust","seamless","vibrant","intricate","intricacies","myriad","realm","tapestry","landscape of","in today's","ever-evolving","leverage","leveraging","elevate","unlock","game-changer","best-in-class","world-class","cutting-edge","at scale","move the needle","level up","lean into","frictionless","north star"];
const PROMO = ["boasts a","boasts","nestled","in the heart of","groundbreaking","renowned","breathtaking","must-visit","stunning","exemplifies","commitment to"];
const INFLATED = ["stands as","serves as","is a testament","a testament to","vital role","crucial role","pivotal role","underscores the importance","highlights the importance","evolving landscape","indelible mark","plays a key role","plays a crucial role"];
const VAGUE = ["industry reports","observers have","experts argue","experts believe","experts say","some critics","several sources","many believe","studies show that","research shows that","industry experts"];
const META = ["this guide covers","this guide breaks","in this article","this article covers","this section focuses","the following table","let's take a closer look","as we'll see below","we'll explore","this post covers","in this guide","this page is built for"];
const HEDGE = ["it is important to note","it's important to note","it's worth noting","it is worth noting","in order to","due to the fact that","at this point in time","in the event that","has the ability to","it should be noted"];
const CHATBOT = ["i hope this helps","of course!","certainly!","you're absolutely right","let me know if","would you like","here is a","as of my last","up to my last training"];

const stripFm = (t) => { const m = t.match(/^---\n[\s\S]*?\n---\n/); return m ? t.slice(m[0].length) : t; };
const getFm = (t) => { const m = t.match(/^---\n([\s\S]*?)\n---/); return m ? m[1] : ""; };

function count(body, list) {
  let n = 0; const hits = [];
  for (const p of list) {
    const re = new RegExp("(?<![\\w-])" + p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?![\\w-])", "gi");
    const m = body.match(re);
    if (m) { n += m.length; hits.push(`${p}×${m.length}`); }
  }
  return { n, hits };
}

function analyze(file) {
  const raw = fs.readFileSync(file, "utf8");
  const fm = getFm(raw);
  const body = stripFm(raw);
  const prose = body.replace(/```[\s\S]*?```/g, "");
  const words = prose.split(/\s+/).filter(Boolean).length || 1;
  const per500 = (n) => +(n / (words / 500)).toFixed(2);
  const r = { file: path.basename(file), words };

  const groups = { vocab: VOCAB, promo: PROMO, inflated: INFLATED, vague: VAGUE, meta: META, hedge: HEDGE, chatbot: CHATBOT };
  r.detail = {}; let flags = 0;
  for (const [k, list] of Object.entries(groups)) {
    const { n, hits } = count(prose, list);
    flags += n; if (hits.length) r.detail[k] = hits;
  }
  r.flagsPer500 = per500(flags);

  r.emDashPer500 = per500((prose.match(/—/g) || []).length);
  r.participles = (prose.match(/,\s+(highlighting|ensuring|reflecting|symbolizing|contributing to|fostering|showcasing|underscoring|demonstrating|emphasizing|allowing|enabling|making it)\b/gi) || []).length;
  r.negParallel = (prose.match(/\b(not only|it'?s not just|it'?s not merely|isn'?t just|not just about)\b/gi) || []).length;
  r.falseRange = (prose.match(/\bfrom\s+[a-z][\w\s-]{2,25}\s+to\s+[a-z][\w\s-]{2,25}[,.]/gi) || []).length;

  const bullets = (prose.match(/^[-*]\s/gm) || []).length;
  r.inlineHeaderBullets = (prose.match(/^[-*]\s+\*\*[^*]+\*\*\s*[:—-]/gm) || []).length;
  r.bullets = bullets;

  const headings = prose.match(/^#{2,4}\s+.+$/gm) || [];
  r.headings = headings.length;
  r.titleCaseHeadings = cfg.headingCase === "sentence" ? headings.filter((h) => {
    const t = h.replace(/^#{2,4}\s+/, "").replace(/[^\w\s'-]/g, "");
    const ws = t.split(/\s+/).filter((w) => w.length > 3);
    return ws.length >= 3 && ws.filter((w) => /^[A-Z]/.test(w)).length / ws.length > 0.7;
  }).length : 0;

  const h3 = (prose.match(/^###\s+.+$/gm) || []).map((h) => h.replace(/^###\s+/, "").trim().toLowerCase());
  const dup = {}; h3.forEach((h) => (dup[h] = (dup[h] || 0) + 1));
  r.duplicateH3 = Object.values(dup).filter((c) => c > 1).length;
  const firstWord = {}; h3.forEach((h) => { const w = h.split(/\s+/)[0]; firstWord[w] = (firstWord[w] || 0) + 1; });
  r.repeatedH3Opener = h3.length ? Math.max(...Object.values(firstWord)) : 0;

  const sents = prose.replace(/^#{1,6}.*$/gm, "").replace(/^[-*|>].*$/gm, "")
    .split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter((s) => s.split(/\s+/).length > 2);
  const lens = sents.map((s) => s.split(/\s+/).length);
  const mean = lens.reduce((a, b) => a + b, 0) / (lens.length || 1);
  r.sentenceSD = +Math.sqrt(lens.reduce((a, b) => a + (b - mean) ** 2, 0) / (lens.length || 1)).toFixed(1);
  r.shortSentPct = +((lens.filter((l) => l <= 8).length / (lens.length || 1)) * 100).toFixed(1);

  r.contractionsPer500 = per500((prose.match(/\b\w+'(s|re|ve|ll|t|d|m)\b/gi) || []).length);
  r.externalLinks = (prose.match(/\]\(https?:\/\//gi) || []).length;
  r.internalLinks = (prose.match(/\]\(\//g) || []).length;
  r.stats = (prose.match(/\b\d{1,3}(\.\d+)?%|\b\d+x\b|\$\d[\d,]*/gi) || []).length;
  r.blockquotes = (prose.match(/^>\s+/gm) || []).length;

  // A number repeated three or more times usually means the writer treated it as an anchor.
  const statTokens = prose.match(/\b\d{1,3}%/g) || [];
  const sc = {}; statTokens.forEach((s) => (sc[s] = (sc[s] || 0) + 1));
  r.overusedStats = Object.entries(sc).filter(([, c]) => c >= 3).map(([s, c]) => `${s}×${c}`);

  // FAQ answer shape. Uniform length and question-restating openings are the
  // clearest fingerprint left after a vocabulary cleanup.
  const faqs = [...body.matchAll(/<FAQItem[^>]*question=["']([^"']+)["'][^>]*>([\s\S]*?)<\/FAQItem>/g)];
  const alt = faqs.length ? [] : [...body.matchAll(/^###\s+(.+\?)\s*\n([\s\S]*?)(?=\n#{2,3}\s|\n*$)/gm)];
  const pairs = (faqs.length ? faqs : alt).map((m) => [m[1], m[2]]);
  r.faqItems = pairs.length;
  const flen = pairs.map(([, a]) => a.trim().split(/\s+/).length);
  const fm2 = flen.reduce((a, b) => a + b, 0) / (flen.length || 1);
  r.faqLengthSD = +Math.sqrt(flen.reduce((a, b) => a + (b - fm2) ** 2, 0) / (flen.length || 1)).toFixed(1);
  r.faqRestate = pairs.filter(([q, a]) => {
    const qt = q.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/).filter((w) => w.length > 3);
    const as = a.trim().toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/).slice(0, 6);
    return qt.filter((t) => as.includes(t)).length >= 2;
  }).length;

  // Banned claims, with refutation excluded. A library that has done this work
  // properly will MENTION its retired claims on the pages that debunk them, and a
  // naive match fires hardest on exactly those pages. Flagging them would pressure a
  // writer to delete the correction, which is the opposite of the intent.
  if (cfg.bannedPhrases.length) {
    const REFUTES = /\b(no primary source|never traced|unsourceable|made up|fake|false|wrong|isn'?t real|not real|myth|folklore|debunk|invented|fabricat|cannot be measured|can'?t be measured|nobody can measure|not measurable|no tracking pixel|no evidence|doesn'?t exist|does not exist|no such|traces? to nothing|we removed|we deleted|deserves to die|no longer|used to)\b/i;
    r.bannedPhrases = []; r.bannedInRefutation = [];
    for (const p of cfg.bannedPhrases) {
      const re = new RegExp("(?<![\\w-])" + p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?![\\w-])", "gi");
      let m;
      while ((m = re.exec(prose)) !== null) {
        const ctx = prose.slice(Math.max(0, m.index - 220), m.index + 220);
        if (REFUTES.test(ctx)) r.bannedInRefutation.push(p);
        else r.bannedPhrases.push({ phrase: p, context: ctx.replace(/\s+/g, " ").trim() });
      }
    }
  }
  if (cfg.frontmatterDateField) {
    const m = fm.match(new RegExp("^" + cfg.frontmatterDateField + ":\\s*[\"']?([\\d-]+)", "m"));
    r.date = m ? m[1] : "MISSING";
  }

  const t = cfg.targets;
  r.fails = [];
  if (r.flagsPer500 > t.flagsPer500) r.fails.push(`flags ${r.flagsPer500}`);
  if (r.emDashPer500 > t.emDashPer500) r.fails.push(`emDash ${r.emDashPer500}`);
  if (r.titleCaseHeadings > t.titleCaseHeadings) r.fails.push(`titleCase ${r.titleCaseHeadings}`);
  if (r.sentenceSD < t.sentenceSD) r.fails.push(`sentSD ${r.sentenceSD}`);
  if (r.contractionsPer500 < t.contractionsPer500) r.fails.push(`contractions ${r.contractionsPer500}`);
  if (r.externalLinks < t.externalLinks) r.fails.push(`extLinks ${r.externalLinks}`);
  if (t.faqItems && r.faqItems < t.faqItems) r.fails.push(`faqItems ${r.faqItems}`);
  if (t.faqLengthSD && r.faqItems && r.faqLengthSD < t.faqLengthSD) r.fails.push(`faqSD ${r.faqLengthSD}`);
  if (r.bannedPhrases?.length) r.fails.push(`banned: ${r.bannedPhrases.map((b) => b.phrase).join(",")}`);
  if (cfg.expectedDate && r.date && r.date !== cfg.expectedDate) r.fails.push(`date ${r.date}`);
  return r;
}

const dir = process.argv[2] || ".";
const one = process.argv[3];
const files = one ? [one] : fs.readdirSync(dir)
  .filter((f) => cfg.contentGlobExt.some((e) => f.endsWith(e)))
  .map((f) => path.join(dir, f));
const out = files.map(analyze);

if (process.env.FORMAT === "json") {
  console.log(JSON.stringify(out, null, 2));
} else {
  const cols = ["file","words","flg/500","em/500","ttlCase","dupH3","sentSD","short%","cxn/500","ext","int","stats","faq","faqSD","faqRe","FAILS"];
  console.log(cols.join("\t"));
  for (const r of out.sort((a, b) => b.fails.length - a.fails.length || b.flagsPer500 - a.flagsPer500)) {
    console.log([r.file.replace(/\.mdx?$/, ""), r.words, r.flagsPer500, r.emDashPer500, r.titleCaseHeadings,
      r.duplicateH3, r.sentenceSD, r.shortSentPct, r.contractionsPer500, r.externalLinks, r.internalLinks,
      r.stats, r.faqItems, r.faqLengthSD, r.faqRestate, r.fails.join(" ") || "-"].join("\t"));
  }
  const bad = out.filter((r) => r.fails.length).length;
  console.error(`\n${out.length - bad}/${out.length} meet every target`);
}

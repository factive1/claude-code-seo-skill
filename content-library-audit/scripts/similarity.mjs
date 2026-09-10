#!/usr/bin/env node
/**
 * Cross-file paragraph similarity for a content library.
 *
 * Pin this metric and use only this one. Two agents measuring the same corpus with
 * different metrics reported 0.76 and 0.45 for the same paragraph pair, and the
 * disagreement cost a round of argument. One scanner, one number.
 *
 *   node similarity.mjs <dir> [threshold]     default 0.55
 *   FORMAT=json node similarity.mjs <dir>
 *
 * Method: 8-word shingles over normalized prose, scored as
 * |A ∩ B| / min(|A|, |B|). Blockquotes, code, tables and frontmatter are stripped,
 * link URLs dropped and anchor text kept.
 *
 * Reading the output: a shared verbatim QUOTATION scoring 1.00 is correct and must
 * stay identical — altering a quote to reduce a similarity score is misquoting the
 * source. What matters is shared AUTHORED prose. Check what the overlap actually is
 * before treating a pair as a defect.
 */
import fs from "fs";
import path from "path";

const dir = process.argv[2] || ".";
const threshold = parseFloat(process.argv[3] || "0.55");

const paragraphs = (file) => {
  let t = fs.readFileSync(file, "utf8");
  t = t.replace(/^---\n[\s\S]*?\n---\n/, "");
  t = t.replace(/```[\s\S]*?```/g, "");
  t = t.replace(/^\|.*$/gm, "");   // tables
  t = t.replace(/^>.*$/gm, "");    // blockquotes are usually source quotations
  t = t.replace(/<[^>]+>/g, "");
  return t.split(/\n\s*\n/).map((p) => p.split(/\s+/).join(" ").trim())
    .filter((p) => p && !p.startsWith("#") && p.split(" ").length >= 14);
};

const norm = (s) => s.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
  .replace(/https?:\/\/\S+/g, " ").replace(/[^a-z ]/gi, " ").toLowerCase().split(/\s+/).filter(Boolean);

const shingles = (s, n = 8) => {
  const w = norm(s);
  const out = new Set();
  for (let i = 0; i + n <= w.length; i++) out.add(w.slice(i, i + n).join(" "));
  return out;
};

const files = fs.readdirSync(dir).filter((f) => /\.mdx?$/.test(f)).sort();
const items = [];
for (const f of files) for (const p of paragraphs(path.join(dir, f))) items.push({ f, p, s: shingles(p) });

const pairs = [];
for (let a = 0; a < items.length; a++) {
  for (let b = a + 1; b < items.length; b++) {
    if (items[a].f === items[b].f) continue;
    const A = items[a].s, B = items[b].s;
    if (!A.size || !B.size) continue;
    let inter = 0;
    for (const g of A) if (B.has(g)) inter++;
    const score = inter / Math.min(A.size, B.size);
    if (score >= threshold) pairs.push({ score: +score.toFixed(3), a: items[a].f, b: items[b].f, excerpt: items[a].p.slice(0, 120) });
  }
}
pairs.sort((x, y) => y.score - x.score);

if (process.env.FORMAT === "json") {
  console.log(JSON.stringify(pairs, null, 2));
} else {
  console.log(`${pairs.length} paragraph pairs at or above ${threshold} across ${files.length} files\n`);
  const seen = new Set();
  for (const p of pairs) {
    const k = [p.a, p.b].sort().join("|") + p.score;
    if (seen.has(k)) continue;
    seen.add(k);
    console.log(`${p.score.toFixed(2)}  ${p.a.replace(/\.mdx?$/, "")}  ↔  ${p.b.replace(/\.mdx?$/, "")}`);
    console.log(`      "${p.excerpt}"`);
  }
  if (!pairs.length) console.log("None. Check a lower threshold before concluding the corpus is clean.");
}

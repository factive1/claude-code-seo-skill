# Changelog

## content-library-audit 1.0.0 — 2026-09-10

Second skill in the repo. Audits and remediates an existing body of content rather than
writing a piece. The guide stays the standard for both; this adds the verification a
corpus needs.

Built from an audit of a 70-article library that moved from a mean of 1.6/10 to a pass at
9.0+, and encodes what that audit learned the hard way.

Added:

- `content-library-audit/SKILL.md` — ten gates, two lanes (remediation for content of
  unknown provenance, maintenance for content written to the standard), and the rules that
  only surface at scale
- `content-library-audit/scripts/ailint.mjs` — deterministic linter for AI-accent
  patterns, structure, citation density, and FAQ answer shape. Config-driven for house
  style. Its banned-claims check distinguishes a claim being asserted from one being
  debunked, so it doesn't fire on the pages doing the right thing
- `content-library-audit/scripts/similarity.mjs` — corpus paragraph-similarity scanner on
  a single pinned metric, because two agents using different metrics reported 0.76 and
  0.45 for the same pair
- `content-library-audit/reference/rubric.md` — scores as `min(voice, rank)` so a strong
  half can't carry a weak one, with hard caps for fabrication and false product claims
- `content-library-audit/reference/architectures.md` — ten named structures, one assigned
  per article, because asking writers to "vary the structure" doesn't work
- `content-library-audit/templates/` — claims ledger and house-style config

## seo-geo-content 2.1.0 — 2026-09-10

Changed:

- Description narrowed to a single piece of content, so it no longer competes with the
  audit skill on the word "audit"
- Added a handoff section pointing at `content-library-audit` when the target is a
  directory or a library

## 2.0.0 (2026-09-09)

The guide was rebuilt around the current understanding of why AI text sounds like AI, and cross-referenced against two editing skills: [humanizer](https://github.com/blader/humanizer) 3.0 and [no-ai-slop](https://github.com/petergyang/no-ai-slop). The old version over-invested in vocabulary lists and under-covered the structural tells that current models produce.

Added:

- Four rules at the top of the guide: never invent a fact, voice samples win, every sentence adds something, and the portability test.
- A sourcing rule wired to the GEO section. Statistics, quotes, and citations only count when they trace to a URL or client material. A `[SOURCE NEEDED]` convention for anything else.
- A voice samples section. Where to find them, what to ask for, and the rule that a sample overrides every pattern including dashes.
- The voice section rebuilt as 40 numbered patterns in six groups, strongest first. Groups A through E follow humanizer's structure (staging, rhythm by rule, inflation and borrowed authority, formatting by rule, leftovers). Group F holds the SEO-specific tells.
- New patterns that were missing entirely: one-line closers and kickers, sayings that sound deep, faux-insight setups, colon reveals, rhetorical setups and self-answered questions, interpretive metadiscourse, arguing with no one, repeated openings and paragraph shapes, vague connection, the prestige-list form of borrowed authority, bullets that should be prose, headers over tiny sections, summary-recap endings, and heading repeated in the first sentence.
- SEO-specific patterns: explaining the search query, structural monotony in listicles, cross-article template bleed, stat repetition, diplomatic hedging on comparison pages, uniform FAQ answers, and tidy social proof.
- A conflict-resolution table for the eleven places where an SEO or GEO requirement seems to pull against a voice rule, with a "how to do both" column.
- A definition of "authoritative tone" for the Princeton GEO table, so a model doesn't read it as permission for adjectives.
- The rewrite pass, a five-step process that replaces find-and-replace: mark tells, rewrite around the point, check the five survivors and the ending, check the facts, read aloud.
- A "when not to act" section with false-positive guards and the list of voice details to keep.
- The Princeton GEO methods table, NavBoost and last-longest-click guidance, and the JSON-LD schema examples.
- A second full example built on current-generation tells that vocabulary cleanup would miss.
- A SKILL.md so the repo installs as a Claude Code skill.

Changed:

- Not-X-but-Y promoted from a minor grammar note to pattern 1, with the split-sentence, reversed, clipped-tail, and negative-listing forms.
- Meta-commentary merged into the staged run-up pattern.
- Keyword-in-H2 guidance changed from "every H2" to "one or two H2s."
- Synonym cycling narrowed to a weak-alone pattern with an entity-consistency rule: one name for the thing the page is about, vary elsewhere.
- The vocabulary list expanded with no-ai-slop's banned words, SaaS clichés, and often-empty adverbs, and demoted to the least important edit.
- The checklist split into a rewrite pass and a final gate, and updated for every new pattern.
- The guide now follows its own rules: no dashes outside code and one intentional example, sentence-case headings, no bold-label bullets, content-type lengths in tables.

Removed:

- False ranges as a standalone pattern. Wikipedia's "Signs of AI writing" reclassified it as a human habit and humanizer 3.0 dropped it.
- An unsourced "~40%" citation-boost claim on FAQPage schema.

## 1.0.0

Initial release. SEO section, GEO section, voice patterns adapted from Wikipedia's "Signs of AI writing," an adding-soul section, checklists, and a full example. README rewritten to follow the guide's own principles.

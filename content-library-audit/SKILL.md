---
name: content-library-audit
description: Audit and remediate an existing body of content — a blog, resource library, docs set, knowledge base, or any directory of articles — for fabricated sources, false product claims, AI-accent voice, cross-article repetition, and search or AI-citation performance. Use when the user wants existing content audited, graded, fact-checked, de-slopped, or brought up to a quality bar across more than one piece, or names a directory, section, or site rather than a single page. For writing or editing one piece, use seo-geo-content instead.
license: MIT
metadata:
  version: "1.0.0"
---

# Content library audit

`seo-geo-content-guide.md` is the standard. Read it in full before grading anything. It
ships beside this skill — look in this directory, its parent, or
`~/.claude/skills/seo-geo-content/`.

This skill is not the standard. It is what you do when the standard has to hold across
many pieces of content you did not write, whose provenance you do not know. That is a
different job, and it fails in ways a single-piece review never surfaces.

Four of them, all observed:

- **Writers certify their own work as clean and it isn't.** Every writing agent in one
  audit reported success. Independent graders then found they had introduced *new*
  fabrications while fixing old ones.
- **Repetition is invisible from inside one file.** Twelve articles opened with the same
  stem. Two comparison pages were the same article with the name swapped.
- **Fabrication recurs during repair.** Ten invented product capabilities were found in
  one library. Four were created *during* the rounds that were fixing the first six.
- **Shared sources produce shared sentences.** Seventy articles citing thirty-one sources
  independently wrote near-identical paragraphs to introduce them.

None of these are solved by better guidance. They need verification.

## Pick a lane

Count the pieces in scope, then say which lane you're running and why.

**Remediation** — content of unknown or pre-standard provenance, or never audited.
Expect to find a lot. Run it once per library.

**Maintenance** — content written to the standard, added since the last audit. Expect to
find little; finding little is the success condition, not a reason to dig harder.

Under roughly eight pieces in one cluster, run the light path: you can hold the whole
corpus in your head and read the openings side by side. Above that, repetition stops
being visible by reading and you need the scanners and the batching.

## Gates

Both lanes run these in order. Each is a gate: do not start the next until the previous
is clean.

**1. Instrument.** Copy `templates/audit-config.json` into the project and set house
style from the content itself, not from preference. Run `scripts/ailint.mjs` for a
baseline. The linter measures only what can be counted — it cannot see fabrication,
monotony, or whether a page has a pulse. Use it to catch cheap defects and to check what
agents claim, never as the grade.

**2. Verify sources — blocking.** Before a single article is rewritten, verify every
external claim the library depends on and write `templates/claims-ledger.md`. Skipping
this means rewriting the corpus with fresh fabrications. In one audit this step found the
library's single most-repeated statistic, present in twenty-five files, had no primary
source and described something that cannot be measured.

Record what each study *measured*, not just its number.

**3. Audit product claims.** Ask the user which files are authoritative for pricing,
features, and integrations. Grep every CTA and every sentence naming the product against
them. Do this now, not after the ninth false claim ships. Anything that fails is a
CRITICAL failure, reported separately from the score.

**4. Grade.** Score against `reference/rubric.md`: `min(voice, rank)`, pass at 9.0. Batch
by topical cluster so repetition is visible to the grader. Quote the line for every
deduction.

**5. Assign architectures.** Give every article a named structure from
`reference/architectures.md`. No two in a cluster share one. Do this before rewriting.

**6. Rewrite.** Writers get: the guide, the ledger, their cluster's audit, their assigned
architecture, and the rule that the ledger is the only citation library they may use.

**7. Verify independently.** Different agents from the ones that wrote. Grade *every*
piece, including ones that passed earlier — repairs cause regressions elsewhere.

**8. Sweep the whole corpus.** Run `scripts/similarity.mjs`. Grep the banned-claims list.
Count your own devices. Check openings and closings together.

**9. Loop.** Re-run 7 and 8 after every fix round, not just on the files that failed.

**10. Verify shipping surfaces.** Dates, structured data, canonical tags, sitemap, build.
Check each surface independently and confirm they agree with each other.

## Rules that only show up at scale

**Writers never grade their own work.** Not once, not for a spot check.

**Frontmatter is in scope.** Description and title fields render as the meta description,
the structured data, and often visible page copy. In one audit an article's body
correctly said an integration did not exist while its description still advertised
setup steps for it — and the description is the half that gets indexed.

**Fixes create defects.** Standardizing a fact made two articles overcorrect into denying
it. Renaming headings to break collisions moved the collisions to other files. Every
device that fixes monotony becomes monotony at corpus scale. Re-scan after every round.

**When two verifications of a checkable fact disagree, delete the claim.** Don't arbitrate.
A number that competent readers can't agree on adds nothing and will break when the
source page changes.

**Quotes stay byte-identical.** For de-duplication, give each article a different
*fragment* of a shared source, matched to that article's argument. Never paraphrase a
quotation to lower a similarity score — that is misquoting.

**Pin one similarity metric.** Use `scripts/similarity.mjs` and only it. Two agents
measuring the same paragraphs with different metrics reported 0.76 and 0.45.

**Distinguish shared quotation from shared prose.** A verbatim quote scoring 1.00 across
files is correct. Shared authored framing around it is the defect.

**Recompute every number you touch.** Arithmetic errors survive several rounds of careful
review because they look like prose. Check the ones in your own fixes too.

**The coordinator owns corpus state.** Agents working in parallel cannot see each other's
files. Cross-file collisions, ledger updates, and whole-corpus sweeps belong to whoever
is running the audit.

## What to return

The grade table. Every CRITICAL finding, with the file it was verified against. The
ledger. What you changed and what you deliberately did not. Anything you could not verify,
named as unverified rather than quietly dropped.

Report honestly. If pieces still fail, say which and why. An audit that reports success it
did not achieve is worse than no audit, because it retires the question.

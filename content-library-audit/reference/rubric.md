# Scoring rubric

Two sub-scores. **The grade is `min(voice, rank)`, never the average.** A page that
reads like AI cannot pass on sourcing strength, and a page that is beautifully written
but has nothing to cite cannot pass on voice. Averaging hides exactly the failure you
are looking for: in one audit, voice reached 8.9 while rank sat at 6.5, and the mean
would have called that a pass.

**Pass = 9.0 or higher on both.**

Grade against the standard in `seo-geo-content-guide.md`. This file only says how to
turn it into a number.

## Human voice (0-10)

Start at 10, deduct, and quote the offending line for every deduction. A deduction you
can't quote isn't real.

| Defect | Deduct |
|---|---|
| AI vocabulary word (see the guide's list) | 0.5 each |
| Copula avoidance: "serves as", "stands as", "plays a vital role" | 0.5 each |
| Vague attribution with no named source | 1.0 each |
| Meta-commentary: a sentence about the article rather than the topic | 1.0 each |
| Negative parallelism: "It's not X, it's Y" | 0.75 each |
| Participle tacked on: ", ensuring…", ", allowing you to…" | 0.5 each |
| Em dashes above house limit | 1.0 |
| Heading case against house style | 1.5 flat |
| Inline-header bullets as the dominant list form | 1.0 |
| Forced triads, synonym cycling, false ranges | 0.5 each |
| FAQ answers uniform in length, opening by restating the question | 1.5 |
| Opens by defining the term the reader searched for | 1.5 |
| Same statistic repeated 3+ times | 1.0 |
| Generic uplift ending | 1.0 |
| 4+ consecutive sections on an identical template | 1.5 |
| Chatbot residue, sycophancy, knowledge-cutoff hedging | 2.0 each |
| Hedging filler: "it's important to note", "in order to" | 0.5 each |
| **Soul deficit**: no opinion, no acknowledged tradeoff, uniform rhythm, reads like a press release | 2.0 |
| Sentence-length SD below house floor | 1.0 |
| Contractions below house floor | 0.5 |

Neutral competence is a 6. The absence of slop is not the presence of voice.

## Rank potential (0-10)

| Defect | Deduct |
|---|---|
| **Zero external citations to named authoritative sources** | 3.0 |
| Fewer than 3 external citations | 1.5 |
| Sources linked but not named in prose | 1.0 |
| No sourced statistics | 2.0 |
| No expert quote with a real name and affiliation | 1.5 |
| No FAQ section where the format calls for one | 2.5 |
| No quotable definitional statement in the first 150 words | 1.5 |
| Key claims buried mid-paragraph rather than leading | 1.5 |
| Fewer than 5 internal links to related content | 1.0 |
| Non-descriptive anchor text | 0.5 each |
| Primary keyword missing from title, H1, or any H2 | 1.0 each |
| Padding: 20% could be cut without loss | 1.5 |
| Thin: doesn't fully answer the query | 2.0 |
| Missing answer block near the top | 1.0 |

## Hard caps

These override the arithmetic:

- **One fabricated or misattributed source caps rank at 4.0.** Say so explicitly in the
  report. Named-but-wrong is worse than uncited: it is the sentence an answer engine
  lifts and repeats.
- **One false product or capability claim is a CRITICAL failure**, reported separately
  from the score. Verify against the project's source-of-truth files, not against the copy.

## Report format

```
FILE: <slug>
HUMAN_VOICE: <x.x>
RANK_POTENTIAL: <x.x>
FINAL: <min>
VERDICT: PASS | FAIL
CRITICAL: <false claims, fabrications, compliance problems — or "none">
DEFECTS:
- <defect> | "<exact quoted text>" | <deduction>
FIXES_REQUIRED:
- <specific instruction, actionable without re-reading the article>
```

Explain any score of 9 or above in one line so it can be challenged. A pass that
wasn't earned costs another cycle; so does a fail that wasn't real.

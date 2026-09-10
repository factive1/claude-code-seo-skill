# Claude Code SEO skills

Two skills. One writes content that ranks in Google, gets cited by ChatGPT and Perplexity, and reads like a person wrote it. The other audits a library you already have.

| Skill | Use it for |
|---|---|
| `seo-geo-content` | One piece. Write it, edit it, or review a draft. |
| `content-library-audit` | Many pieces. Grade a blog, resource section, or docs set and remediate what fails. |

The guide is the standard for both. The audit skill runs it across a corpus and adds the verification that scale requires.

## The problem

AI-written content has tells, and the obvious ones (delve, landscape, em dashes) are the least of them. The tells that survive a vocabulary cleanup are structural: "It's not X. It's Y." A one-line closer after every section. "Here's the thing." "What nobody tells you." Ideas in threes. A bold label on every bullet. A recap paragraph at the end.

Readers spot them. Google's helpful content system is built to spot template content. And AI answer engines cite specific, sourced, plainly written pages over pages that sound like they were generated.

There's a second problem that only shows up in SEO content. Guidance that says "add statistics, quotes, and citations" produces fabricated statistics, quotes, and citations when a model follows it without a constraint. This guide has the constraint.

## What's in the repo

`seo-geo-content-guide.md` is the guide. It's the source of truth and the file both skills read.

`SKILL.md` makes the guide installable as a Claude Code skill and says how to apply it to a piece of content.

`content-library-audit/` is the second skill: the pipeline for auditing many pieces at once. It contains its own `SKILL.md`, a deterministic linter, a corpus similarity scanner, the scoring rubric, and templates for the claims ledger and house-style config.

`CHANGELOG.md` tracks versions.

## What the guide covers

Four rules sit above everything else: never invent a fact, the author's voice samples win, every sentence adds something the reader didn't have, and the portability test (if a sentence could move unchanged to another company, it's filler).

The SEO section covers content types and lengths, the last-longest-click standard from Google's NavBoost system, keyword placement that doesn't turn every H2 into a template, E-E-A-T signals, topical clusters, and the technical layer with JSON-LD schema examples.

The GEO section covers the nine Princeton GEO methods with their measured visibility boosts, what sentence structures get quoted, how each answer engine differs, and a research process for finding gaps in current AI answers.

The sourcing rule ties the two together. Statistics, quotes, and citations only count when they trace to a URL or to client material. Anything else gets a plainer sentence or a `[SOURCE NEEDED]` marker.

The voice section is the longest. It lists 40 patterns in six groups, numbered strongest first, each with what to watch for, why it's a problem, and a before and after. The first nine justify an edit on a single sighting. Weaker ones need company from other tells before you act. Six of the patterns only show up in search content produced at volume: explaining the search query, structural monotony in listicles, template bleed across a cluster, stat repetition, diplomatic hedging on comparison pages, and tidy social proof.

A conflict table resolves the places where an SEO requirement seems to break a voice rule. Keyword in the H2s versus repeated openings. Skimmable bold versus bold as decoration. A quotable definition up front versus a heading repeated in the first sentence. Each row says how to do both.

The rest: a section on adding a pulse without adding a new template, a five-step rewrite pass that replaces find-and-replace, the pre-publish checklists, and two full before-and-after examples, one with the 2023-era tells and one with the tells current models produce.

## Install

Clone the repo into your skills directory. For every project on your machine:

```sh
git clone https://github.com/factive1/claude-code-seo-skill.git ~/.claude/skills/seo-geo-content
```

For one project only:

```sh
git clone https://github.com/factive1/claude-code-seo-skill.git .claude/skills/seo-geo-content
```

That installs the writing skill. To also install the audit skill, link its folder so Claude Code sees it as a second skill:

```sh
ln -s ~/.claude/skills/seo-geo-content/content-library-audit ~/.claude/skills/content-library-audit
```

Claude Code picks them up on the next session. Ask for an article and the writing skill loads; point at a directory of articles and the audit skill loads. Or call either directly:

```text
/seo-geo-content write a comparison of Jobber and Housecall Pro for plumbers
/content-library-audit audit everything in src/content/resources
```

To update later:

```sh
cd ~/.claude/skills/seo-geo-content && git pull
```

## Use it as a reference

The guide also works as a document for people. Read it once. Then use the checklists as a pre-publish review, the conflict table when SEO advice and writing advice disagree, and the before-and-after examples when something sounds off and you can't say why.

## Three questions to ask your draft

Does every number, name, and quote trace to a URL? If not, cut it or mark it.

Can an LLM quote your main point in one sentence? If the key claim is buried or spread across paragraphs, restructure.

Could this sentence move unchanged to a competitor's site? If yes, it's filler.

## Three questions to ask your library

These only make sense across a corpus, which is why the second skill exists.

Would an independent reader reach the same grade as the person who wrote it? Writers certify their own work as clean, and it isn't. Grading has to be done by someone who didn't write it.

Read every opening back to back, then every closing. Do any rhyme? Repetition is invisible from inside a single file and obvious across twelve.

Does any sentence claim your product does something? Check it against the file that defines what your product does, not against the copy. Sales-adjacent sentences are where invented capabilities appear.

## What the audit skill does

Ten gates, in order, each one blocking the next. The load-bearing ones:

**Verify sources before rewriting anything.** Skip this and you rewrite the corpus with fresh fabrications instead of the old ones. In the audit this skill was built from, this step found the library's most-repeated statistic — present in twenty-five files — had no primary source and described something that cannot be measured.

**Audit product claims early.** Grep every CTA against the files that define the product. Ten invented capabilities turned up in one library and nearly all sat in a closing pitch.

**Never let writers grade their own work.** Every writing agent reported success. Independent graders found four *new* fabrications introduced during the rounds that were fixing the first six.

**Re-scan the whole corpus after every fix round.** Fixes create defects. Standardizing a fact made two articles overcorrect into denying it. Renaming headings moved the collisions elsewhere. Every device that breaks monotony becomes monotony once it spreads.

**When two verifications disagree, delete the claim.** Five independent attempts to count the categories on one policy page produced five different totals. The number added nothing and would have broken at the next reorganization.

The durable output is a claims ledger: verified sources, verified product facts, and the list of claims that turned out to be unsourceable. It's what makes the second audit cheaper than the first, and it feeds back into the writing skill.

## Credits

The pattern list is adapted from the [humanizer](https://github.com/blader/humanizer) skill, the [no-ai-slop](https://github.com/petergyang/no-ai-slop) skill, and Wikipedia's [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), with SEO-specific patterns and conflict resolutions added here. All three are MIT licensed.

## License

MIT

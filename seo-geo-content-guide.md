# SEO + GEO content strategy guide

Core principle: rank in search, get cited by AI, and sound like a person wrote it.

Four rules sit above everything else in this guide.

1. Never invent a fact. Every number, name, date, quote, and citation comes from a source you actually read or from material the client gave you. If you don't have it, write the plainer sentence or leave a `[SOURCE NEEDED]` marker. See "Sourcing rule" below.
2. If the author has supplied writing samples, they win. Match the samples before applying any pattern rule in this guide. See "Voice samples" below.
3. Every sentence has to give the reader something they didn't already have. If it only signals importance, repeats the previous sentence, or announces what comes next, cut it.
4. The portability test. If a sentence could move unchanged to another company, product, city, or author, it's filler. Cut it or replace it with a fact, example, mechanism, consequence, or judgment that only fits this subject.

---

## SEO (traditional search)

### Content types and lengths

Length should match intent, not hit a target. A 1,200-word article that fully answers the query beats a 5,000-word article with filler. These are rough guides, not rules.

| Type | Typical length | What decides the length |
|---|---|---|
| Pillar guide | 3,000 to 6,000 words | The topic is covered comprehensively |
| How-to | 1,000 to 2,000 words | The reader can complete the task |
| Comparison | 2,000 to 3,000 words | Every decision-relevant factor is covered |
| Listicle | 1,500 to 2,500 words | Each item earns its spot |

The real test: could you cut 20% without losing anything useful? If yes, cut it.

### Style guidelines

Be comprehensive without being long for its own sake. Make the page skimmable with clear H2s. Answer the intent completely. Depth signals authority, and so does knowing when to stop.

Write for the "last longest click." The reader should never need to go back to Google. Google's NavBoost system (confirmed in the U.S. v. Google antitrust trial) treats pages where users stop searching as the strongest positive signal. Fully resolve the query so there's no reason to hit the back button.

### Research approach

Analyze the top 5 SERP results and find the gaps in them. Answer every People Also Ask question, then anticipate the next question after that. Pages that answer the follow-up before the reader thinks to ask it earn the last longest click.

Before drafting, know the job: who is this for, where will it be published, and what should the reader think, feel, or do after reading it? If the brief doesn't say, ask.

### Structure requirements

Put the keyword in the title, the H1, and one or two H2s where it fits naturally. Do not put it in every H2. Six headings that all begin "Best CRM for..." are a template, and both Google's helpful content system and human readers recognize one. Write the remaining headings from what each section actually covers.

Match the featured snippet format for the query: a 40 to 60 word direct answer, a numbered list, or a table. Include a FAQ section in question-and-answer form.

Use sentence case for H2 and below. The title tag and H1 can follow the site's convention.

### Win condition

Page 1 ranking, the featured snippet, and click-through plus dwell time. A Backlinko study found that increasing time on site by 3 seconds correlates with ranking one position higher. Length without engagement hurts.

### E-E-A-T signals

Google's quality raters evaluate experience, expertise, authoritativeness, and trustworthiness. Build them into the content.

Experience means first-person accounts ("When I tested this..." or "In my 10 years doing X..."), original photos, screenshots, or data you collected, and details only someone who did the thing would know.

Expertise means author bylines with credentials relevant to the topic, links to author pages that show that background, and citations of primary sources rather than other blogs.

Authoritativeness means getting cited by other sites (earned through original research, data, or strong takes), building topical depth (see below), and including expert quotes with real names and affiliations.

Trustworthiness means clear About and Contact pages, accurate and current information that gets reviewed, and transparency about affiliate relationships, sponsorships, and methodology.

For YMYL topics (health, finance, legal), E-E-A-T matters more. Credentials and citations aren't optional.

A caution on author bios: "Featured in Forbes, Inc., and Entrepreneur" with no link to the actual piece is borrowed authority (pattern 22 below). Name the specific article and link it, or cut the list. One real credential beats five vague ones.

### Topical authority

Individual pages compete worse than interconnected content clusters. Google rewards sites that demonstrate depth in a subject area.

How to build it:

1. Pick your territory. What topics should the site own? Be specific. "Marketing" is too broad. "B2B SaaS content marketing" is defensible.
2. Map the topic. List every question, subtopic, and angle. Use tools, PAA boxes, forums, and your own expertise.
3. Create a hub-and-spoke structure. The pillar page is a comprehensive overview that links to every subtopic. Cluster pages are deep dives on specific subtopics that link back to the pillar. Connect related content with internal links liberally.
4. Cover adjacent topics. If you write about email deliverability, also cover authentication (SPF, DKIM, DMARC), list hygiene, and sending infrastructure. Gaps in coverage signal shallow expertise.
5. Update and expand. Topical authority accumulates. Add new cluster pages over time. Refresh existing content when the landscape changes.

Example structure:
```
Pillar: "Complete Guide to Technical SEO"
--- Cluster: "Core Web Vitals Optimization"
--- Cluster: "Crawl Budget Management"
--- Cluster: "Structured Data Implementation"
--- Cluster: "Site Architecture for SEO"
--- Cluster: "JavaScript SEO"
--- Cluster: "International SEO (hreflang)"
```

### Technical SEO for content

Content quality means nothing if Google can't access, render, and understand it.

Page experience: Core Web Vitals (LCP under 2.5s, INP under 200ms, CLS under 0.1), mobile-friendly on real devices rather than only Chrome DevTools, and no intrusive interstitials.

#### Structured data

Go beyond FAQ schema. Use JSON-LD format in a `<script type="application/ld+json">` tag.

Article, for blog posts, guides, and editorial content:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your Article Title",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "url": "https://yoursite.com/about/author-name"
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-05-10",
  "publisher": {
    "@type": "Organization",
    "name": "Your Site Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yoursite.com/logo.png"
    }
  },
  "description": "Meta description here.",
  "image": "https://yoursite.com/images/article-hero.jpg"
}
```

FAQPage, for FAQ sections (question-and-answer pairs are also the easiest shape for an LLM to quote):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is [topic]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A clear, direct answer to the question."
      }
    },
    {
      "@type": "Question",
      "name": "How does [topic] work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Step-by-step explanation or concise description."
      }
    }
  ]
}
```

HowTo, for step-by-step instructions:
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Do the Thing",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Step 1 title",
      "text": "Detailed instructions for step 1.",
      "image": "https://yoursite.com/images/step1.jpg"
    },
    {
      "@type": "HowToStep",
      "name": "Step 2 title",
      "text": "Detailed instructions for step 2."
    }
  ]
}
```

Organization, for the homepage or about page:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/logo.png",
  "sameAs": [
    "https://twitter.com/yourcompany",
    "https://linkedin.com/company/yourcompany"
  ]
}
```

Person, linked from the article schema, with a dedicated author page:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Author Name",
  "jobTitle": "Senior Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "Company Name"
  },
  "sameAs": [
    "https://twitter.com/authorhandle",
    "https://linkedin.com/in/authorprofile"
  ]
}
```

Validate schema with [Google's Rich Results Test](https://search.google.com/test/rich-results) and the [Schema.org Validator](https://validator.schema.org/).

#### Internal linking

Link from high-authority pages to the pages you want to rank. Use descriptive anchor text, never "click here." Create logical paths through related content. Fix orphan pages that have no internal links pointing to them.

#### Content freshness

Add "Last updated" dates and actually update the content. Review high-traffic pages quarterly. Prefer updating old posts over always creating new ones.

---

## GEO (AI/LLM search)

### The nine GEO methods (Princeton research)

Princeton's GEO research measured which content optimization methods most increase visibility in AI-generated responses, ranked by measured impact.

| Method | Visibility boost | What it means |
|--------|-----------------|---------------|
| Cite sources | +40% | Link to and name authoritative sources |
| Statistics addition | +37% | Include specific numbers and data points |
| Quotation addition | +30% | Add expert quotes with real attribution |
| Authoritative tone | +25% | Specific, declarative, unhedged claims from named sources |
| Easy to understand | +20% | Simplify complex concepts without dumbing down |
| Technical terms | +18% | Use domain-specific terminology where it belongs |
| Unique words | +15% | Vocabulary diversity (see the entity note below) |
| Fluency optimization | +15 to 30% | Readability and natural flow |
| Keyword stuffing | **-10%** | Hurts visibility. Don't do it. |

Fluency plus statistics produces the largest combined boost. Write clearly and back claims with numbers.

Three cautions before applying the table.

The top three methods only count when the sources, statistics, and quotes are real. A fabricated citation reads exactly like a real one until someone checks, and then it costs the page its trust. See the sourcing rule.

"Authoritative tone" means specific claims stated as facts, no stacked hedges, named sources, and technical terms used correctly. A model reads "confident, expert-level language" as permission for words like crucial and pivotal. Those are the opposite of authority. Authority is a number with a source next to it.

"Unique words" does not mean rotating synonyms for the main entity. Use one name for the product, concept, or keyword the page is about, every time, so both readers and LLMs know what the page is about. Vary vocabulary everywhere else.

Don't treat the table as nine things to shoehorn into every piece. Citations, statistics, and quotes account for most of the gain. Nail those, write fluently, and the rest follows from good content.

### Content types and lengths

| Type | Typical length |
|---|---|
| Definition page | 500 to 1,000 words |
| Data or research | 1,000 to 2,000 words |
| Expert take | 800 to 1,500 words |
| Structured FAQ | 1,000 to 2,000 words |

### Style guidelines

Concise and definitive. Quotable paragraphs. One clear answer per question. Density signals authority.

### Research approach

Ask ChatGPT and Perplexity the query. Note which sources get cited. Find what's missing from the AI answers.

### Structure requirements

Quotable definitions up front. A clean hierarchy that's easy to parse. Statistics in cite-ready format (number, unit, source, year in one sentence).

### Win condition

"According to [you]..." in AI responses. Cited in an AI Overview. A source link in Perplexity.

### What gets cited (citation mechanics)

LLMs don't cite randomly. Understanding their patterns helps you write cite-able content.

The examples below show sentence shapes. The facts inside them are illustrative and must not be reused in content.

Sentence structures that get quoted:

1. Definitional statements. "X is Y" constructions at the start of sections.
   Good: "A canonical tag is an HTML element that tells search engines which URL is the preferred version of a page."
   Bad: burying the definition in paragraph three after context-setting.

2. Specific numbers with context.
   Good: "The average SaaS churn rate is 5 to 7% annually, according to a 2024 ProfitWell study." (Only if you have the study and its URL.)
   Bad: "Churn rates vary significantly across industries."

3. Attributed claims.
   Good: "Google's John Mueller said in a 2023 Search Off the Record episode that..." (Only with the episode and the quote in hand.)
   Bad: "Many SEOs believe..."

4. Comparative statements.
   Good: "Next.js handles SSR out of the box, while Create React App requires additional configuration."
   Bad: "There are several options for React frameworks."

5. Step-first instructions.
   Good: "To enable dark mode: 1) Open Settings, 2) Select Display, 3) Toggle Dark Mode on."
   Bad: "Dark mode can be enabled through various methods depending on your preferences."

Platform differences:

Perplexity cites more sources, favors recent content, and shows inline citations. Optimize for quotable discrete statements. ChatGPT cites less often and pulls from training data plus browsing, so strong brand association helps ("Moz says," "Ahrefs data shows"). Google AI Overviews heavily favor content that already ranks well, so traditional SEO is the prerequisite there. Claude has no live citations in the base model, but retrieval-augmented versions cite sources, and clean factual prose performs best.

Content formats that get cited: glossary and definition pages for "what is X" queries, data and research with specific numbers, how-to content with clear steps, comparison pages with structured breakdowns, and FAQ pages in direct Q&A format.

What doesn't get cited: opinion without attribution or evidence, vague or hedged statements, content buried in walls of text, paywalled content that LLMs can't access, and PDFs, which are harder to parse than HTML.

### GEO research process

1. Query the LLMs. Ask ChatGPT, Perplexity, and Claude your target query. Note which sources get cited, which claims are made without citation, and what's missing or wrong.
2. Analyze the cited sources. What do they have in common in structure, sentence patterns, specificity, and domain authority?
3. Find the gaps. Where are the LLM answers incomplete, outdated, wrong, or vague where they should be specific?
4. Create cite-able content that fills those gaps, uses structures similar to the sources currently cited, leads with quotable statements, and includes specific data, names, and dates you can source.
5. Monitor and iterate. Check periodically whether you're getting cited, for which queries, and what phrasing is being pulled. Do more of what works.

---

## Sourcing rule: never invent a fact

The GEO section rewards statistics, quotes, and citations. A model asked to add them without a constraint will make them up, and an invented citation looks identical to a real one. So:

- Every number, name, date, quote, study, and citation comes from a page you fetched during research or from material the client provided. Keep the URL with the draft.
- If you need a detail you don't have, write the simpler sentence without it, or leave `[SOURCE NEEDED: what you're looking for]` in the draft for a person to fill in.
- Never round a vague memory into a specific figure. "Around 5 to 7% according to a 2024 study" with no URL behind it is an invented statistic.
- Don't attribute a claim to a named person unless you have the quote and where they said it.
- Opinions and reactions are allowed when the voice calls for them. Factual claims are not.
- Protect the specific fact in the other direction too. Editing must never smooth a real detail into generic importance. "Cut review time from 30 minutes to 8" does not become "significantly improves productivity."
- The before/after examples in this guide contain made-up facts to show sentence shape. Don't reuse them in published content.

When the draft is done, check it against the research: did any fact, name, number, date, quote, citation, or ranking appear that wasn't there? Treat every one as an error.

---

## Voice: why AI text sounds like AI

A language model writes whatever is most likely to come next, so by default it makes the choice that fits the widest range of readers and subjects. A person writes for one reader and one subject, so their choices are uneven and specific. Every AI tell in this guide is a form of the default choice.

- Staging. The sentence signals importance instead of adding a fact.
- Rhythm by rule. Triads, dashes, and fragments applied whether or not the meaning asks for them.
- Inflation. Ordinary facts dressed as pivotal or expert-backed.
- Formatting by rule. Bold and title case applied to every item.
- Leftovers. Chat wrappers and drafting moves that were never meant for the reader.

Word habits change with every model release. Structural habits persist. That's why the vocabulary list in this guide is the least important part, and a find-and-replace for "delve" is the weakest fix available.

The patterns below are numbered strongest first. Patterns 1 through 9 justify an edit on a single sighting. A pattern marked *weak alone* needs company from other tells in the same passage before you act, because a careful writer might do any one of them on purpose.

---

## Voice samples

If the client or author has provided writing samples, read them before writing anything. Match their sentence length, word choice, punctuation, how paragraphs open, and how they move between ideas. A sample overrides every pattern rule in this guide, including the dash rule. If the author uses dashes, use them at about the same rate.

Where samples live: check the brief, the client folder, and the author's already-published articles on the site. If none exist, ask for two or three paragraphs of the author's own writing before drafting.

Without a sample, take the voice from the kind of content. Blog posts, opinion pieces, and comparison pages keep the writer's opinions, uncertainty, mixed feelings, humor, and asides. Definition pages, glossaries, and technical reference stay neutral and plain.

When editing a draft a person wrote, make the minimum effective edit. Fix the tells, the errors, and the tangled passages. Leave strong human sentences alone. Don't make every paragraph equally tidy, and don't rewrite a distinctive line for consistency. The writer should recognize the edited draft as their own.

---

## The AI tells, strongest first

Each pattern lists what to watch for, why it's a problem, and a before and after. Where an SEO requirement seems to pull the other way, the pattern says how to reconcile them.

### A. Staging instead of stating

These are the strongest and most frequent tells in current model prose. Act on one sighting.

#### 1. Not X but Y

Watch for: not X but Y; not just, not only, or not merely X, but Y; it's not X, it's Y; the question isn't X, it's Y; the reversed form X rather than Y; the same contrast split across sentences ("This doesn't mean X. It means Y."); a clipped negative tail ("..., no guessing"); negative listing ("Not a tool. Not a platform. A system.").

Problem: the negative half names something nobody claimed, so the positive half sounds bigger. It adds weight without adding a claim. State the point directly. Keep a contrast only when the negative half corrects a belief the reader actually holds, or when both halves carry information.

Before:
> Review automation isn't just about sending more requests. It's about sending the right request at the right moment. This doesn't mean timing is everything. It means timing is the lever most businesses ignore.

After:
> Most businesses send review requests at the wrong moment. A request sent within an hour of a completed job gets more responses than one sent the next day.

Before (clipped tail):
> The software pulls the customer's name from the job record, no manual entry.

After:
> The software pulls the customer's name from the job record, so nobody has to type it.

#### 2. One-line closers, dramatic fragments, and kickers

Watch for: a one-sentence paragraph that restates the paragraph before it; "That's the real win."; "That's it. That's the whole thing."; "Read that again."; "Let that sink in."; "Full stop."; the same closer after several sections; a row of fragments ("No setup. No contracts. No surprises."); "X. And Y. And Z."; one word in ALL CAPS or with periods between words (every. single. time.); a final "deep" line that turns the point into a metaphor or mic-drop ("The future isn't coming. It's already here.").

Problem: the line asks the reader to pause on a claim instead of adding to it. A short sentence can carry emphasis when it carries a new fact. Cut a closer that repeats. Merge a row of fragments into a sentence with a specific claim. Delete a kicker outright. Do not rewrite it into a better metaphor and do not preserve its rhythm. End on the clearest concrete sentence already in the draft, or add a plain next action.

Before:
> Automated requests go out within an hour of every completed job. Response rates roughly double.
>
> That's the whole game.
>
> The dashboard shows every review in one place. No logging into five platforms. No missed replies. No guesswork.

After:
> Automated requests go out within an hour of every completed job, and response rates roughly double. The dashboard collects reviews from every platform, so you reply from one place instead of logging into five.

SEO note: a quotable definition at the start of a section adds a fact and is the shape LLMs cite. A one-line closer at the end repeats one. They look similar and are opposites.

#### 3. Sayings that sound deep

Watch for: the real question is, at its core, in reality, what really matters, fundamentally, the deeper issue, the heart of the matter, the reality is, the truth is, X is the Y of Z, X becomes a trap, X is not a tool but a mirror, the language of, the currency of, the architecture of.

Problem: an ordinary point is dressed as a hidden truth or an aphorism, and the dressing adds no detail. Replace the saying with the specific claim.

Before:
> At its core, reputation management is the currency of local trust. The real question isn't how many reviews you have. It's whether your reviews tell a story.

After:
> Customers read the three most recent reviews and the worst one. A page with 40 reviews and an unanswered one-star from last week loses to a page with 12 reviews and a reply on every one.

#### 4. Staged run-up before the point

Watch for: Let's dive in, let's explore, let's break this down, here's what you need to know, now let's look at, without further ado, heads up, quick note, Honestly?, Look, Here's the thing, Here's what I mean, The thing is, Let's be honest, Let me be clear, I'll be honest, Real talk, The uncomfortable truth is, Here's what gets me; and meta-commentary about the article itself: "This guide covers...", "In this article, we'll explore...", "This section focuses on...", "The following table shows...", "As we'll see below...".

Problem: the writer announces the point, stages a moment of candor, or describes the article instead of writing it. Remove the run-up, not just its tone. "Honestly" or "look" inside a casual sentence is ordinary. The tell is the standalone opener before a routine claim. Sentences about the article rather than the topic are almost always deletable.

Before:
> Here's the thing about review gating. Let's be honest, everyone's tempted. This section breaks down why it backfires.

After:
> Review gating (asking happy customers for a public review and unhappy ones for private feedback) violates Google's policy and gets listings suspended when it's caught.

The test: is this sentence about the article, or about the topic? Sentences about the article are filler.

#### 5. Faux-insight setups

Watch for: what nobody tells you, what most people get wrong, the part everyone misses, this is the part most people skip, here's what the experts won't say, the secret is, most contractors don't realize.

Problem: the setup flatters the writer as the lone expert and promises a reveal that the next sentence usually doesn't deliver. Cut the setup and let the claim stand on its own. If the claim is genuinely contrarian, the reader will notice without being told.

Before:
> What nobody tells you about review software: the tool doesn't matter. The part everyone misses is the process behind it.

After:
> The process matters more than the tool. A contractor who asks every customer on the day of the job gets more reviews with a free Google link than one who buys software and asks nobody.

#### 6. Colon reveals

Watch for: a noun phrase, a colon, then a lowercase dramatic reveal. "The best part: it learns." "The detail that makes it work: a separate agent grades it." "The result: more calls."

Problem: the colon fakes drama around an ordinary fact. Rewrite as a plain sentence. Use colons for lists, labels, and quotes. After a colon, use sentence case unless grammar, a proper noun, a title, or code requires otherwise.

Before:
> The feature that changes everything: automatic follow-ups. The outcome: twice the reviews.

After:
> Automatic follow-ups roughly doubled reviews in our own accounts, because most customers who don't respond to the first text respond to the second.

#### 7. Rhetorical setups and self-answered questions

Watch for: What if I told you..., Think about it:, Plot twist:, Sound familiar?, The result? [answer], The catch? [answer], The best part? [answer], Why? Because..., and any question the writer immediately answers in the next fragment.

Problem: the question exists only to set up the answer, and the answer would have stood on its own. Drop the setup and make the point. A real question, one the section then works through, can stay.

Before:
> The result? Twice as many reviews. The catch? You have to actually reply to them. Why? Because Google weighs owner responses.

After:
> Reviews roughly doubled. They only help rankings if you reply, because Google weighs owner responses.

#### 8. Interpretive metadiscourse

Watch for: This distinction matters, That last part matters more than it sounds, The key point is, As you can see, It's worth noting, It's important to note, Importantly, Crucially, Notably, and a redundant "In other words" that restates a clear sentence.

Problem: the sentence steps outside the subject to tell the reader what to notice or how much weight to give it, instead of showing why. If the surrounding prose already makes the point, delete the commentary. If it doesn't, replace the commentary with the fact, example, or consequence that would make it.

Before:
> Google weighs owner responses. This matters more than it sounds. In other words, replying to reviews affects rankings.

After:
> Google weighs owner responses. In the accounts we manage, listings that reply to every review rank two to three spots higher in the map pack than listings that reply to none. `[SOURCE NEEDED: the internal data]`

#### 9. Arguing with no one

Watch for: This isn't (mainly) about, I'm not saying, To be clear, Don't get me wrong, This is not to say, Some might say... but, A tempting approach would be, One might be tempted to, An obvious approach would be, You might think... but, It would be easy to just.

Problem: the text answers an objection or rejects an option that appears nowhere else, usually a leftover from an earlier draft. Remove the defense. If it holds a real claim, state the claim. Keep an objection the text attributes and answers in full, and keep an option a reader would actually weigh. Several unrelated rejections in a row are a stronger sign than one.

Before:
> To be clear, I'm not saying Birdeye is a bad product. Don't get me wrong, it works. You might think the price is the issue, but the real problem is the contract.

After:
> Birdeye works. The problem is the 12-month contract, which you can't exit if the platform doesn't fit.

### B. Rhythm by rule

A person may do any one of these on purpose, so the weaker ones need company from other tells.

#### 10. Forced triads

Problem: ideas arrive in threes to sound complete, whether the meaning has three parts or not. The tell can be one sentence ("faster, smarter, and more reliable"), three parallel examples, or three short facts followed by a lesson. Check that each item adds a distinct idea. Merge examples, develop the strongest one, or vary the structure when they don't. Keep three real items when the meaning needs three.

Before:
> The platform is fast, intuitive, and powerful. It helps plumbers, electricians, and HVAC techs. Setup takes minutes, results show in days, and growth compounds over months.

After:
> Setup takes about ten minutes. Most trades businesses see new reviews within the first week.

#### 11. Repeated openings and repeated shapes

Problem: several sentences in a row start with the same subject, several paragraphs share the same shape (claim, three supports, lesson), or several sections end the same way, because repetition is handled by rule instead of by ear. Merge the sentences, change the subject, begin with the action, or let one paragraph run long and the next stop early. Don't ban the repeated word. Writers repeat an opening on purpose for rhythm.

The same tell at heading scale is a listicle or comparison where every H2 begins with the keyword ("Best review software for...", "Best review software for..."). Keyword in one or two H2s is enough. The rest get headings that say what the section is about.

Before:
> The tool sends requests automatically. The tool tracks responses. The tool flags negative reviews.

After:
> The tool sends requests automatically, tracks who responded, and flags negative reviews for a reply.

#### 12. Dashes as the universal connector

Rule: the final draft contains no em dashes or en dashes unless the author's sample uses them, in which case match the sample's rate. This includes spaced dashes and double hyphens used as dashes. Replace each one with a period, comma, colon, or parentheses, or rewrite the sentence. Leave dashes inside code, commands, paths, URLs, and quoted text alone.

Problem: a dash lets the writer skip choosing how two clauses relate, so a model reaches for it everywhere. Many editors also use dashes, so one dash is *weak alone*. A text full of them is not.

Before:
> The new pricing—announced without warning—affects every plan. The change—long overdue according to users—takes effect immediately.

After:
> The new pricing, announced without warning, affects every plan. Users had asked for the change for a year, and it takes effect immediately.

#### 13. Stacked qualifiers

Watch for: to be fair, it's also possible, could potentially, might arguably, in some cases it may, this is an inference.

Problem: one qualifier after another until every claim sounds uncertain, usually to repair an earlier overstatement rather than to report real doubt. Keep a qualifier only when the source supports it and the meaning needs it. Keep scope statements, legal and safety notices, and real corrections. "I think," "maybe," and "to be honest" stay when they express real uncertainty or the writer's spoken rhythm. *Weak alone.*

Before:
> It could potentially be argued that response time might arguably have some effect on review volume in certain cases.

After:
> Faster response time may increase review volume.

#### 14. Synonym cycling

Problem: the draft rotates terms for the same thing ("the agent... the assistant... the tool...") because a repetition penalty pushes the model away from the clear word. If the clear word is right, repeat it. This matters most for the entity the page is about: the product, concept, or keyword gets one name throughout, so readers and LLMs never wonder whether two names mean two things. *Weak alone* elsewhere, since people vary wording on purpose.

Before:
> The agent reviews the draft. The assistant scores the piece. The tool suggests fixes.

After:
> The agent reviews the draft, scores it, and suggests fixes.

#### 15. Hyphenated pairs everywhere

Watch for: third-party, cross-functional, client-facing, data-driven, decision-making, well-known, high-quality, real-time, long-term, end-to-end.

Problem: these pairs are hyphenated in every position. Keep the hyphen before a noun (a high-quality report) and drop it after (the report is high quality). Keep the canonical spelling of a keyword phrase regardless (e-commerce stays e-commerce). *Weak alone.*

#### 16. Passive voice and inanimate actors

Problem: the text hides who acts, drops the subject, or lets an inanimate thing do a human verb ("the decision emerged," "the data tells a story," "the strategy demands"). Use active voice with a human or concrete subject when it makes the actor and action clearer. *Weak alone.*

Before:
> No configuration file needed. Reviews are collected automatically. The data speaks for itself.

After:
> You don't need a configuration file. The system collects reviews automatically. Listings with replies got 28% more calls in the study.

### C. Inflation and borrowed authority

The fact underneath is usually sound. Keep it and remove the dressing.

#### 17. Overused AI words

Cut outright: actually, additionally, align with, beacon, bolstered, crucial, cutting-edge, deep dive, delve, elevate, embark, emphasizing, empower, enduring, enhance, ever-evolving, facilitate, foster/fostering, garner, gate/gated/gating (figurative), harness, highlight (verb), interplay, intricate/intricacies, key (adjective), landscape (abstract), leverage (verb), meticulous/meticulously, multifaceted, paradigm shift, paramount, pivotal, quietly, realm, robust (figurative), showcase, streamline, supercharge, tapestry (abstract), testament, transformative, underscore (verb), utilize, valuable, vibrant.

SaaS and marketing clichés that grate for the same reason: flywheel, game-changer, this is huge, this changes everything, unlock (verb), level up, lean into, move the needle, at scale, compound (verb, outside finance), north star, 10x, friction/frictionless, end-to-end, best-in-class, world-class, next-level, seamless.

Often-empty adverbs: just, literally, honestly, simply, truly, fundamentally, importantly, crucially, inherently, inevitably. Cut them when they add nothing. Keep them when they carry emphasis, uncertainty, contrast, or the writer's spoken rhythm.

Problem: models use these words far more often than people do, especially in groups. This is the only vocabulary list in the guide. A formal word outside it is not a tell by itself, and swapping these words is the least important edit you'll make.

Before:
> Additionally, a robust review strategy is crucial in today's evolving landscape, fostering trust and enhancing visibility at scale.

After:
> Businesses with more recent reviews rank higher in the map pack, so ask for reviews every week.

#### 18. Inflated significance

Watch for: stands as a testament, a pivotal or crucial moment, plays a key or vital role, solidifies its position, marking or shaping the, underscores its importance or significance, reflects a broader, enduring or lasting legacy, setting the stage for, evolving landscape, indelible mark; stock "challenges and outlook" sections (Despite these challenges... continues to thrive); send-off paragraphs (the future looks bright, exciting times ahead, a step in the right direction).

Problem: an ordinary detail is said to mark a change, prove a legacy, or promise a future. The move appears at three scales: a phrase, a stock section, and a closing paragraph. Keep the fact and let the reader judge whether it matters. End on the last concrete fact. If the source states real plans, use those.

Before:
> The 2019 update marked a pivotal moment in local search. Despite ongoing challenges, businesses that adapt continue to thrive. The future of local SEO looks bright.

After:
> Google's 2019 update made review recency a ranking factor in the map pack.

Before (send-off):
> As review platforms continue to evolve, staying ahead of the curve will be essential. Exciting times lie ahead for businesses that embrace the change.

After:
> (Cut the paragraph. End on the last concrete fact.)

#### 19. Vague connection or association

Watch for: associated with, in association with, connected to, in connection with, linked to, tied to.

Problem: the text says two things are connected without saying how. "She was associated with the launch" hides whether she led it, consulted on it, or tweeted about it. Name the relationship the source gives. If the source doesn't say, keep the vague wording rather than inventing a role.

Before:
> Higher ratings are linked to more calls. The founder is associated with several local SEO tools.

After:
> Listings rated 4.5 or above got 28% more calls in the study. The founder built two local SEO tools before this one. (Only with the study and the biography in hand.)

#### 20. Shallow -ing riders

Watch for: highlighting, underscoring, emphasizing, ensuring, reflecting, symbolizing, contributing to, cultivating, fostering, encompassing, showcasing.

Problem: an -ing phrase is bolted onto a simple fact to pretend to explain its meaning. Attaching it to a named source ("Mueller confirmed X, highlighting the importance of Y") does not make it true. Keep the fact. Replace the rider with the real consequence if you have one, or cut it.

Before:
> The tool sends requests by SMS, ensuring higher open rates and reflecting a customer-first approach.

After:
> The tool sends requests by SMS. SMS open rates run higher than email in every study we found. `[SOURCE NEEDED: the specific study]`

#### 21. Sales language

Watch for: boasts, vibrant, rich (figurative), profound, enhancing, exemplifies, commitment to, natural beauty, nestled, in the heart of, groundbreaking, renowned, featuring, diverse array, breathtaking, must-visit, stunning, powerful, effortless, seamless.

Problem: the text reads like an advertisement. State what the thing is. On a product's own site, restraint reads as confidence.

Before:
> Our groundbreaking platform boasts a powerful, seamless experience featuring a diverse array of integrations.

After:
> The platform connects to Jobber, ServiceTitan, and Housecall Pro.

#### 22. Borrowed authority

Watch for: experts argue or agree, observers have cited, industry reports suggest, some critics, many argue, widely regarded as, several publications, studies show (with no study named); and the prestige list: cited, featured, or profiled in [a row of outlets], trade publications, independent coverage, active social media presence, over N followers.

Problem: an unnamed authority props up a claim, or a list of prestige outlets props up a person. When you have the real source and what it said, use that. Otherwise cut the claim or the list, or flag it for the client. Never invent a source. A missing citation alone is not a tell, since most writing is unsourced, but "studies show" with no study is.

Before:
> Experts agree that reviews are the top local ranking factor. Our founder has been featured in Forbes, Inc., Entrepreneur, and Fast Company.

After:
> Whitespark's 2023 Local Search Ranking Factors survey ranked reviews as the second-largest map pack factor. Our founder wrote about review gating for Inc. in 2022 (link). (Only with the survey and the article in hand.)

#### 23. Avoiding is, are, and has

Watch for: serves as, stands as, functions as, operates as, marks, represents; boasts, features, offers, maintains; refers to; and weak verb phrases: made a decision, has the ability to, is able to, conducts an analysis of.

Problem: simple verbs are replaced with longer phrases. Use *is*, *are*, and *has*. Make the verb do the work: "decided," "can," "analyzed."

Before:
> The dashboard serves as the central hub. It features four views and boasts real-time updates. Users have the ability to make a decision on each review.

After:
> The dashboard is where you work. It has four views and updates as reviews arrive. You decide what to do with each review from there.

### D. Formatting by rule

Templates and visual editors also produce clean formatting. The tell is decoration on every item, or format that decorates instead of following the content.

#### 24. Bold as decoration

Problem: words are bolded without a reason, bold is sprinkled mid-sentence for emphasis, and every bullet gets a bold label and a colon. Remove the bold. Turn a labeled list into prose when the labels carry no information of their own.

SEO note: skimmability is real. Bold a phrase when a reader scanning for it would need to find it, such as the direct answer to the query or a step name in a how-to. Never bold every item, and never bold a label that just restates the sentence after it.

Before:
> - **Speed:** The tool is fast.
> - **Reliability:** The tool is reliable.
> - **Support:** Support is available.

After:
> The tool sends requests within a minute of a job closing, and support answers within a business day.

#### 25. Decorative headings and headers over nothing

Problem: headings capitalize every main word, carry emojis or arrows, sit over sections of one or two sentences, or open the document by repeating its own title. A horizontal rule sits between every section. Use sentence case for H2 and below, remove the decoration, merge a two-sentence section into its neighbor, and let the title stand once.

SEO note: H2s exist to answer sub-questions and to be skimmed. A heading over a real section that answers a real question is by need. A heading over every paragraph is by rule.

Before:
> ## 🚀 The Best Review Request Software For Contractors

After:
> ## Review request software for contractors

#### 26. Bullets that should be prose

Problem: a list is used where two sentences of prose would read better, because bullets look organized. Bullets are for genuinely parallel items: steps, options, specs, a checklist. An argument, an explanation, or a sequence of cause and effect is prose.

SEO note: a numbered list that matches the featured snippet format for a how-to query is by need. Bulleting every paragraph of a comparison is by rule, and it strips out the judgment the reader came for.

Before:
> - Reviews affect rankings
> - Replies affect rankings
> - Recency affects rankings
> - So you should reply quickly

After:
> Reviews, replies, and recency all feed the map pack ranking, which is why a fast reply matters more than a perfect one.

#### 27. Curly quotation marks

Problem: curly quotes appear where the target format uses straight quotes. Most editors auto-curl, so this is *weak alone*. Match the site's convention.

### E. Leftovers from the chat and the draft

Remove these outright. Nothing here needs rewriting.

#### 28. Chatbot residue

Watch for: I hope this helps, Of course!, Certainly!, Great question!, You're absolutely right, Would you like..., Want me to...?, Should I continue?, let me know, here is a...; and sycophancy left in the text: excellent point, you're right that, that's a great observation.

Problem: a chatbot's greeting, praise, offer, or closing remains in text that should stand on its own. It is the most certain tell in this list and the easiest to miss when it wraps real content. Remove the wrapper and keep the content.

#### 29. Knowledge-limit disclaimers and guesses

Watch for: as of [date], up to my last training update, while specific details are limited, based on available information, not publicly available, not widely documented, likely [grew up, began, launched], it is believed that.

Problem: the text mentions where the model's knowledge ends, or admits it found no source and then fills the gap with a plausible guess. State what the research does not show, or remove the sentence. Never present a guess as a fact.

Before:
> While pricing details are not widely documented, the platform likely costs around $200 per month.

After:
> Pricing is not published. `[SOURCE NEEDED: confirm current pricing with the vendor]`

#### 30. A heading repeated in the first sentence

Problem: a heading is followed by a one-line paragraph that restates it before the real content begins. Remove the repeated sentence.

Before:
> ## Response time
>
> Response time matters.
>
> Customers who get a reply within a day are more likely to update a negative review.

After:
> ## Response time
>
> Customers who get a reply within a day are more likely to update a negative review.

SEO note: this is different from opening a section with a quotable definition. "A canonical tag is an HTML element that..." adds a fact. "Canonical tags are important" repeats the heading.

#### 31. Summary-recap endings

Watch for: In conclusion, Ultimately, Overall, To sum up, Key takeaways, Final thoughts, and any last paragraph or section that restates what the piece already said.

Problem: the reader was just there. A recap adds nothing and is where kickers and send-offs (patterns 2 and 18) grow. Cut it and end on the last concrete point, a takeaway the piece hasn't stated, or a next action.

SEO note: if the site's template requires a closing H2, make it a next step ("What to do this week") or an answer to the follow-up question the reader will have, never a summary. A short answer block at the top of the page can serve snippets and skimmers. A summary at the bottom serves nobody.

Before:
> In conclusion, reviews matter for local SEO. We covered timing, channel, and follow-up. By applying these tips, you'll be well on your way to better rankings.

After:
> (Cut it. End on the last concrete point, or on the one thing the reader should do next.)

#### 32. Writing about the previous version

Problem: a refreshed article describes what it used to say instead of what's true now. "Previously, we recommended X, but..." belongs in a changelog. On a content refresh, write the current recommendation and update the "last updated" date.

### F. SEO content tells

These don't come from the general lists. They're the failure patterns specific to search content produced at volume, and they survive vocabulary cleanup.

#### 33. Explaining the search query

Problem: the article opens by defining the term the reader just searched for. The reader knows what it means. That's why they searched. A reader who typed "automated review request software" and lands on 200 words about what automated review requests are hits the back button, and NavBoost reads that as "this page didn't answer the query."

The test: would the reader learn this from the search result snippet before clicking? If yes, skip it. Start with what the reader doesn't know: the comparison, the recommendation, the insight.

Exception: definition pages targeting "what is X" queries. There, the definition is the intent, and it goes in the first sentence.

#### 34. Structural monotony in listicles and comparisons

Problem: a model defaults to one template because uniformity is statistically safest. Six identical "How it works / Pros / Cons / Rating" blocks in a row is what Google's helpful content system describes as content "produced with templates," and readers notice it before Google does.

Fix: vary the format at least once every three or four sections. Make one review a narrative paragraph, another a comparison table, and let one lead with its biggest drawback. Not every item needs the same treatment, and the items that matter most deserve the most space.

#### 35. Cross-article template bleed

Problem: across a topic cluster, the model reuses the same opening, closing, cross-link phrasing, and example list. A reader who lands on two of the articles notices immediately. Google's site-wide quality classifier looks at patterns across pages, and identical openings signal batch production.

Common offenders: the same opening formula ("Every [X] benefits from Y, but [Z] is different..."), the same closing ("Build the system. Be consistent. Results will follow."), the same cross-link line ("For a deeper dive on general principles, see our..."), and the same example list repeated verbatim.

Fix: after producing a batch of related content, read the openings and closings back to back. If they rhyme, rewrite them. Each article needs a distinct entry and exit. Run the portability test on every opening: if it would work unchanged on the next article in the cluster, it's a template. The same applies to the voice moves in "Adding a pulse" below.

#### 36. Stat repetition

Problem: a model treats a key statistic as an anchor and re-inserts it in every relevant section. People state a fact once and refer to it afterward.

Rule of thumb: no statistic appears more than twice in one article, once where it's introduced and optionally once more in a comparison table or FAQ. Later mentions say "the open rate gap" without the number.

#### 37. Diplomatic hedging on comparison pages

Problem: the model tries to be fair to competitors on a page whose purpose is to differentiate against them. The result reads as uncommitted. A reader on a comparison page came for an opinion.

Before:
> None of this is inherently wrong. Enterprise sales have worked this way for decades. But it may not be the best fit for smaller businesses.

After:
> They hide pricing so a salesperson can quote based on what they think you'll pay.

Be factual and direct at the same time. Acknowledge where a competitor genuinely wins ("Birdeye is better if you have 50+ locations") and don't apologize for having an opinion on your own comparison page.

#### 38. Uniform FAQ answers

Problem: every FAQ answer has the same shape: restate the entity from the question, give a medium paragraph, end with a product mention.

Fix: some answers are one or two sentences ("No. Google only removes reviews that violate specific content policies."). Some are three to five sentences with nuance. Let some start with "Depends" or with a number instead of restating the question. Keep every answer self-contained so FAQ schema and LLMs can lift it whole.

#### 39. Tidy social proof

Problem: generated testimonials follow patterns real ones don't. Each quote maps perfectly to one talking point, the attribution is vague ("Business owner"), every quote is the same length, and none wander off topic. Real customer quotes mention irrelevant details, have imperfect grammar, and don't neatly support the argument.

Fix: use real quotes with real context (trade, approximate date, platform source). If paraphrasing reviews, say so ("Based on G2 reviews from 2025"). Never write a testimonial. That's an invented fact with a name on it.

#### 40. Filler phrases

Replace the long form with the short one: "in order to achieve this goal" becomes "to do this," "due to the fact that" becomes "because," "at this point in time" becomes "now," "in the event that" becomes "if," "has the ability to" becomes "can," and "it is important to note that" gets deleted so the sentence just states the thing.

Often-empty phrases that delay the point: at the end of the day, when it comes to, in today's world, in the age of, in the world of, in terms of, with regard to, going forward, in this article, let's dive in. Cut them when they delay the point. An occasional one can stay when it's part of the writer's recognizable voice and the sentence still earns its place.

---

## When not to act

Each pattern describes a default choice, and a person can make any one of them on purpose. Act on a *weak alone* tell only when several tells share a passage.

Leave a watched phrase alone inside a quotation, a title, a proper name, a product name, a keyword phrase the page targets, schema text, or a passage that discusses the phrase rather than uses it. Text written before November 30, 2022 is not AI-written. People who judge by feel do little better than chance, and human writing keeps absorbing AI habits. Several tells together are the safeguard.

Keep the details that carry the writer's voice unless they hurt the meaning:

- A specific, unusual detail: a real address, an odd quote, "the electrician who used to work upstairs from my dentist."
- Mixed feelings and unresolved tension: "I think this is mostly good, but it bothers me, and I can't fully explain why."
- Dated, era-bound references: slang, memes, and in-jokes that map to a specific year and subculture.
- A first-person choice the writer can explain.
- A genuine aside, parenthetical, or self-correction: "(I keep wanting to say 'almost' here, but it really was every time.)"
- Strong opinions, blunt language, humor, profanity, and honest admissions when they belong to the writer. Don't replace them with safer or more professional wording.
- "I think," "maybe," and "to be honest" when they carry real uncertainty or the writer's spoken rhythm.
- A personal story or setup that creates context, tension, or character, even when it delays the point.

---

## Where SEO rules and voice rules seem to conflict

| SEO or GEO requirement | Voice rule it seems to break | How to do both |
|---|---|---|
| Keyword in title, H1, H2s | Repeated openings (11), decorative headings (25) | Keyword in the title, H1, and one or two H2s. The rest describe their section. Sentence case below H1. |
| Skimmable, use bold and bullets | Bold as decoration (24), bullets that should be prose (26) | Bold only what a scanner needs to find. Bullet only genuinely parallel items. Arguments stay prose. |
| Quotable definition up front | Heading repeated in first sentence (30), one-line closers (2) | A definition at the start adds a fact. A closer at the end restates one. Write the first, cut the second. |
| Authoritative tone (+25%) | Inflated significance (18), sales language (21) | Authority is a specific claim with a source. Adjectives subtract from it. |
| Statistics, quotes, citations | Borrowed authority (22), sourcing rule | Only real ones, with the URL kept. Otherwise the plainer sentence or a `[SOURCE NEEDED]` marker. |
| Unique words (+15%) | Synonym cycling (14) | One name for the target entity throughout. Vary vocabulary everywhere else. |
| Featured snippet format (list, steps, table) | Formatting by rule (24, 25, 26) | Formatting that answers the query is formatting by need. Formatting on every section is by rule. |
| FAQ in Q&A form | Uniform FAQ answers (38) | Keep the Q&A shape for schema. Vary the length and opening of the answers. |
| Template requires a closing section | Summary-recap endings (31) | Make it a next step or the follow-up question's answer. Never a summary. |
| Hyphenated keyword phrases | Hyphenated pairs (15) | Keep the keyword's canonical spelling. Apply the hyphen rule elsewhere. |
| First-person experience (E-E-A-T) | Staged run-up (4), faux insight (5) | "When I tested this, the SMS option failed twice" is experience. "Here's what nobody tells you" is staging. |

---

## Adding a pulse

Clean writing isn't enough. Sterile, voiceless writing is as obvious as slop, and a page with no opinions gives the reader no reason to stay.

Signs of soulless writing: every sentence has the same length and structure, there are no opinions, no acknowledgment of uncertainty, no first person where it would fit, no humor or edge, and the whole thing reads like a press release.

How to add voice:

Have opinions and react to facts instead of only reporting them. Vary rhythm by letting some sentences run long and others stop early, which happens on its own when you write for one reader instead of every reader. Acknowledge complexity, because real people have mixed feelings ("This is impressive and also kind of unsettling" beats "This is impressive"). Use "I" when it fits. First person signals a real person thinking, and it's an E-E-A-T signal when it carries real experience. Let some mess in: a tangent, an aside, a half-formed thought. Be specific about feelings. "There's something unsettling about agents churning away at 3am while nobody's watching" says more than "this is concerning."

Two cautions.

Every voice move has to come from the topic. A reaction that could be pasted into any article fails the portability test, and it will show up in every article in the cluster (pattern 35). The examples in this section are examples. Do not reuse them.

Voice is not permission for staging. "Here's what gets me" and "Honestly?" are pattern 4. "What nobody tells you" is pattern 5. "I don't know how to feel about this" is a real reaction only when the paragraph then says what specifically causes the mixed feeling.

Example.

Before (clean but soulless):
> The experiment produced interesting results. The agents generated 3 million lines of code. Some developers were impressed while others were skeptical. The implications remain unclear.

After (has a pulse):
> I don't know what to make of this one. Three million lines of code, generated while the humans presumably slept. Half the dev community is losing their minds and the other half is explaining why it doesn't count. The truth is probably somewhere boring in the middle, and I still keep thinking about those agents working through the night with nobody watching.

---

## The rewrite pass

Run this on every draft before the checklist. It replaces find-and-replace, which fixes vocabulary and leaves the structure that actually reads as AI.

1. Mark the tells. Read the whole draft once and mark every pattern you find, strongest first. For each one, note the quoted line, the pattern number, and the fix in a few words. Look at paragraph shape as well as sentences. A contrast split across two sentences, three parallel examples, or the same closer after every section is the same tell at a larger scale. Read the H2s as a list on their own.
2. Rewrite around the point. For each marked passage, restate the main point naturally instead of patching the flagged phrase. If a sentence stays awkward after a patch, rewrite the paragraph around its main point. You may shorten dull parts, merge or split paragraphs, and change structure. Keep every supported claim. Make the minimum effective edit: cutting should be proportional to the slop, and strong human sentences stay as they are.
3. Check for the five survivors. These most often make it through a rewrite: a not-X-but-Y contrast, a one-line closer, a dash, a triad, a bold label. Search for each one specifically. Then check the ending: the last paragraph is a concrete point or a next action, not a recap or a kicker.
4. Check the facts. Did the rewrite add or drop any fact, name, number, date, quote, citation, or ranking? An unsupported addition is an error. A lost claim is an error unless a pattern called for cutting it. Did any specific detail get smoothed into a generic claim? That's an error too.
5. Read it aloud. If you stumble, or wouldn't say it to a colleague, rewrite it. Then ask: would the author recognize this as their own voice? If any check fails, fix it and run the checks again.

---

## Implementation checklist

### Before writing
- [ ] Identify the target format (SEO pillar, GEO definition page, comparison, how-to)
- [ ] Know the job: who it's for, where it's published, what the reader should do after
- [ ] Find and read the author's voice samples, or ask for them
- [ ] Research both the SERP and the AI responses
- [ ] Query ChatGPT, Perplexity, and Claude for the target keyword
- [ ] Note which sources get cited and analyze their structure
- [ ] Note gaps in both search and AI results
- [ ] Collect the statistics, quotes, and sources you'll use, with URLs
- [ ] Plan the quotable statements (definitions, stats, comparisons)
- [ ] Identify where this fits in the topical cluster

### During writing
- [ ] Write to satisfy intent, not to hit a word count
- [ ] Open with what the reader doesn't already know from the query
- [ ] Lead sections with quotable definitional statements
- [ ] Use specific details over vague claims, from sources you have
- [ ] Add real opinions and reactions that come from this topic
- [ ] Use contractions
- [ ] Use is, are, and has instead of serves as, features, boasts
- [ ] Put the keyword in the title, H1, and one or two H2s only
- [ ] Include E-E-A-T signals (experience, credentials, citations)
- [ ] Link to related content in the cluster
- [ ] Apply the top three GEO methods with real sources, statistics, and quotes

### After writing: the rewrite pass
- [ ] Mark every tell, strongest first, with the quoted line and a short fix
- [ ] Rewrite each marked passage around its point instead of patching the phrase
- [ ] Search for the five survivors: not-X-but-Y, one-line closer, dash, triad, bold label
- [ ] Check the ending: concrete point or next action, no recap, no kicker
- [ ] Verify no fact, name, number, date, quote, or citation was added, dropped, or smoothed into a generic claim
- [ ] Read it aloud, and ask whether the author would recognize it as their own

### After writing: the final gate
- [ ] No dashes unless the author's sample uses them
- [ ] No sentence about the article instead of the topic
- [ ] No faux-insight setup, colon reveal, or self-answered question
- [ ] No sentence telling the reader what to notice instead of showing why
- [ ] No "To be clear" or "I'm not saying" answering an objection nobody raised
- [ ] No vague attribution ("experts believe", "studies show") without the study named
- [ ] No prestige list in the author bio without links
- [ ] No -ing rider tacked onto a fact
- [ ] No overused AI words, SaaS clichés, or empty adverbs
- [ ] No inline-header bullet lists, no bullets where prose reads better, no headers over two-sentence sections
- [ ] No chatbot residue or knowledge-limit disclaimers
- [ ] Headings in sentence case below H1, no emojis
- [ ] No section that explains what the reader already knew from the query
- [ ] No statistic appearing more than twice
- [ ] Listicle or comparison format varies at least once every three or four sections
- [ ] Openings and closings don't rhyme with other articles in the cluster, and pass the portability test
- [ ] FAQ answers vary in length and opening
- [ ] Testimonials are real, with trade, date, and source
- [ ] Every `[SOURCE NEEDED]` marker is resolved or flagged to the client
- [ ] Could you cut 20% without losing value? If yes, cut it

### Technical and structure
- [ ] Add or verify structured data (Article, HowTo, FAQ, Person as appropriate)
- [ ] Validate schema with Google's Rich Results Test
- [ ] Check internal links to and from related cluster content
- [ ] Verify the author byline links to an author page with credentials
- [ ] Add a "Last updated" date
- [ ] Test page speed (LCP under 2.5s)

### Post-publish
- [ ] Monitor AI citations (check Perplexity and ChatGPT for your queries monthly)
- [ ] Track which phrases get quoted
- [ ] Update content when information changes or gaps emerge
- [ ] Add to the cluster: what related subtopics could you cover next?

---

## Quick reference

Traditional SEO optimizes for Google's algorithm and the people browsing its results. GEO (generative engine optimization) optimizes for AI citation and LLM answer synthesis. E-E-A-T is experience, expertise, authoritativeness, and trustworthiness, Google's quality signals. Topical authority means interconnected content clusters beat isolated pages. The Princeton GEO top three are cite sources (+40%), add statistics (+37%), and include expert quotes (+30%), and all three only count when they're real.

Both SEO and GEO need a natural, human voice with specific details and clear expertise.

The sourcing test: does every number, name, date, and quote trace to a URL or the client? If not, cut it or mark it.

The citation test: is the key claim in a single, self-contained sentence an LLM could quote directly? If not, restructure it.

The portability test: could this sentence move unchanged to another company, product, or author? If yes, it's filler.

The talking test: would you say this out loud to a smart friend? If not, rewrite it.

The length test: could you cut 20% without losing value? If yes, cut it.

The template test: read the openings and closings of every article in the cluster back to back. Do they rhyme?

The ending test: is the last paragraph a concrete point or a next action? A recap or a kicker gets cut.

Why AI sounds like AI: a model picks the phrasing that fits the widest range of readers and subjects. That's why it sounds generic. Your job is to write for one reader about one thing.

---

## Full examples

### Example 1: the 2023-era tells

Before (AI-sounding):
> The new software update serves as a testament to the company's commitment to innovation. Moreover, it provides a seamless, intuitive, and powerful user experience, ensuring that users can accomplish their goals efficiently. It's not just an update, it's a revolution in how we think about productivity. Industry experts believe this will have a lasting impact on the entire sector, highlighting the company's pivotal role in the evolving technological landscape.

After:
> The software update adds batch processing, keyboard shortcuts, and offline mode. Early feedback from beta testers has been positive, with most reporting faster task completion.

What changed: "serves as a testament" (inflated significance, 18, and copula avoidance, 23), "Moreover" and "pivotal" and "evolving landscape" (AI words, 17), "seamless, intuitive, and powerful" (triad, 10, and sales language, 21), "ensuring that" (-ing rider, 20), "It's not just an update, it's a revolution" (not X but Y, 1), "Industry experts believe" (borrowed authority, 22). The after version keeps the one real fact and adds the tester feedback from the source.

### Example 2: the current tells

Vocabulary cleanup would pass this one. Structure gives it away.

Before (AI-sounding):
> Here's the thing about review request software: most contractors are using it wrong.
>
> It's not about sending more requests. It's about sending the right request at the right time.
>
> What nobody tells you: the tool doesn't matter.
>
> **Timing:** Send within an hour of job completion.
> **Channel:** SMS beats email.
> **Follow-up:** One reminder, then stop.
>
> Get those three right and everything else falls into place. That's the whole game.
>
> To be clear, I'm not saying the tool doesn't matter. But the tool is only as good as the process behind it. This distinction matters.
>
> The best part? Most of this can be automated. Set it up once, and it runs forever.
>
> In conclusion, reviews aren't a tactic. They're a habit.

After:
> Most contractors send review requests at the wrong moment. In our own job data, requests sent within an hour of a completed job got about twice the responses of requests sent the next morning, and SMS got more responses than email at every hour we checked. One reminder after three days helps. A second one gets the text marked as spam.
>
> The setup takes about ten minutes in the software we use, and then it runs without anyone touching it. The part nobody automates is the reply. A one-star review that gets a same-day answer often gets edited. One that sits for a week doesn't.

What changed: "Here's the thing" (staged run-up, 4), "It's not about... It's about" (not X but Y, 1), "What nobody tells you:" (faux insight, 5, and colon reveal, 6), the bold-label list (24), "everything else falls into place" and "That's the whole game" (one-line closers, 2), "To be clear, I'm not saying" (arguing with no one, 9), "This distinction matters" (interpretive metadiscourse, 8), "The best part?" (self-answered question, 7), "runs forever" (inflation, 18), "In conclusion... aren't a tactic. They're a habit." (summary-recap ending, 31, with a not-X-but-Y kicker). The after version keeps the timing, channel, and follow-up claims, states them with the specific numbers from the source, and ends on a concrete fact instead of a closer. The numbers in the after version are illustrative and would need real sources in production.

---

Pattern list adapted from the [humanizer](https://github.com/blader/humanizer) skill (v3.0.0, MIT), the [no-ai-slop](https://github.com/petergyang/no-ai-slop) skill (MIT), and Wikipedia's [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), with SEO-specific patterns and conflict resolutions added for this guide.

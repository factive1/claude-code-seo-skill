# SEO + GEO Content Strategy Guide

**Core Principle**: Rank in search. Get cited by AI. Sound like a human wrote it.

---

## SEO (Traditional Search)

### Content Types & Lengths

Length should match intent, not hit arbitrary targets. A 1,200-word article that fully answers the query beats a 5,000-word article with filler. Use these as rough guides, not rules:

- **Pillar Guide**: As long as needed to be comprehensive (often 3–6K words)
- **How-To**: Complete the task, no padding (often 1–2K words)
- **Comparison**: Cover decision-relevant factors (often 2–3K words)
- **Listicle**: Each item earns its spot (often 1.5–2.5K words)

**The real test**: Could you cut 20% without losing anything useful? If yes, cut it.

### Style Guidelines

- Comprehensive, not long for length's sake
- Skimmable with clear H2s
- Answer intent completely
- Depth signals authority—but so does knowing when to stop

### Research Approach

- Analyze top 5 SERP results
- Find gaps in existing content
- Answer all PAA (People Also Ask) questions

### Structure Requirements

- Keyword in title, H1, H2s
- Match Featured Snippet format
- FAQ section (schema-ready)

### Win Condition

- Page 1 ranking
- Featured Snippet
- Click-through + dwell time

### E-E-A-T Signals

Google's quality raters evaluate Experience, Expertise, Authoritativeness, and Trustworthiness. Build these into content:

**Experience**
- First-person accounts: "When I tested this..." or "In my 10 years doing X..."
- Original photos, screenshots, or data you collected
- Specific details only someone who did the thing would know

**Expertise**
- Author bylines with credentials relevant to the topic
- Link to author pages showing their background
- Cite primary sources, not just other blogs

**Authoritativeness**
- Get cited by other sites (earnable through original research, data, or strong takes)
- Build topical depth (see Topical Authority below)
- Include expert quotes with real names and affiliations

**Trustworthiness**
- Clear "About" and "Contact" pages
- Accurate, up-to-date information (review and update regularly)
- Transparent about affiliate relationships, sponsorships, methodology

**For YMYL topics** (health, finance, legal): E-E-A-T matters more. Credentials and citations aren't optional.

### Topical Authority

Individual pages compete worse than interconnected content clusters. Google rewards sites that demonstrate depth in a subject area.

**How to build it:**

1. **Pick your territory.** What topics should your site own? Be specific. "Marketing" is too broad. "B2B SaaS content marketing" is defensible.

2. **Map the topic.** List every question, subtopic, and angle. Use tools, PAA boxes, forums, and your own expertise.

3. **Create a hub-and-spoke structure:**
   - **Pillar page**: Comprehensive overview that links to all subtopics
   - **Cluster pages**: Deep dives on specific subtopics that link back to pillar
   - **Internal links**: Connect related content liberally

4. **Cover adjacent topics.** If you write about "email deliverability," also cover authentication (SPF, DKIM, DMARC), list hygiene, sending infrastructure. Gaps in coverage signal shallow expertise.

5. **Update and expand.** Topical authority compounds. Add new cluster pages over time. Refresh existing content when the landscape changes.

**Example structure:**
```
Pillar: "Complete Guide to Technical SEO"
├── Cluster: "Core Web Vitals Optimization"
├── Cluster: "Crawl Budget Management"
├── Cluster: "Structured Data Implementation"
├── Cluster: "Site Architecture for SEO"
├── Cluster: "JavaScript SEO"
└── Cluster: "International SEO (hreflang)"
```

### Technical SEO for Content

Content quality means nothing if Google can't access, render, and understand it.

**Page Experience**
- Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1
- Mobile-friendly (test with real devices, not just Chrome DevTools)
- No intrusive interstitials

**Structured Data**
Go beyond FAQ schema:
- **Article**: Headline, author, datePublished, dateModified
- **HowTo**: Step-by-step with images
- **Author**: Link to author page with sameAs for social profiles
- **Organization**: For brand SERP features
- **Review/Product**: For commerce content

**Internal Linking**
- Link from high-authority pages to pages you want to rank
- Use descriptive anchor text (not "click here")
- Create logical paths through related content
- Fix orphan pages (no internal links pointing to them)

**Content Freshness**
- Add "Last updated" dates and actually update content
- Review high-traffic pages quarterly
- Historical optimization: Update old posts rather than always creating new ones

---

## GEO (AI/LLM Search)

### Content Types & Lengths

- **Definition Page**: 500–1K words
- **Data/Research**: 1–2K words
- **Expert Take**: 800–1.5K words
- **Structured FAQ**: 1–2K words

### Style Guidelines

- Concise, definitive
- Quotable paragraphs
- One clear answer per question
- Density signals authority

### Research Approach

- Ask ChatGPT/Perplexity the query
- Note which sources get cited
- Find what's missing from AI answers

### Structure Requirements

- Quotable definitions upfront
- Clean hierarchy (easy to parse)
- Stats in cite-ready format

### Win Condition

- "According to [you]..." in AI responses
- Cited in AI Overview
- Source link in Perplexity

### What Gets Cited (Citation Mechanics)

LLMs don't cite randomly. Understanding their patterns helps you write cite-able content.

**Sentence structures that get quoted:**

1. **Definitional statements.** "X is Y" constructions at the start of sections.
   - ✓ "A canonical tag is an HTML element that tells search engines which URL is the preferred version of a page."
   - ✗ Burying the definition in paragraph three after context-setting

2. **Specific numbers with context.**
   - ✓ "The average SaaS churn rate is 5-7% annually, according to a 2024 ProfitWell study."
   - ✗ "Churn rates vary significantly across industries."

3. **Attributed claims.**
   - ✓ "Google's John Mueller confirmed in a 2023 podcast that..."
   - ✗ "Many SEOs believe..."

4. **Comparative statements.**
   - ✓ "Next.js handles SSR out of the box, while Create React App requires additional configuration."
   - ✗ "There are several options for React frameworks."

5. **Step-first instructions.**
   - ✓ "To enable dark mode: 1) Open Settings, 2) Select Display, 3) Toggle Dark Mode on."
   - ✗ "Dark mode can be enabled through various methods depending on your preferences."

**Platform differences:**

- **Perplexity**: Cites more sources, favors recent content, shows inline citations. Optimize for quotable discrete statements.
- **ChatGPT**: Cites less frequently, pulls from training data + browsing. Strong brand association helps ("Moz says," "Ahrefs data shows").
- **Google AI Overviews**: Heavily favors content already ranking well. Traditional SEO is prerequisite to GEO here.
- **Claude**: No live citations in base model, but retrieval-augmented versions cite sources. Clean, factual prose performs best.

**Content formats that get cited:**

- Glossary/definition pages (for "what is X" queries)
- Data/research with specific numbers
- How-to content with clear steps
- Comparison pages with structured breakdowns
- FAQ pages with direct Q&A format

**What doesn't get cited:**

- Opinion without attribution or evidence
- Vague, hedged statements
- Content buried in walls of text without clear structure
- Paywalled content (LLMs often can't access it)
- PDFs (harder to parse than HTML)

### GEO Research Process

1. **Query the LLMs.** Ask ChatGPT, Perplexity, and Claude your target query. Note:
   - Which sources get cited?
   - What claims are made without citation?
   - What's missing or wrong in the answers?

2. **Analyze cited sources.** What do they have in common?
   - Structure (headings, lists, tables)?
   - Sentence patterns?
   - Specificity level?
   - Domain authority?

3. **Find the gaps.** Where are LLM answers:
   - Incomplete?
   - Outdated?
   - Wrong?
   - Vague where they should be specific?

4. **Create cite-able content.** Write content that:
   - Fills the gaps you identified
   - Uses structures similar to currently-cited sources
   - Leads with quotable statements
   - Includes specific data, names, dates

5. **Monitor and iterate.** Check periodically:
   - Are you getting cited?
   - For which queries?
   - What phrasing is being pulled?
   - Double down on what works

---

## Voice: Killing the AI Accent

AI has a distinct writing "accent" that readers spot instantly. Avoiding these patterns is only half the job. Sterile, voiceless writing is just as obvious as slop.

### Content Patterns to Kill

**Inflated Significance**
AI puffs up importance with hollow claims about how things "represent broader trends" or "serve as testaments."

Words to cut: stands/serves as, is a testament/reminder, vital/significant/crucial/pivotal role, underscores/highlights its importance, reflects broader, symbolizing its ongoing/enduring, setting the stage for, key turning point, evolving landscape, indelible mark

Before: *The Statistical Institute was officially established in 1989, marking a pivotal moment in the evolution of regional statistics. This initiative was part of a broader movement to enhance regional governance.*

After: *The Statistical Institute was established in 1989 to collect regional statistics independently from the national office.*

**Superficial -ing Analyses**
AI tacks present participle phrases onto sentences to fake depth.

Words to cut: highlighting..., ensuring..., reflecting..., symbolizing..., contributing to..., fostering..., showcasing...

Before: *The temple's colors resonate with the region's natural beauty, symbolizing Texas bluebonnets and the Gulf of Mexico, reflecting the community's deep connection to the land.*

After: *The temple uses blue, green, and gold. The architect said these reference local bluebonnets and the Gulf coast.*

**Promotional Language**
AI struggles with neutral tone, especially for places and cultural topics.

Words to cut: boasts a, vibrant, rich (figurative), profound, showcasing, exemplifies, commitment to, natural beauty, nestled, in the heart of, groundbreaking, renowned, breathtaking, must-visit, stunning

Before: *Nestled within the breathtaking region of Gonder, Alamata stands as a vibrant town with a rich cultural heritage and stunning natural beauty.*

After: *Alamata is a town in the Gonder region of Ethiopia, known for its weekly market and 18th-century church.*

**Vague Attributions**
AI attributes opinions to phantom authorities.

Words to cut: Industry reports, Observers have cited, Experts argue, Some critics argue, several sources

Before: *Experts believe the river plays a crucial role in the regional ecosystem.*

After: *The river supports several endemic fish species, according to a 2019 survey by the Chinese Academy of Sciences.*

**Formulaic "Challenges" Sections**
Many AI articles include the same structure: despite challenges, the future looks bright.

Before: *Despite its prosperity, the city faces challenges typical of urban areas, including traffic congestion. Despite these challenges, the city continues to thrive.*

After: *Traffic congestion increased after 2015 when three new IT parks opened. The municipal corporation began a drainage project in 2022.*

### AI Vocabulary Words

These words appear far more often in post-2023 text. They often cluster together.

**Kill these**: Additionally, align with, crucial, delve, emphasizing, enduring, enhance, fostering, garner, highlight (verb), interplay, intricate/intricacies, key (adjective), landscape (abstract), pivotal, showcase, tapestry (abstract), testament, underscore (verb), valuable, vibrant

Before: *Additionally, a distinctive feature is the incorporation of camel meat. An enduring testament to Italian influence is the widespread adoption of pasta in the local culinary landscape, showcasing how these dishes have integrated into the diet.*

After: *Somali cuisine also includes camel meat, considered a delicacy. Pasta dishes, introduced during Italian colonization, remain common in the south.*

### Grammar Patterns

**Copula Avoidance**
AI substitutes "serves as" or "stands as" for simple "is."

Before: *Gallery 825 serves as the exhibition space. The gallery features four separate spaces and boasts over 3,000 square feet.*

After: *Gallery 825 is the exhibition space. The gallery has four rooms totaling 3,000 square feet.*

**Negative Parallelisms**
"Not only...but..." and "It's not just about..., it's..." are overused.

Before: *It's not just about the beat riding under the vocals; it's part of the aggression. It's not merely a song, it's a statement.*

After: *The heavy beat adds to the aggressive tone.*

**Rule of Three**
AI forces ideas into groups of three to seem thorough.

Before: *The event features keynote sessions, panel discussions, and networking opportunities. Attendees can expect innovation, inspiration, and industry insights.*

After: *The event includes talks and panels. There's also time for informal networking.*

**Elegant Variation (Synonym Cycling)**
AI has repetition-penalty code causing excessive synonym swapping.

Before: *The protagonist faces challenges. The main character must overcome obstacles. The central figure eventually triumphs. The hero returns home.*

After: *The protagonist faces challenges but eventually triumphs and returns home.*

**False Ranges**
"From X to Y" where X and Y aren't on a meaningful scale.

Before: *Our journey has taken us from the singularity of the Big Bang to the grand cosmic web, from the birth of stars to the enigmatic dance of dark matter.*

After: *The book covers the Big Bang, star formation, and theories about dark matter.*

### Style Patterns

**Em Dash Overuse**
ChatGPT uses em dashes more than humans do. Mimics "punchy" sales copy.

Before: *The term is promoted by Dutch institutions—not by the people themselves. You don't say "Netherlands, Europe"—yet this mislabeling continues—even in official documents.*

After: *The term is promoted by Dutch institutions, not by the people themselves. You don't say "Netherlands, Europe" as an address, yet this mislabeling continues in official documents.*

**Boldface Everything**
AI emphasizes mechanically.

Before: *It blends **OKRs** (Objectives and Key Results), **KPIs** (Key Performance Indicators), and **visual strategy tools** such as the **Business Model Canvas**.*

After: *It blends OKRs, KPIs, and visual tools like the Business Model Canvas.*

**Inline-Header Lists**
Every bullet starts with a bolded term and colon.

Before:
- **User Experience**: The experience has been improved.
- **Performance**: Performance has been enhanced.
- **Security**: Security has been strengthened.

After: *The update improves the interface, speeds up load times, and adds encryption.*

**Title Case in Headings**
AI capitalizes all main words in headings.

Before: *Strategic Negotiations And Global Partnerships*

After: *Strategic negotiations and global partnerships*

**Emojis**
AI decorates headings or bullet points with emojis.

Before: *🚀 Launch Phase: The product launches in Q3 💡 Key Insight: Users prefer simplicity ✅ Next Steps: Schedule follow-up*

After: *The product launches in Q3. User research showed a preference for simplicity. Next step: schedule a follow-up meeting.*

**Curly Quotation Marks**
ChatGPT uses curly quotes ("...") instead of straight quotes ("...").

Before: *He said "the project is on track" but others disagreed.*

After: *He said "the project is on track" but others disagreed.*

### Communication Artifacts

**Chatbot Residue**
Text meant as correspondence gets pasted as content.

Kill these: "I hope this helps!", "Of course!", "Certainly!", "You're absolutely right!", "Would you like...", "Let me know if...", "Here is a..."

**Knowledge Cutoffs**
AI disclaimers about incomplete information.

Kill these: "as of [date]", "Up to my last training update", "While specific details are limited...", "based on available information..."

**Sycophantic Tone**
Overly positive, people-pleasing language.

Before: *Great question! You're absolutely right that this is complex. That's an excellent point about the economic factors.*

After: *The economic factors you mentioned are relevant here.*

### Filler and Hedging

**Filler Phrases**
- "In order to achieve this goal" → "To achieve this"
- "Due to the fact that" → "Because"
- "At this point in time" → "Now"
- "In the event that" → "If"
- "Has the ability to" → "Can"
- "It is important to note that" → (delete, just state it)

**Excessive Hedging**

Before: *It could potentially possibly be argued that the policy might have some effect on outcomes.*

After: *The policy may affect outcomes.*

**Generic Positive Conclusions**

Before: *The future looks bright. Exciting times lie ahead as they continue their journey toward excellence.*

After: *The company plans to open two more locations next year.*

---

## Adding Soul (Not Just Removing Slop)

Clean writing isn't enough. Sterile, voiceless writing is just as obvious as AI slop.

### Signs of Soulless Writing

- Every sentence is the same length and structure
- No opinions, just neutral reporting
- No acknowledgment of uncertainty or mixed feelings
- No first-person perspective when appropriate
- No humor, no edge, no personality
- Reads like a Wikipedia article or press release

### How to Add Voice

**Have opinions.** Don't just report facts. React to them. "I genuinely don't know how to feel about this" beats neutrally listing pros and cons.

**Vary your rhythm.** Short punchy sentences. Then longer ones that take their time getting where they're going. Mix it up.

**Acknowledge complexity.** Real humans have mixed feelings. "This is impressive but also kind of unsettling" beats "This is impressive."

**Use "I" when it fits.** First person isn't unprofessional. "I keep coming back to..." or "Here's what gets me..." signals a real person thinking.

**Let some mess in.** Perfect structure feels algorithmic. Tangents, asides, and half-formed thoughts are human.

**Be specific about feelings.** Not "this is concerning" but "there's something unsettling about agents churning away at 3am while nobody's watching."

### Example

Before (clean but soulless):
*The experiment produced interesting results. The agents generated 3 million lines of code. Some developers were impressed while others were skeptical. The implications remain unclear.*

After (has a pulse):
*I genuinely don't know how to feel about this one. 3 million lines of code, generated while the humans presumably slept. Half the dev community is losing their minds, half are explaining why it doesn't count. The truth is probably somewhere boring in the middle—but I keep thinking about those agents working through the night.*

---

## Implementation Checklist

### Before Writing
- [ ] Identify target format (SEO pillar vs GEO definition)
- [ ] Research both SERP and AI responses
- [ ] Query ChatGPT, Perplexity, and Claude for your target keyword
- [ ] Note which sources get cited and analyze their structure
- [ ] Note gaps and opportunities in both search and AI results
- [ ] Plan quotable statements (definitions, stats, comparisons)
- [ ] Identify where this fits in your topical cluster

### During Writing
- [ ] Write to satisfy intent, not hit word counts
- [ ] Use specific details over vague claims
- [ ] Include real examples with names, dates, numbers
- [ ] Add actual opinions and reactions
- [ ] Use contractions
- [ ] Vary sentence length and structure
- [ ] Use "is/are/has" instead of "serves as/features/boasts"
- [ ] Lead sections with quotable definitional statements
- [ ] Include E-E-A-T signals (experience, credentials, citations)
- [ ] Link to related content in your topical cluster

### After Writing
- [ ] Run find/replace for AI vocabulary (delve, robust, landscape, pivotal, etc.)
- [ ] Check for -ing participial phrases tacked onto sentences
- [ ] Check for "From X to Y" and "Whether A, B, or C" patterns
- [ ] Count em dashes. If more than 2 per 500 words, cut some
- [ ] Delete summary sentences that restate what you just said
- [ ] Remove "It's not just...it's..." constructions
- [ ] Kill vague attributions ("Experts believe...")
- [ ] Convert inline-header bullet lists to prose
- [ ] Check for rule-of-three lists and break them up
- [ ] Remove chatbot residue ("I hope this helps!")
- [ ] Read aloud. If you stumble or wouldn't say it to a colleague, rewrite
- [ ] Could you cut 20% without losing value? If yes, cut it

### Technical & Structure
- [ ] Add/verify structured data (Article, HowTo, FAQ, Author as appropriate)
- [ ] Check internal links to and from related cluster content
- [ ] Verify author byline links to author page with credentials
- [ ] Add "Last updated" date
- [ ] Test page speed (LCP < 2.5s)

### Post-Publish
- [ ] Monitor AI citations (check Perplexity, ChatGPT for your queries monthly)
- [ ] Track which phrases get quoted
- [ ] Update content when information changes or gaps emerge
- [ ] Add to cluster: what related subtopics could you cover next?

---

## Quick Reference

**Traditional SEO**: Optimize for Google's algorithm and human readers browsing search results

**GEO (Generative Engine Optimization)**: Optimize for AI citation and LLM answer synthesis

**E-E-A-T**: Experience, Expertise, Authoritativeness, Trustworthiness—Google's quality signals

**Topical Authority**: Interconnected content clusters beat isolated pages

**Both require**: Natural, human voice with specific details and clear expertise

**The test**: Would you say this out loud to a smart friend? If not, rewrite it.

**The citation test**: Is your key claim in a single, self-contained sentence that an LLM could quote directly? If not, restructure it.

**The length test**: Could you cut 20% without losing value? If yes, cut it.

**Key insight**: LLMs guess what should come next statistically. The result tends toward the most likely phrasing that applies to the widest variety of cases. That's why it sounds generic. Your job is to be specific.

---

## Full Example

**Before (AI-sounding):**

*The new software update serves as a testament to the company's commitment to innovation. Moreover, it provides a seamless, intuitive, and powerful user experience—ensuring that users can accomplish their goals efficiently. It's not just an update, it's a revolution in how we think about productivity. Industry experts believe this will have a lasting impact on the entire sector, highlighting the company's pivotal role in the evolving technological landscape.*

**After (humanized):**

*The software update adds batch processing, keyboard shortcuts, and offline mode. Early feedback from beta testers has been positive, with most reporting faster task completion.*

**Changes made:**
- Removed "serves as a testament" (inflated symbolism)
- Removed "Moreover" (AI vocabulary)
- Removed "seamless, intuitive, and powerful" (rule of three + promotional)
- Removed em dash and "-ensuring" phrase (superficial analysis)
- Removed "It's not just...it's..." (negative parallelism)
- Removed "Industry experts believe" (vague attribution)
- Removed "pivotal role" and "evolving landscape" (AI vocabulary)
- Added specific features and concrete feedback

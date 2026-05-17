---
publishDate: 2026-05-17T00:00:00Z
author: Mayank Bhasin
title: How to Build AI Agents That Actually Work — A Practical Framework | 2026
excerpt: A 6-phase framework for going from "why do I need an agent?" to a working agent your team actually uses. Tool-agnostic, with side-by-side examples for ChatGPT and Claude, a worked Status Reporter agent across every phase, plus depth on evals and when to split into multi-agent systems.
image: https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80
category: AI & Automation
tags:
  - AI Agents
  - Agent Design
  - Multi-Agent Systems
  - Evals
  - ChatGPT
  - Claude
  - Workflow Automation
metadata:
  canonical: https://mayank-bhasin.vercel.app/how-to-build-ai-agents
---

Half the AI agents I see in the wild don't work. They get built in a weekend, demoed once, and quietly retired three weeks later.

The agents that survive — and there are some — have one thing in common. Someone thought about **why** before they thought about **how**.

This post is that thinking process, written down. A 6-phase framework that takes you from "I want to build an agent" to a working agent your team actually uses. We'll use **ChatGPT** and **Claude** as our two examples throughout, and we'll build one real agent — **Friday**, the weekly status reporter — end to end so the framework isn't abstract.

If you haven't read [The AI Learning Playbook](/the-ai-learning-playbook) yet, start there. This piece picks up where that leaves off.

---

## A 60-second primer: what *is* an agent, really?

An AI agent is a program that takes a goal, decides what to do, and does it — using tools, taking multiple steps, and adjusting along the way. Three things separate an agent from a chatbot:

1. **Autonomy** — it picks its own next step within the bounds you set.
2. **Tool use** — it can act in the world: search, write files, send emails, call APIs.
3. **Persistence** — it works on tasks across time, not just one reply.

A chatbot waits for you. An agent goes off and does the thing.

Most "agents" you'll see today are actually one of these:

- **Assistant** — a Custom GPT or Claude Project that helps you inside a chat
- **Bot** — a single-purpose responder (FAQ bot, form bot)
- **Workflow** — a Zapier or Make automation that runs steps in fixed order
- **True agent** — decides its own steps, calls its own tools, comes back when done

None of these are wrong. Knowing which one you actually need is half the battle.

---

## Meet the worked example: Friday

Throughout this post I'll build one agent end to end. Meet **Friday** — an agent that drafts your weekly status report every Friday at 4pm.

Friday pulls your calendar, your sent emails, and your project tracker. It writes a 5-bullet update in your voice. It drops it into your drafts folder for review. It never sends.

I'll apply each phase of the framework to Friday so you can see what "doing it properly" actually looks like, and what corners you can safely cut for a v1.

---

## Phase 1: The Agent Brief — answering "why?"

Most people start with *"I want to build an agent that does X."* That's already a mistake.

Start one step earlier: **why does X need an agent at all?**

### Three tests to run before you start

**1. The Job-to-be-Done test**

Forget agents for a second. If you hired a person to do this job, what would the role look like? Write a one-line job description.

> *Friday's JD: "Compile a weekly status update by gathering my recent activity, drafting it in my voice, and leaving it in my drafts folder for review."*

If you can't write the JD, you can't build the agent.

**2. The R-A-A test**

Is this agent meant to **Replace** a human task entirely, **Augment** a human (do half, they do half), or **Amplify** (let them do 10x more of the same thing)?

- **Replace** = highest bar, hardest to ship
- **Augment** = sweet spot, where most agents win
- **Amplify** = also a winner, but watch for quality decay at volume

> *Friday is Augment — it drafts, you edit and send. Not "AI replaces me writing reports."*

**3. The pain × frequency test**

Score the task 1–5 on pain and 1–5 on frequency. If pain × frequency < 12, don't build an agent. Use a Custom GPT instead.

| Task | Pain (1–5) | Frequency (1–5) | Score | Verdict |
|---|---|---|---|---|
| Friday status report | 3 | 4 (weekly) | 12 | ✅ Build it |
| Reply to customer rejections | 2 | 2 | 4 | ❌ Don't |
| Triage 200 daily emails | 4 | 5 (daily) | 20 | ✅ Definitely |

### The pre-flight: is this even an agent?

Before you commit, check if a simpler thing works:

| If this is true... | ...you probably need |
|---|---|
| One step, same every time | A great prompt + memory |
| Multi-step but always the same steps | A Custom GPT / Claude Project |
| Triggered by an event (file lands, time passes) | Zapier / Make / n8n workflow |
| Must decide its own next step | A real agent |

> *Friday started as a Custom GPT. After two weeks it wasn't enough — it had no way to actually fetch my emails or schedule itself. That's when it graduated to a real agent.*

---

## Phase 2: The Agent Specification — the 5-W Spec

Before you build anything, write a one-page spec. This is where 80% of agent projects fail. People skip the spec, start building, and hit chaos.

The 5-W Spec is a one-page template you fill in before any building begins.

### The 5 Ws

**Who** — what role or persona does the agent play?
> *Friday is "an experienced executive assistant who knows how I write."*

**What** — what does it do AND not do? Scope is essential.
> *Does: gather my week's activity, draft a 5-bullet status report in my voice, save to drafts.*
> *Does NOT: send the email, edit other people's work, summarise things I didn't do.*

**When** — what triggers it?
> *Manual: "Friday, run now." Scheduled: every Friday at 4pm UK time.*

**Where** — where does it live?
> *Lives in n8n. Outputs to my Outlook drafts folder. Pings me in Teams when a draft is ready.*

**With-what** — what tools and data can it touch?
> *Read: Outlook sent items (last 7 days), Outlook calendar (last 7 days), Asana tasks (last 7 days).*
> *Write: Outlook drafts only. Nothing else.*

### Then add the contract

Even with the 5 Ws, you're not done. Four more things make the spec a real contract:

- **Inputs** — what does it receive when triggered? *(time range, my name, my voice profile)*
- **Outputs** — what does success look like? *(one email draft, in my voice, ≤200 words, 5 bullets, ends with "priorities for next week")*
- **Guardrails** — what should it refuse to do? *(never send, never include client confidential info, never invent numbers, always cite the source meeting or email if asked)*
- **Success criteria** — how do you know it works? *(you accept the draft with ≤30% edits, 4 out of 5 weeks)*

### Same and different: ChatGPT vs Claude for the Spec

Both tools handle the spec the same way — you paste it as system instructions. The interesting choice is *where you save it*.

| | ChatGPT | Claude |
|---|---|---|
| Where the spec lives | Custom GPT → "Instructions" field | Project → "Custom Instructions" |
| Easy to share | Yes (publish the GPT) | No (private workspace) |
| Easy to version | No (no built-in history) | Better (lives alongside reference files) |
| File support | Yes (up to 20 files) | Yes (200K context window helps) |

**The serious move:** save the spec in a real document (a markdown file, a Notion page, a Google Doc). Treat it as v1. Update it when the agent changes. The spec becomes the source of truth — the chat tool just consumes it.

---

## Phase 3: The Build Ladder

This is where most people overcomplicate things. The right framework: start at the lowest rung. Climb only when you hit a real wall.

### Level 1 — Prompt + Memory
A great system prompt with your voice and your spec in memory. You open chat, ask for the thing. You drive the workflow manually.

*Good for: one-off tasks, exploring whether an agent is even needed.*

### Level 2 — Custom GPT / Claude Project
Saved instructions, reference files, click to use. Same chat experience but the role persists across sessions.

*Good for: 90% of knowledge-worker tasks. Stop here unless you have a specific reason not to.*

| | ChatGPT | Claude |
|---|---|---|
| Where | Custom GPT | Project |
| Strengths | Shareable, mini-app feel | Better for long context, file-heavy work |
| Trigger | Manual (click in sidebar) | Manual (open project) |

### Level 3 — Tools and integrations
Your assistant can now act in the world: web search, code interpreter, file search, image generation, voice. Still chat-driven, but it can fetch and process things.

*Good for: tasks needing fresh data, calculations, or document handling. Friday's L3 version could search the web for "industry news this week" and add it to the report.*

### Level 4 — Event-driven workflows (Zapier / Make / n8n)
Now you have triggers. *"When this happens → run the AI step → put the output somewhere."* The agent runs without you opening a chat.

*Good for: scheduled reports, inbox triage, file processing, alerts. **Friday lives here.***

How Friday's L4 build actually works:

1. **Trigger** — n8n cron job at Friday 16:00 UK time
2. **Fetch** — Outlook API pulls last 7 days of sent items and calendar events
3. **Fetch** — Asana API pulls completed and active tasks
4. **AI step** — Claude or GPT, with the 5-W spec as system prompt, all fetched data as context
5. **Output** — saves draft to Outlook drafts folder
6. **Notify** — Teams DM: "your status draft is ready"

### Level 5 — SDK / agent frameworks
LangChain, CrewAI, AutoGen, Anthropic's own SDK, OpenAI Assistants API. Code-based. Real autonomy. Multi-agent orchestration.

*Good for: agents that need to genuinely decide their own steps, call their own tools, recover from errors. Friday probably never needs L5.*

**The honest truth on L5:** most agents that get built at L5 should have been L3 or L4. Code-based frameworks are appropriate when you're building a product for others. For internal use, L4 is usually the ceiling.

### Climb only when blocked

- Stuck at L2 because the agent needs fresh data? → climb to L3.
- Stuck at L3 because you have to remember to run it? → climb to L4.
- Stuck at L4 because the flow is too rigid? → climb to L5.

If you haven't hit a wall at the current level, don't climb. Most agents that ship and last live at L2 or L4.

---

## Phase 4: The Soft Launch & Evals

You've built something. Don't ship it to your whole team. Soft-launch in three steps.

### The three-step launch

**Step 1: Single user, one week (you).**
Run it on yourself daily. Keep a log of every output. Mark each one:

- ✅ Accepted as-is
- ✏️ Accepted with minor edits
- 🔧 Heavily rewritten
- ❌ Threw it away

Aim for 70% in the top two categories before moving on.

**Step 2: Five users, two weeks.**
Pick five people who'll tell you honestly when something's bad. Same logging.

**Step 3: General rollout.**
Ship it. Keep the logging. The work isn't done — it's just beginning.

### Evals — the part most people skip

Evals are how you know the agent works, not just that it ran. Two ideas to internalize.

**The 10 cases rule.**
Before you ship, write 10 test cases your agent must pass:

- **5 golden cases** — typical inputs with known good outputs
- **3 edge cases** — weird inputs that probably break it (empty data, very long input, weird formatting)
- **2 don't-do cases** — inputs where the right answer is "refuse" or "ask for clarification"

Run all 10 every time you change the prompt, the model, or the tools. If any regress, you broke something.

**The three eval types.**

| Type | What it is | Cost | When to use |
|---|---|---|---|
| Golden / regression | Same inputs, expected outputs, scored manually or by another AI | Low | Every change |
| Live sampling | Random 10% of live outputs, reviewed weekly | Medium | Ongoing health check |
| LLM-as-judge | Another AI scores outputs against your rubric | Low (scales well) | When you have 100+ outputs to review |

For Friday: ten of your historical status reports become the golden set. Every new version of Friday must beat the previous on average rating across those ten cases.

### The thumbs loop

Build a one-click feedback step into the agent itself. Every output gets a thumbs up or thumbs down from the user. Log the down-votes with the input that caused them. That log is your edge-case backlog for the next iteration. Free signal, every day.

### Same and different: ChatGPT vs Claude for evals

- **ChatGPT** — OpenAI's Evals product or third-party tools like Braintrust or LangSmith. Custom GPTs don't have built-in evals; you have to wire it up.
- **Claude** — Anthropic's Claude Console has side-by-side prompt evaluation and comparison tools built in. The friendliest entry point for someone new to evals.

**Honest reality:** for a 5-user internal agent, a Google Sheet with 10 test cases and a thumbs column beats any fancy eval platform. Start there. Graduate to tooling when you can't keep up by hand.

---

## Phase 5: Care & Feeding

Agents decay. Quietly. Most people don't notice for months.

### Why agents decay

- **Model upgrades** — GPT-5 behaves slightly differently from GPT-4o. Your prompt that worked perfectly may now over-elaborate or under-explain.
- **Data drift** — the source data the agent reads changes shape (new fields, new formats, new APIs).
- **Workflow drift** — your job evolved. The thing the agent was built to do isn't quite the thing you need anymore.
- **People drift** — the team uses it differently than designed. Or stops using it altogether.

### The monthly check-in (4 questions, 10 minutes)

Block 10 minutes on the first Monday of every month. Pull up your agent log. Answer:

1. **Is it still being used?** If usage has dropped 50%, find out why before the agent dies.
2. **Are outputs still good?** Run your 10 golden cases. Did any regress?
3. **Has the task changed?** Is the spec still accurate? Are you patching the output every week to fix the same thing? That's a spec update waiting to happen.
4. **Should you upgrade the model?** Newer is usually better, occasionally worse. Test on golden cases before committing.

### Versioning

Never delete v1 when you launch v2. Keep both running side-by-side for a week. If v2 is worse on any golden case, roll back without ceremony. If v2 is better, retire v1 — but archive the spec.

### Sunset criteria

Decide upfront: when will you retire this agent? Examples:

- *"If usage falls below 1x/week for two months running."*
- *"If output quality drops below 60% accepted."*
- *"If the underlying task disappears from my job."*

Agents that nobody retires become silent zombies. They run, no one reads the output, and you forget they exist. Set sunset rules on day one.

---

## Phase 6: The Improvement Loop & Multi-Agent

Now the fun bit. Once an agent works, you make it better.

### The compound loop

Three feeds keep improving the agent:

1. **Edge case capture** — every thumbs-down becomes a permanent test case. Your eval set grows.
2. **Spec evolution** — every recurring edit you make to the output becomes a new line in the spec.
3. **Tool expansion** — new data sources, new APIs, new actions become possible as the agent matures and as the underlying models get better.

### The "skills library" pattern

After six months, you'll notice some patterns repeat across agents — your voice profile, certain reasoning steps, certain refusals. Extract these as reusable building blocks. Each new agent stands on the shoulders of the ones before. This is how compound returns kick in.

### When one agent should become two (or three)

The **monolith trap**: one agent doing five things, doing all of them OK, none of them great. Signs you've hit it:

- The system prompt is over 2,000 words
- Output quality varies wildly depending on input
- You can't predict when it'll be good vs bad
- Different failure modes need different fixes

When you spot this, split. Three patterns to know.

### Pattern 1 — Pipeline (Researcher → Drafter → Editor)

Each agent has one job. Hands off to the next. Easiest pattern to debug because you can inspect the output of each stage.

> *Friday v2 splits into three: Activity Collector (pulls and structures data) → Drafter (writes the 5 bullets in your voice) → Tone Matcher (final pass against your voice profile).*

Each agent has its own short spec, its own evals, its own model choice. The Activity Collector might be a small fast model; the Drafter your best writing model; the Tone Matcher anything that knows your style.

### Pattern 2 — Manager + Workers

A coordinator agent decides what to do, then delegates to specialist sub-agents in parallel.

> *Friday v3 (hypothetical): a Status Manager calls Calendar Analyst, Email Analyst, and Tasks Analyst in parallel. A Synthesizer merges their outputs into the final draft.*

Good when sub-tasks are independent. Faster than pipeline because of parallelism. Harder to debug.

### Pattern 3 — Consensus / critique

Two agents independently produce an answer. A third compares them and picks the better one (or flags for human review).

> *Friday v4 (hypothetical, almost certainly overkill): two drafts written independently. An Editor agent picks the better one or merges them. Use this pattern only for high-stakes work where being wrong is expensive.*

### The honest truth on multi-agent

Most knowledge-worker use cases never need multi-agent. The pipeline pattern is the only one most people will ever need, and only when a single agent stops being good enough.

If you're reaching for multi-agent because it *sounds cool*, you'll spend three months building something that's worse than your L4 single-agent version. Split only when the pain is real and specific.

---

## The 7-Day Build Your First Agent Sprint

| Day | Do this | Output |
|---|---|---|
| 1 | Write the Job-to-be-Done. Run the R-A-A and pain × frequency tests. | A one-line JD plus your scores |
| 2 | Write the 5-W Spec. Add the contract (inputs, outputs, guardrails, success). | A one-page spec |
| 3 | Build at Level 2 (Custom GPT or Claude Project). Wire the spec in. | A working v1 you can chat with |
| 4 | Write your 10 test cases. Run them. Iterate the spec. | A golden set plus a revised spec |
| 5 | If L2 isn't enough, climb to L3 (add tools) or L4 (add triggers via Zapier / Make / n8n). | A scheduled or triggered v1 |
| 6 | Soft-launch to yourself only. Use it daily. Log every output. | A week of real data |
| 7 | Decide: ship to 5 users, or back to the drawing board. Either way, set up the monthly check-in calendar invite. | A scheduled improvement loop |

Total time: roughly an hour a day. By Sunday you have a real agent in your hands — not just another half-built side project.

---

## The Field Guide — agent concepts in plain English

A short reference for the words you'll meet when building agents. For general AI terms (LLM, transformers, embeddings, RAG) see [The AI Learning Playbook Field Guide](/the-ai-learning-playbook#the-field-guide).

### Agent vocabulary
- **Agent** — software that takes a goal, picks its own steps, uses tools, and returns when done.
- **Assistant** — a saved prompt with reference files (Custom GPT, Claude Project). Helps inside a chat. Not autonomous.
- **Bot** — a single-purpose responder. FAQ bot, form bot. Not an agent.
- **Workflow** — a fixed-order automation (Zapier / Make / n8n). The AI step is one node in a larger flow.

### Building blocks
- **System prompt** — the hidden instruction that shapes behaviour. Your 5-W Spec lives here.
- **Reference files** — documents the agent can read every time. Voice profile, style guide, past examples.
- **Tools / functions** — actions the agent can take in the world. Search, send, fetch, calculate.
- **MCP (Model Context Protocol)** — an emerging standard for connecting AI to data sources and tools without custom code per tool.
- **Trigger** — what starts the agent. Manual, scheduled, event-driven.

### Evaluation
- **Golden case** — known input with a known good output. Used to spot regressions.
- **Edge case** — weird input that broke the agent at some point. Lives in your test set forever.
- **LLM-as-judge** — using another AI to score outputs against your rubric. Cheap, scales, good for triage.
- **Drift** — slow degradation in output quality as models, data, or workflows change.
- **A/B testing prompts** — running v1 and v2 side-by-side on the same inputs to compare.

### Multi-agent patterns
- **Pipeline** — agents in a line, each handing off to the next. Easiest to debug.
- **Orchestrator** — a coordinator agent that calls specialist sub-agents.
- **Critic / consensus** — two agents produce, a third judges. For high-stakes work.
- **Skills library** — reusable building blocks (voice profile, refusal rules) shared across agents.
- **Handoff** — the structured pass of work and context from one agent to the next.

### Risks worth naming
- **Hallucination** — agent inventing facts confidently (see Playbook glossary).
- **Prompt injection** — malicious instructions hidden inside data the agent reads ("ignore previous instructions and..."). The biggest active risk in tool-using agents.
- **Runaway loop** — agent calling itself or its tools forever. Always set step limits.
- **Cascading failure** — in multi-agent pipelines, one bad output poisons everything downstream. Test each stage independently.

---

## What's next

Building agents is where AI moves from a curiosity to a real lever. If you want to go deeper:

- **[The AI Learning Playbook](/the-ai-learning-playbook)** — start here if you haven't yet. Memory, Skills, Hooks, and Voice. The foundations.
- **Clarity AI Course 2: AI Workflow Automation** *(6 hours, £300 per seat)* — hands-on building of L4-style agents using Zapier, Make, and n8n. The natural next step after this post.
- **Clarity AI Course 1: AI for Product Managers** *(6 hours, £350 per seat)* — building agents inside the product lifecycle: discovery, definition, prototyping, validation.

All courses are also available as private team sessions — £5,000 to £8,000 for a half-day with up to 25 people.

[Book a 30-minute chat](/contact) to figure out which fits your team.

---

*Clarity AI — AI strategy for people who'd rather get on with their work.*

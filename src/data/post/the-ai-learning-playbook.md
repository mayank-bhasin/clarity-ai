---
publishDate: 2026-05-16T00:00:00Z
author: Mayank Bhasin
title: The AI Learning Playbook — Memory, Skills, Hooks & Voice | 2026
excerpt: A short, plain-English guide to making AI work the way you work. Four small habits — memory, skills, hooks, voice — turn AI from a vending machine into an assistant. No tech background needed, with side-by-side examples for ChatGPT and Claude.
image: https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80
category: AI & Automation
tags:
  - AI
  - Beginner Guide
  - Prompt Engineering
  - ChatGPT
  - Claude
  - Productivity
metadata:
  canonical: https://mayank-bhasin.vercel.app/the-ai-learning-playbook
---

Most people use AI like a slightly smarter search engine. Type a question. Get an answer. Close the tab.

The people getting real value from AI are doing something different. They're teaching it. Coaching it. Setting it up like a new junior colleague who remembers everything and gets sharper every week.

This guide shows you four small habits that turn AI from a vending machine into an assistant:

1. **Memory** — make AI remember you
2. **Skills** — give AI a specialist hat
3. **Hooks** — make AI act when something happens
4. **Voice** — make AI write the way you write

We'll use **ChatGPT** and **Claude** as our two examples. The ideas work in either tool — you just press different buttons. By the end you'll know which button to press in either one.

---

## A 60-second primer on how AI actually works

Think of an AI chatbot like a brilliant new hire on day one.

- It's read more books than anyone alive.
- It has no idea who you are, what you do, or what "good" looks like for you.
- It forgets everything the moment your chat ends — unless you give it a way to remember.

So every time you open a new chat, you're meeting that brilliant new hire again. For the first time. Again.

That's the problem this playbook solves. You'll give AI four things it doesn't have by default: a memory of you, specialist skills you can call up by name, simple triggers that act on your behalf, and a way to sound like you when it writes.

**The result:** less re-explaining, better output, much faster work.

---

## Part 1: Memory — make AI remember you

### What it is
Memory is a place where AI stores facts about you between conversations. Your role, your style, your projects, what you like, what you don't.

### Why it matters
Without memory, every chat starts from scratch. With it, AI walks in already knowing you. The difference shows up within a week.

### What to save (rules of thumb)

**Do save:**
- Your role and what you actually do day to day
- How you like things written (short, bullets, no jargon, etc.)
- Names and context of ongoing projects
- Tools you live in (Outlook, Word, Slack, Notion)
- Things to always avoid (corporate clichés, em-dashes, whatever you hate)

**Don't save:**
- One-off facts you'll never need again
- Sensitive info — passwords, client confidential data, anything you wouldn't share with a stranger
- Today's task list — that's what the chat is for

### In ChatGPT
1. Click your profile picture → **Settings** → **Personalization** → **Memory**. Turn it on.
2. ChatGPT will quietly save things it notices as you chat.
3. You can also tell it directly: *"Remember that I prefer short, punchy emails with no greeting."*
4. Review and edit your saved memories anytime on the same screen. Delete anything stale.

### In Claude
1. Click your name → **Settings** → **Profile**. Add a few sentences in "Tell Claude about yourself" — your role, your style, your top projects.
2. For richer memory, use **Projects**. Each project has its own custom instructions and reference files Claude reads every time.
3. Claude doesn't auto-save things you mention in chat. You tell it what to remember by editing your profile or project.

### Same and different at a glance

| | ChatGPT | Claude |
|---|---|---|
| Saves things automatically as you chat | Yes | No |
| You can edit memory yourself | Yes | Yes |
| Project-level memory (separate per topic) | Limited (via Custom GPTs) | Yes (Projects) |
| Best for | Quick personal use, learning as you go | Multi-file work, deliberate setup |

### Try this in 5 minutes
Write a short "About me":

> *I'm a [role] at a [type of company]. My job is mainly [top 2 things]. When you write for me, keep things short, plain, no jargon. Avoid words like leverage, utilize, robust. The two projects I'm working on right now are [X] and [Y].*

Paste that into ChatGPT or Claude as: *"Please remember this about me."* Done. Every future chat will be sharper.

---

## Part 2: Skills — give AI a specialist hat

### What it is
A skill is a saved set of instructions you can call up by name. Think of it as a hat: when you put it on AI, it acts like a specialist for one specific job.

You build it once. You use it forever.

### Why it matters
Without skills, you re-type the same long instruction every time you want the same kind of output. With skills, you click once and AI is already in character.

### Skills people build first
- **Email Tightener** — rewrites your drafts shorter and sharper
- **Meeting Notes Cleaner** — turns rambling notes into action items
- **Job Description Drafter** — turns half-thoughts into a structured JD
- **Tone Matcher** — rewrites anything in your house style
- **Plain English Editor** — strips jargon out of corporate copy

### In ChatGPT — "Custom GPTs"
1. Click **Explore GPTs** → **Create**.
2. Give it a name: "Email Tightener."
3. Write the instructions: *"You are an email editor. Cut every email I give you by at least 40%. Keep my voice. Never add new ideas. Always end with a clear ask."*
4. Optional: upload 5 of your past best emails as examples.
5. Save. It now lives in your sidebar. Click and chat anytime.

### In Claude — "Projects"
1. Click **Projects** → **Create project**.
2. Add a name and a description.
3. In **Custom Instructions** describe the specialist behaviour you want.
4. Upload reference files Claude should treat as the gold standard.
5. Open the project anytime. Claude stays in character for every chat inside it.

### Same and different

- **ChatGPT Custom GPTs** are mini-apps you can share with others (or even publish).
- **Claude Projects** are private workspaces meant for ongoing personal or team work.
- Both let you upload files. Both let you set behaviour. Use whichever tool your team already pays for — the thinking is the same.

### Try this in 10 minutes
Pick **one** task you do every week. Write a half-page instruction for an AI specialist who does only that task. Save it as a Custom GPT or a Claude Project. Use it the next time the task comes up. Refine the instruction the second time you use it.

---

## Part 3: Hooks — make AI act when something happens

### What it is
A hook is a trigger. "When X happens, automatically do Y." You set it up once. It runs in the background forever.

This is the most advanced piece in this playbook, and the least built-out in chat tools today. Worth understanding now because it's where AI is going next.

### What hooks could look like
- Every Friday at 4pm, summarise my week from my calendar
- When a new email lands from my boss, draft a two-line reply
- When I save a new file to a folder, tag it and file it properly
- When I finish a draft, check tone, length, and grammar against my style guide
- Every Monday morning, send me 5 headlines on UK fintech

### In ChatGPT
ChatGPT has a **Scheduled Tasks** feature. You can say:

> *"Every Monday at 9am, give me a 5-item summary of UK fintech news from the last week."*

It will deliver on schedule. Good for time-based hooks.

For richer hooks (when an email lands, when a file changes, when someone fills a form), most people connect ChatGPT to **Zapier**, **Make**, or **Microsoft Power Automate** — tools that wire AI into thousands of apps.

### In Claude
Claude's chat app doesn't have native scheduled hooks today. Claude Code (for software engineers) does have a hooks system, but most non-developers won't use that.

If you want event-triggered hooks with Claude, the easiest route is the same: connect Claude through **Zapier** or **n8n** to your other tools.

### The honest truth
Hooks in chat tools right now are early. The future is bright, but today most real automation lives outside the chat — in Zapier, Power Automate, Make, or n8n. AI is the brain. These tools are the hands and feet.

The mental model still matters. Once you start spotting "if X then Y" moments in your day, you're thinking like an automation builder, and the tools become details.

### Try this in 5 minutes
Don't build anything yet. Just notice.

For the next two days, write down every repeating moment in your work — anything you do more than once a week, the same way. That list is your hook backlog. You'll come back to it when you build your first automation.

---

## Part 4: Voice — make AI write the way you write

### Why it matters
The fastest tell that something was written by AI is that it sounds like AI. Crisp. Polished. Hollow.

If AI is going to write anything under your name — emails, posts, reports, slides — it needs to sound like you, not like a stock template.

### The 4-step Voice Fingerprint method

**Step 1 — Pick 5 strong samples.**
Find 5 things you've written that you're genuinely proud of. Emails, posts, memos, any format. Paste them into a chat.

**Step 2 — Ask AI to study you.**
Use this prompt:

> *"Read these 5 samples carefully. Describe my writing voice in 8-10 specific traits. Cover: sentence length, vocabulary, tone, rhythm, what I do that's unusual, and what I avoid. Be specific. Quote me back to me."*

**Step 3 — Refine what comes back.**
Read what AI says. Cross out anything that's wrong. Add anything it missed. You now have a one-page written description of your voice.

**Step 4 — Save it.**
- **In ChatGPT:** add it to Memory. *"When you write for me, follow this voice profile: [paste]."*
- **In Claude:** drop it into your profile, or into the custom instructions of a Project called "Writing in my voice."

### The test
Ask AI to draft something boring — a follow-up email, a LinkedIn post, a thank-you note. Read it out loud. If it sounds like something you would actually say, your fingerprint is working. If not, refine it and try again.

### What kills your voice (tell AI to avoid these by name)
- Words you'd never say in real life: *leverage, utilize, robust, deep dive, unlock, navigate, foster*
- Sentences that pile up clause on clause and never quite land
- Generic openings: *"In today's fast-paced world..."*, *"It is important to note..."*
- The em-dash habit when a full stop would do
- Praise sandwich endings that say nothing: *"Hope this helps!"*

### Try this in 15 minutes
Run the full Voice Fingerprint exercise once. Save the result. From now on, anything AI writes for you starts with the instruction: *"Use my saved voice profile."*

---

## Your 7-day starter plan

| Day | Do this | Time |
|---|---|---|
| 1 | Turn on Memory. Write your 3-sentence "About me." Save it. | 5 min |
| 2 | Pick a weekly task. Build it as a Custom GPT (ChatGPT) or Project (Claude). | 15 min |
| 3 | Use yesterday's skill on a real task. Refine the instructions. | 10 min |
| 4 | Run the Voice Fingerprint exercise. Save your profile. | 15 min |
| 5 | Draft something with your voice profile on. Read it out loud. Refine. | 10 min |
| 6 | Spot 3 "if X then Y" moments in your week. Write them down. | 5 min |
| 7 | Look back at the week. Tell AI three new things to remember about you. | 5 min |

About an hour total, spread across a week. By Sunday, your AI knows who you are, has a specialist skill ready, sounds like you, and has a list of future automations waiting.

---

## The Field Guide — every word you'll meet, in plain English

Use this as a reference. Skim it now to get the lay of the land, then come back whenever you bump into a word you don't know. Every term has an example.

### 1. The words you'll use every day

- **Prompt** — what you type to the AI. The instruction or question.
  *Example: "Write a 3-line follow-up email to a customer who hasn't replied in a week."*

- **Model** — the brain behind the AI. ChatGPT and Claude are products. GPT-4o, Claude Opus, and Gemini Pro are the models powering them. A newer model usually means a smarter AI.
  *Example: You pay for "ChatGPT Plus" mainly to use a newer, smarter model than the free version offers.*

- **Context** — everything the AI can see right now: your current message, the chat history, any files you've uploaded, anything in memory.
  *Example: If you upload a 30-page report and ask a question, that report is "in context."*

- **Token** — a chunk of text. The unit AI uses to count what it reads and writes. Roughly 3/4 of a word in English. Tokens are what gets billed when companies pay for AI.
  *Example: "Hello world" is about 2 tokens. A long email might be 200 tokens.*

- **System prompt** — the hidden instruction that shapes how AI behaves before you type anything. Your Memory and Custom Instructions become part of this.
  *Example: A customer service bot has a system prompt that says "You are polite and helpful. Never offer refunds over £50."*

- **Custom GPT / Project** — a saved AI specialist with its own instructions and reference files. See Part 2.

### 2. The tools you'll meet

- **ChatGPT** — OpenAI's chatbot. The most popular. Strong all-rounder.
  *Example: When someone says "I ChatGPT'd it," they mean "I asked AI."*

- **Claude** — Anthropic's chatbot. Strong at writing, long documents, and careful reasoning.
  *Example: People who write a lot — lawyers, marketers, academics — often prefer Claude.*

- **Gemini** — Google's chatbot. Built into Google Workspace (Docs, Gmail, Sheets).
  *Example: If your company runs on Google Workspace, Gemini is already inside your tools.*

- **Copilot** — Microsoft's AI, built into Word, Excel, Teams, Outlook, and Windows.
  *Example: The sparkle icon in your Word document is Copilot.*

- **Perplexity** — AI that searches the live web and cites its sources.
  *Example: Better than ChatGPT when you need news, prices, or facts that change weekly.*

### 3. What AI can actually do

- **Multimodal** — handles more than just text. Images, audio, video, voice — all in one place.
  *Example: You photograph a wine label and ask "is this any good?" — that's multimodal.*

- **Vision** — AI looking at a picture or screenshot and describing it, or pulling text out of it.
  *Example: Upload a screenshot of a confusing chart and ask "explain this to me."*

- **Voice mode** — having a real spoken conversation with AI, no typing.
  *Example: Talking to ChatGPT in the car on a long drive.*

- **Web browsing** — AI looking things up online in real time.
  *Example: "What was the FTSE 100 doing today?" needs web browsing — AI has no memory of today.*

- **Code interpreter / Analysis** — AI running calculations on data you give it (spreadsheets, CSVs).
  *Example: Upload your last 12 months of expenses and ask "what's the trend by category?"*

- **File upload** — drop in PDFs, docs, images, slides; AI reads them.
  *Example: Upload a 50-page tender document, ask "summarise the 3 must-haves."*

- **Agent** — AI that takes multi-step actions on its own — browses, clicks, fills forms, finishes the job.
  *Example: "Find me 3 flights from London to Lisbon next Friday under £150 and email me the options."*

- **Tool use / Function calling** — the underlying machinery that lets AI call apps and services. The technical name behind "Agent."

### 4. The knobs you can turn

- **Temperature** — the creativity dial. Low (0–0.3) = predictable, factual. High (0.8–1) = wild and creative.
  *Example: Use low temperature for legal drafts. High for brainstorming slogans.*

- **Reasoning / "Thinking" mode** — AI takes longer and works through the problem step by step before answering. Better for hard problems, slower for easy ones.
  *Example: ChatGPT's "o1" and Claude's "Thinking" modes — switch on for maths, logic, or complex planning.*

- **Few-shot prompting** — giving AI 2–3 examples of what you want before you ask.
  *Example: "Rewrite these emails like this: [example 1, example 2]. Now rewrite this one: [new email]."*

- **Chain of thought** — asking AI to "think step by step" out loud. Quality goes up because AI doesn't jump to conclusions.
  *Example: "Solve this riddle. Think step by step before you answer."*

- **Grounding** — making AI answer ONLY from a specific document or source, not from its general knowledge.
  *Example: "Using only the attached policy doc, answer: am I entitled to compassionate leave?"*

### 5. When things go wrong

- **Hallucination** — AI making something up confidently. Names, statistics, citations, quotes that don't exist. Always check before sending.
  *Example: AI confidently citing a court case that was never decided. Real lawyers have been fined for this.*

- **Bias** — AI inheriting blind spots from the data it was trained on. Often subtle.
  *Example: Ask AI to "draw a CEO" and it defaults to a man in a suit. That's bias.*

- **Refusal** — AI politely declining your request, either because of safety rules or because it's not sure.
  *Example: "I can't help with that" or "I'm not able to provide medical advice."*

- **Knowledge cutoff** — the date after which AI doesn't know what's happened. AI can't tell you who won last weekend's match unless it can browse the web.
  *Example: A model trained with a January 2026 cutoff doesn't know what happened in February.*

- **Context window** — how much AI can hold in its head at once. Once full, the oldest bits drop off.
  *Example: If a chat gets very long, AI starts "forgetting" what you said early on. Start a new chat or trim what's loaded.*

### 6. Under the hood — the deeper bits

These three concepts power almost every AI product you'll meet. Worth ten minutes to understand once.

- **LLM (Large Language Model)** — the technical name for the AI brain inside ChatGPT, Claude, and Gemini. "Large" because it's trained on billions of pages. "Language model" because at its core, it predicts the next word.
  *Example: When people say "we're building on top of LLMs," they mean using GPT, Claude, or similar as the engine.*

- **Transformers** — the architecture (the blueprint) behind every modern AI chatbot. Invented by Google in 2017. Transformers read your full sentence at once and figure out what each word means in the context of all the others. The "T" in ChatGPT literally stands for Transformer.
  *Example: Ask "did the bank get flooded?" and a transformer looks at the whole sentence to work out "bank" means a riverbank, not a financial bank. Older AI read one word at a time and got confused.*

- **Embeddings** — turning words, sentences, even pictures into a list of numbers that captures their *meaning*. Words with similar meanings end up with similar numbers. This is the trick that lets AI search by meaning, not keywords.
  *Example: "Dog" and "puppy" have almost identical embeddings. "Dog" and "spreadsheet" are very far apart. If you search "how to grow tomatoes," embeddings let AI also find "raising vegetables in pots" — even though the words don't match.*

- **Vector database** — a special filing cabinet that stores embeddings so AI can search by meaning across thousands of documents at speed.
  *Example: Your company has 10,000 past tender PDFs. A vector database lets AI find the right paragraph based on the meaning of your question — even if you've used different words from the document.*

- **RAG (Retrieval-Augmented Generation)** — AI looking things up in YOUR documents before it answers. Combines a vector database (the filing cabinet) with an LLM (the brain). The most common pattern for company AI chatbots.
  *Example: A bank's customer service AI uses RAG to answer questions from the bank's own policy documents — not from whatever the LLM happened to learn during training.*

- **Fine-tuning** — further training a model on your own examples to make it a specialist. Expensive. Usually overkill — start with good prompts, memory, and RAG first.
  *Example: A pharma company fine-tunes a model on 50,000 internal clinical notes so it writes in their house style.*

- **Training data** — the books, websites, code, and articles AI learned from before you ever met it. Does NOT include your private chats *if* you're on a paid or enterprise plan. On free plans, your chats may be used to train future models. Always check the small print.

### 7. Boardroom jargon (so you can follow the meeting)

- **API (Application Programming Interface)** — the developer-facing way to plug AI into apps, websites, and software. If you're not coding, you don't use one directly.
  *Example: "Our team built a Slack bot using the Claude API."*

- **Enterprise vs Free tier** — paid plans (ChatGPT Enterprise, Claude Team, Copilot for Microsoft 365) don't train on your data and offer stronger security. Free plans usually do.
  *Example: Don't paste client data into the free version of any AI tool.*

- **Open source vs Closed** — open models (Llama, Mistral, DeepSeek) you can download and run yourself. Closed models (GPT, Claude, Gemini) you rent through the company's app.
  *Example: Banks and healthcare companies sometimes run open models on their own servers to keep data in-house.*

---

## What's next

This playbook is a starter. If you want to go further, Clarity AI runs three short courses that pick up exactly where this leaves off.

- **Prompt Engineering Masterclass** *(4 hours, £150 per seat)* — Build a personal library of prompts that work the first time, every time. The natural next step after this playbook.
- **AI for Product Managers** *(6 hours, £350 per seat)* — A working method for using AI across the product lifecycle.
- **AI Workflow Automation** *(6 hours, £300 per seat)* — Where AI meets your other tools. Build real automations that save hours every week.

All three are also available as private team sessions — £5,000 to £8,000 for a half-day with up to 25 people.

[Book a 30-minute chat](/contact) to figure out which one fits.

---

*Clarity AI — AI strategy for people who'd rather get on with their work.*

✦ PromptGenius Pro — AI Writing Suite

The ultimate Chrome Extension for AI power users. Supercharge your prompts on ChatGPT, Claude, Gemini, DeepSeek & Google — with 15+ frameworks, translation in 60+ languages, and 8 AI writing tools built right in.

Show Image
Show Image
Show Image
Show Image

🚀 What is PromptGenius Pro?
Most people using AI tools are leaving 80% of the value untapped — not because the AI is bad, but because weak prompts give weak results.
PromptGenius Pro fixes that. It sits quietly in your browser and gives you a full AI writing arsenal right where you need it — inside your favorite AI chat interface.
No login. No API key. No subscription. Just install and go.

✨ Features
🎯 15+ Prompt Frameworks
Auto-detect the best framework for your prompt, or choose manually:
FrameworkBest ForRTF — Role, Task, FormatGeneral tasksRACE — Role, Action, Context, ExpectationProfessional tasksCRISPEComplex technical tasksTAG — Task, Action, GoalQuick focused requestsCARE — Context, Action, Result, ExampleProblem solvingCOAST — Context, Objective, Actions, Scenario, TaskCreative writingAIDA — Attention, Interest, Desire, ActionMarketing & persuasionBAB — Before, After, BridgeTransformation contentPAS — Problem, Agitate, SolutionPersuasive contentSCQA — Situation, Complication, Question, AnswerReports & analysisReAct — Reason + ActStep-by-step reasoningChain of Thought (CoT)Complex reasoningTree of Thought (ToT)Multi-path explorationZero-Shot PromptingDirect instructionsFew-Shot PromptingPattern-based tasks
🌐 Translate in 60+ Languages
Translate any text instantly — right inside ChatGPT, Claude, or Gemini. Supports Urdu, Arabic, Hindi, Chinese, French, Spanish, and 55+ more.
✍️ AI Writing Tools

Paraphrase — Rewrite in Standard, Formal, Casual, or Creative style
Grammar Fix — Fix errors and clean up your writing
Summarize — Get Bullet Points, Executive Summary, or ELI5
Tone Convert — Switch between Professional, Friendly, Assertive & more
Text Expand — Elaborate any idea into full, detailed content

📋 8 Quick Templates
Ready-made prompt templates for the most common tasks:

Professional Email
Blog Post Outline
Code Review Request
Data Analysis
Essay Structure
Product Description
LinkedIn Post
Research Summary

📊 More Tools

Word Counter — Live word & character count
Prompt History — Never lose a great prompt again
Framework Search — Find the right framework instantly


🖥️ Supported Platforms
PlatformStatusChatGPT (chatgpt.com)✅ Full supportClaude (claude.ai)✅ Full supportGemini (gemini.google.com)✅ Full supportDeepSeek (chat.deepseek.com)✅ Full supportGoogle Search✅ Full support

📦 Installation
From Chrome Web Store (Coming Soon)

🔗 Chrome Web Store link will be added here

Manual Installation (Developer Mode)

Download or clone this repository
Open Chrome and go to chrome://extensions/
Enable Developer Mode (toggle in top-right)
Click "Load unpacked"
Select the pg_pro_v6 folder
The extension icon will appear in your toolbar ✅


📁 Project Structure
pg_pro_v6/
├── manifest.json          # Extension config (Manifest V3)
├── content.js             # Floating button + framework injection
├── style.css              # Content script styles
├── popup/
│   ├── popup.html         # Extension popup UI
│   ├── popup.js           # All popup logic (frameworks, translate, AI tools)
│   └── popup.css          # Popup styles
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png

🔒 Permissions
PermissionWhy It's NeededactiveTabRead & inject content into the active AI chat tabscriptingInject the floating button and framework selectorstorageSave prompt history and user preferences locally

No data is sent to any server. Everything runs locally in your browser.


🛠️ Tech Stack

Manifest V3 — Latest Chrome Extension standard
Vanilla JavaScript — No frameworks, fast and lightweight
Google Translate API — For the translation feature
Chrome Storage API — For local prompt history


🗺️ Roadmap

 Chrome Web Store publish
 Firefox support
 Custom framework builder
 Export prompt history to CSV
 Dark mode popup UI
 Keyboard shortcuts


🤝 Contributing
Contributions, issues, and feature requests are welcome!

Fork the repo
Create your feature branch: git checkout -b feature/amazing-feature
Commit your changes: git commit -m 'Add amazing feature'
Push to the branch: git push origin feature/amazing-feature
Open a Pull Request


📬 Contact
Built with ❤️ — feel free to reach out on LinkedIn [https://www.linkedin.com/in/areeba-khan-8a5a51321?utm_source=share_via&utm_content=profile&utm_medium=member_ios] or open an issue.

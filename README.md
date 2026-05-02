# ✦ PromptGenius Pro — AI Writing Suite

<div align="center">

![Version](https://img.shields.io/badge/version-6.0-blue.svg)
![Chrome](https://img.shields.io/badge/Chrome-Extension-yellow.svg)

**The ultimate Chrome Extension for AI power users.**

Supercharge your prompts on ChatGPT, Claude, Gemini, DeepSeek & Google Search with 15+ frameworks, translation in 60+ languages, and 8 AI writing tools built right in.

[Installation](#-installation) • [Features](#-features) • [Supported Platforms](#️-supported-platforms) • [Contributing](#-contributing)

</div>

---

## 🚀 What is PromptGenius Pro?

Most people using AI tools are leaving **80% of the value untapped** — not because the AI is bad, but because **weak prompts give weak results**.

**PromptGenius Pro fixes that.** It sits quietly in your browser and gives you a full AI writing arsenal right where you need it — inside your favorite AI chat interface.

✅ **No login**  
✅ **No API key**  
✅ **No subscription**  

Just install and go.

---

## ✨ Features

### 🎯 15+ Prompt Frameworks

Auto-detect the best framework for your prompt, or choose manually:

| Framework | Best For |
|-----------|----------|
| **RTF** — Role, Task, Format | General tasks |
| **RACE** — Role, Action, Context, Expectation | Professional tasks |
| **CRISPE** | Complex technical tasks |
| **TAG** — Task, Action, Goal | Quick focused requests |
| **CARE** — Context, Action, Result, Example | Problem solving |
| **COAST** — Context, Objective, Actions, Scenario, Task | Creative writing |
| **AIDA** — Attention, Interest, Desire, Action | Marketing & persuasion |
| **BAB** — Before, After, Bridge | Transformation content |
| **PAS** — Problem, Agitate, Solution | Persuasive content |
| **SCQA** — Situation, Complication, Question, Answer | Reports & analysis |
| **ReAct** — Reason + Act | Step-by-step reasoning |
| **Chain of Thought (CoT)** | Complex reasoning |
| **Tree of Thought (ToT)** | Multi-path exploration |
| **Zero-Shot Prompting** | Direct instructions |
| **Few-Shot Prompting** | Pattern-based tasks |

---

### 🌐 Translate in 60+ Languages

Translate any text instantly — right inside ChatGPT, Claude, or Gemini.

**Supports:** Urdu, Arabic, Hindi, Chinese, French, Spanish, German, Japanese, Korean, Russian, and 50+ more languages.

---

### ✍️ AI Writing Tools

| Tool | Description |
|------|-------------|
| **Paraphrase** | Rewrite in Standard, Formal, Casual, or Creative style |
| **Grammar Fix** | Fix errors and clean up your writing |
| **Summarize** | Get Bullet Points, Executive Summary, or ELI5 |
| **Tone Convert** | Switch between Professional, Friendly, Assertive & more |
| **Text Expand** | Elaborate any idea into full, detailed content |

---

### 📋 8 Quick Templates

Ready-made prompt templates for the most common tasks:

- ✉️ Professional Email
- 📝 Blog Post Outline
- 💻 Code Review Request
- 📊 Data Analysis
- 📚 Essay Structure
- 🛍️ Product Description
- 💼 LinkedIn Post
- 🔬 Research Summary

---

### 📊 More Tools

- **📏 Word Counter** — Live word & character count
- **🕒 Prompt History** — Never lose a great prompt again
- **🔍 Framework Search** — Find the right framework instantly

---

## 🖥️ Supported Platforms

| Platform | Status |
|----------|--------|
| ChatGPT ([chatgpt.com](https://chatgpt.com)) | ✅ Full support |
| Claude ([claude.ai](https://claude.ai)) | ✅ Full support |
| Gemini ([gemini.google.com](https://gemini.google.com)) | ✅ Full support |
| DeepSeek ([chat.deepseek.com](https://chat.deepseek.com)) | ✅ Full support |
| Google Search | ✅ Full support |

---

## 📦 Installation

### Manual Installation (Developer Mode)

1. **Download or clone this repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/promptgenius-pro.git
   ```

2. **Open Chrome** and go to `chrome://extensions/`

3. **Enable Developer Mode** (toggle in top-right corner)

4. **Click "Load unpacked"**

5. **Select the `pg_pro_v6` folder**

6. **Done!** The extension icon will appear in your toolbar ✅

---

## 📁 Project Structure

```
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
```

---

## 🔒 Permissions

| Permission | Why It's Needed |
|------------|-----------------|
| `activeTab` | Read & inject content into the active AI chat tab |
| `scripting` | Inject the floating button and framework selectors |
| `storage` | Save prompt history and user preferences locally |

**🔐 Privacy First:** No data is sent to any server. Everything runs locally in your browser.

---

## 🛠️ Tech Stack

- **Manifest V3** — Latest Chrome Extension standard
- **Vanilla JavaScript** — No frameworks, fast and lightweight
- **Google Translate API** — For the translation feature
- **Chrome Storage API** — For local prompt history

---

## 🗺️ Roadmap

- [ ] Chrome Web Store publish
- [ ] Firefox support
- [ ] Custom framework builder
- [ ] Export prompt history to CSV
- [ ] Dark mode popup UI
- [ ] Keyboard shortcuts

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork the repo**
2. **Create your feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit your changes:** `git commit -m 'Add amazing feature'`
4. **Push to the branch:** `git push origin feature/amazing-feature`
5. **Open a Pull Request**

---

## 📬 Contact

Built with ❤️ by **Areeba Khan**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/areeba-khan-8a5a51321)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:areebanadeem674@gmail.com)

---

<div align="center">

### ⭐ If you find this useful, please give it a star!

**Made with 💜 for AI enthusiasts worldwide**

</div>

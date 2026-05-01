// PromptGenius Pro v4.0 — AI Writing Suite
// Frameworks + Translate + Paraphrase + Grammar + Summarize + Tone + Expand
// NEW: Word Counter + Prompt History + Quick Templates + DeepSeek Support

// ── DATA ─────────────────────────────────────────────────────────
const LANGS=[
  {c:"ur",n:"Urdu",v:"اردو"},{c:"en",n:"English",v:"English"},{c:"ar",n:"Arabic",v:"العربية"},
  {c:"zh",n:"Chinese",v:"中文"},{c:"fr",n:"French",v:"Français"},{c:"de",n:"German",v:"Deutsch"},
  {c:"es",n:"Spanish",v:"Español"},{c:"hi",n:"Hindi",v:"हिन्दी"},{c:"ja",n:"Japanese",v:"日本語"},
  {c:"ko",n:"Korean",v:"한국어"},{c:"pt",n:"Portuguese",v:"Português"},{c:"ru",n:"Russian",v:"Русский"},
  {c:"tr",n:"Turkish",v:"Türkçe"},{c:"it",n:"Italian",v:"Italiano"},{c:"nl",n:"Dutch",v:"Nederlands"},
  {c:"pl",n:"Polish",v:"Polski"},{c:"sv",n:"Swedish",v:"Svenska"},{c:"id",n:"Indonesian",v:"Indonesia"},
  {c:"ms",n:"Malay",v:"Melayu"},{c:"th",n:"Thai",v:"ภาษาไทย"},{c:"vi",n:"Vietnamese",v:"Tiếng Việt"},
  {c:"bn",n:"Bengali",v:"বাংলা"},{c:"fa",n:"Persian",v:"فارسی"},{c:"he",n:"Hebrew",v:"עברית"},
  {c:"ro",n:"Romanian",v:"Română"},{c:"hu",n:"Hungarian",v:"Magyar"},{c:"cs",n:"Czech",v:"Čeština"},
  {c:"el",n:"Greek",v:"Ελληνικά"},{c:"uk",n:"Ukrainian",v:"Українська"},{c:"sw",n:"Swahili",v:"Kiswahili"},
  {c:"bg",n:"Bulgarian",v:"Български"},{c:"hr",n:"Croatian",v:"Hrvatski"},{c:"sk",n:"Slovak",v:"Slovenčina"},
  {c:"da",n:"Danish",v:"Dansk"},{c:"fi",n:"Finnish",v:"Suomi"},{c:"no",n:"Norwegian",v:"Norsk"},
  {c:"gu",n:"Gujarati",v:"ગુજરાતી"},{c:"pa",n:"Punjabi",v:"ਪੰਜਾਬੀ"},{c:"ta",n:"Tamil",v:"தமிழ்"},
  {c:"te",n:"Telugu",v:"తెలుగు"},{c:"tl",n:"Filipino",v:"Filipino"},{c:"ka",n:"Georgian",v:"ქართული"},
  {c:"am",n:"Amharic",v:"አማርኛ"},{c:"af",n:"Afrikaans",v:"Afrikaans"},{c:"sq",n:"Albanian",v:"Shqip"},
  {c:"hy",n:"Armenian",v:"Հայերեն"},{c:"az",n:"Azerbaijani",v:"Azərbaycan"},{c:"cy",n:"Welsh",v:"Cymraeg"},
  {c:"uz",n:"Uzbek",v:"Oʻzbek"},{c:"kk",n:"Kazakh",v:"Қазақша"},{c:"si",n:"Sinhala",v:"සිංහල"},
  {c:"so",n:"Somali",v:"Soomaali"},{c:"ml",n:"Malayalam",v:"മലയാളം"},{c:"be",n:"Belarusian",v:"Беларуская"},
  {c:"et",n:"Estonian",v:"Eesti"},{c:"lv",n:"Latvian",v:"Latviešu"},{c:"lt",n:"Lithuanian",v:"Lietuvių"},
  {c:"ca",n:"Catalan",v:"Català"},{c:"gl",n:"Galician",v:"Galego"},{c:"sl",n:"Slovenian",v:"Slovenščina"}
];

const FWS=[
  {k:"RTF",i:"🎯",c:"#7F77DD",n:"RTF — Role, Task, Format",d:"General tasks",b:p=>`Role: Act as an expert.\n\nTask: ${p}\n\nFormat: Clear structured response with examples.`},
  {k:"RACE",i:"🏁",c:"#1D9E75",n:"RACE — Role, Action, Context, Expectation",d:"Professional tasks",b:p=>`Role: Highly skilled expert.\n\nAction: ${p}\n\nContext: All relevant constraints.\n\nExpectation: Thorough actionable response.`},
  {k:"CRISPE",i:"⚡",c:"#D85A30",n:"CRISPE",d:"Complex technical tasks",b:p=>`Capacity: Deep domain expert.\nRole: Professional consultant.\nInsight: ${p}\nSteps: Clear logical breakdown.\nPersonality: Precise and professional.\nExample: One practical example.`},
  {k:"TAG",i:"🏷️",c:"#BA7517",n:"TAG — Task, Action, Goal",d:"Quick focused requests",b:p=>`Task: ${p}\n\nAction: Complete fully and accurately.\n\nGoal: Clear useful applicable result.`},
  {k:"CARE",i:"💡",c:"#D4537E",n:"CARE — Context, Action, Result, Example",d:"Problem solving",b:p=>`Context: ${p}\n\nAction: Best approach.\n\nResult: Ideal outcome.\n\nExample: Real-world example.`},
  {k:"COAST",i:"🌊",c:"#0F6E56",n:"COAST — Context, Objective, Actions, Scenario, Task",d:"Creative writing",b:p=>`Context: Background.\nObjective: ${p}\nActions: Specific elements.\nScenario: Vivid and engaging.\nTask: Compelling output.`},
  {k:"AIDA",i:"📣",c:"#993556",n:"AIDA — Attention, Interest, Desire, Action",d:"Marketing & persuasion",b:p=>`Attention: Powerful hook.\n\nInterest: ${p}\n\nDesire: Unique value.\n\nAction: Call-to-action.`},
  {k:"BAB",i:"🔄",c:"#639922",n:"BAB — Before, After, Bridge",d:"Transformation content",b:p=>`Before: Current situation — ${p}\n\nAfter: Ideal outcome.\n\nBridge: Steps to get there.`},
  {k:"PAS",i:"🔥",c:"#E24B4A",n:"PAS — Problem, Agitate, Solution",d:"Persuasive content",b:p=>`Problem: ${p}\n\nAgitate: Pain of not solving.\n\nSolution: Clear actionable fix.`},
  {k:"SCQA",i:"❓",c:"#534AB7",n:"SCQA — Situation, Complication, Question, Answer",d:"Reports & analysis",b:p=>`Situation: ${p}\nComplication: Key challenge.\nQuestion: Main question.\nAnswer: Structured response.`},
  {k:"REACT",i:"🤔",c:"#185FA5",n:"ReAct — Reason + Act",d:"Step-by-step reasoning",b:p=>`Think step by step.\nQuestion: ${p}\nReasoning: Work through logically...\nAction: Final answer and next steps.`},
  {k:"COT",i:"🧠",c:"#3B6D11",n:"Chain of Thought (CoT)",d:"Complex reasoning",b:p=>`Step by step:\nProblem: ${p}\nStep 1: What we know\nStep 2: Break it down\nStep 3: Work through\nStep 4: Connect\nStep 5: Verify\nTherefore:`},
  {k:"TOT",i:"🌳",c:"#085041",n:"Tree of Thought (ToT)",d:"Multi-path exploration",b:p=>`Paths for: ${p}\n\nPath A:\n→ Pros:\n→ Cons:\n→ Outcome:\n\nPath B:\n→ Pros:\n→ Cons:\n→ Outcome:\n\nPath C:\n→ Pros:\n→ Cons:\n→ Outcome:\n\nBest:`},
  {k:"ZERO",i:"🎲",c:"#712B13",n:"Zero-Shot Prompting",d:"Direct instructions",b:p=>`${p}\n\nProvide a direct accurate complete response.`},
  {k:"FEW",i:"📚",c:"#4A1B0C",n:"Few-Shot Prompting",d:"Pattern-based tasks",b:p=>`Example 1:\nInput: [sample]\nOutput: [sample]\n\nExample 2:\nInput: [sample]\nOutput: [sample]\n\nNow:\nInput: ${p}\nOutput:`}
];

// ── QUICK TEMPLATES ────────────────────────────────────────────────
const TEMPLATES = [
  {
    i:"📧", c:"#1D9E75",
    name:"Professional Email",
    desc:"Write a formal email for any purpose",
    prompt:"Write a professional email to [recipient] about [topic]. The tone should be formal and polite. Include a clear subject line, proper greeting, main body with key points, and a professional closing. Purpose: [your goal]"
  },
  {
    i:"📝", c:"#7F77DD",
    name:"Blog Post Outline",
    desc:"Generate a structured blog outline",
    prompt:"Create a detailed blog post outline for the topic: [your topic]\n\nInclude:\n- Catchy title (3 options)\n- Introduction hook\n- 5-7 main sections with subpoints\n- Conclusion with call-to-action\n- SEO keywords to target\n\nTarget audience: [your audience]"
  },
  {
    i:"💻", c:"#D85A30",
    name:"Code Review Request",
    desc:"Ask AI to review your code",
    prompt:"Please review the following code:\n\n[paste your code here]\n\nPlease analyze:\n1. Code quality and best practices\n2. Potential bugs or errors\n3. Performance improvements\n4. Security concerns\n5. Readability and maintainability\n\nLanguage/Framework: [specify]"
  },
  {
    i:"📊", c:"#BA7517",
    name:"Data Analysis",
    desc:"Analyze data or findings",
    prompt:"Analyze the following data/information:\n\n[paste your data here]\n\nProvide:\n1. Key findings and patterns\n2. Statistical insights\n3. Anomalies or outliers\n4. Actionable recommendations\n5. Visualization suggestions\n\nContext: [explain what this data is about]"
  },
  {
    i:"🎓", c:"#534AB7",
    name:"Essay Structure",
    desc:"Get a structured academic essay plan",
    prompt:"Help me write an essay on: [your topic]\n\nEssay requirements:\n- Length: [word count]\n- Academic level: [level]\n- Citation style: [APA/MLA/Chicago]\n\nProvide:\n1. Thesis statement\n2. Introduction paragraph\n3. Body paragraphs (3-5) with topic sentences\n4. Supporting evidence for each paragraph\n5. Conclusion structure"
  },
  {
    i:"🚀", c:"#993556",
    name:"Product Description",
    desc:"Write compelling product copy",
    prompt:"Write a compelling product description for:\n\nProduct name: [name]\nProduct type: [category]\nKey features: [list features]\nTarget customer: [describe]\nPrice point: [price]\n\nInclude: headline, main description (150 words), bullet point features, and a call-to-action."
  },
  {
    i:"🤝", c:"#185FA5",
    name:"LinkedIn Post",
    desc:"Create an engaging LinkedIn post",
    prompt:"Write a professional LinkedIn post about: [your topic/achievement]\n\nTone: Professional yet personable\nLength: 150-200 words\nInclude:\n- Engaging opening line (hook)\n- Main insight or story\n- 3 key takeaways\n- Question to drive engagement\n- 3-5 relevant hashtags\n\nMy industry/role: [specify]"
  },
  {
    i:"🔍", c:"#3B6D11",
    name:"Research Summary",
    desc:"Summarize a topic comprehensively",
    prompt:"Provide a comprehensive research summary on: [your topic]\n\nInclude:\n1. Overview and background\n2. Current state of knowledge\n3. Key debates or controversies\n4. Recent developments (2023-2024)\n5. Practical applications\n6. Future outlook\n7. Key sources to explore\n\nAudience level: [beginner/intermediate/expert]"
  }
];

// ── AI TOOL PROMPTS ───────────────────────────────────────────────
function getAIPrompt(tool, option, text) {
  switch(tool) {
    case 'para':
      const styleMap = {
        simple: 'Rewrite the following text in simple, easy-to-understand language. Use short sentences and common words.',
        professional: 'Rewrite the following text in a highly professional and polished style suitable for a business context.',
        short: 'Rewrite the following text as concisely as possible. Keep only the key points. Make it very short.',
        creative: 'Rewrite the following text in a creative, engaging and interesting style. Make it more vivid and compelling.'
      };
      return `${styleMap[option] || styleMap.simple}\n\nText:\n${text}\n\nProvide only the rewritten text, nothing else.`;

    case 'gram':
      return `Fix all grammar mistakes, spelling errors, and improve sentence structure in the following text. Make it flow naturally. Return only the corrected text, nothing else.\n\nText:\n${text}`;

    case 'summ':
      return `Summarize the following text into clear, concise bullet points (maximum 5-7 points). Each bullet should capture a key idea. Start each point with "•".\n\nText:\n${text}\n\nProvide only the bullet point summary, nothing else.`;

    case 'tone':
      const toneMap = {
        formal: 'Convert the following text to a formal, academic tone. Use proper vocabulary and structured sentences.',
        friendly: 'Convert the following text to a warm, friendly and conversational tone. Make it feel personal and approachable.',
        professional: 'Convert the following text to a professional business tone. Make it concise, clear and authoritative.',
        marketing: 'Convert the following text to an exciting marketing tone. Make it persuasive, energetic and compelling. Use power words.'
      };
      return `${toneMap[option] || toneMap.formal}\n\nText:\n${text}\n\nProvide only the converted text, nothing else.`;

    case 'exp':
      return `Take the following short idea or text and expand it into a detailed, well-written paragraph or content piece. Add relevant details, examples, and context to make it comprehensive.\n\nShort idea:\n${text}\n\nProvide only the expanded text, nothing else.`;

    default:
      return text;
  }
}

// ── GEMINI API CALL ───────────────────────────────────────────────
async function callGemini(prompt, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 1024, temperature: 0.7 }
    })
  });
  if (!res.ok) throw new Error('API error: ' + res.status);
  const data = await res.json();
  return data.candidates[0].content.parts[0].text;
}

// ── HISTORY HELPERS ────────────────────────────────────────────────
async function loadHistory() {
  const r = await chrome.storage.local.get('prompt_history');
  return r.prompt_history || [];
}

async function saveHistory(hist) {
  await chrome.storage.local.set({ prompt_history: hist });
}

async function addToHistory(fwKey, fwIcon, promptText) {
  const hist = await loadHistory();
  hist.unshift({
    fw: fwKey,
    icon: fwIcon,
    text: promptText.slice(0, 200),
    time: new Date().toLocaleString()
  });
  if (hist.length > 10) hist.splice(10);
  await saveHistory(hist);
}

// ── WORD COUNT HELPERS ────────────────────────────────────────────
function calcStats(text) {
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g,'').length;
  const sentences = text.trim() === '' ? 0 : (text.match(/[.!?]+/g)||[]).length || (text.trim() ? 1 : 0);
  const paras = text.trim() === '' ? 0 : text.split(/\n\s*\n/).filter(p=>p.trim()).length || (text.trim() ? 1 : 0);
  const readSec = Math.ceil(words / 200);
  const readTime = readSec < 60 ? `${readSec}m` : `${Math.floor(readSec/60)}h ${readSec%60}m`;
  return { words, chars, charsNoSpace, sentences, paras, readTime };
}

// ── STATE ─────────────────────────────────────────────────────────
let selLang = null;
let selTool = 'para';
let selParaOpt = 'simple';
let selToneOpt = 'formal';
let savedApiKey = '';

// ── INIT ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  const stored = await chrome.storage.local.get('gemini_key');
  if (stored.gemini_key) {
    savedApiKey = stored.gemini_key;
    document.getElementById('api-key-section').style.display = 'none';
  }

  renderFws(FWS);
  renderLangs(LANGS);
  renderTemplates();
  bindAll();
});

// ── TABS ─────────────────────────────────────────────────────────
function showTab(i) {
  [0,1,2,3].forEach(j => {
    document.getElementById('tab'+j).style.display = j===i ? 'block' : 'none';
    document.getElementById('t'+j).className = 'tab' + (j===i ? ' on' : '');
  });
}

function showSubTab(i) {
  [0,1,2].forEach(j => {
    document.getElementById('stab'+j).style.display = j===i ? 'block' : 'none';
    document.getElementById('st'+j).className = 'subtab' + (j===i ? ' on' : '');
  });
  if (i === 1) renderHistory();
}

// ── TOAST ─────────────────────────────────────────────────────────
function toast(msg, color) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.style.background = color || '#1D9E75';
  el.classList.add('on');
  setTimeout(() => el.classList.remove('on'), 2200);
}

// ── FRAMEWORKS ────────────────────────────────────────────────────
function renderFws(list) {
  const c = document.getElementById('fw-list');
  c.innerHTML = '';
  list.forEach(fw => {
    const d = document.createElement('div');
    d.className = 'fw-card';
    d.style.borderLeftColor = fw.c;
    d.innerHTML = `<div class="fw-row"><span class="fw-icon">${fw.i}</span><div><div class="fw-name">${fw.n}</div><div class="fw-desc">${fw.d}</div></div></div>`;
    d.addEventListener('click', () => {
      document.querySelectorAll('.fw-card').forEach(x => { x.classList.remove('sel'); x.style.background=''; });
      d.classList.add('sel'); d.style.background = fw.c+'22';
      document.getElementById('fw-out').textContent = fw.b('[Your prompt here — replace this with your actual prompt]');
      document.getElementById('fw-prev').style.display = 'block';
    });
    c.appendChild(d);
  });
}

// ── LANGUAGES ────────────────────────────────────────────────────
function renderLangs(list) {
  const g = document.getElementById('lang-grid');
  g.innerHTML = '';
  list.forEach(l => {
    const b = document.createElement('div');
    b.className = 'lang-btn' + (selLang===l.c ? ' sel' : '');
    b.innerHTML = `<span class="lang-native">${l.v}</span><span class="lang-en">${l.n}</span>`;
    b.addEventListener('click', () => {
      selLang = l.c;
      document.querySelectorAll('.lang-btn').forEach(x => x.classList.remove('sel'));
      b.classList.add('sel');
      toast('✓ ' + l.n + ' selected!');
    });
    g.appendChild(b);
  });
}

// ── TEMPLATES ────────────────────────────────────────────────────
function renderTemplates() {
  const c = document.getElementById('tpl-list');
  c.innerHTML = '';
  TEMPLATES.forEach((tpl, idx) => {
    const wrap = document.createElement('div');
    const card = document.createElement('div');
    card.className = 'tpl-card';
    card.style.borderLeftColor = tpl.c;
    card.innerHTML = `<div class="tpl-name">${tpl.i} ${tpl.name}</div><div class="tpl-desc">${tpl.desc}</div>`;

    const preview = document.createElement('div');
    preview.className = 'tpl-preview';
    preview.id = 'tpl-prev-'+idx;
    preview.innerHTML = `
      <div class="rlabel">Template:</div>
      <div class="rtext" style="max-height:90px">${tpl.prompt}</div>
      <button class="btn-purple" id="tpl-copy-${idx}" style="margin-bottom:6px">📋 Copy Template</button>
    `;

    card.addEventListener('click', () => {
      const isOpen = preview.style.display === 'block';
      document.querySelectorAll('.tpl-preview').forEach(p => p.style.display='none');
      document.querySelectorAll('.tpl-card').forEach(c => { c.classList.remove('sel'); });
      if (!isOpen) {
        preview.style.display = 'block';
        card.classList.add('sel');
      }
    });

    wrap.appendChild(card);
    wrap.appendChild(preview);
    c.appendChild(wrap);

    // Bind copy after DOM insertion
    setTimeout(() => {
      const copyBtn = document.getElementById('tpl-copy-'+idx);
      if (copyBtn) {
        copyBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          navigator.clipboard.writeText(tpl.prompt).then(() => toast('Template copied! 📋'));
        });
      }
    }, 100);
  });
}

// ── HISTORY ───────────────────────────────────────────────────────
async function renderHistory() {
  const hist = await loadHistory();
  const c = document.getElementById('hist-list');
  c.innerHTML = '';
  if (!hist.length) {
    c.innerHTML = '<div class="empty-msg">No history yet. Apply a framework to a prompt first!</div>';
    return;
  }
  hist.forEach(h => {
    const d = document.createElement('div');
    d.className = 'hist-item';
    d.innerHTML = `
      <div class="hist-fw">${h.icon || ''} ${h.fw}</div>
      <div class="hist-text">${h.text}</div>
      <div class="hist-time">${h.time}</div>
    `;
    d.addEventListener('click', () => {
      navigator.clipboard.writeText(h.text).then(() => toast('Copied from history! 📋'));
    });
    c.appendChild(d);
  });
}

// ── BIND ALL EVENTS ───────────────────────────────────────────────
function bindAll() {
  // Main Tab buttons
  document.getElementById('t0').addEventListener('click', () => showTab(0));
  document.getElementById('t1').addEventListener('click', () => showTab(1));
  document.getElementById('t2').addEventListener('click', () => showTab(2));
  document.getElementById('t3').addEventListener('click', () => showTab(3));

  // Sub-tab buttons
  document.getElementById('st0').addEventListener('click', () => showSubTab(0));
  document.getElementById('st1').addEventListener('click', () => showSubTab(1));
  document.getElementById('st2').addEventListener('click', () => showSubTab(2));

  // Framework search
  document.getElementById('fw-search').addEventListener('input', function() {
    const q = this.value.toLowerCase();
    renderFws(q ? FWS.filter(f => f.n.toLowerCase().includes(q) || f.k.toLowerCase().includes(q)) : FWS);
  });

  // Framework copy — also saves to history
  document.getElementById('fw-copy').addEventListener('click', async () => {
    const text = document.getElementById('fw-out').textContent;
    navigator.clipboard.writeText(text).then(() => toast('Copied! 📋'));
    // Find selected framework
    const selCard = document.querySelector('.fw-card.sel');
    if (selCard) {
      const fwName = selCard.querySelector('.fw-name').textContent;
      const fwIcon = selCard.querySelector('.fw-icon').textContent;
      await addToHistory(fwName, fwIcon, text);
    }
  });

  // Lang search
  document.getElementById('lang-search').addEventListener('input', function() {
    const q = this.value.toLowerCase();
    renderLangs(q ? LANGS.filter(l => l.n.toLowerCase().includes(q) || l.v.includes(q) || l.c.includes(q)) : LANGS);
  });

  // Translate btn
  document.getElementById('tr-btn').addEventListener('click', async () => {
    const text = document.getElementById('tr-in').value.trim();
    if (!text) { toast('Please enter some text first!', '#E24B4A'); return; }
    if (!selLang) { toast('Please select a language!', '#E24B4A'); return; }
    const btn = document.getElementById('tr-btn');
    btn.disabled = true; btn.textContent = '⏳ Translating...';
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${selLang}&dt=t&q=${encodeURIComponent(text)}`;
      const res = await fetch(url);
      const data = await res.json();
      const out = data[0].map(x => (x&&x[0])?x[0]:'').join('');
      document.getElementById('tr-out').textContent = out;
      document.getElementById('tr-result').style.display = 'block';
      toast('Translation ready! 🌐');
    } catch(e) {
      toast('Translation failed. Please try again.', '#E24B4A');
    }
    btn.disabled = false; btn.textContent = '🌐 Translate';
  });

  // Translate copy
  document.getElementById('tr-copy').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('tr-out').textContent).then(() => toast('Copied! 📋'));
  });

  // Tool buttons
  ['para','gram','summ','tone','exp'].forEach(tool => {
    document.getElementById('tool-'+tool).addEventListener('click', () => {
      selTool = tool;
      document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('on'));
      document.getElementById('tool-'+tool).classList.add('on');
      document.getElementById('opts-para').style.display = tool==='para' ? 'block' : 'none';
      document.getElementById('opts-tone').style.display = tool==='tone' ? 'block' : 'none';
      const labels = {
        para:'Text to paraphrase:',gram:'Text to fix:',summ:'Text to summarize:',
        tone:'Text to convert:',exp:'Short idea to expand:'
      };
      const resultLabels = {
        para:'Paraphrased Result:',gram:'Fixed Text:',summ:'Summary:',
        tone:'Converted Text:',exp:'Expanded Content:'
      };
      document.getElementById('ai-input-label').textContent = labels[tool];
      document.getElementById('ai-result-label').textContent = resultLabels[tool];
      document.getElementById('ai-result').style.display = 'none';
      document.getElementById('ai-in').value = '';
      document.getElementById('ai-in').placeholder = tool==='exp' ? 'Enter a short idea... AI will expand it' : 'Enter your text here...';
    });
  });

  // Paraphrase option buttons
  document.querySelectorAll('#opts-para .opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#opts-para .opt-btn').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      selParaOpt = btn.dataset.val;
    });
  });

  // Tone option buttons
  document.querySelectorAll('#opts-tone .opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#opts-tone .opt-btn').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      selToneOpt = btn.dataset.val;
    });
  });

  // Save API key
  document.getElementById('save-key').addEventListener('click', async () => {
    const key = document.getElementById('api-key-input').value.trim();
    if (!key || !key.startsWith('AI')) { toast('Please enter a valid API key (AIza...)', '#E24B4A'); return; }
    await chrome.storage.local.set({ gemini_key: key });
    savedApiKey = key;
    document.getElementById('api-key-section').style.display = 'none';
    toast('API Key saved! ✓');
  });

  // Run AI button
  document.getElementById('ai-run').addEventListener('click', async () => {
    const text = document.getElementById('ai-in').value.trim();
    if (!text) { toast('Please enter some text first!', '#E24B4A'); return; }

    if (!savedApiKey) {
      document.getElementById('api-key-section').style.display = 'block';
      toast('Please save your API key first!', '#E24B4A');
      return;
    }

    const option = selTool === 'para' ? selParaOpt : selToneOpt;
    const prompt = getAIPrompt(selTool, option, text);

    const btn = document.getElementById('ai-run');
    btn.disabled = true; btn.textContent = '⏳ AI thinking...';
    document.getElementById('ai-result').style.display = 'none';

    try {
      const result = await callGemini(prompt, savedApiKey);
      document.getElementById('ai-out').textContent = result;
      document.getElementById('ai-result').style.display = 'block';
      toast('Done! ✓');
    } catch(e) {
      toast('Error: ' + e.message, '#E24B4A');
    }
    btn.disabled = false; btn.textContent = '⚡ Run AI';
  });

  // AI copy
  document.getElementById('ai-copy').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('ai-out').textContent).then(() => toast('Copied! 📋'));
  });

  // ── WORD COUNTER ──────────────────────────────────────────────
  document.getElementById('wc-in').addEventListener('input', function() {
    const s = calcStats(this.value);
    document.getElementById('wc-words').textContent = s.words;
    document.getElementById('wc-chars').textContent = s.chars;
    document.getElementById('wc-chars-nsp').textContent = s.charsNoSpace;
    document.getElementById('wc-sents').textContent = s.sentences;
    document.getElementById('wc-paras').textContent = s.paras;
    document.getElementById('wc-read').textContent = s.readTime;
  });

  document.getElementById('wc-clear').addEventListener('click', () => {
    document.getElementById('wc-in').value = '';
    ['wc-words','wc-chars','wc-chars-nsp','wc-sents','wc-paras'].forEach(id => document.getElementById(id).textContent = '0');
    document.getElementById('wc-read').textContent = '0m';
  });

  // ── HISTORY CLEAR ─────────────────────────────────────────────
  document.getElementById('hist-clear').addEventListener('click', async () => {
    await saveHistory([]);
    renderHistory();
    toast('History cleared!');
  });
}

// PromptGenius Pro v4.0 — Content Script
// Floating button on ChatGPT, Claude, Gemini, DeepSeek, Google

const FRAMEWORKS = [
  {k:"RTF",i:"🎯",c:"#7F77DD",n:"RTF",d:"General tasks",b:p=>`Role: Act as an expert.\n\nTask: ${p}\n\nFormat: Clear structured response with examples.`},
  {k:"RACE",i:"🏁",c:"#1D9E75",n:"RACE",d:"Professional",b:p=>`Role: Highly skilled expert.\n\nAction: ${p}\n\nContext: All constraints.\n\nExpectation: Thorough response.`},
  {k:"CRISPE",i:"⚡",c:"#D85A30",n:"CRISPE",d:"Technical",b:p=>`Capacity: Expert.\nRole: Consultant.\nInsight: ${p}\nSteps: Logical breakdown.\nPersonality: Professional.\nExample: Practical example.`},
  {k:"TAG",i:"🏷️",c:"#BA7517",n:"TAG",d:"Quick tasks",b:p=>`Task: ${p}\n\nAction: Complete accurately.\n\nGoal: Useful applicable result.`},
  {k:"CARE",i:"💡",c:"#D4537E",n:"CARE",d:"Problem solving",b:p=>`Context: ${p}\n\nAction: Best approach.\n\nResult: Ideal outcome.\n\nExample: Real-world example.`},
  {k:"COAST",i:"🌊",c:"#0F6E56",n:"COAST",d:"Creative",b:p=>`Context: Background.\nObjective: ${p}\nActions: Elements.\nScenario: Vivid.\nTask: Compelling output.`},
  {k:"AIDA",i:"📣",c:"#993556",n:"AIDA",d:"Marketing",b:p=>`Attention: Powerful hook.\n\nInterest: ${p}\n\nDesire: Unique value.\n\nAction: Call-to-action.`},
  {k:"BAB",i:"🔄",c:"#639922",n:"BAB",d:"Transformation",b:p=>`Before: ${p}\n\nAfter: Ideal outcome.\n\nBridge: Steps to get there.`},
  {k:"PAS",i:"🔥",c:"#E24B4A",n:"PAS",d:"Persuasion",b:p=>`Problem: ${p}\n\nAgitate: Pain of not solving.\n\nSolution: Clear fix.`},
  {k:"CoT",i:"🧠",c:"#3B6D11",n:"Chain of Thought",d:"Reasoning",b:p=>`Let's think step by step.\nProblem: ${p}\nStep 1: What we know\nStep 2: Break it down\nStep 3: Work through\nTherefore:`},
  {k:"ToT",i:"🌳",c:"#085041",n:"Tree of Thought",d:"Multi-path",b:p=>`Explore paths for: ${p}\nPath A: → Pros: → Cons:\nPath B: → Pros: → Cons:\nPath C: → Pros: → Cons:\nBest Path:`},
  {k:"ZERO",i:"🎲",c:"#712B13",n:"Zero-Shot",d:"Direct",b:p=>`${p}\n\nProvide a direct accurate complete response.`},
];

function getPlatform() {
  const h = location.hostname;
  if (h.includes('openai') || h.includes('chatgpt')) return 'chatgpt';
  if (h.includes('claude')) return 'claude';
  if (h.includes('gemini')) return 'gemini';
  if (h.includes('deepseek')) return 'deepseek';
  if (h.includes('google')) return 'google';
  return 'unknown';
}

function getTextarea() {
  const p = getPlatform();
  if (p==='chatgpt') return document.querySelector('#prompt-textarea');
  if (p==='claude') return document.querySelector('.ProseMirror[contenteditable="true"]') || document.querySelector('[data-testid="chat-input"]');
  if (p==='gemini') return document.querySelector('.ql-editor') || document.querySelector('[contenteditable="true"]');
  if (p==='deepseek') return document.querySelector('textarea') || document.querySelector('[contenteditable="true"]');
  if (p==='google') return document.querySelector('textarea[name="q"]') || document.querySelector('input[name="q"]');
  return null;
}

function getPromptText() {
  const el = getTextarea();
  if (!el) return '';
  return el.innerText || el.value || el.textContent || '';
}

function setPromptText(text) {
  const el = getTextarea();
  if (!el) return;
  if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
    const desc = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value') ||
                 Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
    if (desc && desc.set) desc.set.call(el, text);
    el.dispatchEvent(new Event('input', { bubbles:true }));
    el.focus();
  } else {
    el.focus();
    el.innerText = text;
    el.dispatchEvent(new Event('input', { bubbles:true }));
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  }
}

function detectFrameworks(text) {
  const t = text.toLowerCase();
  if (t.length < 6) return [];
  const scores = {};
  const add = (k, n) => scores[k] = (scores[k]||0) + n;
  add('RTF', 1);
  if (/how|explain|what|kaise|batao/.test(t)) { add('CRISPE',3); add('CoT',2); }
  if (/write|create|story|generate|banao/.test(t)) { add('COAST',3); add('BAB',2); }
  if (/step|guide|process|tarika/.test(t)) { add('RACE',3); add('CoT',2); }
  if (/analy|problem|compare|best/.test(t)) { add('ToT',3); }
  if (/sell|market|buy|customer/.test(t)) { add('AIDA',4); add('PAS',3); }
  if (/problem|issue|pain/.test(t)) { add('PAS',3); }
  if (/reason|logic|think|why/.test(t)) { add('CoT',3); }
  if (/quick|fast|simple|just/.test(t)) { add('ZERO',3); add('TAG',2); }
  return [...new Set(Object.entries(scores).sort((a,b)=>b[1]-a[1]).slice(0,3).map(e=>e[0]))];
}

function showToast(msg) {
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:75px;right:20px;background:#1D9E75;color:white;padding:8px 16px;border-radius:10px;font-size:12px;font-weight:500;z-index:2147483647;opacity:0;transition:all .25s;font-family:sans-serif;pointer-events:none;';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.style.opacity='1', 10);
  setTimeout(() => { t.style.opacity='0'; setTimeout(() => t.remove(), 300); }, 2500);
}

let panel = null;

function buildPanel() {
  if (panel) return;
  panel = document.createElement('div');
  panel.id = 'pg-panel';
  panel.style.cssText = `
    position:fixed;bottom:72px;right:20px;width:320px;max-height:500px;overflow-y:auto;
    background:#0f0f1f;border:1px solid #7F77DD;border-radius:14px;padding:0;
    z-index:2147483647;box-shadow:0 10px 36px rgba(0,0,0,.55);
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;display:none;
  `;
  panel.innerHTML = `
    <div style="display:flex;align-items:center;padding:12px 14px 10px;border-bottom:1px solid #1e1e3a;position:sticky;top:0;background:#0f0f1f;z-index:2">
      <span style="font-size:13px;font-weight:700;color:#a89dff;flex:1">✦ PromptGenius Pro</span>
      <span id="pg-close" style="color:#555;cursor:pointer;font-size:13px;padding:2px 7px;border-radius:4px">✕</span>
    </div>
    <div style="padding:10px 12px">
      <div style="font-size:10px;color:#555;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">Recommended Frameworks</div>
      <div id="pg-fw-cards"></div>
      <div id="pg-preview" style="display:none;background:#080818;border:1px solid #2a2a4a;border-radius:8px;padding:10px;margin-top:8px">
        <div style="font-size:10px;color:#555;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px">Enhanced Prompt:</div>
        <div id="pg-prev-text" style="font-size:11px;color:#999;line-height:1.6;white-space:pre-wrap;max-height:110px;overflow-y:auto;margin-bottom:8px"></div>
        <button id="pg-apply" style="width:100%;background:#7F77DD;color:white;border:none;border-radius:7px;padding:8px;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit">✓ Apply to Prompt</button>
      </div>
    </div>
  `;
  document.body.appendChild(panel);
  document.getElementById('pg-close').addEventListener('click', () => panel.style.display='none');
}

function showPanel(suggestions) {
  buildPanel();
  const list = suggestions.length ? suggestions : ['RTF','RACE','TAG'];
  const container = document.getElementById('pg-fw-cards');
  container.innerHTML = '';
  const fwMap = {};
  FRAMEWORKS.forEach(f => fwMap[f.k] = f);
  list.forEach(key => {
    const fw = fwMap[key];
    if (!fw) return;
    const card = document.createElement('div');
    card.style.cssText = `background:#111122;border-radius:8px;padding:8px 10px;margin-bottom:6px;cursor:pointer;border:1px solid #1e1e3a;border-left:3px solid ${fw.c};transition:all .15s;`;
    card.innerHTML = `<div style="display:flex;align-items:center;gap:8px"><span style="font-size:14px">${fw.i}</span><div><div style="font-size:11px;font-weight:600;color:#d0d0ff">${fw.n} — ${fw.k}</div><div style="font-size:10px;color:#666;margin-top:1px">${fw.d}</div></div></div>`;
    card.addEventListener('mouseenter', () => card.style.background='#181830');
    card.addEventListener('mouseleave', () => card.style.background=card.classList.contains('sel')?`${fw.c}22`:'#111122');
    card.addEventListener('click', () => {
      document.querySelectorAll('#pg-fw-cards div').forEach(c => { c.classList.remove('sel'); c.style.background='#111122'; });
      card.classList.add('sel');
      card.style.background = fw.c+'22';
      const text = getPromptText().trim() || '[Your prompt here]';
      document.getElementById('pg-prev-text').textContent = fw.b(text);
      document.getElementById('pg-preview').style.display = 'block';
      document.getElementById('pg-apply').onclick = () => {
        setPromptText(fw.b(getPromptText().trim() || '[Your prompt here]'));
        panel.style.display = 'none';
        showToast(`${fw.i} ${fw.k} applied!`);
      };
    });
    container.appendChild(card);
  });
  panel.style.display = 'block';
}

// Floating trigger button
function addTrigger() {
  if (document.getElementById('pg-trigger')) return;
  const btn = document.createElement('div');
  btn.id = 'pg-trigger';
  btn.style.cssText = `
    position:fixed;bottom:20px;right:20px;
    background:#7F77DD;color:white;
    padding:9px 16px;border-radius:22px;
    font-size:12px;font-weight:600;cursor:pointer;
    z-index:2147483646;
    box-shadow:0 4px 16px rgba(127,119,221,.5);
    display:flex;align-items:center;gap:6px;
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    transition:transform .2s,box-shadow .2s;user-select:none;
  `;
  btn.innerHTML = '<span style="font-size:13px">✦</span> PromptGenius';
  btn.addEventListener('mouseenter', () => { btn.style.transform='translateY(-2px)'; btn.style.boxShadow='0 6px 20px rgba(127,119,221,.7)'; });
  btn.addEventListener('mouseleave', () => { btn.style.transform=''; btn.style.boxShadow='0 4px 16px rgba(127,119,221,.5)'; });
  btn.addEventListener('click', () => {
    if (panel && panel.style.display==='block') { panel.style.display='none'; return; }
    const text = getPromptText();
    showPanel(detectFrameworks(text));
  });
  document.body.appendChild(btn);
}

let lastText = '';
let debounce = null;
document.addEventListener('keyup', () => {
  const text = getPromptText();
  if (text === lastText) return;
  lastText = text;
  clearTimeout(debounce);
  if (text.trim().length < 8) return;
  debounce = setTimeout(() => {
    const btn = document.getElementById('pg-trigger');
    if (btn && (!panel || panel.style.display!=='block')) {
      btn.style.animation = 'none';
      setTimeout(() => {
        btn.style.boxShadow = '0 4px 24px rgba(127,119,221,.9)';
        setTimeout(() => btn.style.boxShadow='0 4px 16px rgba(127,119,221,.5)', 800);
      }, 10);
    }
  }, 1500);
});

setTimeout(() => { addTrigger(); buildPanel(); }, 2500);

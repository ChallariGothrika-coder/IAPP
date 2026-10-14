"use strict";
/* ===== DATA: edit this block to add or change questions ===== */
const DATA = {
  categories: { quant: "Quantitative Aptitude", logic: "Logical Reasoning", verbal: "Verbal Ability", cs: "Basic Computer Science" },
  // o = options, a = index of the correct option, e = explanation
  aptitude: [
    { id: "q1", cat: "quant", q: "A train 150 m long passes a pole in 10 s. What is its speed in km/h?", o: ["45", "54", "60", "72"], a: 1, e: "Speed = 150/10 = 15 m/s; 15 × 18/5 = 54 km/h." },
    { id: "q2", cat: "quant", q: "If 20% of a number is 45, what is 35% of the same number?", o: ["70.25", "78.75", "85", "90"], a: 1, e: "Number = 45 ÷ 0.2 = 225. 35% of 225 = 78.75." },
    { id: "q3", cat: "quant", q: "A can finish a job in 12 days and B in 18 days. How many days will they take together?", o: ["6.8", "7.2", "7.5", "8"], a: 1, e: "Combined rate = 1/12 + 1/18 = 5/36 per day, so the job takes 36/5 = 7.2 days." },
    { id: "l1", cat: "logic", q: "Find the next number: 2, 6, 12, 20, 30, ?", o: ["40", "42", "44", "46"], a: 1, e: "Differences are 4, 6, 8, 10, so the next difference is 12 and 30 + 12 = 42." },
    { id: "l2", cat: "logic", q: "All engineers are graduates. Some graduates are athletes. Which conclusion must be true?", o: ["All athletes are engineers", "Some engineers are athletes", "No engineer is an athlete", "None of these must be true"], a: 3, e: "The premises never link engineers with athletes, so no conclusion about them is guaranteed." },
    { id: "l3", cat: "logic", q: "Pointing to a man, Riya says, \"He is the son of my mother's only brother.\" How is he related to Riya?", o: ["Brother", "Cousin", "Uncle", "Nephew"], a: 1, e: "Mother's brother's son is Riya's maternal cousin." },
    { id: "v1", cat: "verbal", q: "Choose the grammatically correct sentence.", o: ["Neither of the answers are correct.", "Neither of the answers is correct.", "Neither of the answer are correct.", "Neither of answers is correct."], a: 1, e: "\"Neither\" is singular, so it takes \"is\"; \"of the answers\" needs the plural noun." },
    { id: "v2", cat: "verbal", q: "Choose the synonym of PRUDENT.", o: ["Careless", "Wise", "Rude", "Hasty"], a: 1, e: "Prudent means acting with care and good judgement, so \"wise\" is closest." },
    { id: "v3", cat: "verbal", q: "Fill in the blank: She has been working here ___ 2019.", o: ["for", "since", "from", "during"], a: 1, e: "\"Since\" is used with a fixed starting point in time." },
    { id: "c1", cat: "cs", q: "Which data structure follows the LIFO principle?", o: ["Queue", "Stack", "Linked list", "Heap"], a: 1, e: "A stack removes the most recently added item first (Last In, First Out)." },
    { id: "c2", cat: "cs", q: "What is the worst-case time complexity of binary search on a sorted array?", o: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], a: 2, e: "Each comparison halves the search range, giving O(log n)." },
    { id: "c3", cat: "cs", q: "Which SQL clause filters groups after GROUP BY aggregation?", o: ["WHERE", "HAVING", "ORDER BY", "LIMIT"], a: 1, e: "HAVING filters aggregated groups; WHERE filters rows before grouping." }
  ],
  // code = sample solution, e = explanation
  coding: [
    { id: "j1", lang: "Java", q: "How do == and equals() differ when comparing Strings?", code: `String a = new String("java");\nString b = new String("java");\nSystem.out.println(a == b);      // false: different objects\nSystem.out.println(a.equals(b)); // true: same characters`, e: "== compares references; equals() compares content. Use equals() to compare String values." },
    { id: "j2", lang: "Java", q: "Reverse a String without using StringBuilder.reverse().", code: `static String reverse(String s) {\n    char[] c = s.toCharArray();\n    for (int i = 0, j = c.length - 1; i < j; i++, j--) {\n        char t = c[i]; c[i] = c[j]; c[j] = t;\n    }\n    return new String(c);\n}`, e: "Two pointers swap characters from both ends until they meet. Time O(n), extra space O(n) for the array." },
    { id: "j3", lang: "Java", q: "Check whether a number is prime.", code: `static boolean isPrime(int n) {\n    if (n < 2) return false;\n    for (int i = 2; (long) i * i <= n; i++)\n        if (n % i == 0) return false;\n    return true;\n}`, e: "Any composite number has a factor no larger than its square root, so checking up to √n gives O(√n) time." },
    { id: "p1", lang: "Python", q: "Check whether a string is a palindrome, ignoring case and punctuation.", code: `def is_palindrome(s):\n    cleaned = [c.lower() for c in s if c.isalnum()]\n    return cleaned == cleaned[::-1]`, e: "Keep only letters and digits, lower-case them, then compare the list with its reverse. Time O(n)." },
    { id: "p2", lang: "Python", q: "Find the second largest distinct element in a list.", code: `def second_largest(nums):\n    unique = sorted(set(nums))\n    return unique[-2] if len(unique) >= 2 else None`, e: "set() removes duplicates so [5, 5, 3] returns 3. Sorting is O(n log n); one pass tracking two maxima is O(n)." },
    { id: "p3", lang: "Python", q: "Count how often each word appears in a sentence.", code: `from collections import Counter\n\ndef word_freq(text):\n    return Counter(text.lower().split())`, e: "Counter is a dict subclass that counts hashable items in O(n). Strip punctuation first for real-world text." }
  ],
  // s = suggested structure, e = sample answer outline
  hr: [
    { id: "h1", q: "Tell me about yourself.", s: "Present → Past → Future", e: "I'm a final-year CS student who enjoys building web apps. During my internship I built a reporting feature that cut manual work by about 30%. I'm now looking for a developer role where I can deepen my backend skills." },
    { id: "h2", q: "What are your strengths and weaknesses?", s: "Strength + proof, then a real weakness + how you are fixing it", e: "My strength is learning quickly: I picked up React in two weeks for a hackathon project. I used to hesitate to ask for help, so now I set a 30-minute limit before asking a teammate." },
    { id: "h3", q: "Why should we hire you?", s: "Skill match → evidence → value to the company", e: "Your role needs strong Java and teamwork. I built a Java project with three teammates and delivered it on time, and I'm keen to apply the same discipline to your products." },
    { id: "h4", q: "Describe a time you handled a conflict or challenge in a team.", s: "STAR: Situation, Task, Action, Result", e: "Situation: two teammates disagreed on our project's design. Task: I had to unblock us before the deadline. Action: I organised a short meeting and compared both options on cost and time. Result: we chose one in a day and finished two days early." },
    { id: "h5", q: "Where do you see yourself in five years?", s: "Skills → responsibility → alignment with the company", e: "I want to become a strong engineer who owns features end to end, mentors new joiners, and grows with the company's technical direction." }
  ]
};

/* ===== LOGIC: pure functions (no DOM) ===== */
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const wordCount = t => (t.trim() ? t.trim().split(/\s+/).length : 0);
function scoreItems(items, lookup) {
  let correct = 0;
  items.forEach(it => { if (it.sel === lookup(it.id).a) correct++; });
  const total = items.length;
  return { correct, total, pct: total ? Math.round(correct / total * 100) : 0 };
}
// Rule-based feedback only: word count, sentence length, filler words, keyword checks.
function evaluate(text) {
  const t = text.trim(), lo = t.toLowerCase(), w = wordCount(t);
  const sents = t.split(/[.!?]+/).filter(s => s.trim()).length || 1, avg = w / sents;
  const fill = (lo.match(/\b(um|uh|basically|actually|you know|kind of|sort of|very|really)\b/g) || []).length;
  const has = r => r.test(lo);
  const L = w >= 60 && w <= 200 ? 30 : (w >= 30 && w <= 250 ? 15 : 0);
  const ctx = has(/\b(situation|when|during|project|team|internship|college|challenge|task)\b/);
  const act = has(/\bi\s+(\w+ed|led|built|made|took|ran|wrote|decided|chose|set)\b/);
  const res = has(/\b(result|outcome|achieved|improved|reduced|increased|learned|delivered|successfully)\b/);
  const num = /\d/.test(t);
  const items = [
    { n: "Length", p: L, m: 30, msg: L === 30 ? `${w} words is a good length for an interview answer.` : `${w} words. Aim for roughly 60–200 words (30–90 seconds spoken).` },
    { n: "Sentence clarity", p: avg <= 25 ? 20 : avg <= 35 ? 10 : 0, m: 20, msg: avg <= 25 ? `Average sentence length is ${avg.toFixed(1)} words: easy to follow.` : `Average sentence length is ${avg.toFixed(1)} words. Split long sentences.` },
    { n: "Filler words", p: fill <= 1 ? 10 : fill <= 3 ? 5 : 0, m: 10, msg: fill ? `Found ${fill} filler/hedge word(s). Remove them for a crisper answer.` : "No common filler words found." },
    { n: "Context", p: ctx ? 10 : 0, m: 10, msg: ctx ? "You set the scene with context." : "Add context: where, when or in which project did this happen?" },
    { n: "Your actions", p: act ? 10 : 0, m: 10, msg: act ? "You describe what you personally did." : "Say what you did, using \"I\" plus an action verb (I built, I led…)." },
    { n: "Result / learning", p: res ? 10 : 0, m: 10, msg: res ? "You mention an outcome or lesson." : "End with the result or what you learned." },
    { n: "Specific detail", p: num ? 10 : 0, m: 10, msg: num ? "Numbers make your claim concrete." : "Add a number (time saved, team size, marks) to be more specific." }
  ];
  return { total: items.reduce((s, x) => s + x.p, 0), items };
}

/* ===== APP ===== */
const KEY = "interviewarena.v1";
const blank = () => ({ stats: {}, attempts: [], bookmarks: [], activity: [], last: null });
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const short = s => (s.length > 50 ? s.slice(0, 47) + "…" : s);
const ALL = [...DATA.aptitude, ...DATA.coding, ...DATA.hr];
const byId = id => ALL.find(x => x.id === id);
const typeOf = x => (x.lang ? "coding" : x.s ? "hr" : "aptitude");
const fmt = ms => { const s = Math.max(0, Math.ceil(ms / 1000)); return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); };
const empty = m => `<div class="card empty">${esc(m)}</div>`;

let S = load(), quiz = null, timerId = null, toastId = null;
const OPEN = new Set();

function load() {
  try {
    const r = JSON.parse(localStorage.getItem(KEY));
    if (r && typeof r === "object") { const b = Object.assign(blank(), r); b.bookmarks = b.bookmarks.filter(byId); return b; }
  } catch (e) { /* corrupt or unavailable storage: start fresh */ }
  return blank();
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast("Browser storage unavailable: progress won't persist."); } }
function log(t) { S.activity.unshift({ t, d: new Date().toISOString() }); S.activity = S.activity.slice(0, 8); }
function toast(m) { const t = $("#toast"); t.textContent = m; t.classList.add("on"); clearTimeout(toastId); toastId = setTimeout(() => t.classList.remove("on"), 2200); }

function show(v) {
  $$(".view").forEach(s => (s.hidden = s.id !== "v-" + v));
  $$(".nav button").forEach(b => b.classList.toggle("active", b.dataset.view === v));
  render(); window.scrollTo(0, 0);
}

/* ---- quiz ---- */
function startQuiz() {
  const cat = $("#qz-cat").value, n = +$("#qz-n").value, msg = $("#qz-msg");
  const pool = DATA.aptitude.filter(q => cat === "all" || q.cat === cat);
  msg.textContent = "";
  if (!pool.length || !(n > 0)) { msg.textContent = "Please choose a valid category and number of questions."; return; }
  const qs = shuffle(pool).slice(0, Math.min(n, pool.length));
  quiz = { qs, i: 0, ans: qs.map(() => null), cat, end: Date.now() + qs.length * 45000 };
  clearInterval(timerId); timerId = setInterval(tick, 500);
  renderQuiz();
}
function tick() {
  if (!quiz) return;
  const left = quiz.end - Date.now(), t = $("#timer");
  if (t) { t.textContent = fmt(left); t.classList.toggle("warn", left < 30000); }
  if (left <= 0) { toast("Time is up! Quiz submitted."); finish(true); }
}
function finish(auto) {
  clearInterval(timerId);
  const items = quiz.qs.map((q, k) => ({ id: q.id, sel: quiz.ans[k] }));
  const sc = scoreItems(items, byId);
  items.forEach(it => { const q = byId(it.id), st = S.stats[q.cat] || (S.stats[q.cat] = { c: 0, t: 0 }); st.t++; if (it.sel === q.a) st.c++; });
  const label = quiz.cat === "all" ? "Mixed" : DATA.categories[quiz.cat];
  S.last = { d: new Date().toISOString(), label, items, auto: !!auto, ...sc };
  S.attempts.unshift({ d: S.last.d, label, correct: sc.correct, total: sc.total, pct: sc.pct });
  S.attempts = S.attempts.slice(0, 50);
  log(`${label} quiz: ${sc.correct}/${sc.total} (${sc.pct}%)${auto ? " – time up" : ""}`);
  quiz = null; save(); show("results");
}
function quizAction(a) {
  if (!quiz) return;
  if (a === "prev" && quiz.i > 0) quiz.i--;
  if (a === "next" && quiz.i < quiz.qs.length - 1) quiz.i++;
  if (a === "exit") { if (!confirm("Exit this quiz? Your answers will be discarded.")) return; clearInterval(timerId); quiz = null; }
  if (a === "submit") {
    const un = quiz.ans.filter(x => x === null).length;
    if (un && !confirm(`${un} question(s) unanswered. Submit anyway?`)) return;
    return finish(false);
  }
  renderQuiz();
}

/* ---- renderers ---- */
function render() { renderDash(); renderQuiz(); renderCoding(); renderHR(); renderBm(); renderResults(); $("#bm-count").textContent = S.bookmarks.length; }

function renderDash() {
  const a = S.attempts, qn = Object.values(S.stats).reduce((s, x) => s + x.t, 0);
  const avg = a.length ? Math.round(a.reduce((s, x) => s + x.pct, 0) / a.length) : 0;
  const stat = (v, l) => `<div class="card stat"><b>${v}</b><span>${l}</span></div>`;
  $("#d-stats").innerHTML = stat(a.length, "Quizzes taken") + stat(a.length ? avg + "%" : "—", "Average score") + stat(qn, "Questions practised") + stat(S.bookmarks.length, "Bookmarks");
  $("#d-prog").innerHTML = Object.entries(DATA.categories).map(([k, n]) => {
    const s = S.stats[k] || { c: 0, t: 0 }, p = s.t ? Math.round(s.c / s.t * 100) : 0;
    return `<div class="prog"><div class="row"><span>${n}</span><small>${s.t ? `${s.c}/${s.t} correct (${p}%)` : "Not started"}</small></div><div class="meter" role="progressbar" aria-label="${n} accuracy" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><i style="width:${p}%"></i></div></div>`;
  }).join("");
  $("#d-act").innerHTML = S.activity.length ? S.activity.map(x => `<li>${esc(x.t)}<small>${new Date(x.d).toLocaleString()}</small></li>`).join("") : "<li class='muted'>No activity yet. Start a quiz!</li>";
}

function renderQuiz() {
  $("#qz-setup").hidden = !!quiz; $("#qz-run").hidden = !quiz;
  if (!quiz) return;
  const { qs, i, ans } = quiz, q = qs[i], bm = S.bookmarks.includes(q.id);
  $("#qz-run").innerHTML = `<div class="card">
    <div class="row"><strong>Question ${i + 1} of ${qs.length}</strong><span class="timer" id="timer">${fmt(quiz.end - Date.now())}</span></div>
    <div class="meter" aria-label="Answered"><i style="width:${Math.round(ans.filter(x => x !== null).length / qs.length * 100)}%"></i></div>
    <span class="tag">${DATA.categories[q.cat]}</span><h2>${esc(q.q)}</h2>
    <div class="options">${q.o.map((o, k) => `<button class="opt ${ans[i] === k ? "sel" : ""}" data-opt="${k}" aria-pressed="${ans[i] === k}"><b>${"ABCD"[k]}</b>${esc(o)}</button>`).join("")}</div>
    <div class="row gap"><button class="btn ghost" data-q="prev" ${i === 0 ? "disabled" : ""}>← Previous</button><button class="btn ghost" data-q="next" ${i === qs.length - 1 ? "disabled" : ""}>Next →</button><button class="btn ghost" data-bm="${q.id}">${bm ? "★ Bookmarked" : "☆ Bookmark"}</button><button class="btn" data-q="submit">Submit quiz</button><button class="btn danger" data-q="exit">Exit</button></div>
    <div class="pal">${qs.map((_, k) => `<button class="${k === i ? "cur" : ""} ${ans[k] !== null ? "done" : ""}" data-go="${k}" aria-label="Go to question ${k + 1}">${k + 1}</button>`).join("")}</div></div>`;
}

function itemCard(x) {
  const open = OPEN.has(x.id), bm = S.bookmarks.includes(x.id), t = typeOf(x);
  const tag = t === "coding" ? x.lang : t === "hr" ? "HR" : DATA.categories[x.cat];
  const opts = t === "aptitude" ? `<ol type="A">${x.o.map(o => `<li>${esc(o)}</li>`).join("")}</ol>` : "";
  const body = t === "coding" ? `<pre><code>${esc(x.code)}</code></pre><p>${esc(x.e)}</p>`
    : t === "hr" ? `<p><strong>Suggested structure:</strong> ${esc(x.s)}</p><p><strong>Sample answer:</strong> ${esc(x.e)}</p>`
    : `<p><strong>Answer:</strong> ${"ABCD"[x.a]}. ${esc(x.o[x.a])}</p><p>${esc(x.e)}</p>`;
  return `<article class="card item"><div class="row"><span class="tag">${esc(tag)}</span><button class="icon ${bm ? "on" : ""}" data-bm="${x.id}" aria-pressed="${bm}" aria-label="Toggle bookmark">${bm ? "★" : "☆"}</button></div>
    <h3>${esc(x.q)}</h3>${opts}<button class="btn ghost" data-sol="${x.id}">${open ? "Hide" : "Show"} ${t === "coding" ? "solution" : "answer"}</button>${open ? `<div class="sol">${body}</div>` : ""}</article>`;
}
const textOf = x => (x.q + " " + (x.e || "") + " " + (x.code || "") + " " + (x.s || "")).toLowerCase();
const fill = (sel, list, msg) => { $(sel).innerHTML = list.length ? list.map(itemCard).join("") : empty(msg); };

function renderCoding() {
  const q = $("#cd-search").value.trim().toLowerCase(), l = $("#cd-lang").value;
  fill("#cd-list", DATA.coding.filter(x => (l === "all" || x.lang === l) && (!q || textOf(x).includes(q))), "No questions match your search.");
}
function renderHR() {
  const q = $("#hr-search").value.trim().toLowerCase();
  fill("#hr-list", DATA.hr.filter(x => !q || textOf(x).includes(q)), "No HR questions match your search.");
}
function renderBm() {
  const q = $("#bm-search").value.trim().toLowerCase(), t = $("#bm-type").value;
  const all = S.bookmarks.map(byId).filter(Boolean);
  fill("#bm-list", all.filter(x => (t === "all" || typeOf(x) === t) && (!q || textOf(x).includes(q))), all.length ? "No bookmarks match your filters." : "No bookmarks yet. Tap the ☆ on any question to save it here.");
}

function renderResults() {
  const r = S.last, el = $("#rs");
  if (!r) { el.innerHTML = empty("No quiz results yet. Complete an aptitude quiz to see them here.") + `<div class="row gap"><button class="btn" data-view="aptitude">Start a quiz</button></div>`; return; }
  const skipped = r.items.filter(i => i.sel === null).length, wrong = r.total - r.correct - skipped;
  const rows = r.items.map((it, k) => {
    const q = byId(it.id), ok = it.sel === q.a, bm = S.bookmarks.includes(q.id);
    return `<article class="card item"><div class="row"><span class="badge ${ok ? "ok" : it.sel === null ? "skip" : "bad"}">${ok ? "Correct" : it.sel === null ? "Not answered" : "Incorrect"}</span><button class="icon ${bm ? "on" : ""}" data-bm="${q.id}" aria-label="Toggle bookmark">${bm ? "★" : "☆"}</button></div>
      <h3>${k + 1}. ${esc(q.q)}</h3><p>Your answer: <strong>${it.sel === null ? "—" : esc(q.o[it.sel])}</strong><br>Correct answer: <strong>${esc(q.o[q.a])}</strong></p><p class="muted">${esc(q.e)}</p></article>`;
  });
  const f = $("#rs-filter") ? $("#rs-filter").value : "all";
  const shown = rows.filter((_, k) => { const ok = r.items[k].sel === byId(r.items[k].id).a; return f === "all" || (f === "correct") === ok; });
  el.innerHTML = `<div class="card"><div class="row"><div><div class="score">${r.pct}%</div><p class="muted">${esc(r.label)} · ${new Date(r.d).toLocaleString()}${r.auto ? " · submitted when time ran out" : ""}</p></div>
    <div><p><span class="badge ok">${r.correct} correct</span> <span class="badge bad">${wrong} incorrect</span> <span class="badge skip">${skipped} skipped</span></p></div></div>
    <div class="meter" role="progressbar" aria-label="Score" aria-valuenow="${r.pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${r.pct}%"></i></div>
    <div class="row gap"><button class="btn" data-view="aptitude">Practise again</button><select id="rs-filter" data-live aria-label="Filter results"><option value="all"${f === "all" ? " selected" : ""}>All questions</option><option value="correct"${f === "correct" ? " selected" : ""}>Correct only</option><option value="incorrect"${f === "incorrect" ? " selected" : ""}>Incorrect only</option></select></div></div>
    <div class="stack">${shown.join("") || empty("Nothing in this filter.")}</div>`;
}

/* ---- self-evaluation ---- */
function runEval() {
  const id = $("#se-q").value, t = $("#se-text").value, n = wordCount(t), m = $("#se-msg");
  m.textContent = "";
  if (!id) { m.textContent = "Please choose an interview question."; return; }
  if (n < 15) { m.textContent = `Write at least 15 words (you have ${n}).`; return; }
  if (n > 600) { m.textContent = `Please keep it under 600 words (you have ${n}).`; return; }
  const r = evaluate(t);
  $("#se-out").innerHTML = `<div class="card"><div class="row"><h2>Rule-based score: ${r.total}/100</h2><span class="tag">Not AI analysis</span></div>
    <div class="meter"><i style="width:${r.total}%"></i></div>
    ${r.items.map(i => `<p><strong>${i.n}</strong> (${i.p}/${i.m}): ${esc(i.msg)}</p>`).join("")}
    <p class="muted">Suggested structure for this question: ${esc(byId(id).s)}</p></div>`;
  log(`Self-evaluated an answer: ${short(byId(id).q)} (${r.total}/100)`); save(); renderDash();
}

/* ---- events ---- */
function toggleBm(id) {
  const k = S.bookmarks.indexOf(id);
  if (k < 0) { S.bookmarks.push(id); log("Bookmarked: " + short(byId(id).q)); toast("Bookmarked"); } else { S.bookmarks.splice(k, 1); toast("Bookmark removed"); }
  save(); render();
}
document.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  const d = b.dataset;
  if (d.view) return show(d.view);
  if (d.bm) return toggleBm(d.bm);
  if (d.sol) { OPEN.has(d.sol) ? OPEN.delete(d.sol) : OPEN.add(d.sol); return render(); }
  if (d.opt !== undefined && quiz) { quiz.ans[quiz.i] = +d.opt; return renderQuiz(); }
  if (d.go !== undefined && quiz) { quiz.i = +d.go; return renderQuiz(); }
  if (d.q) return quizAction(d.q);
  if (b.id === "qz-start") return startQuiz();
  if (b.id === "se-go") return runEval();
  if (b.id === "se-clear") { $("#se-text").value = ""; $("#se-out").innerHTML = ""; $("#se-msg").textContent = ""; $("#se-count").textContent = "0 words"; return; }
  if (b.id === "reset") {
    if (!confirm("Reset all progress, bookmarks and activity? This cannot be undone.")) return;
    clearInterval(timerId); quiz = null; OPEN.clear(); S = blank();
    try { localStorage.removeItem(KEY); } catch (err) { /* ignore */ }
    show("dashboard"); toast("Progress reset.");
  }
});
document.addEventListener("input", e => {
  if (e.target.id === "se-text") $("#se-count").textContent = wordCount(e.target.value) + " words";
  if (e.target.matches("[data-live]")) render();
});

/* ---- init ---- */
$("#qz-cat").innerHTML = `<option value="all">All categories</option>` + Object.entries(DATA.categories).map(([k, n]) => `<option value="${k}">${n}</option>`).join("");
$("#se-q").innerHTML = `<option value="">Select a question…</option>` + DATA.hr.map(x => `<option value="${x.id}">${esc(x.q)}</option>`).join("");
show("dashboard");

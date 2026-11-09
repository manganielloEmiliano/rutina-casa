'use strict';

/* =========================================================
   DATOS DE LA RUTINA (fuente única de verdad)
   ========================================================= */
const EXERCISES = [
  {
    id: 'remo', block: 'A', name: 'Remo en silla / de pie', short: 'Remo 35 lb',
    target: 'Espalda media y postura', reps: '12 a 15', defReps: 15,
    load: '35 lb (si te resulta liviana: 35 + 25 lb)', defLoad: '35 lb',
    search: 'Remo con banda elastica de pie short',
    how: [
      '<b>Sentado en silla:</b> en el borde de la silla, pies separados, banda por debajo de ambas plantas. Torso apenas inclinado, espalda derecha, tirá llevando los codos hacia atrás pegados a las costillas.',
      '<b>De pie:</b> pisando la banda con pies al ancho de hombros, rodillas semi-flexionadas, torso a 45° y espalda recta, tirando hacia la cintura.'
    ],
    tips: ['Juntá los omóplatos al final del tirón.', 'No redondees la espalda baja al inclinarte.']
  },
  {
    id: 'pullapart', block: 'A', name: 'Pull-aparts / Aperturas de hombros', short: 'Pull-aparts liviano',
    target: 'Espalda alta y hombros', reps: '12 a 15', defReps: 15,
    load: '10 a 20 lb (liviana/media). NO uses la de 35 lb para no sobrecargar el cuello.', defLoad: '15 lb',
    search: 'Band pull apart tecnica short',
    how: [
      'De pie o sentado derecho en la silla, manos al ancho de los hombros, brazos extendidos al frente a la altura del pecho.',
      'Abrí los brazos en cruz juntando los omóplatos y volvé controlando.'
    ],
    tips: ['Hombros lejos de las orejas.', 'Movimiento lento en la vuelta.']
  },
  {
    id: 'pmr', block: 'A', name: 'Peso muerto rumano ancho / Semi-Sumo', short: 'Peso muerto pies anchos',
    target: 'Isquiotibiales, glúteos y cintura', reps: '12', defReps: 12,
    load: '35 + 20/25 lb juntas (o 35 lb agarrada bien corta)', defLoad: '35 + 25 lb',
    search: 'Peso muerto rumano con banda elastica short',
    how: [
      'De pie, pies más anchos que los hombros con las puntas levemente hacia afuera, pisando la banda.',
      'Llevá la cadera hacia atrás: las rodillas y muslos dejan un canal amplio para el abdomen, así no te falta el aire.'
    ],
    tips: ['Espalda baja 100% recta.', 'Subí apretando glúteos, sin hiperextender.']
  },
  {
    id: 'puente', block: 'B', name: 'Puente de glúteos con pies separados', short: 'Puente de glúteos',
    target: 'Glúteos e isquiotibiales', reps: '15 (2 s arriba)', defReps: 15,
    load: 'Peso corporal (o banda de 35 lb cruzada sobre la cadera, extremos sujetos al piso con las manos)', defLoad: 'Peso corporal',
    search: 'Glute bridge tecnica short',
    how: [
      'Boca arriba, pies separados al ancho de la colchoneta con las puntas un poco hacia afuera.',
      'Empujá el piso con los talones apretando fuerte los glúteos. Sostené 2 segundos arriba.'
    ],
    tips: ['El empuje sale del talón, no de la punta.', 'No arquees la zona lumbar arriba.']
  },
  {
    id: 'deadbug', block: 'B', name: 'Dead Bug adaptado con pies apoyados', short: 'Dead Bug pies apoyados',
    target: 'Core y protección lumbar sin ahogo', reps: '12 totales (6 por lado)', defReps: 12,
    load: 'Peso corporal', defLoad: 'Peso corporal', bodyweight: true,
    search: 'Dead bug progression heel slides short',
    how: [
      'Boca arriba con las dos plantas apoyadas (como en el puente). Aplastá la cintura contra el piso.',
      'Estirá una sola pierna hacia adelante (deslizándola o en el aire) mientras llevás el brazo contrario hacia atrás. Volvé a apoyar y cambiá de lado.'
    ],
    tips: ['Versión adaptada: dos piernas en el aire arquean la cintura y comprimen el diafragma.', 'Exhalá al estirar.']
  }
];

const STRETCHES = [
  {
    id: 'lumbar', name: 'Espalda baja sin comprimir la panza', short: 'Espalda baja (30 s)',
    phases: [{ label: 'Rodillas al pecho, bien abiertas', sec: 30 }],
    search: 'estiramiento rodillas al pecho espalda baja short',
    how: ['Boca arriba (o sentado en la silla con piernas bien abiertas), llevá las rodillas hacia el pecho abriéndolas hacia los costados, apuntando a las axilas. 30 s.']
  },
  {
    id: 'cuadriceps', name: 'Cuádriceps de pie', short: 'Cuádriceps (30 s por lado)',
    phases: [{ label: 'Cuádriceps · lado izquierdo', sec: 30 }, { label: 'Cuádriceps · lado derecho', sec: 30 }],
    search: 'estiramiento cuadriceps de pie short',
    how: ['Una mano en la pared o el respaldo de la silla para el equilibrio, llevá un talón al glúteo. 30 s por lado.']
  },
  {
    id: 'pecho', name: 'Pecho y hombros', short: 'Pecho y hombros (30 s)',
    phases: [{ label: 'Manos entrelazadas atrás, abrí el pecho', sec: 30 }],
    search: 'estiramiento pecho manos detras de la espalda short',
    how: ['Sentado o de pie, entrelazá las manos detrás de la espalda y abrí el pecho. 30 s.']
  }
];

const PEDAL = {
  id: 'pedaleador', name: 'Posición en el pedaleador compacto',
  search: 'pedaleador mini bike sentado en silla short',
  how: [
    '<b>Alejá el aparato hacia adelante:</b> pedaleá empujando en diagonal (estilo bici reclinada) con la espalda contra el respaldo de una silla firme. Abre el ángulo de cadera, los muslos no chocan con la panza y no cargás las rodillas.',
    '<b>Traba antideslizante:</b> apoyalo en la punta de la colchoneta o contra la pared / pata de un mueble pesado.',
    '<b>Bonus tren superior (5 min):</b> en el enfriamiento podés apoyarlo sobre una mesa firme y pedalear con las manos hacia adelante y atrás.'
  ]
};

const EX = Object.fromEntries([...EXERCISES, ...STRETCHES, PEDAL].map(e => [e.id, e]));
const ROUNDS = 3;
const BLOCK_A = ['remo', 'pullapart', 'pmr'];
const BLOCK_B = ['puente', 'deadbug'];
const WEEKLY_GOAL = 3;

const TYPES = {
  fondo: { label: 'Fondo constante', hint: '35 min a ritmo aeróbico sostenido + 5 min suaves.' },
  intervalos: { label: 'Cambios de ritmo', hint: '10 min estables + 5 bloques de 2 min pesado / 2 min suave + 10 min suaves.' }
};

function mainPhases(type) {
  if (type === 'intervalos') {
    const p = [{ label: 'Ritmo estable', sec: 600, kind: 'steady' }];
    for (let i = 1; i <= 5; i++) {
      p.push({ label: `Bloque ${i}/5 · PESADO (media vuelta de perilla o más cadencia)`, sec: 120, kind: 'hard' });
      p.push({ label: `Bloque ${i}/5 · Suave`, sec: 120, kind: 'easy' });
    }
    p.push({ label: 'Vuelta a la calma suave (bonus: últimos 5 min con las manos)', sec: 600, kind: 'easy' });
    return p;
  }
  return [
    { label: 'Ritmo aeróbico sostenido', sec: 2100, kind: 'steady' },
    { label: 'Vuelta a la calma suave (bonus: con las manos sobre la mesa)', sec: 300, kind: 'easy' }
  ];
}

/* =========================================================
   UTILIDADES
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad = n => String(n).padStart(2, '0');
const mmss = ms => { const t = Math.max(0, Math.ceil(ms / 1000)); return `${pad(Math.floor(t / 60))}:${pad(t % 60)}`; };
const localDay = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

const K = {
  history: 'rc.history', current: 'rc.current', videos: 'rc.videos', last: 'rc.lastLoad',
  deleted: 'rc.deleted', meta: 'rc.meta', gh: 'rc.github'
};
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* modo privado */ } }
};

function ytSearch(q) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}&sp=EgIYAQ%253D%253D`;
}

function mediaHTML(url) {
  if (!url) return '';
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/);
  if (yt) {
    const vertical = /shorts\//.test(url) ? ' vertical' : '';
    return `<div class="media-frame${vertical}"><iframe src="https://www.youtube-nocookie.com/embed/${yt[1]}?rel=0&loop=1&playlist=${yt[1]}" title="Video de referencia" loading="lazy" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`;
  }
  const safe = /^https:\/\//i.test(url) || /^media\//.test(url);
  if (!safe) return '';
  if (/\.(mp4|webm)(\?|#|$)/i.test(url)) return `<video class="media-img" src="${esc(url)}" autoplay loop muted playsinline controls></video>`;
  return `<img class="media-img" src="${esc(url)}" alt="Referencia del ejercicio" loading="lazy">`;
}

function suggestType() {
  const day = new Date().getDay();
  return day === 3 ? 'intervalos' : 'fondo'; // miércoles = cambios de ritmo
}

/* =========================================================
   ESTADO
   ========================================================= */
const state = {
  view: 'hoy',
  current: store.get(K.current, null),
  history: store.get(K.history, []),
  videos: store.get(K.videos, {}),
  deleted: store.get(K.deleted, [])
};

/** Marca la fecha del último cambio de un dato "gana el más reciente" (videos / bandas). */
function touchMeta(key) {
  const meta = store.get(K.meta, {});
  meta[key] = new Date().toISOString();
  store.set(K.meta, meta);
}

function newSession(type) {
  const last = store.get(K.last, {});
  const row = id => ({ id, done: false, reps: EX[id].defReps, load: last[id] ?? EX[id].defLoad });
  return {
    id: Date.now().toString(36),
    date: new Date().toISOString(),
    type,
    warmup: false,
    a: Array.from({ length: ROUNDS }, () => BLOCK_A.map(row)),
    b: Array.from({ length: ROUNDS }, () => BLOCK_B.map(row)),
    main: false,
    stretch: STRETCHES.map(() => false),
    rpe: 6,
    notes: ''
  };
}

function progress(s) {
  const items = [s.warmup, ...s.a.flat().map(x => x.done), ...s.b.flat().map(x => x.done), s.main, ...s.stretch];
  return Math.round(items.filter(Boolean).length / items.length * 100);
}

function saveCurrent() { store.set(K.current, state.current); }

function setPath(obj, path, value) {
  const keys = path.split('.');
  const last = keys.pop();
  const target = keys.reduce((o, k) => o[k], obj);
  target[last] = value;
}

/* =========================================================
   VISTAS
   ========================================================= */
const view = $('#view');

function render() {
  document.querySelectorAll('.tabs a').forEach(a => a.classList.toggle('active', a.dataset.view === state.view));
  if (state.view === 'ejercicios') view.innerHTML = renderLibrary();
  else if (state.view === 'historial') view.innerHTML = renderHistory();
  else if (state.view === 'cuenta') view.innerHTML = renderAccount();
  else view.innerHTML = renderToday();
  drawSync();
}

// Sin GIF en media/: reemplazamos la imagen rota por una pista (CSP prohíbe onerror inline)
document.addEventListener('error', e => {
  const img = e.target;
  if (img.tagName !== 'IMG' || !img.dataset.fallback) return;
  img.replaceWith(Object.assign(document.createElement('p'), {
    className: 'muted small',
    textContent: `Sin video propio todavía. Pegá un link de YouTube Shorts abajo o agregá media/${img.dataset.fallback}.gif al repo.`
  }));
}, true);

/* ---------- HOY ---------- */
function renderToday() {
  const s = state.current;
  if (!s) {
    const sug = suggestType();
    const week = sessionsThisWeek();
    return `
      <section class="card hero">
        <h2>¿Entrenamos?</h2>
        <p class="muted">Esta semana: <b>${week}</b> de ${WEEKLY_GOAL}–4 sesiones.</p>
        <div class="choice">
          ${Object.entries(TYPES).map(([k, t]) => `
            <button class="choice-btn ${k === sug ? 'suggested' : ''}" data-act="start" data-type="${k}">
              <span class="choice-title">${t.label}${k === sug ? ' <em>sugerido hoy</em>' : ''}</span>
              <span class="muted">${t.hint}</span>
            </button>`).join('')}
        </div>
      </section>
      <section class="card">
        <h3>Cómo está armada la sesión</h3>
        <ol class="timeline">
          <li><b>0–5'</b> Entrada en calor en el pedaleador (resistencia mínima, cadencia ágil).</li>
          <li><b>5–20'</b> Fuerza: 3 vueltas de pie/silla y después 3 vueltas en colchoneta (bajás una sola vez al piso).</li>
          <li><b>20–60'</b> Pedaleo principal de 40 min.</li>
          <li><b>+3'</b> Elongación adaptada.</li>
        </ol>
      </section>`;
  }

  const pct = progress(s);
  return `
    <section class="card sticky-progress">
      <div class="row between">
        <div>
          <p class="muted small">${new Date(s.date).toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
          <label class="inline">Tipo de día
            <select data-path="type" data-rerender="1">
              ${Object.entries(TYPES).map(([k, t]) => `<option value="${k}" ${k === s.type ? 'selected' : ''}>${t.label}</option>`).join('')}
            </select>
          </label>
        </div>
        <strong id="pct" class="pct">${pct}%</strong>
      </div>
      <div class="bar"><span id="pct-bar" style="width:${pct}%"></span></div>
    </section>

    <section class="card">
      <div class="row between"><h3>1 · Entrada en calor</h3><span class="chip">5 min</span></div>
      <label class="check big ${s.warmup ? 'done' : ''}">
        <input type="checkbox" data-path="warmup" ${s.warmup ? 'checked' : ''}>
        <span>Pedaleador suave, alejado hacia adelante, espalda apoyada en la silla</span>
      </label>
      <div class="row gap">
        <button class="btn" data-act="timer-warmup">▶ Iniciar 5 min</button>
        <button class="btn ghost" data-act="info" data-id="pedaleador">Ver posición</button>
      </div>
    </section>

    <section class="card">
      <div class="row between"><h3>2A · De pie / en silla</h3><span class="chip">3 vueltas</span></div>
      <p class="muted small">Alterná los 3 ejercicios. Completá las 3 vueltas antes de ir al piso.</p>
      ${s.a.map((rows, r) => roundHTML('a', r, rows)).join('')}
    </section>

    <section class="card">
      <div class="row between"><h3>2B · Colchoneta</h3><span class="chip">3 vueltas</span></div>
      <p class="muted small">Bajás al piso una sola vez.</p>
      ${s.b.map((rows, r) => roundHTML('b', r, rows)).join('')}
    </section>

    <section class="card">
      <div class="row between"><h3>3 · Pedaleo principal</h3><span class="chip">40 min</span></div>
      <p class="muted">${TYPES[s.type].hint}</p>
      <label class="check big ${s.main ? 'done' : ''}">
        <input type="checkbox" data-path="main" ${s.main ? 'checked' : ''}>
        <span>${TYPES[s.type].label} completado</span>
      </label>
      <button class="btn" data-act="timer-main">▶ Iniciar 40 min guiados</button>
    </section>

    <section class="card">
      <div class="row between"><h3>4 · Elongación</h3><span class="chip">3 min</span></div>
      ${STRETCHES.map((st, i) => `
        <div class="ex-row ${s.stretch[i] ? 'done' : ''}">
          <label class="check"><input type="checkbox" data-path="stretch.${i}" ${s.stretch[i] ? 'checked' : ''}><span>${esc(st.short)}</span></label>
          <div class="ex-inputs">
            <button class="btn ghost sm" data-act="timer-stretch" data-i="${i}">⏱</button>
            <button class="icon-btn" data-act="info" data-id="${st.id}" aria-label="Ver técnica">?</button>
          </div>
        </div>`).join('')}
    </section>

    <section class="card">
      <h3>Cierre</h3>
      <label class="field">Esfuerzo percibido (RPE): <b id="rpe-val">${s.rpe}</b>/10
        <input type="range" min="1" max="10" data-path="rpe" value="${s.rpe}">
      </label>
      <label class="field">Notas (sensaciones, molestias, cambios de banda)
        <textarea rows="3" data-path="notes" placeholder="Ej: el remo con 35 lb quedó liviano, probar 35+25">${esc(s.notes)}</textarea>
      </label>
      <div class="row gap">
        <button class="btn primary" data-act="finish">✔ Guardar sesión</button>
        <button class="btn ghost danger" data-act="discard">Descartar</button>
      </div>
    </section>`;
}

function roundHTML(key, r, rows) {
  return `
    <div class="round">
      <div class="row between round-head">
        <h4>Vuelta ${r + 1}</h4>
        <button class="btn ghost sm" data-act="rest">⏱ Descanso 60 s</button>
      </div>
      ${rows.map((x, j) => {
        const ex = EX[x.id];
        const p = `${key}.${r}.${j}`;
        return `
          <div class="ex-row ${x.done ? 'done' : ''}">
            <label class="check"><input type="checkbox" data-path="${p}.done" ${x.done ? 'checked' : ''}><span>${esc(ex.short)}</span></label>
            <div class="ex-inputs">
              <label class="mini">Reps<input type="number" inputmode="numeric" min="0" max="99" data-path="${p}.reps" value="${esc(x.reps)}"></label>
              ${ex.bodyweight ? '' : `<label class="mini wide">Banda<input type="text" list="bands" data-path="${p}.load" value="${esc(x.load)}"></label>`}
              <button class="icon-btn" data-act="info" data-id="${ex.id}" aria-label="Ver técnica de ${esc(ex.name)}">?</button>
            </div>
          </div>`;
      }).join('')}
    </div>`;
}

/* ---------- EJERCICIOS ---------- */
function cardHTML(ex, { editable = true } = {}) {
  const custom = state.videos[ex.id];
  const media = custom
    ? mediaHTML(custom)
    : `<img class="media-img" src="media/${ex.id}.gif" alt="${esc(ex.name)}" loading="lazy" data-fallback="${ex.id}">`;
  const chips = [ex.target, ex.reps && `${ex.reps} reps`, ex.load].filter(Boolean)
    .map(c => `<span class="chip">${esc(c)}</span>`).join('');
  return `
    <article class="card ex-card" id="ex-${ex.id}">
      <h3>${esc(ex.name)}</h3>
      ${chips ? `<div class="chips">${chips}</div>` : ''}
      <div class="media">${media}</div>
      <h4>Cómo se hace</h4>
      <ul>${ex.how.map(h => `<li>${h}</li>`).join('')}</ul>
      ${ex.tips ? `<h4>Claves</h4><ul>${ex.tips.map(t => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}
      <a class="btn ghost block" href="${ytSearch(ex.search)}" target="_blank" rel="noopener">▶ Buscar en YouTube Shorts: “${esc(ex.search)}”</a>
      ${editable ? `
        <details class="video-edit">
          <summary>${custom ? 'Cambiar mi video de referencia' : 'Fijar mi video de referencia'}</summary>
          <p class="muted small">Pegá un link de YouTube / Shorts, o una URL https de un GIF/MP4.</p>
          <div class="row gap">
            <input type="url" id="vid-${ex.id}" placeholder="https://youtube.com/shorts/..." value="${esc(custom || '')}">
            <button class="btn sm" data-act="save-video" data-id="${ex.id}">Guardar</button>
            ${custom ? `<button class="btn ghost sm" data-act="clear-video" data-id="${ex.id}">Quitar</button>` : ''}
          </div>
        </details>` : ''}
    </article>`;
}

function renderLibrary() {
  return `
    <section class="card">
      <h2>Guía de ejercicios</h2>
      <p class="muted">Adaptación biomecánica: pies más separados (ancho de hombros o más) para que el abdomen no choque contra los muslos y respires cómodo.</p>
      <nav class="jump">${[...EXERCISES, PEDAL, ...STRETCHES].map(e => `<a href="#ex-${e.id}" data-jump="1">${esc(e.short || e.name)}</a>`).join('')}</nav>
    </section>
    <h2 class="section-title">Parte A · De pie / en silla</h2>
    ${EXERCISES.filter(e => e.block === 'A').map(e => cardHTML(e)).join('')}
    <h2 class="section-title">Parte B · Colchoneta</h2>
    ${EXERCISES.filter(e => e.block === 'B').map(e => cardHTML(e)).join('')}
    <h2 class="section-title">Pedaleador</h2>
    ${cardHTML(PEDAL)}
    <h2 class="section-title">Elongación</h2>
    ${STRETCHES.map(e => cardHTML(e)).join('')}`;
}

/* ---------- HISTORIAL ---------- */
function mondayOf(d) {
  const x = new Date(d); x.setHours(0, 0, 0, 0);
  x.setDate(x.getDate() - ((x.getDay() + 6) % 7));
  return x;
}
function sessionsThisWeek() {
  const k = localDay(mondayOf(new Date()));
  return state.history.filter(h => localDay(mondayOf(new Date(h.date))) === k).length;
}

function renderHistory() {
  const h = [...state.history].filter(s => s.date).sort((a, b) => b.date.localeCompare(a.date));
  const counts = {};
  h.forEach(s => { const k = localDay(mondayOf(new Date(s.date))); counts[k] = (counts[k] || 0) + 1; });
  const weeks = Array.from({ length: 8 }, (_, i) => {
    const m = mondayOf(new Date()); m.setDate(m.getDate() - 7 * (7 - i));
    return { k: localDay(m), label: m.toLocaleDateString('es-AR', { day: 'numeric', month: 'short' }), n: counts[localDay(m)] || 0 };
  });
  const avgRpe = h.length ? (h.reduce((a, s) => a + Number(s.rpe || 0), 0) / h.length).toFixed(1) : '–';

  return `
    <section class="card">
      <h2>Progreso</h2>
      <div class="stats">
        <div><b>${sessionsThisWeek()}</b><span>esta semana (meta ${WEEKLY_GOAL}–4)</span></div>
        <div><b>${h.length}</b><span>sesiones totales</span></div>
        <div><b>${avgRpe}</b><span>RPE promedio</span></div>
      </div>
      <div class="weeks" role="img" aria-label="Sesiones por semana en las últimas 8 semanas">
        ${weeks.map(w => `
          <div class="week ${w.n >= WEEKLY_GOAL ? 'goal' : ''}">
            <span class="week-n">${w.n}</span>
            <span class="week-bar" style="height:${Math.min(w.n, 4) / 4 * 100}%"></span>
            <span class="week-label">${w.label}</span>
          </div>`).join('')}
      </div>
    </section>

    <section class="card">
      <div class="row between"><h3>Sesiones</h3>
        <div class="row gap">
          <button class="btn ghost sm" data-act="export">Exportar</button>
          <label class="btn ghost sm">Importar<input type="file" accept="application/json" id="import" hidden></label>
        </div>
      </div>
      ${h.length ? h.map(s => {
        const loads = ['remo', 'pmr'].map(id => {
          const rows = s.a.flat().filter(x => x.id === id && x.done);
          return rows.length ? `${EX[id].short.split(' ')[0]} ${esc(rows[rows.length - 1].load)}` : null;
        }).filter(Boolean).join(' · ');
        return `
          <article class="hist">
            <div class="row between">
              <div>
                <b>${new Date(s.date).toLocaleDateString('es-AR', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</b>
                <span class="chip">${esc(TYPES[s.type]?.label || s.type)}</span>
              </div>
              <button class="icon-btn" data-act="delete" data-id="${esc(s.id)}" aria-label="Borrar sesión">✕</button>
            </div>
            <div class="bar thin"><span style="width:${s.pct}%"></span></div>
            <p class="small muted">${s.pct}% completado · RPE ${esc(s.rpe)}/10${loads ? ' · ' + loads : ''}</p>
            ${s.notes ? `<p class="small">${esc(s.notes)}</p>` : ''}
          </article>`;
      }).join('') : '<p class="muted">Todavía no hay sesiones guardadas.</p>'}
    </section>`;
}

/* =========================================================
   TEMPORIZADOR (basado en timestamps: no deriva si el navegador frena el setInterval)
   ========================================================= */
const timer = { phases: [], i: 0, endAt: 0, left: 0, running: false, h: null, onDone: null, lastSec: null, lock: null };
let audio;

function beep(times = 1, freq = 880, dur = 0.15) {
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    for (let n = 0; n < times; n++) {
      const o = audio.createOscillator(), g = audio.createGain();
      const t = audio.currentTime + n * (dur + 0.1);
      o.frequency.value = freq; o.connect(g); g.connect(audio.destination);
      g.gain.setValueAtTime(0.25, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      o.start(t); o.stop(t + dur);
    }
  } catch { /* sin audio */ }
  if (navigator.vibrate) navigator.vibrate(times > 1 ? [200, 100, 200] : 150);
}

async function keepAwake(on) {
  try {
    if (on && 'wakeLock' in navigator) timer.lock = await navigator.wakeLock.request('screen');
    else if (!on && timer.lock) { await timer.lock.release(); timer.lock = null; }
  } catch { /* no soportado */ }
}

function startTimer(phases, onDone) {
  stopTimer();
  beep(1, 660, 0.05); // desbloquea el audio con el gesto del usuario
  Object.assign(timer, { phases, i: 0, onDone, left: phases[0].sec * 1000, lastSec: null });
  $('#timer').hidden = false;
  document.body.classList.add('has-timer');
  resumeTimer();
  keepAwake(true);
}
function resumeTimer() {
  timer.running = true;
  timer.endAt = Date.now() + timer.left;
  clearInterval(timer.h);
  timer.h = setInterval(tick, 250);
  tick();
}
function pauseTimer() {
  timer.running = false;
  timer.left = Math.max(0, timer.endAt - Date.now());
  clearInterval(timer.h);
  drawTimer();
}
function stopTimer() {
  clearInterval(timer.h);
  timer.running = false;
  $('#timer').hidden = true;
  document.body.classList.remove('has-timer');
  keepAwake(false);
}
function tick() {
  timer.left = timer.endAt - Date.now();
  const sec = Math.ceil(timer.left / 1000);
  if (timer.left <= 0) return nextPhase();
  if (sec <= 3 && sec !== timer.lastSec) beep(1, 520, 0.08);
  timer.lastSec = sec;
  drawTimer();
}
function nextPhase() {
  timer.i++;
  if (timer.i >= timer.phases.length) {
    beep(3, 990, 0.2);
    const cb = timer.onDone;
    stopTimer();
    if (cb) cb();
    return;
  }
  const ph = timer.phases[timer.i];
  beep(ph.kind === 'hard' ? 2 : 1, ph.kind === 'hard' ? 1100 : 880);
  timer.left = ph.sec * 1000;
  timer.endAt = Date.now() + timer.left;
  timer.lastSec = null;
  drawTimer();
}
function drawTimer() {
  const ph = timer.phases[timer.i];
  if (!ph) return;
  const next = timer.phases[timer.i + 1];
  $('#timer').dataset.kind = ph.kind || 'steady';
  $('#timer-step').textContent = timer.phases.length > 1 ? `Fase ${timer.i + 1} de ${timer.phases.length}` : '';
  $('#timer-label').textContent = ph.label;
  $('#timer-next').textContent = next ? `Sigue: ${next.label}` : 'Última fase';
  $('#timer-clock').textContent = mmss(timer.left);
  $('#timer-fill').style.width = `${100 - (timer.left / (ph.sec * 1000)) * 100}%`;
  $('#timer-toggle').textContent = timer.running ? 'Pausa' : 'Seguir';
}

$('#timer-toggle').addEventListener('click', () => (timer.running ? pauseTimer() : resumeTimer()));
$('#timer-skip').addEventListener('click', nextPhase);
$('#timer-stop').addEventListener('click', stopTimer);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && timer.running) keepAwake(true);
});

function markDone(path) {
  if (!state.current) return;
  setPath(state.current, path, true);
  saveCurrent();
  if (state.view === 'hoy') render();
}

/* =========================================================
   EVENTOS (delegación)
   ========================================================= */
view.addEventListener('input', e => {
  const el = e.target;
  const path = el.dataset.path;
  if (!path || !state.current) return;
  let value = el.type === 'checkbox' ? el.checked : el.value;
  if (el.type === 'number' || el.type === 'range') value = Number(value);
  setPath(state.current, path, value);
  saveCurrent();

  if (el.dataset.rerender) return render();
  if (el.type === 'checkbox') el.closest('.ex-row, .check.big')?.classList.toggle('done', el.checked);
  if (path === 'rpe') $('#rpe-val').textContent = value;
  const pct = progress(state.current);
  $('#pct').textContent = `${pct}%`;
  $('#pct-bar').style.width = `${pct}%`;
});

view.addEventListener('change', e => {
  if (e.target.id !== 'import') return;
  const file = e.target.files[0];
  if (!file) return;
  file.text().then(txt => {
    const data = JSON.parse(txt);
    const ids = new Set(state.history.map(h => h.id));
    const incoming = (data.history || []).filter(h => h && h.id && !ids.has(h.id));
    state.history.push(...incoming);
    state.videos = { ...state.videos, ...(data.videos || {}) };
    store.set(K.history, state.history);
    store.set(K.videos, state.videos);
    if (data.videos) touchMeta('videosAt');
    alert(`Importadas ${incoming.length} sesiones nuevas.`);
    render();
    scheduleSync();
  }).catch(() => alert('El archivo no es un respaldo válido.'));
});

document.addEventListener('click', e => {
  const jump = e.target.closest('[data-jump]');
  if (jump) {
    e.preventDefault();
    $(jump.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  const btn = e.target.closest('[data-act]');
  if (!btn) return;
  const act = btn.dataset.act;
  const s = state.current;

  switch (act) {
    case 'start':
      state.current = newSession(btn.dataset.type);
      saveCurrent(); render(); window.scrollTo(0, 0);
      break;
    case 'timer-warmup':
      startTimer([{ label: 'Entrada en calor: resistencia mínima, cadencia ágil', sec: 300, kind: 'easy' }], () => markDone('warmup'));
      break;
    case 'timer-main':
      startTimer(mainPhases(s.type), () => markDone('main'));
      break;
    case 'timer-stretch': {
      const i = Number(btn.dataset.i);
      startTimer(STRETCHES[i].phases.map(p => ({ ...p, kind: 'easy' })), () => markDone(`stretch.${i}`));
      break;
    }
    case 'rest':
      startTimer([{ label: 'Descanso entre vueltas', sec: 60, kind: 'easy' }]);
      break;
    case 'info':
      $('#info-body').innerHTML = cardHTML(EX[btn.dataset.id], { editable: false });
      $('#info').showModal();
      break;
    case 'finish': {
      const pct = progress(s);
      if (pct < 100 && !confirm(`La sesión está al ${pct}%. ¿Guardarla igual?`)) return;
      state.history.push({ ...s, pct, finishedAt: new Date().toISOString() });
      store.set(K.history, state.history);
      // Recordar la última banda usada por ejercicio para la próxima sesión
      const last = store.get(K.last, {});
      [...s.a.flat(), ...s.b.flat()].forEach(x => { if (x.done && x.load) last[x.id] = x.load; });
      store.set(K.last, last);
      touchMeta('lastAt');
      state.current = null; saveCurrent(); stopTimer();
      location.hash = '#historial';
      scheduleSync();
      break;
    }
    case 'discard':
      if (!confirm('¿Descartar la sesión en curso?')) return;
      state.current = null; saveCurrent(); stopTimer(); render();
      break;
    case 'save-video': {
      const id = btn.dataset.id;
      const url = $(`#vid-${id}`).value.trim();
      if (url && !mediaHTML(url)) return alert('No reconozco ese link. Usá un link de YouTube/Shorts o una URL https de GIF/MP4.');
      if (url) state.videos[id] = url; else delete state.videos[id];
      store.set(K.videos, state.videos); touchMeta('videosAt'); render();
      $(`#ex-${id}`)?.scrollIntoView({ block: 'start' });
      scheduleSync();
      break;
    }
    case 'clear-video':
      delete state.videos[btn.dataset.id];
      store.set(K.videos, state.videos); touchMeta('videosAt'); render();
      scheduleSync();
      break;
    case 'delete':
      if (!confirm('¿Borrar esta sesión del historial?')) return;
      state.history = state.history.filter(h => h.id !== btn.dataset.id);
      state.deleted = [...new Set([...state.deleted, btn.dataset.id])];
      store.set(K.history, state.history); store.set(K.deleted, state.deleted); render();
      scheduleSync();
      break;
    case 'gh-connect': {
      const token = $('#gh-token').value.trim();
      if (!/^(github_pat_|ghp_)[A-Za-z0-9_]+$/.test(token)) return alert('Eso no parece un token de GitHub. Debería empezar con github_pat_ (o ghp_ si es clásico).');
      connectGitHub(token);
      break;
    }
    case 'gh-sync':
      sync();
      break;
    case 'gh-disconnect':
      if (confirm('¿Desconectar este dispositivo? Tus datos locales y el Gist no se borran.')) disconnectGitHub();
      break;
    case 'export': {
      const blob = new Blob([JSON.stringify({ version: 1, history: state.history, videos: state.videos }, null, 2)], { type: 'application/json' });
      const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: `rutina-respaldo-${localDay(new Date())}.json` });
      a.click(); URL.revokeObjectURL(a.href);
      break;
    }
  }
});

/* =========================================================
   SINCRONIZACIÓN CON GITHUB GIST
   - "Login" = token personal (fine-grained) con permiso Gists R/W.
   - Los datos viven en un Gist SECRETO con un archivo JSON.
   - Merge: historial por id (con tombstones para borrados);
            videos y bandas: gana el cambio más reciente.
   ========================================================= */
const GH_FILE = 'rutina-casa-data.json';
const GH_TOKEN_URL = 'https://github.com/settings/personal-access-tokens/new';
const gh = {
  cfg: store.get(K.gh, null), // { token, user, avatar, gistId, lastSync }
  status: 'off',              // off | syncing | ok | error | offline
  msg: '',
  busy: false,
  again: false,
  debounce: null
};

async function ghApi(path, opts = {}) {
  const res = await fetch(`https://api.github.com${path}`, {
    ...opts,
    cache: 'no-store',
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      Authorization: `Bearer ${gh.cfg.token}`,
      ...(opts.body ? { 'Content-Type': 'application/json' } : {})
    }
  });
  if (!res.ok) {
    const err = new Error(`GitHub respondió ${res.status}`);
    err.status = res.status;
    try { err.detail = (await res.json()).message; } catch { /* sin cuerpo */ }
    throw err;
  }
  return res.status === 204 ? null : res.json();
}

function setGh(status, msg = '') {
  gh.status = status;
  gh.msg = msg;
  drawSync();
  if (state.view === 'cuenta') render();
}

function drawSync() {
  const pill = $('#sync-pill');
  if (!pill) return;
  const labels = { off: 'Sin conectar', syncing: 'Sincronizando…', ok: 'Sincronizado', error: 'Error de sync', offline: 'Sin conexión' };
  const st = gh.cfg ? gh.status : 'off';
  pill.dataset.status = st;
  pill.textContent = gh.cfg && st === 'ok' ? `✓ @${gh.cfg.user}` : labels[st];
  pill.title = gh.msg || labels[st];
}

async function findOrCreateGist() {
  for (let page = 1; page <= 10; page++) {
    const list = await ghApi(`/gists?per_page=100&page=${page}`);
    const found = list.find(g => g.files && g.files[GH_FILE]);
    if (found) return found.id;
    if (list.length < 100) break;
  }
  const created = await ghApi('/gists', {
    method: 'POST',
    body: JSON.stringify({
      description: 'Rutina en Casa · datos de seguimiento (no borrar)',
      public: false,
      files: { [GH_FILE]: { content: '{}' } }
    })
  });
  return created.id;
}

function mergeData(remote) {
  const meta = store.get(K.meta, {});
  const rmeta = remote.meta || {};
  const deleted = [...new Set([...state.deleted, ...(remote.deleted || [])])];
  const del = new Set(deleted);
  const byId = new Map();
  [...(remote.history || []), ...state.history].forEach(h => {
    if (h && h.id && !del.has(h.id)) byId.set(h.id, h);
  });
  const newest = (key, localVal, remoteVal) =>
    remoteVal && (rmeta[key] || '') > (meta[key] || '') ? [remoteVal, rmeta[key]] : [localVal, meta[key] || rmeta[key]];
  const [videos, videosAt] = newest('videosAt', state.videos, remote.videos);
  const [lastLoad, lastAt] = newest('lastAt', store.get(K.last, {}), remote.lastLoad);
  return {
    history: [...byId.values()].sort((a, b) => String(a.date || '').localeCompare(String(b.date || ''))),
    deleted,
    videos,
    lastLoad,
    meta: { videosAt, lastAt }
  };
}

const fingerprint = d => JSON.stringify([
  (d.history || []).map(h => h.id).sort(), [...(d.deleted || [])].sort(), d.videos || {}, d.lastLoad || {}
]);

function applyLocal(m) {
  const before = fingerprint({ history: state.history, deleted: state.deleted, videos: state.videos, lastLoad: store.get(K.last, {}) });
  state.history = m.history;
  state.deleted = m.deleted;
  state.videos = m.videos;
  store.set(K.history, m.history);
  store.set(K.deleted, m.deleted);
  store.set(K.videos, m.videos);
  store.set(K.last, m.lastLoad);
  store.set(K.meta, m.meta);
  return before !== fingerprint(m);
}

async function sync() {
  if (!gh.cfg?.token) return;
  if (gh.busy) { gh.again = true; return; }
  if (!navigator.onLine) return setGh('offline', 'Sin conexión: se sincroniza cuando vuelva.');
  gh.busy = true;
  setGh('syncing', 'Sincronizando…');
  let changed = false;
  try {
    if (!gh.cfg.gistId) { gh.cfg.gistId = await findOrCreateGist(); store.set(K.gh, gh.cfg); }
    const gist = await ghApi(`/gists/${gh.cfg.gistId}`);
    const file = gist.files?.[GH_FILE];
    let remote = {};
    if (file) {
      const txt = file.truncated ? await (await fetch(file.raw_url, { cache: 'no-store' })).text() : file.content;
      try { remote = JSON.parse(txt || '{}'); } catch { remote = {}; }
    }
    const merged = mergeData(remote);
    changed = applyLocal(merged);
    if (!file || fingerprint(remote) !== fingerprint(merged)) {
      const content = JSON.stringify({ version: 2, app: 'rutina-casa', updatedAt: new Date().toISOString(), ...merged }, null, 1);
      await ghApi(`/gists/${gh.cfg.gistId}`, { method: 'PATCH', body: JSON.stringify({ files: { [GH_FILE]: { content } } }) });
    }
    gh.cfg.lastSync = new Date().toISOString();
    store.set(K.gh, gh.cfg);
    setGh('ok', `Última sincronización: ${new Date(gh.cfg.lastSync).toLocaleString('es-AR')}`);
  } catch (err) {
    if (err.status === 401) setGh('error', 'El token no es válido o venció. Desconectá y volvé a conectar con uno nuevo.');
    else if (err.status === 403) setGh('error', 'El token no tiene permiso de Gists (lectura y escritura) o se alcanzó el límite de la API.');
    else if (err.status === 404) {
      gh.cfg.gistId = null; store.set(K.gh, gh.cfg); // el gist fue borrado: se recrea en el próximo intento
      setGh('error', 'No encontré el Gist de datos; se va a crear de nuevo en la próxima sincronización.');
    } else setGh('error', `No se pudo sincronizar (${err.detail || err.message}).`);
  } finally {
    gh.busy = false;
    if (gh.again) { gh.again = false; sync(); }
  }
  // No re-renderizamos "Hoy" con una sesión en curso para no robar el foco de un input
  if (changed && !(state.view === 'hoy' && state.current)) render();
}

function scheduleSync() {
  if (!gh.cfg) return;
  clearTimeout(gh.debounce);
  gh.debounce = setTimeout(sync, 1500);
}

async function connectGitHub(token) {
  gh.cfg = { token };
  setGh('syncing', 'Verificando token…');
  try {
    const user = await ghApi('/user');
    gh.cfg = { token, user: user.login, avatar: user.avatar_url, gistId: null, lastSync: null };
    store.set(K.gh, gh.cfg);
    await sync();
  } catch (err) {
    gh.cfg = null;
    setGh('off', err.status === 401 ? 'Token inválido. Revisá que lo copiaste completo.' : `No se pudo conectar (${err.detail || err.message}).`);
    render();
  }
}

function disconnectGitHub() {
  gh.cfg = null;
  try { localStorage.removeItem(K.gh); } catch { /* nada */ }
  setGh('off', '');
  render();
}

window.addEventListener('online', scheduleSync);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible' || !gh.cfg) return;
  const age = Date.now() - new Date(gh.cfg.lastSync || 0).getTime();
  if (age > 60_000) sync();
});

/* ---------- CUENTA ---------- */
function renderAccount() {
  if (!gh.cfg) {
    return `
      <section class="card">
        <h2>Conectar con GitHub</h2>
        <p class="muted">Tus sesiones se guardan en un <b>Gist secreto</b> de tu cuenta, y así ves lo mismo en el celular y en la compu.</p>
        <ol class="steps">
          <li>Iniciá sesión en github.com con la cuenta que vas a usar.</li>
          <li><a href="${GH_TOKEN_URL}" target="_blank" rel="noopener">Creá un token fine-grained</a>:
            <ul>
              <li><b>Token name:</b> rutina-casa</li>
              <li><b>Expiration:</b> la que prefieras (cuando venza, la app te avisa).</li>
              <li><b>Repository access:</b> Public repositories (no necesita repos).</li>
              <li><b>Permissions → Account → Gists:</b> <b>Read and write</b>. Nada más.</li>
            </ul>
          </li>
          <li>Copiá el token (empieza con <code>github_pat_</code>) y pegalo acá:</li>
        </ol>
        <div class="row gap">
          <input type="password" id="gh-token" placeholder="github_pat_..." autocomplete="off" spellcheck="false">
          <button class="btn" data-act="gh-connect">Conectar</button>
        </div>
        ${gh.msg ? `<p class="alert">${esc(gh.msg)}</p>` : ''}
      </section>
      <section class="card">
        <h3>Seguridad</h3>
        <ul class="small muted">
          <li>El token se guarda solo en este navegador (localStorage) y se envía únicamente a <code>api.github.com</code>.</li>
          <li>Con el permiso mínimo, el token solo puede leer y escribir gists: no toca tus repos ni tu cuenta.</li>
          <li>Si perdés el dispositivo, revocá el token en GitHub → Settings → Developer settings.</li>
        </ul>
      </section>`;
  }
  const c = gh.cfg;
  return `
    <section class="card">
      <div class="row gap">
        ${c.avatar ? `<img class="avatar" src="${esc(c.avatar)}" alt="">` : ''}
        <div>
          <h2>@${esc(c.user)}</h2>
          <p class="muted small">Conectado en este dispositivo</p>
        </div>
      </div>
      <p class="sync-state" data-status="${gh.status}">${esc(gh.msg || 'Listo para sincronizar.')}</p>
      ${c.gistId ? `<p class="small"><a href="https://gist.github.com/${esc(c.gistId)}" target="_blank" rel="noopener">Ver el Gist de datos ↗</a></p>` : ''}
      <div class="row gap">
        <button class="btn" data-act="gh-sync" ${gh.busy ? 'disabled' : ''}>⟳ Sincronizar ahora</button>
        <button class="btn ghost danger" data-act="gh-disconnect">Desconectar este dispositivo</button>
      </div>
    </section>
    <section class="card">
      <h3>Cómo funciona</h3>
      <ul class="small muted">
        <li>Se sincroniza al abrir la app, al volver a la pestaña, al recuperar conexión y cada vez que guardás o borrás una sesión o cambiás un video.</li>
        <li>Las sesiones se <b>unen</b> entre dispositivos (no se pisan). Lo que borrás en uno se borra en todos.</li>
        <li>La sesión en curso queda en este dispositivo hasta que la guardás.</li>
        <li>Desconectar no borra tus datos locales ni el Gist.</li>
      </ul>
    </section>`;
}

/* =========================================================
   RUTEO POR HASH (funciona en GitHub Pages sin config)
   ========================================================= */
function route() {
  const v = location.hash.replace('#', '');
  state.view = ['hoy', 'ejercicios', 'historial', 'cuenta'].includes(v) ? v : 'hoy';
  render();
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
route();
if (gh.cfg) sync();

// Couvert : images de la planche (une par plan). Un seul monde, le plan de salle vu du dessus (3200 x 2000),
// cadré par une caméra (cx, cy, échelle) comme dans le film. Chaque page P<nn>.html pose window.SHOT puis charge ce fichier.
// Même géométrie que reference/salle.html (source unique des séquences).
(function () {
  const T = [
    { id: 1, x: 520, y: 440, k: "r2" }, { id: 2, x: 940, y: 440, k: "s4" }, { id: 3, x: 1360, y: 440, k: "r2" },
    { id: 4, x: 2320, y: 480, k: "s4" }, { id: 5, x: 2740, y: 440, k: "r2" }, { id: 6, x: 520, y: 820, k: "s4" },
    { id: 7, x: 1560, y: 780, k: "rect6" }, { id: 8, x: 2320, y: 900, k: "r2" }, { id: 9, x: 2740, y: 860, k: "s4" },
    { id: 10, x: 520, y: 1200, k: "r2" }, { id: 11, x: 1360, y: 1200, k: "s4" }, { id: 12, x: 940, y: 1180, k: "r4" },
    { id: 13, x: 1960, y: 1220, k: "s4" }, { id: 14, x: 2600, y: 1250, k: "rect6" },
  ];
  const NAMES = { 1: "LEROY ×2", 2: "PETIT ×4", 3: "SIMON ×2", 4: "BERNARD ×4", 5: "ROUX ×2", 6: "FAURE ×4", 7: "MARTIN ×6",
    8: "BLANC ×2", 9: "GIRARD ×4", 10: "MOREL ×2", 11: "LAMBERT ×4", 12: "DUVAL ×4", 13: "GARNIER ×4", 14: "FONTAINE ×6" };
  const GEO = {
    r2: { w: 150, h: 150, chairs: [[0, -108], [0, 108]], plates: [[0, -42], [0, 42]] },
    r4: { w: 200, h: 200, chairs: [[0, -132], [0, 132], [-132, 0], [132, 0]], plates: [[0, -60], [0, 60], [-60, 0], [60, 0]] },
    s4: { w: 180, h: 180, chairs: [[0, -122], [0, 122], [-122, 0], [122, 0]], plates: [[0, -52], [0, 52], [-52, 0], [52, 0]] },
    rect6: { w: 380, h: 170, chairs: [[-125, -117], [0, -117], [125, -117], [-125, 117], [0, 117], [125, 117]],
      plates: [[-125, -46], [0, -46], [125, -46], [-125, 46], [0, 46], [125, 46]] },
  };

  function table(t, o) {
    const g = GEO[t.k], cls = t.k === "rect6" ? "rect" : t.k === "s4" ? "square" : "round";
    let h = `<div class="table ${cls}${o.off ? " off" : ""}" style="left:${t.x}px;top:${t.y}px;width:${g.w}px;height:${g.h}px">`;
    if (!o.off && !o.light) h += `<div class="halo"${o.halo ? ` style="opacity:${o.halo}"` : ""}></div>`;
    for (const [cx, cy] of g.chairs) {
      const rot = Math.abs(cx) > Math.abs(cy) ? 90 : 0;
      h += `<div class="chair" style="left:${g.w / 2 + cx}px;top:${g.h / 2 + cy}px;transform:translate(-50%,-50%) rotate(${rot}deg)"></div>`;
      if (o.guests) h += `<div class="guest" style="left:${g.w / 2 + cx * 1.02}px;top:${g.h / 2 + cy * 1.02}px"></div>`;
    }
    h += `<div class="top"></div>`;
    for (const [px, py] of g.plates) h += `<div class="plate" style="left:${g.w / 2 + px}px;top:${g.h / 2 + py}px"></div>`;
    h += `<div class="candle"></div>`;
    if (o.tent) h += `<div class="tent" style="top:${-g.h / 2 - 20}px">${o.tent}</div>`;
    if (o.tag === "ok") h += `<div class="tag" style="top:${-74}px"><span class="tick">✓</span>Confirmé</div>`;
    if (o.tag === "free") h += `<div class="tag free" style="top:${-74}px">Libérée</div>`;
    h += `<div class="tnum" style="left:${g.w / 2}px;top:${g.h + 150}px">T${t.id}</div></div>`;
    return h;
  }

  function world(s) {
    const light = s.theme === "light";
    let h = `<div class="${light ? "floor-light" : "floor-dark"}"></div>`;
    h += `<div class="kitchen-dark" style="left:300px;top:1480px;width:2680px;height:480px"></div>`;
    h += `<div class="wall" style="left:290px;top:230px;width:2700px;height:1230px"></div>`;
    // the pass (kitchen counter) and its plates
    h += `<div class="abs" style="left:1050px;top:1560px;width:1100px;height:120px;border-radius:8px;background:${light ? "#cfd2d4" : "#3a3f42"};box-shadow:0 10px 30px rgba(0,0,0,.4)"></div>`;
    if (!light) for (let i = 0; i < 4; i++)
      h += `<div class="abs" style="left:${1150 + i * 270}px;top:1540px;width:220px;height:160px;border-radius:50%;background:radial-gradient(circle,rgba(255,150,80,.35),transparent 70%)"></div>`;
    // the bin
    h += `<div class="abs" style="left:2700px;top:1670px;width:180px;height:180px;border-radius:50%;background:${light ? "#bdb5aa" : "#2b2725"};box-shadow:inset 0 0 0 14px ${light ? "#a9a196" : "#3a3532"},0 10px 26px rgba(0,0,0,.45)"></div>`;
    // the order board (cork)
    h += `<div class="abs" style="left:330px;top:1530px;width:360px;height:400px;border-radius:8px;background:${light ? "#d6c3a3" : "#3b2f24"}"></div>`;
    h += `<div class="tnum" style="left:1600px;top:1520px">CUISINE</div>`;
    for (const t of T) h += table(t, Object.assign({ light, tent: s.tents ? NAMES[t.id] && "RÉSERVÉ" : null }, (s.tables || {})[t.id] || {}, s.all || {}));
    return h + (s.worldExtra || "");
  }

  function sub(txt) {
    // [x] = key-word box ; {x} = peak stroke ; ~x~ = word not spoken yet (grey)
    const html = txt.replace(/\[([^\]]+)\]/g, '<span class="box">$1</span>').replace(/\{\{([^}]+)\}\}/g, '<span class="trait half">$1</span>')
      .replace(/\{([^}]+)\}/g, '<span class="trait">$1</span>').replace(/~([^~]+)~/g, '<span class="grey">$1</span>');
    return `<div class="sub">${html}</div>`;
  }

  const offs = (ids, extra) => Object.fromEntries(ids.map((i) => [i, Object.assign({ off: true }, extra || {})]));
  const all = (o) => Object.fromEntries(T.map((t) => [t.id, o]));
  const fgGlass = (x, y, d) => `<div class="abs blur24" style="left:${x}px;top:${y}px;width:${d}px;height:${d}px;border-radius:50%;box-shadow:inset 0 0 0 26px rgba(255,240,220,.18);background:radial-gradient(circle,rgba(255,220,180,.06),transparent 60%)"></div>`;
  const cursor = (x, y, extra) => `<svg class="cursor" style="left:${x}px;top:${y}px;${extra || ""}" viewBox="0 0 22 28"><path d="M2 2 L2 23 L7.5 17.8 L11.5 26.5 L15 25 L11.2 16.5 L18.5 16.5 Z" fill="#fff" stroke="#111" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
  const sms = (side, text, x, y, w) => side === "in"
    ? `<div class="abs" style="left:${x}px;top:${y}px;max-width:${w}px;background:#e9e9eb;color:#111;font:500 25px/1.3 'Instrument Sans';padding:14px 20px;border-radius:26px">${text}</div>`
    : `<div class="abs" style="right:${x}px;top:${y}px;max-width:${w}px;background:#0b84fe;color:#fff;font:500 25px/1.3 'Instrument Sans';padding:14px 20px;border-radius:26px">${text}</div>`;
  const resaRow = (y, h, name, n, ok, extra) => `<div class="abs" style="left:22px;right:22px;top:${y}px;height:84px;border-radius:16px;background:#f6f1e8;display:flex;align-items:center;gap:16px;padding:0 18px;${extra || ""}">
      <div class="mono" style="font-weight:700;font-size:22px;color:#1c1612">${h}</div><div style="flex:1;font:600 24px 'Instrument Sans';color:#1c1612">${name}<div style="font:500 18px 'Instrument Sans';color:#5c5348">${n}</div></div>
      ${ok ? '<div style="width:34px;height:34px;border-radius:50%;background:#c4532a;color:#fff;text-align:center;line-height:34px;font-weight:700">✓</div>' : ""}</div>`;
  const couvertApp = (rows) => `<div class="phone" style="left:1250px;top:30px;transform:scale(.9);transform-origin:50% 0"><div class="screen"><div class="island"></div>
      <div class="abs wordmark" style="left:30px;top:74px;font-size:40px;color:#1c1612">Couvert</div>
      <div class="abs micro" style="left:32px;top:132px;color:#5c5348;font-size:15px">Réservations · Sam. 14 oct.</div>${rows}</div></div>`;

  const S = {
    1: { theme: "dark", cam: [940, 1150, 2.7], tables: { 12: { tent: "RÉSERVÉ · SAM. 20:00" } },
      over: fgGlass(-120, 620, 520) + sub("Samedi, [vingt heures].") },
    2: { theme: "dark", cam: [1640, 1000, 0.5], tents: true,
      over: `<div class="card" style="left:1180px;top:150px;width:560px;height:640px;background:#f4ecdd;transform:rotate(3deg);box-shadow:0 40px 90px rgba(0,0,0,.6)">
        <div class="abs micro" style="left:40px;top:40px;color:#5c5348">Cahier · samedi 14</div>
        ${Array.from({ length: 9 }, (_, i) => `<div class="abs" style="left:40px;right:40px;top:${100 + i * 52}px;border-bottom:1px solid #d8ccb8;font:600 24px 'Instrument Sans';color:#2b221c">${["Leroy 2", "Petit 4", "Simon 2", "Bernard 4", "Roux 2", "Faure 4", "Martin 6", "Blanc 2", "Girard 4"][i]}</div>`).join("")}
        <div class="stamp" style="left:150px;top:300px">COMPLET</div></div>` + sub("Ta salle est [pleine]... {sur le papier}.") , camShift: -380 },
    3: { theme: "dark", cam: [940, 1180, 3.1], tables: { 12: { tent: "RÉSERVÉ · SAM. 20:00" } },
      over: `<div class="abs blur6" style="left:1130px;top:-60px;width:150px;height:560px;background:linear-gradient(#26262a,#1d1d20);border-bottom:34px solid #f2efe9;border-radius:40px;transform:rotate(18deg)"></div>
        <div class="abs blur2" style="left:1010px;top:440px;width:150px;height:120px;border-radius:50% 50% 45% 45%;background:#d9a77f;transform:rotate(18deg)"></div>
        <div class="abs" style="left:880px;top:430px;width:120px;height:120px;background:#fffaf2;clip-path:polygon(0 0,100% 0,50% 100%);transform:rotate(-12deg);box-shadow:0 6px 12px rgba(0,0,0,.3)"></div>
        <div class="abs mono" style="right:80px;top:70px;font-size:30px;font-weight:700;color:#cfc1b3;letter-spacing:.1em">20:47</div>` },
    4: { theme: "dark", cam: [1560, 800, 1.55], tents: true, tables: { 7: { off: true, tent: "MARTIN ×6" } },
      worldExtra: `<div class="abs blur6" style="left:1520px;top:600px;width:90px;height:190px;border-radius:50%;border-left:6px solid rgba(200,190,180,.45);transform:rotate(12deg)"></div>`,
      over: sub("La table de [six] ne viendra pas.") },
    5: { theme: "dark", cam: [1960, 680, 0.95], tents: true, tables: offs([7, 4]),
      over: sub("Ni la table de [quatre].") },
    6: { theme: "dark", cam: [510, 1740, 2.1],
      worldExtra: `<div class="slip" style="left:370px;top:1570px;width:280px;transform:rotate(-3deg)"><div class="micro" style="font-size:13px;color:#5c5348">Bon de commande</div>
        <div style="font-size:14px;margin-top:6px">SAM. 14 · 08:10</div><div style="font:700 92px 'Space Mono';letter-spacing:-.04em;margin-top:8px">40</div><div class="micro" style="font-size:13px">couverts</div>
        <div style="font-size:13px;margin-top:10px;line-height:1.5">Viande · 8 kg<br>Poisson · 6 kg<br>Légumes · 12 kg</div></div>`,
      over: sub("Ce matin, tu as acheté pour [quarante couverts].") },
    7: { theme: "dark", cam: [1600, 1610, 1.35], tents: true,
      worldExtra: Array.from({ length: 6 }, (_, i) => `<div class="plate" style="left:${1130 + i * 180}px;top:1620px;width:110px;height:110px;background:radial-gradient(circle,#8a5a3a 0 30%,#5d6b3a 31% 42%,#fbf7f0 43%)"></div>`).join(""),
      over: `<div class="abs mono" style="left:0;right:0;top:250px;text-align:center;font-size:150px;font-weight:700;color:#f6efe6;letter-spacing:-.03em;text-shadow:0 0 40px rgba(240,160,98,.4)">22:00</div>` + sub("Et à vingt-deux heures, ~tu jettes ce que tu as cuisiné...~") },
    8: { theme: "dark", cam: [2760, 1720, 1.9],
      worldExtra: `<div class="plate blur2" style="left:2730px;top:1690px;width:130px;height:130px;transform:translate(-50%,-50%) rotate(-28deg) scaleY(.7);background:radial-gradient(circle,#8a5a3a 0 30%,#5d6b3a 31% 42%,#fbf7f0 43%)"></div>
        <div class="abs blur6" style="left:2790px;top:1740px;width:70px;height:40px;border-radius:50%;background:#7a4f33"></div>`,
      over: sub("tu [jettes] ce que tu as cuisiné...") },
    9: { theme: "dark", cam: [1640, 1000, 0.5], tents: true, tables: Object.assign(offs([7, 4, 1, 3, 5, 8, 9, 13]), { 12: { halo: .7 } }),
      over: sub("pour {personne}.") },
    10: { theme: "dark", cam: [1640, 1000, 0.5], all: { off: true }, hideWorld: true,
      over: `<div class="type" style="top:330px">Et si chaque table réservée<br>était une table <span class="trait">tenue</span> ?</div>
        <div class="abs" style="left:930px;top:640px;width:60px;height:60px;border-radius:50%;background:radial-gradient(circle,#fff 0 18%,#ffd9a0 35%,rgba(240,160,98,.6) 55%,transparent 72%);box-shadow:0 0 60px 30px rgba(240,160,98,.35)"></div>` },
    11: { theme: "light", cam: [1300, 1100, 0.62], blurWorld: 6,
      over: couvertApp(resaRow(190, "20:00", "Martin", "6 pers.", true) + resaRow(290, "20:30", "Bernard", "4 pers.", true) +
        resaRow(390, "21:00", "Duval", "4 pers.", false, "box-shadow:0 0 0 3px #c4532a;transform:scale(1.04)")) +
        `<div class="abs" style="left:420px;top:330px;padding:14px 26px;border-radius:999px;background:#1c1612;color:#f6efe6" ><span class="mono" style="font-size:44px;font-weight:700">02:14</span><span class="micro" style="font-size:16px;margin-left:14px;color:#cfc1b3">nouvelle résa</span></div>` +
        sub("Couvert prend tes réservations, [jour et nuit].") },
    12: { theme: "light", cam: [1640, 1080, 0.55], tables: Object.assign(all({ tag: "ok" }), { 9: {}, 13: {}, 14: {}, 11: {} }),
      over: `<div class="abs micro" style="left:0;right:0;top:22px;text-align:center;color:#5c5348">Ven. 13 · 18:00 · la veille</div>` + sub("Il confirme chaque table [la veille],") },
    13: { theme: "light", cam: [1560, 780, 1.2], blurWorld: 8, tables: { 7: { tag: "ok" } },
      over: `<div class="phone" style="left:750px;top:30px;transform:scale(.9);transform-origin:50% 0"><div class="screen"><div class="island"></div>
        <div class="abs" style="left:0;right:0;top:70px;text-align:center;font:600 22px 'Instrument Sans';color:#111">Couvert</div>
        ${sms("in", "Bonjour Martin, votre table pour 6 demain à 20 h. Répondez OUI pour confirmer.", 22, 160, 320)}
        ${sms("out", "OUI", 22, 360, 200)}
        <div class="abs" style="right:26px;top:432px;font:500 17px 'Instrument Sans';color:#8e8e93">Distribué</div></div></div>` + sub("par [SMS].") },
    14: { theme: "light", cam: [2320, 560, 1.3], blurWorld: 6, tables: { 4: { tag: "free" } },
      over: `<div class="phone" style="left:1150px;top:30px;transform:scale(.9);transform-origin:50% 0"><div class="screen"><div class="island"></div>
        <div class="abs" style="left:0;right:0;top:70px;text-align:center;font:600 22px 'Instrument Sans';color:#111">Couvert</div>
        ${sms("in", "Bonjour, votre table pour 4 demain à 20 h 30. Répondez OUI pour confirmer.", 22, 160, 320)}
        ${sms("out", "Désolés, on ne pourra pas venir.", 22, 360, 300)}</div></div>` + sub("Une [annulation] ?") },
    15: { theme: "light", cam: [1640, 1080, 0.55], tables: Object.assign(all({ tag: "ok" }), { 4: { tag: "free" } }), camShift: 330,
      over: `<div class="card" style="left:1290px;top:150px;width:520px;height:560px">
        <div class="abs micro" style="left:34px;top:34px;color:#5c5348">Liste d'attente</div>
        ${[["Morel", "6 pers."], ["Leroy", "2 pers."]].map((r, i) => `<div class="abs" style="left:28px;right:28px;top:${210 + i * 110}px;height:90px;border-radius:14px;background:#f6f1e8;padding:16px 22px;font:600 28px 'Instrument Sans';color:#1c1612">${r[0]} <span style="font-weight:500;font-size:22px;color:#5c5348">· ${r[1]}</span></div>`).join("")}</div>
        <div class="abs blur2" style="left:930px;top:170px;width:420px;height:90px;border-radius:14px;background:#c4532a;color:#fff;padding:18px 22px;font:600 30px 'Instrument Sans';box-shadow:0 20px 40px rgba(196,83,42,.35);transform:rotate(-6deg)">Dubois · 4 pers. → T4</div>` +
        sub("La place repart aussitôt à la [liste d'attente].") },
    16: { theme: "light", cam: [510, 1720, 1.6],
      worldExtra: `<div class="slip" style="left:370px;top:1570px;width:280px;transform:rotate(-3deg)"><div class="micro" style="font-size:13px;color:#5c5348">Bon de commande</div>
        <div style="font-size:14px;margin-top:6px">SAM. 14 · 08:00</div><div style="font:700 92px 'Space Mono';letter-spacing:-.04em;margin-top:8px;color:#c9bfb0">--</div><div class="micro" style="font-size:13px">couverts</div></div>`,
      over: `<div class="abs" style="left:-200px;top:-300px;width:1400px;height:1100px;background:linear-gradient(115deg,rgba(255,236,200,.55),transparent 60%)"></div>` + sub("Et le [matin],") },
    17: { theme: "light", cam: [510, 1720, 1.6], blurWorld: 4,
      worldExtra: `<div class="slip" style="left:370px;top:1570px;width:280px;transform:rotate(-3deg)"><div class="micro" style="font-size:13px;color:#5c5348">Bon de commande</div>
        <div style="font-size:14px;margin-top:6px">SAM. 14 · 08:00</div><div style="font:700 92px 'Space Mono';letter-spacing:-.04em;margin-top:8px">38</div><div class="micro" style="font-size:13px">couverts</div></div>`,
      over: `<div class="card" style="left:1060px;top:170px;width:620px;height:500px">
        <div class="abs wordmark" style="left:44px;top:36px;font-size:34px;color:#1c1612">Couvert</div>
        <div class="abs micro" style="left:46px;top:96px;color:#5c5348">Samedi 14 · ce soir</div>
        <div class="abs mono" style="left:40px;top:150px;font-size:190px;font-weight:700;letter-spacing:-.05em;color:#1c1612;line-height:1">38</div>
        <div class="abs" style="left:46px;top:370px;font:600 30px 'Instrument Sans';color:#1c1612">couverts confirmés</div>
        <div class="abs" style="left:46px;top:420px;font:500 22px 'Instrument Sans';color:#5c5348">14 tables · 0 en attente</div></div>` +
        sub("tu sais [exactement] pour combien tu cuisines.") },
    18: { theme: "light", cam: [1640, 960, 0.5], all: { tag: "ok", guests: true },
      over: `<div class="abs wordmark" style="left:0;right:0;top:40px;text-align:center;font-size:120px;color:#1c1612;text-shadow:0 4px 30px rgba(245,239,228,.9)">Couvert</div>` },
    19: { theme: "light", cam: [1640, 1080, 0.5], all: { tag: "ok", guests: true },
      over: sub("Ta salle, [pleine] {pour de vrai}.") },
    20: { theme: "dark", hideWorld: true,
      over: `<div class="abs" style="left:560px;top:120px;width:800px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(196,83,42,.22),transparent 65%)"></div>
        <div class="abs wordmark" style="left:0;right:0;top:200px;text-align:center;font-size:150px;color:#f6efe6">Couvert</div>
        <div class="abs" style="left:0;right:0;top:390px;text-align:center;font:600 46px 'Instrument Sans';color:#cfc1b3">Ta salle, pleine pour de vrai.</div>
        <div class="abs" style="left:610px;top:520px;width:700px;height:110px;border-radius:14px;background:#f5efe4;color:#9f3f1c;font:800 40px 'Big Shoulders';letter-spacing:.06em;text-align:center;line-height:110px;box-shadow:0 0 60px rgba(196,83,42,.35)">ESSAYER UN MOIS GRATUIT</div>
        <div class="abs mono" style="left:0;right:0;top:668px;text-align:center;font-size:22px;color:#958a7f;letter-spacing:.1em">couvert-resto.fr</div>` +
        cursor(1310, 620, "transform:scale(1.15)") + sub("Essaie-le [gratuitement], un mois.") },
    21: { theme: "dark", hideWorld: true,
      over: `<div class="abs" style="left:560px;top:120px;width:800px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(196,83,42,.3),transparent 65%)"></div>
        <div class="abs wordmark" style="left:0;right:0;top:200px;text-align:center;font-size:150px;color:#f6efe6">Couvert</div>
        <div class="abs" style="left:0;right:0;top:390px;text-align:center;font:600 46px 'Instrument Sans';color:#cfc1b3">Ta salle, pleine pour de vrai.</div>
        <div class="abs" style="left:560px;top:470px;width:800px;height:210px;border-radius:30px;box-shadow:0 0 0 4px rgba(220,107,61,.35)"></div>
        <div class="abs" style="left:610px;top:520px;width:700px;height:110px;border-radius:14px;background:#c4532a;color:#fff;font:800 40px 'Big Shoulders';letter-spacing:.06em;text-align:center;line-height:110px;box-shadow:0 0 80px rgba(196,83,42,.55)">ESSAYER UN MOIS GRATUIT</div>
        <div class="abs mono" style="left:0;right:0;top:668px;text-align:center;font-size:22px;color:#958a7f;letter-spacing:.1em">couvert-resto.fr</div>` +
        cursor(1000, 585, "transform:scale(.95)") +
        `<div class="abs" style="left:0;top:0;width:1920px;height:1080px;background:radial-gradient(circle at 960px 470px,transparent 520px,rgba(0,0,0,.92) 700px)"></div>` },
  };

  const s = S[window.SHOT];
  const stage = document.getElementById("stage");
  if (s.theme === "light") stage.classList.add("light");
  let h = "";
  if (!s.hideWorld) {
    const [cx, cy, sc] = s.cam;
    const shift = s.camShift || 0; // shifts the framing left or right for side-by-side layouts
    h += `<div id="world" style="transform:translate(${960 + shift}px,540px) scale(${sc}) translate(${-cx}px,${-cy}px);${s.blurWorld ? `filter:blur(${s.blurWorld}px)` : ""}">${world(s)}</div>`;
  }
  h += s.over || "";
  h += `<div class="grain"></div>`;
  stage.innerHTML = h;
})();

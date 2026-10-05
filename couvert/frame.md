---
version: 2
name: "Couvert: launch frame"
description: >
  Video-first frame spec for the Couvert launch motion design, built on ../patterns/PATTERNS.md. Le restaurant est un plan
  de salle vu du dessus : chaque table réservée porte une bougie ; une table qui ne vient pas s'éteint, une table tenue
  reste allumée.
  Two worlds: the PROBLEM lives on a warm near-black stage (la salle le soir, éclairée aux bougies), the SOLUTION on a
  light ground (le même plan, au propre, en plein jour); the end card returns to the dark stage. One accent only,
  braise, kept for what matters: the key-word box of each subtitle, the 4 peak strokes and the « Confirmé » tags.
  The sentence of the voice is a subtitle at the bottom center that arrives word by word.
unit: 1920×1080
principle: readable without sound · one thing to look at at a time · one accent, one highlight mechanism · the voice cues every reveal

colors:
  canvas: "#100c0a"          # dark world (problem + end card)
  canvas-2: "#17110e"
  paper: "#f5efe4"           # light world (solution), couleur nappe
  paper-2: "#ece3d4"
  card-light: "#fffdf8"
  ink: "#f6efe6"
  ink-soft: "#cfc1b3"
  ink-mute: "#958a7f"
  ink-dark: "#1c1612"
  ink-dark-soft: "#5c5348"
  hairline-light: "#ddd2c2"
  accent: "#c4532a"          # braise
  accent-light: "#dc6b3d"
  accent-deep: "#9f3f1c"
  accent-glow: "#f0a062"
  flame: "#ffd9a0"           # the candle core only (never text)

fonts:
  Instrument Sans: { files: ["assets/fonts/InstrumentSans-400.woff2 (400)", "assets/fonts/InstrumentSans-500.woff2 (500)", "assets/fonts/InstrumentSans-600.woff2 (600)", "assets/fonts/InstrumentSans-700.woff2 (700)"] }
  Space Mono: { files: ["assets/fonts/SpaceMono-400.woff2 (400)", "assets/fonts/SpaceMono-700.woff2 (700)"] }
  Big Shoulders: { files: ["assets/fonts/BigShoulders-800.woff2 (800)"] }

typography:
  subtitle:   { fontFamily: "Instrument Sans", px: 62, weight: 600, lineHeight: 74, tracking: "-0.015em", note: "the sentence of the voice at the BOTTOM CENTER (top at y 896, inside the band y 890 to 980 that carries nothing else), word by word on its timestamps; light shadow; ink on dark, ink-dark on paper. Never at the top left" }
  type:       { fontFamily: "Instrument Sans", px: 84, weight: 600, lineHeight: 1.12, tracking: "-0.025em", note: "ONLY the pivot question (frame 5): centered on black, no subtitle meanwhile" }
  numeral-jumbo: { fontFamily: "Space Mono", px: 190, weight: 700, tracking: "-0.05em", tabularNums: true, note: "40, 22:00, 38: they roll, never fade in" }
  ui:         { fontFamily: "Instrument Sans", px: 26, weight: 500, lineHeight: 1.3 }
  micro:      { fontFamily: "Space Mono", px: 18, weight: 400, tracking: "0.2em", upper: true }
  tent:       { fontFamily: "Space Mono", px: 15, weight: 700, tracking: "0.12em", upper: true, note: "the tent card on a table: RÉSERVÉ, MARTIN ×6" }
  wordmark:   { fontFamily: "Big Shoulders", px: 64, weight: 800, upper: true, note: "'COUVERT' in ink (dark) or ink-dark (light), never in accent" }
  cta:        { fontFamily: "Big Shoulders", px: 40, weight: 800, upper: true }

world:
  source: "reference/salle.html: the executable world (CSS block and SALLE kit between the markers). Every frame that shows the room copies them verbatim (only ../assets/ becomes assets/) and calls SALLE.build / SALLE.cam"
  size: "3200 × 2000 world units, camera = (cx, cy, scale), the point (cx, cy) at the center of the frame"
  room: "walls (290, 230) to (2990, 1460); floor: dark wood planks (dark world) or a hairline grid every 80 u (light world): the texture makes the drift visible"
  tables: "T1 (520, 440) r2 · T2 (940, 440) s4 · T3 (1360, 440) r2 · T4 (2320, 480) s4 « la table de quatre » · T5 (2740, 440) r2 · T6 (520, 820) s4 · T7 (1560, 780) rect6 « la table de six » · T8 (2320, 900) r2 · T9 (2740, 860) s4 · T10 (520, 1200) r2 · T11 (1360, 1200) s4 · T12 (940, 1180) r4 « la table du gag, la bougie du pivot » · T13 (1960, 1220) s4 · T14 (2600, 1250) rect6 (r2 = ronde 150 u, r4 = ronde 200 u, s4 = carrée 180 u, rect6 = 380 × 170 u)"
  kitchen: "zone (300, 1480) to (2980, 1960) ; le passe (1050, 1560) 1100 × 120 sous 4 lampes chauffantes ; la poubelle (2790, 1760) ø 180 ; le tableau de liège (330, 1530) 360 × 400 avec le bon de commande"
  framings: "plan large cam(1640, 1000, 0.5) dark / cam(1640, 1080, 0.5 to 0.55) light (keeps the kitchen above the subtitle band) · T12 cam(940, 1180, 2.7 to 3.1) · T7 cam(1560, 800, 1.55) · T7 + T4 cam(1960, 680, 0.95) · bon de commande cam(510, 1730, 1.6 to 2.1) · passe cam(1600, 1610, 1.35) · poubelle cam(2760, 1720, 1.9)"
  camera-kit: "#drift (linear drift, 10 to 30 u/s or 2 to 4 %/s), #cam (scale, rotation around 960,540), #world (translation); crans 0.12 s expo.inOut with a 6 px blur; whips 0.15 to 0.3 s; changes of station 0.3 to 0.9 s power2.in out, expo.out in"

components:
  ground-dark: "canvas + wood planks + a warm halo around every lit table (radial accent-glow 42 % → accent 16 % → transparent, ø 520 u) + grain 5 %. class=\"clip\" layer, full duration."
  ground-light: "paper + hairline grid + grain 3 %. Tables card-light with a hairline ring, chairs #d9cfbf."
  table-lit: "nappe #e9dfcf, plates (white discs), the candle (white core, flame, accent-glow) at the center, halo on the floor. In the light world: the candle stays, the halo becomes the « Confirmé » tag."
  table-off: "the candle goes out (core → #6b625b, glow 0 in 0.12 s), a thin wisp of smoke rises 0.6 s, the halo shrinks to 0 in 0.25 s, the nappe darkens to #3b332d. This IS signature 1."
  tag-confirme: "pill accent, white text « Confirmé », white tick disc; arrives ×1.6 blurred 6 px from above the table and settles in 0.12 s expo.out. Variant « Libérée »: card-light with an accent ring. This IS signature 2."
  tent-card: "a small paper tent card on the table edge: « RÉSERVÉ », « RÉSERVÉ · SAM. 20:00 », « MARTIN ×6 »."
  word-by-word: "each word appears ON its timestamp, grey (35 %): opacity 0 → 1, y 8 → 0, blur 6 → 0 in 0.14 s, then full ink in 0.2 s; before a seam the subtitle leaves in 0.14 s."
  key-word-box: "a small accent rectangle (radius 3 px) overflowing the word by 0.14em, the word turns paper; traces from the left in 0.16 s power3.out, 0 to 2 frames before the word. ONE per sentence, named [boîte : …]."
  peak-stroke: "a tapered brush stroke accent-light (round attack, thin exit, slight rise) under THE key word, drawn from the left in 0.3 to 0.5 s power2.out. Four peaks: « sur le papier », « personne », « tenue », « pour de vrai »."
  order-slip: "bon de commande on paper, Space Mono: « BON DE COMMANDE », « SAM. 14 · 08:10 », « 40 » jumbo, « COUVERTS », three lines « Viande · 8 kg », « Poisson · 6 kg », « Légumes · 12 kg »; pinned on the cork board."
  phone: "iPhone, Dynamic Island, the same device in the whole film, 420 × 860 at scale 0.9, never lower than y 800 (the subtitle band stays free)."
  sms: "iOS Messages, current style: incoming grey #e9e9eb, outgoing blue #0b84fe (real interface: the only hue other than the accent), « Distribué » under the last outgoing bubble."
  couvert-app: "Couvert is fictional: its interface is ours. White screen, wordmark, micro « RÉSERVATIONS · SAM. 14 OCT. », rows on #f6f1e8 (time in Space Mono, name, covers) with an accent tick when confirmed; the waitlist card « LISTE D'ATTENTE »; the summary card « 38 couverts confirmés »."
  cursor: "white macOS arrow with dark outline; ONE curved move (0.45 s power3.out), direct click: press scale .85 (0.06 s) + accent ripple ring. Never a hesitation."
  end-card: "dark stage, warm accent halo, wordmark COUVERT, promise « Ta salle, pleine pour de vrai. », ONE button « ESSAYER UN MOIS GRATUIT » (paper fill, accent-deep text, then accent fill after the click), mono URL « couvert-resto.fr » (placeholder), 2 to 3 s of living hold (the candle flickers, the halo drifts), then the iris."

negative:
  - "No second highlight mechanism: the key-word box and the 4 peak strokes only, no colored or glowing text."
  - "Nothing but the subtitle in the band y 890 to 980: no wall, no counter, no bin, no phone in it."
  - "One thing to look at at a time; no camera back-and-forth on the plan; no cursor hesitation."
  - "No decor without meaning: every table, plate and paper says something the voice says."
  - "No hue other than the accent, except the candle flame, the food on the plates (muted browns and greens) and the iOS blue of the SMS."
  - "No Inter, Space Grotesk, Geist, system-ui. No emoji."
  - "No visible text that is not listed in the frame's Scene lines (component labels above are allowed)."
  - "Never tween letterSpacing. No repeat:-1."
---

# Couvert : frame spec

The film has two worlds. **The problem** plays in the restaurant at night, seen from above: every table of the floor
plan is reserved and lit by its candle, but the guests do not come, the candles go out one by one, and the food ends
in the bin. A single **pivot** (the question alone on black, under one candle that lights again) freezes everything,
then the light of that candle floods the screen and we land on **the solution**, on the light ground: the same plan,
clean, where every table gets its « Confirmé » tag, a cancelled table is refilled from the waitlist, and the kitchen
knows its exact count. The iris from the candle of T12 takes us back to the dark stage for the **end card**.

Everything the viewer reads is Instrument Sans: the sentence of the voice as a subtitle at the bottom center, word by
word, with exactly one key word per sentence in a small braise box that traces itself first. A tapered brush stroke
under the key word marks the 4 peaks. Numbers, times and labels are Space Mono; the wordmark and the CTA are Big
Shoulders.

---
format: 1920x1080
duration: "45.00s"
message: "Couvert confirme chaque table réservée et remplit les annulations : ta salle est pleine pour de vrai, et tu sais pour combien tu cuisines."
arc: Hook → Problem → Pivot → Turn → Demo → Payoff → Reassurance → CTA
audience: "Restaurateurs indépendants (tutoiement), qui perdent des tables et de la marchandise à cause des réservations non honorées."
mode: autonomous
captions: disabled
music: "pre-mixed with voice and SFX in assets/audio/mix.wav (mounted at root by the orchestrator)"
direction: "A « Samedi soir » (script validé, SCRIPT.md) : le plan de salle vu du dessus, les tables éteintes et allumées"
styleframes: "styleframes/png/P01.png à P21.png (une image par plan, temps dans la planche PLANCHE.html)"
patterns: ../patterns/STORYBOARD-CRAFT.md, ../patterns/PATTERNS.md
---

## Video direction

- **One world** (frame.md) : le plan de salle du restaurant vu du dessus (3200 × 2000 u), 14 tables numérotées et la cuisine en bas. Frames 1-5 = PROBLEM in the dark world (la salle le soir, aux bougies) ; frames 6-10 = SOLUTION in the light world (le même plan, au propre, en plein jour) ; frame 11 = END CARD back on the dark stage. Each frame paints its own full-bleed ground as a `class="clip"` layer.
- **Invisible seams**: every frame enters with `cut`; each seam falls at the top of the blur of a camera move and the `handoff_out` of frame N is copied word for word into the `handoff_in` of frame N+1. Wanted exceptions: aucune coupe franche ; deux effets seulement, posés par assemble.sh : le flash de lumière qui part de la bougie de T12 (LEAK_AT 22.23, cut 22.48, frames 5 → 6) et l'iris qui ouvre la carte de fin depuis la bougie de T12 (IRIS_AT 40.43, frames 10 → 11).
- **Text** (readable without sound): every sentence of the voice is a `subtitle` at the bottom center (band y 890 to 980, nothing else in it) that arrives WORD BY WORD on the timestamps given in each frame (`word@seconds`, frame-local). Exactly ONE word or group per sentence sits in the `key-word-box` (named in the Scene lines as [boîte : …]). No other colored or glowing text. Typographic moment (the sentence IS the image, centered, 84 px at most): la question du pivot, frame 5. « Couvert. » (frame 10) n'a pas de sous-titre : le wordmark le dit.
- **Peaks**: only the 4 peaks named as [trait : …] (« sur le papier », « personne », « tenue », « pour de vrai »): a tapered brush stroke under THE key word. No giant word, no big box.
- **One thing to look at**: in every shot the camera isolates the subject of the sentence (une table, un papier, un téléphone) and shows the whole plan only when the sentence parle de la salle entière (« ta salle est pleine », « pour personne », « chaque table », « ta salle, pleine pour de vrai ») ; never a back-and-forth; side-by-side layouts with equal margins.
- **Real interfaces** (frame.md): iOS Messages (SMS), the same iPhone in the whole film ; l'interface de Couvert (fictive, dessinée par nous).
- **Motion grammar**: two speeds, gestures of 1 to 6 images (expo.out) and linear drifts that never stop; the 0.3 to 0.9 s range is kept for the camera and the cursor; elements arrive too big and blurred then settle; every hold names its living layer (flammes qui vacillent, fumée, dérive); no "effect" transition except the flash and the iris.
- **Visible copy**: exactly the quoted copy of the Scene lines, nothing else.
- **Negative list**: slideshow, screensaver, doubled object (un seul téléphone, un seul bon de commande), colored text instead of the box, giant word, abstract symbol, hesitating cursor, several objects moving during a seam, any hue other than the accent except the flame, the food and the iOS blue.

**MONDE**
- Acte 1, le soir (0.00 à 18.27) : la salle aux bougies ; stations T12 (940, 1180), T7 « six » (1560, 780), T4 « quatre » (2320, 480), bon de commande (510, 1730), passe (1600, 1610), poubelle (2790, 1760), plan large (1640, 1000, 0.5) ; fond parquet sombre (lames de 120 u) qui rend la dérive visible.
- Pivot (18.27 à 22.48) : le noir, la bougie de T12 seule.
- Acte 2, le jour (22.48 à 40.48) : le même plan sur papier, trame de 80 u ; mêmes stations.
- Fin (40.48 à 45.00) : scène sombre, halo braise.
- Couleurs de rôle : accent braise = mot-clé, traits, étiquettes « Confirmé », bouton ; flamme = la bougie seule ; bleu iOS = la bulle SMS sortante (vraie interface).

**SIGNATURES**
- Mécanisme 1 « la bougie » (une table vit ou meurt) : 1.10 (T12 allumée), 2.40 (les 14 tables s'allument), 7.30 (T7 s'éteint), 9.70 (T4 s'éteint), 16.90 à 18.27 (toutes s'éteignent, T12 en dernier), 21.44 (T12 se rallume), 39.20 (toutes allumées, avec leurs convives).
- Mécanisme 2 « l'étiquette Confirmé » : 26.00 à 27.60 (10 tables en cascade), 28.40 (T7), 32.10 (T4 pour Dubois), 37.40 (les 14).
- Registres de texte : sous-titre mot à mot (flou → net, 0,14 s) ; boîte braise (tracée depuis la gauche, 0,16 s) ; trait de pinceau (0,3 à 0,5 s) ; moment typographique du pivot (lettres qui convergent, 0,5 s) ; chiffres jumbo (ils roulent).
- Rimes : le plan large plein de 2.40 (« pleine… sur le papier ») est rejoué à 38.10 (« pleine pour de vrai ») ; le bon de commande « 40 » de 11.50 revient à 35.00 en « 38 » ; la bougie de T12 ouvre le film (0.00), porte le pivot (21.44) et ferme l'iris (40.48).

**PARTITION CAMÉRA** (global times) : 0.00 dérive avant sur T12 (zoom 2,7 → 2,85) · 1.90 recul franc vers le plan large (0,7 s, expo.out) · 3.90 cran vers T12 (0,5 s) · 6.95 filé vers T7 (0,3 s) · 8.60 filé vers T4 (0,35 s) · 10.55 tilt vers le bas, le tableau de liège (0,5 s) · 13.05 whip vers la droite, le passe (0,35 s) · 14.80 filé vers la poubelle (0,3 s) · 16.55 recul vers le plan large (0,6 s) · 17.60 glissement vers T12 (dérive) · 18.27 à 21.90 caméra immobile sur le noir, la dérive passe dans les lettres · 22.48 plan clair flou derrière le téléphone, dérive · 25.40 recul vers le plan large (0,5 s) · 27.60 cran vers T7 et son SMS (0,2 s) · 28.85 filé vers T4 (0,3 s) · 30.30 recul vers le plan large + liste d'attente (0,5 s) · 32.70 travelling vers la cuisine (0,4 s) · 36.50 recul vers le plan large (0,6 s) · 38.10 dérive avant lente · 40.43 iris depuis T12 · 40.48 fin : dérive lente du halo.

**VOIX** : timings in onsets.json ; silences over 0.4 s, each written as a shot with its silent action : 1.31 à 1.99 (recul, les bougies s'allument) · 2.86 à 3.46 (le cahier « COMPLET ») · 4.10 à 7.08 (le gag de T12) · 8.61 à 9.06 (fumée de T7, filé vers T4) · 9.99 à 10.79 (tilt vers la cuisine) · 12.92 à 13.55 (« 40 » se tamponne, whip) · 16.16 à 16.77 (le recul) · 17.32 à 19.22 (les bougies s'éteignent, noir) · 21.81 à 23.15 (la bougie, le flash, le plan clair) · 25.44 à 25.96 (recul) · 28.76 à 29.34 (« Distribué », filé vers T4) · 32.57 à 33.20 (Dubois s'assoit, travelling) · 36.21 à 37.33 (recul, le plan se remplit) · 37.79 à 38.27 (les convives arrivent) · 40.16 à 40.81 (iris) · 42.43 à 45.00 (le clic et la tenue vivante).

**COUPES** (quota of the voice) : aucune coupe franche (voix narrative, quota 0 à 4) ; continuité par la caméra, la bougie de T12 (pont du noir), le flash et l'iris.

**RYTHME** : douleur ≈ 5,5 plans / 10 s (frames 1 à 4, 9 plans en 18,3 s) et un événement toutes les 0,3 à 0,6 s ; solution ≈ 5 plans / 10 s, événements toutes les 0,5 à 0,8 s ; le pivot respire (4,2 s, un seul plan, une lettre ou la flamme qui bouge toujours).

**SON** (global times, on the gestures) : pop 0.08 (la bougie s'allume) · whoosh-short 1.90 (recul) · sparkle 2.40 (les bougies s'allument) · impact-bass-1 3.10 (tampon COMPLET) · click-soft 5.10 et 6.20 (la serviette, deux fois) · whoosh-short 6.95 · click-soft 7.30 (souffle de bougie) · whoosh-short 8.60 · click-soft 9.70 · whoosh-short 10.55 · key-press 11.40 à 11.70 (le chiffre roule) · impact-bass-2 12.95 (« 40 » tamponné) · whoosh 13.05 · whoosh-short 14.80 · impact-bass-1 14.92 (l'assiette dans la poubelle, sur « jettes ») · whoosh-cinematic 16.55 · riser 20.40 à 21.44 · chime 21.44 (la bougie se rallume) · whoosh-cinematic 22.26 (le flash) · notification 23.80 et 24.30 (nouvelles résas) · pop 26.00 à 27.60 (les étiquettes, 10 pops espacés) · ping 28.40 (« OUI ») · notification 29.40 (l'annulation) · whoosh-short 31.80 (Dubois vole vers T4) · pop 32.10 · key-press 34.60 à 35.10 (« 38 » roule) · whoosh 36.50 · sparkle 37.40 · whoosh-cinematic 40.43 (iris) · click 42.25 (le clic sur « mois »).

## Frame 1: Samedi soir · 0.00 → 4.40

- scene: Vue du dessus, la bougie de la table 12 et son chevalet « RÉSERVÉ · SAM. 20:00 » ; la caméra recule et toute la salle s'allume, 14 tables réservées ; le cahier de réservations tamponné « COMPLET » glisse à côté du plan, puis la caméra repart vers la table 12
- duration: 4.40s
- transition_in: cut
- status: outline
- src: compositions/frames/01-samedi.html
- voiceover: "Samedi, vingt heures. Ta salle est pleine... sur le papier."
- type: hook
- blueprint: camera-journey (Adapt)
- focal: la bougie de T12, puis le plan plein et le cahier
- rules: depth-of-field-blur, kinetic-beat-slam
- world: dark
- handoff_in: aucun (ouverture du film) ; première image = la table 12 vue du dessus, plein cadre, cam(940, 1150, 2.7) flou 0, sa bougie éteinte (lueur 0), son chevalet « RÉSERVÉ · SAM. 20:00 » au bord haut, un verre flou en avant-plan coupé par le bord gauche, parquet sombre, grain 5 %
- handoff_out: à 4.40 : cam(940, 1180, 1.8) flou 8 px, en plein cran avant vers T12 (entrée expo.out, il atteindra 3.1 à 4.70) ; salle allumée, 14 tables avec chevalet « RÉSERVÉ » ; le cahier est sorti par la droite ; sous-titre sorti ; grain 5 %

Word cues: Samedi@0.08 vingt@0.82 heures@1.06 Ta@1.99 salle@2.21 est@2.42 pleine@2.64 sur@3.46 le@3.62 papier@3.78

Scene 1 (0.00 à 1.90 s) : P1, la bougie de la table 12
  TEXTE ÉCRAN : sous-titre « Samedi, [boîte : vingt heures]. » (Samedi 0.08, vingt 0.82, boîte tracée 0.80, heures 1.06) ; il sort de 1.76 à 1.90.
  IMAGE DE DÉPART : handoff_in.
  ÉTAPES : 0.00 une allumette entre par le bord bas (×1,4 flou 8 → net en 0,1 s) ; 0.08 sur « Samedi » la bougie de T12 s'allume (pop du cœur blanc, halo 0 → 1 en 0,15 s expo.out) ; 0.30 la nappe se réchauffe (ton 0,6 → 1, 0,3 s) ; 0.55 l'allumette sort ; 0.80 le chevalet « RÉSERVÉ · SAM. 20:00 » se redresse (rotationX simulé : scaleY 0,2 → 1, 0,12 s) ; 1.06 « 20:00 » du chevalet s'imprime en braise pendant 0,3 s puis repasse en encre ; 1.40 la flamme vacille (boucle 0,6 s, 2 px) ; 1.90 départ du recul.
  PISTE CAMÉRA : dérive avant, échelle 2,7 → 2,85 linéaire de 0.00 à 1.90.
  COUCHES ET PROFONDEUR : avant-plan le verre flou (blur 24) coupé à gauche, parallaxe 2:1 ; sujet la table et sa bougie ; fond le parquet ; couches animées 2 à 3.
  OBJET-PONT ET VECTEUR : la bougie de T12 reste au centre du recul : elle devient l'une des 14 bougies de P2.
  SON : pop à 0.08 (la bougie).
  IMAGE CLÉ : 1.10 : la table 12 vue du dessus, sa bougie allumée au centre, le chevalet « RÉSERVÉ · SAM. 20:00 », « Samedi, [vingt heures]. » en bas (styleframes/png/P01.png).

Scene 2 (1.90 à 4.40 s) : P2, la salle pleine sur le papier
  TEXTE ÉCRAN : sous-titre « Ta salle est [boîte : pleine]... [trait : sur le papier]. » (Ta 1.99, salle 2.21, est 2.42, boîte 2.62, pleine 2.64, sur 3.46, le 3.62, papier 3.78, trait 3.50 à 3.95) ; il sort de 4.24 à 4.38.
  IMAGE DE DÉPART : la table 12 seule, plein cadre, cam(940, 1150, 2.85).
  ÉTAPES : 1.90 recul franc (0,7 s expo.out) jusqu'au plan large cam(1640, 1000, 0.5) décalé de 380 px vers la gauche ; 2.10 à 2.60 les 13 autres bougies s'allument en cascade de la table la plus proche à la plus lointaine (0,04 s d'écart, chaque halo ×1,3 → 1) ; 2.64 sur « pleine » chaque table reçoit son chevalet « RÉSERVÉ » (0,02 s d'écart) ; 2.86 à 3.46 silence : le cahier de réservations (« CAHIER · SAMEDI 14 », 9 noms, « Leroy 2 » à « Girard 4 ») arrive de la droite ×1,15 flou 8 → net en 0,12 s et se pose incliné de 3° ; 3.10 le tampon « COMPLET » frappe le cahier (×1,6 → 1 en 0,08 s, le cahier tasse de 2 %) ; 3.78 sur « papier » le cahier glisse de 30 px (dérive) ; 3.95 il sort par la droite (0,35 s power2.in) pendant que la caméra part en cran vers T12.
  PISTE CAMÉRA : 1.90 à 2.60 recul expo.out ; dérive latérale +15 u/s de 2.60 à 3.90 ; 3.90 à 4.40 cran avant vers T12 (power2.in, flou 0 → 8 px).
  COUCHES ET PROFONDEUR : fond le parquet ; sujet le plan allumé (gauche) et le cahier (droite), marges égales ; avant-plan aucun ; couches animées 2 puis 3 (bougies, cahier, caméra).
  OBJET-PONT ET VECTEUR : vecteur : cran avant vers T12, repris par la frame 2.
  SON : whoosh-short 1.90 ; sparkle 2.40 ; impact-bass-1 3.10 (le tampon).
  IMAGE CLÉ : 3.80 : à gauche le plan de salle, 14 tables aux bougies avec leur chevalet, à droite le cahier tamponné « COMPLET », « Ta salle est [pleine]... sur le papier. » souligné d'un trait braise (P02.png).

## Frame 2: La table de six · 4.40 → 8.84

- scene: Gros plan sur la table 12 : la bougie brûle, le pain attend, la main du serveur redresse la serviette, deux fois ; puis la caméra file vers la grande table de six, dont la bougie s'éteint
- duration: 4.44s
- transition_in: cut
- status: outline
- src: compositions/frames/02-table-de-six.html
- voiceover: "La table de six ne viendra pas."
- type: pain_point
- blueprint: camera-journey (Adapt)
- focal: la serviette de T12, puis la bougie de T7 qui s'éteint
- rules: depth-of-field-blur, motion-blur-streak
- world: dark
- handoff_in: à 0.00 : cam(940, 1180, 1.8) flou 8 px, en plein cran avant vers T12 (entrée expo.out, il atteindra 3.1 à 4.70) ; salle allumée, 14 tables avec chevalet « RÉSERVÉ » ; le cahier est sorti par la droite ; sous-titre sorti ; grain 5 %
- handoff_out: à 4.44 : cam(1800, 720, 1.2) flou 8 px, en plein filé vers la droite (de T7 vers T4, +1800 u/s) ; T7 éteinte avec son dernier filet de fumée ; T4 encore allumée ; toutes les autres allumées ; sous-titre sorti ; grain 5 %

Word cues: La@2.68 table@2.87 de@3.06 six@3.25 ne@3.45 viendra@3.64 pas@4.02

Scene 1 (0.00 à 2.55 s) : P3, le gag de la serviette (silence)
  TEXTE ÉCRAN : aucun texte (silence écrit) ; seule l'heure « 20:47 » en micro en haut à droite.
  IMAGE DE DÉPART : handoff_in.
  ÉTAPES : 0.00 à 0.30 fin du cran (expo.out) sur cam(940, 1180, 3.1) ; 0.30 « 20:47 » s'imprime en haut à droite (flou → net 0,1 s) ; 0.50 la flamme vacille (boucle) ; 0.70 la manche noire du serveur entre par le bord haut droit (flou de bougé 6 px, 0,2 s expo.out), la main redresse la serviette pliée d'un quart de tour (0,1 s) ; 1.00 la main repart (0,15 s power2.in) ; 1.20 « 20:47 » passe à « 20:52 » (le chiffre roule) ; 1.50 tenue : la flamme, la fumée de la bougie ; 1.80 la main revient, identique, et redresse la même serviette d'un quart de tour dans l'autre sens (le gag) ; 2.10 elle repart ; 2.25 « 20:58 » ; 2.55 départ du filé.
  PISTE CAMÉRA : dérive avant 3,1 → 3,2 et latérale −10 u/s de 0.30 à 2.55.
  COUCHES ET PROFONDEUR : avant-plan la manche floue (blur 6) coupée par le bord ; sujet la serviette et la bougie ; fond la nappe, les chaises, le parquet ; couches animées 2 à 3.
  OBJET-PONT ET VECTEUR : vecteur : filé vers le haut-droite, vers T7.
  SON : click-soft 1.00 et 2.10 (la serviette posée), rien d'autre : le silence est le gag.
  IMAGE CLÉ : 1.80 : la table 12 plein cadre, bougie au centre, la main du serveur en manche noire qui redresse la serviette, « 20:52 » en haut à droite (P03.png).

Scene 2 (2.55 à 4.44 s) : P4, la table de six ne viendra pas
  TEXTE ÉCRAN : sous-titre « La table de [boîte : six] ne viendra pas. » (La 2.68, table 2.87, de 3.06, boîte 3.23, six 3.25, ne 3.45, viendra 3.64, pas 4.02) ; il sort de 4.30 à 4.44.
  IMAGE DE DÉPART : T12 plein cadre.
  ÉTAPES : 2.55 filé vers T7 (0,3 s, flou 10 px) ; 2.85 posé sur T7 cam(1560, 800, 1.55), son chevalet « MARTIN ×6 » au bord haut ; 3.05 les 6 chaises restent rentrées (rien ne bouge : on attend) ; 3.25 sur « six » le chevalet passe en braise 0,2 s ; 3.64 sur « viendra » la flamme de T7 se couche (0,1 s) ; 3.80 sur la fin de « viendra » la bougie s'éteint (cœur → gris, halo 1 → 0 en 0,25 s), la nappe s'assombrit ; 3.90 un filet de fumée monte (0,6 s, flou 6 px) ; 4.02 sur « pas » le chevalet « MARTIN ×6 » tombe à plat (scaleY 1 → 0,2, 0,08 s) ; 4.20 départ du filé vers T4.
  PISTE CAMÉRA : 2.55 à 2.85 filé expo.inOut ; dérive arrière 1,6 → 1,55 de 2.85 à 4.20 ; 4.20 à 4.44 filé vers la droite (power2.in, flou 0 → 8 px).
  COUCHES ET PROFONDEUR : fond le parquet et les tables voisines allumées (flou 4 px aux bords) ; sujet T7 ; avant-plan la fumée ; couches animées 2 à 3.
  OBJET-PONT ET VECTEUR : vecteur : filé vers la droite, repris par la frame 3.
  SON : whoosh-short 2.55 ; click-soft 3.80 (le souffle).
  IMAGE CLÉ : 4.10 : la grande table de six éteinte, sa fumée, le chevalet « MARTIN ×6 » à plat, les tables voisines allumées autour, « La table de [six] ne viendra pas. » (P04.png).

## Frame 3: Quarante couverts · 8.84 → 13.25

- scene: La table de quatre s'éteint à son tour : deux trous noirs dans la salle allumée ; la caméra descend en cuisine sur le bon de commande du matin, « 40 couverts »
- duration: 4.41s
- transition_in: cut
- status: outline
- src: compositions/frames/03-quarante-couverts.html
- voiceover: "Ni la table de quatre. Ce matin, tu as acheté pour quarante couverts."
- type: pain_point
- blueprint: camera-journey (Adapt)
- focal: la bougie de T4, puis le « 40 » du bon de commande
- rules: counting-dynamic-scale, kinetic-beat-slam
- world: dark
- handoff_in: à 0.00 : cam(1800, 720, 1.2) flou 8 px, en plein filé vers la droite (de T7 vers T4, +1800 u/s) ; T7 éteinte avec son dernier filet de fumée ; T4 encore allumée ; toutes les autres allumées ; sous-titre sorti ; grain 5 %
- handoff_out: à 4.41 : cam(1000, 1680, 1.7) flou 10 px, en plein whip vers la droite le long de la cuisine (du tableau de liège vers le passe) ; bon de commande « 40 » épinglé sur le liège ; passe avec 6 assiettes pleines sous les lampes ; T7 et T4 éteintes ; sous-titre sorti ; grain 5 %

Word cues: Ni@0.22 la@0.41 table@0.59 de@0.78 quatre@0.96 Ce@1.95 matin@2.11 tu@2.44 as@2.61 acheté@2.77 pour@3.26 quarante@3.42 couverts@3.75

Scene 1 (0.00 à 1.71 s) : P5, ni la table de quatre
  TEXTE ÉCRAN : sous-titre « Ni la table de [boîte : quatre]. » (Ni 0.22, la 0.41, table 0.59, de 0.78, boîte 0.94, quatre 0.96) ; il sort de 1.40 à 1.54.
  IMAGE DE DÉPART : handoff_in.
  ÉTAPES : 0.00 à 0.25 fin du filé (expo.out) sur cam(1960, 680, 0.95) : T7 éteinte à gauche, T4 allumée à droite ; 0.59 le chevalet de T4 « RÉSERVÉ » ; 0.96 sur « quatre » la bougie de T4 s'éteint (0,25 s), fumée ; 1.20 les deux tables éteintes se répondent : leurs nappes sombres, les autres flammes vacillent ; 1.50 départ du tilt.
  PISTE CAMÉRA : dérive arrière 1,0 → 0,95 de 0.25 à 1.50 ; 1.50 à 1.71 tilt vers le bas (power2.in, flou 0 → 8 px).
  COUCHES ET PROFONDEUR : fond le parquet ; sujet T7 + T4, deux trous noirs ; tables allumées autour ; couches animées 2.
  OBJET-PONT ET VECTEUR : vecteur : tilt vers le bas-gauche, vers la cuisine.
  SON : click-soft 0.96 (souffle).
  IMAGE CLÉ : 1.20 : la salle allumée vue de haut, deux tables éteintes côte à côte, « Ni la table de [quatre]. » (P05.png).

Scene 2 (1.71 à 4.41 s) : P6, le bon de commande, quarante couverts
  TEXTE ÉCRAN : sous-titre « Ce matin, tu as acheté pour [boîte : quarante couverts]. » (Ce 1.95, matin 2.11, tu 2.44, as 2.61, acheté 2.77, pour 3.26, boîte 3.40, quarante 3.42, couverts 3.75) ; il sort de 4.20 à 4.34.
  IMAGE DE DÉPART : la salle allumée, en plein tilt.
  ÉTAPES : 1.71 à 2.10 fin du tilt (expo.out) sur le tableau de liège cam(510, 1740, 2.1) ; 1.80 le bon de commande arrive ×1,2 flou 8 → net (0,12 s) et s'épingle, incliné de −3° ; 2.11 sur « matin » « SAM. 14 · 08:10 » s'imprime ; 2.44 à 2.90 les trois lignes « Viande · 8 kg », « Poisson · 6 kg », « Légumes · 12 kg » s'impriment (0,15 s d'écart) ; 3.26 à 3.70 le chiffre roule de 0 à « 40 » (Space Mono 92, le roulement finit sur « quarante ») ; 3.75 « COUVERTS » ; 3.80 le papier tasse sur le liège ; 4.05 départ du whip vers la droite.
  PISTE CAMÉRA : dérive avant 2,1 → 2,2 de 2.10 à 4.05 ; 4.05 à 4.41 whip vers la droite (power2.in, flou 0 → 10 px).
  COUCHES ET PROFONDEUR : fond le carrelage de la cuisine ; sujet le bon de commande sur le liège ; avant-plan le bord du passe flou à droite ; couches animées 2 à 3.
  OBJET-PONT ET VECTEUR : vecteur : whip vers la droite, le long de la cuisine, repris par la frame 4.
  SON : whoosh-short 1.71 ; key-press 3.26 à 3.70 (le chiffre roule) ; impact-bass-2 3.75.
  IMAGE CLÉ : 3.90 : le bon de commande épinglé, « 40 » jumbo, « COUVERTS », les trois lignes de marchandise, « Ce matin, tu as acheté pour [quarante couverts]. » (P06.png).

## Frame 4: Pour personne · 13.25 → 18.27

- scene: Au passe, l'horloge roule jusqu'à 22:00, six assiettes pleines attendent ; une assiette bascule dans la poubelle ; la caméra recule sur la salle et les bougies s'éteignent une à une, jusqu'à celle de la table 12
- duration: 5.02s
- transition_in: cut
- status: outline
- src: compositions/frames/04-pour-personne.html
- voiceover: "Et à vingt-deux heures, tu jettes ce que tu as cuisiné... pour personne."
- type: pain_point
- blueprint: camera-journey (Adapt)
- focal: « 22:00 », l'assiette qui tombe, puis la dernière bougie
- rules: counting-dynamic-scale, depth-of-field-blur
- world: dark
- handoff_in: à 0.00 : cam(1000, 1680, 1.7) flou 10 px, en plein whip vers la droite le long de la cuisine (du tableau de liège vers le passe) ; bon de commande « 40 » épinglé sur le liège ; passe avec 6 assiettes pleines sous les lampes ; T7 et T4 éteintes ; sous-titre sorti ; grain 5 %
- handoff_out: à 5.02 : noir : toutes les tables éteintes, seule la lueur de la bougie de T12 reste à l'écran en (960, 670), ø 60 px, à 20 % (elle vient de s'éteindre) ; cam(940, 920, 0.5) en dérive lente vers le bas (+10 u/s) ; aucun texte ; grain 5 %

Word cues: Et@0.30 à@0.48 vingt-deux@0.67 heures@1.04 tu@1.52 jettes@1.67 ce@1.83 que@1.98 tu@2.14 as@2.29 cuisiné@2.45 pour@3.52 personne@3.70

Scene 1 (0.00 à 1.55 s) : P7, vingt-deux heures au passe
  TEXTE ÉCRAN : sous-titre « Et à vingt-deux heures, » (Et 0.30, à 0.48, vingt-deux 0.67, heures 1.04), puis la phrase continue en P8 (même sous-titre, pas de sortie) ; la boîte de la phrase est sur « jettes ».
  IMAGE DE DÉPART : handoff_in.
  ÉTAPES : 0.00 à 0.30 fin du whip (expo.out) sur le passe cam(1600, 1610, 1.35) ; 0.20 les six assiettes pleines sous les lampes (lueur chaude qui pulse 2 %) ; 0.40 « 20:58 » arrive au-dessus du passe ×1,3 flou → net (0,12 s) ; 0.67 à 1.04 les chiffres roulent jusqu'à « 22:00 » (sur « heures ») ; 1.10 une lampe du passe s'éteint ; 1.35 la première assiette glisse de 20 px vers la droite.
  PISTE CAMÉRA : dérive latérale +20 u/s de 0.30 à 1.35 ; 1.35 à 1.55 filé vers la droite (power2.in, flou 0 → 8 px).
  COUCHES ET PROFONDEUR : fond le carrelage ; sujet le passe et ses assiettes ; « 22:00 » devant ; couches animées 2 à 3.
  OBJET-PONT ET VECTEUR : l'assiette de droite part avec la caméra : c'est elle qui tombe en P8.
  SON : key-press 0.67 à 1.04 (l'heure roule) ; whoosh 1.35.
  IMAGE CLÉ : 1.10 : le passe vu du dessus, six assiettes pleines sous les lampes, « 22:00 » au-dessus, « Et à vingt-deux heures, » en bas, la suite en gris (P07.png).

Scene 2 (1.55 à 3.30 s) : P8, tu jettes
  TEXTE ÉCRAN : sous-titre « Et à vingt-deux heures, tu [boîte : jettes] ce que tu as cuisiné... » ; à l'écran seulement « tu jettes ce que tu as cuisiné... » (tu 1.52, boîte 1.65, jettes 1.67, ce 1.83, que 1.98, tu 2.14, as 2.29, cuisiné 2.45) ; il sort de 3.16 à 3.30.
  IMAGE DE DÉPART : le passe, en plein filé.
  ÉTAPES : 1.55 à 1.70 fin du filé sur la poubelle cam(2760, 1720, 1.9) ; 1.60 l'assiette arrive au-dessus de la poubelle, inclinée de −28° ; 1.67 sur « jettes » elle bascule (0,1 s power2.in) et la nourriture tombe dans la poubelle (flou de bougé 6 px) : contact à 1.75 ; 1.90 l'assiette repart vide ; 2.14 une deuxième assiette, 2.45 une troisième (sur « cuisiné ») ; 3.00 le couvercle se rabat (0,1 s) ; 3.10 départ du recul.
  PISTE CAMÉRA : secousse de 4 px à 1.75 ; dérive avant 1,9 → 2,0 ; 3.10 à 3.30 recul (power2.in, flou 0 → 8 px).
  COUCHES ET PROFONDEUR : sujet la poubelle ; avant-plan l'assiette qui bascule (flou) ; fond le carrelage ; couches animées 3.
  OBJET-PONT ET VECTEUR : vecteur : recul vers le plan large.
  SON : whoosh-short 1.55 ; impact-bass-1 1.75 (sur « jettes ») ; click-soft 3.00 (le couvercle).
  IMAGE CLÉ : 1.75 : la poubelle ronde vue du dessus, une assiette qui bascule et se vide dedans, « tu [jettes] ce que tu as cuisiné... » (P08.png).

Scene 3 (3.30 à 5.02 s) : P9, pour personne, la salle s'éteint
  TEXTE ÉCRAN : sous-titre « pour [trait : personne]. » (pour 3.52, personne 3.70, trait 3.70 à 4.10) ; il sort de 4.40 à 4.54.
  IMAGE DE DÉPART : la poubelle, en plein recul.
  ÉTAPES : 3.30 à 3.90 recul jusqu'au plan large cam(1640, 1000, 0.5) (expo.out) : la salle entière, aucun convive, toutes les chaises vides ; 3.70 sur « personne » les bougies s'éteignent une à une, des bords vers le centre (0,08 s d'écart, chaque halo 1 → 0 en 0,2 s) ; 4.40 il ne reste que la bougie de T12 ; 4.60 la caméra glisse vers T12 (dérive) ; 4.90 la bougie de T12 s'éteint : sa lueur reste à 20 %.
  PISTE CAMÉRA : 3.30 à 3.90 recul ; 3.90 à 5.02 dérive vers cam(940, 920, 0.5) (+10 u/s vers le bas à la fin).
  COUCHES ET PROFONDEUR : fond le parquet qui disparaît avec les halos ; sujet les bougies ; couches animées 2.
  OBJET-PONT ET VECTEUR : la lueur de la bougie de T12 reste seule dans le noir : elle se rallume au pivot.
  SON : whoosh-cinematic 3.30 ; aucun bruitage sur les bougies (le silence descend).
  IMAGE CLÉ : 4.20 : la salle vue de haut, presque toutes les bougies éteintes, la table 12 encore allumée, « pour personne. » souligné d'un trait braise (P09.png).

## Frame 5: Une table tenue · 18.27 → 22.48

- scene: Le noir ; la question s'écrit au centre, mot à mot ; sur « tenue » la bougie de la table 12 se rallume, puis sa lumière envahit tout l'écran
- duration: 4.21s
- transition_in: cut
- status: outline
- src: compositions/frames/05-table-tenue.html
- voiceover: "Et si chaque table réservée était une table tenue ?"
- type: pivot
- blueprint: kinetic-type-beats (Adapt)
- focal: la question, puis la flamme
- rules: ambient-glow-bloom
- world: dark
- handoff_in: à 0.00 : noir : toutes les tables éteintes, seule la lueur de la bougie de T12 reste à l'écran en (960, 670), ø 60 px, à 20 % (elle vient de s'éteindre) ; cam(940, 920, 0.5) en dérive lente vers le bas (+10 u/s) ; aucun texte ; grain 5 %
- handoff_out: à 4.21 : le flash d'assemble.sh (parti à 3.99 de la bougie en (960, 670)) couvre tout l'écran en papier ; sous lui, la frame 5 finit sur un point blanc chaud en (960, 670), ø 300 px, la phrase effacée ; la frame 6 commence sur le plan clair cam(1300, 1100, 0.62) flou 12 px, sans téléphone ni texte (le flash retombe de 0.05 à 0.55)

Word cues: Et@0.95 si@1.13 chaque@1.32 table@1.69 réservée@1.87 était@2.43 une@2.80 table@2.98 tenue@3.17

Scene 1 (0.00 à 4.21 s) : P10, la question sur le noir
  TEXTE ÉCRAN : moment typographique, centré, 84 px, deux lignes : « Et si chaque table réservée / était une table [trait : tenue] ? » (Et 0.95, si 1.13, chaque 1.32, table 1.69, réservée 1.87, était 2.43, une 2.80, table 2.98, tenue 3.17, trait 3.17 à 3.55) ; pas de sous-titre en bas.
  IMAGE DE DÉPART : handoff_in.
  ÉTAPES : 0.00 à 0.95 silence : la lueur de T12 baisse de 20 à 8 % ; le grain bouge ; 0.95 chaque mot arrive avec ses lettres qui convergent (0,3 s expo.out, flou 8 → 0) ; 1.69 et 2.98 « table » arrive identique les deux fois ; 3.17 sur « tenue » la bougie de T12 se rallume sous la phrase en (960, 670) (pop, halo ×0,5 → 1 en 0,2 s) et le trait se dessine ; 3.40 la flamme vacille ; 3.63 la flamme grandit en point blanc chaud (frame.md light-point, ø 60 → 300 px, 0,36 s power2.in) pendant que la phrase s'efface (0,2 s) ; 3.99 le flash d'assemble.sh part de ce point (960, 670) et couvre l'écran de papier de 4.14 à 4.29 : la frame tient le point jusqu'à 4.21.
  PISTE CAMÉRA : la caméra du monde ne bouge plus ; les lettres dérivent de 6 px vers le haut sur toute la durée (couche vivante).
  COUCHES ET PROFONDEUR : fond le noir et le grain ; sujet la phrase ; la flamme devant ; couches animées 2.
  OBJET-PONT ET VECTEUR : la bougie de T12 devient la source du flash de lumière qui ouvre le monde clair.
  SON : riser 2.13 à 3.17 ; chime 3.17 (la bougie se rallume) ; whoosh-cinematic 3.63 (le flash).
  IMAGE CLÉ : 3.35 : le noir, « Et si chaque table réservée était une table tenue ? » au centre, le trait braise sous « tenue », une seule flamme sous la phrase (P10.png).

## Frame 6: Jour et nuit · 22.48 → 25.70

- scene: Le plan de salle au propre, en plein jour, flou derrière le téléphone : l'appli Couvert reçoit les réservations, même à 2 h du matin ; la caméra recule vers le plan large
- duration: 3.22s
- transition_in: cut
- status: outline
- src: compositions/frames/06-jour-et-nuit.html
- voiceover: "Couvert prend tes réservations, jour et nuit."
- type: solution
- blueprint: device-surface-showcase (Adapt)
- focal: le téléphone et la ligne qui arrive
- rules: depth-of-field-blur, counting-dynamic-scale
- world: light
- handoff_in: à 0.00 : le flash d'assemble.sh (parti à 3.99 de la bougie en (960, 670)) couvre tout l'écran en papier ; sous lui, la frame 5 finit sur un point blanc chaud en (960, 670), ø 300 px, la phrase effacée ; la frame 6 commence sur le plan clair cam(1300, 1100, 0.62) flou 12 px, sans téléphone ni texte (le flash retombe de 0.05 à 0.55)
- handoff_out: à 3.22 : cam(1470, 1090, 0.58) flou 6 px, en plein recul (de la vue téléphone vers le plan large) ; le téléphone part vers la droite hors cadre (x 2200, flou 12 px) ; plan clair, aucune étiquette encore ; sous-titre sorti ; grain 3 %

Word cues: Couvert@0.67 prend@1.02 tes@1.20 réservations@1.38 jour@2.31 et@2.53 nuit@2.74

Scene 1 (0.00 à 3.22 s) : P11, Couvert prend les réservations
  TEXTE ÉCRAN : sous-titre « Couvert prend tes réservations, [boîte : jour et nuit]. » (Couvert 0.67, prend 1.02, tes 1.20, réservations 1.38, boîte 2.29, jour 2.31, et 2.53, nuit 2.74) ; il sort de 3.08 à 3.22 ; dans l'écran : « COUVERT », « RÉSERVATIONS · SAM. 14 OCT. », lignes « 20:00 Martin 6 pers. », « 20:30 Bernard 4 pers. », « 21:00 Duval 4 pers. » ; pilule « 02:14 · NOUVELLE RÉSA ».
  IMAGE DE DÉPART : handoff_in.
  ÉTAPES : 0.05 à 0.55 le flash retombe, le plan clair flou apparaît ; 0.20 le téléphone arrive de la droite ×1,15 flou 8 → net (0,14 s expo.out), posé à droite, marges égales avec la pilule à gauche ; 0.67 sur « Couvert » le wordmark de l'appli s'imprime ; 1.02 ligne « Martin » (×1,1 → 1, 0,1 s) avec sa coche ; 1.38 ligne « Bernard » ; 2.00 la pilule « 14:32 » arrive à gauche ; 2.31 sur « jour » elle roule jusqu'à « 02:14 » (0,4 s) et passe au noir ; 2.74 sur « nuit » la ligne « Duval » arrive encadrée de braise ; 2.95 départ du recul, le téléphone sort à droite.
  PISTE CAMÉRA : dérive latérale −15 u/s de 0.30 à 2.95 ; 2.95 à 3.22 recul (power2.in, flou 0 → 6 px).
  COUCHES ET PROFONDEUR : fond le plan clair flou (12 → 6 px) ; sujet le téléphone ; pilule à gauche ; couches animées 2 à 3.
  OBJET-PONT ET VECTEUR : chaque ligne de réservation deviendra l'étiquette « Confirmé » de sa table en frame 7 ; vecteur : recul.
  SON : notification 1.02 et 1.38 ; key-press 2.31 à 2.70 (l'heure roule) ; notification 2.74.
  IMAGE CLÉ : 2.80 : le téléphone Couvert à droite avec trois réservations, la pilule noire « 02:14 · nouvelle résa » à gauche, le plan clair flou derrière, « Couvert prend tes réservations, [jour et nuit]. » (P11.png).

## Frame 7: La veille, par SMS · 25.70 → 29.05

- scene: Le plan large au propre : la veille à 18 h, les étiquettes « Confirmé » se posent table après table ; la caméra plonge sur la grande table de six et son SMS « OUI »
- duration: 3.35s
- transition_in: cut
- status: outline
- src: compositions/frames/07-la-veille.html
- voiceover: "Il confirme chaque table la veille, par SMS."
- type: demo
- blueprint: camera-journey (Adapt)
- focal: les étiquettes Confirmé, puis la bulle « OUI »
- rules: waterfall-entry, depth-of-field-blur
- world: light
- handoff_in: à 0.00 : cam(1470, 1090, 0.58) flou 6 px, en plein recul (de la vue téléphone vers le plan large) ; le téléphone part vers la droite hors cadre (x 2200, flou 12 px) ; plan clair, aucune étiquette encore ; sous-titre sorti ; grain 3 %
- handoff_out: à 3.35 : cam(2000, 640, 1.25) flou 8 px, en plein filé vers T4 (de T7 vers T4, vers la droite) ; le téléphone (SMS de Martin, « OUI », « Distribué ») glisse avec la caméra vers la droite, à x 1150 ; T7 « Confirmé » ; 10 tables « Confirmé » ; sous-titre sorti ; grain 3 %

Word cues: Il@0.26 confirme@0.48 chaque@0.91 table@1.34 la@1.55 veille@1.76 par@2.13 SMS@2.43

Scene 1 (0.00 à 2.00 s) : P12, chaque table la veille
  TEXTE ÉCRAN : sous-titre « Il confirme chaque table [boîte : la veille], » (Il 0.26, confirme 0.48, chaque 0.91, table 1.34, boîte 1.53, la 1.55, veille 1.76) ; la phrase continue en P13 ; micro en haut « VEN. 13 · 18:00 · LA VEILLE ».
  IMAGE DE DÉPART : handoff_in.
  ÉTAPES : 0.00 à 0.30 fin du recul (expo.out) sur cam(1640, 1080, 0.55) ; 0.20 le micro « VEN. 13 · 18:00 · LA VEILLE » s'imprime en haut ; 0.30 à 1.60 sur « confirme » les étiquettes « Confirmé » se posent table après table (chacune ×1,6 flou 6 → net en 0,12 s, 0,13 s d'écart, de gauche à droite) : 10 tables ; T9, T11, T13, T14 restent en attente ; 1.76 sur « veille » la caméra commence à pousser vers T7 ; 1.85 cran.
  PISTE CAMÉRA : dérive avant 0,55 → 0,58 de 0.30 à 1.85 ; 1.85 à 2.05 cran vers T7 (expo.inOut, flou 6 px).
  COUCHES ET PROFONDEUR : fond la trame ; sujet les étiquettes qui se posent ; couches animées 2 (cascade, dérive).
  OBJET-PONT ET VECTEUR : l'étiquette de T7 reste, le cran l'amène au centre.
  SON : pop 0.30 à 1.60 (10 pops, un par étiquette, volume bas).
  IMAGE CLÉ : 1.60 : le plan de salle au propre, dix tables avec leur étiquette braise « Confirmé », « VEN. 13 · 18:00 · LA VEILLE » en haut, « Il confirme chaque table [la veille], » (P12.png).

Scene 2 (2.00 à 3.35 s) : P13, par SMS
  TEXTE ÉCRAN : sous-titre « par [boîte : SMS]. » (par 2.13, boîte 2.41, SMS 2.43) ; il sort de 3.15 à 3.29 ; dans le téléphone : « Couvert », bulle entrante « Bonjour Martin, votre table pour 6 demain à 20 h. Répondez OUI pour confirmer. », bulle sortante « OUI », « Distribué ».
  IMAGE DE DÉPART : T7 au centre, cam(1560, 780, 1.2), plan flou 8 px.
  ÉTAPES : 2.00 le téléphone monte du bas ×1,1 flou → net (0,14 s) devant T7, sous-titre libre ; 2.13 la bulle entrante arrive (0,1 s) ; 2.43 sur « SMS » la bulle « OUI » part (bleu iOS), 2.60 « Distribué » ; 2.70 l'étiquette de T7 derrière le téléphone pulse une fois (×1,1 → 1) ; 3.10 départ du filé vers T4, le téléphone suit.
  PISTE CAMÉRA : dérive avant 1,2 → 1,25 ; 3.10 à 3.35 filé vers la droite (power2.in, flou 0 → 8 px).
  COUCHES ET PROFONDEUR : fond le plan flou ; sujet le téléphone ; couches animées 2.
  OBJET-PONT ET VECTEUR : le téléphone reste à l'écran et recevra l'annulation en frame 8 (un seul téléphone).
  SON : notification 2.13 ; ping 2.43 (« OUI »).
  IMAGE CLÉ : 2.80 : le téléphone au centre, le SMS de Couvert et la réponse « OUI » en bleu, « Distribué », le plan flou derrière, « par [SMS]. » (P13.png).

## Frame 8: La liste d'attente · 29.05 → 32.89

- scene: Le même téléphone reçoit une annulation pour la table de quatre ; la table passe « Libérée » ; la caméra recule, la liste d'attente s'ouvre à droite et Dubois file s'asseoir à la table 4
- duration: 3.84s
- transition_in: cut
- status: outline
- src: compositions/frames/08-liste-d-attente.html
- voiceover: "Une annulation ? La place repart aussitôt à la liste d'attente."
- type: demo
- blueprint: camera-journey (Adapt)
- focal: la bulle d'annulation, puis la ligne Dubois qui vole vers T4
- rules: card-morph-anchor, depth-of-field-blur
- world: light
- handoff_in: à 0.00 : cam(2000, 640, 1.25) flou 8 px, en plein filé vers T4 (de T7 vers T4, vers la droite) ; le téléphone (SMS de Martin, « OUI », « Distribué ») glisse avec la caméra vers la droite, à x 1150 ; T7 « Confirmé » ; 10 tables « Confirmé » ; sous-titre sorti ; grain 3 %
- handoff_out: à 3.84 : cam(1100, 1500, 1.0) flou 10 px, en plein travelling vers le bas-gauche (du plan large vers la cuisine) ; T4 « Confirmé » (Dubois) ; les 14 tables confirmées ; la carte « LISTE D'ATTENTE » est sortie par la droite ; sous-titre sorti ; grain 3 %

Word cues: Une@0.29 annulation@0.43 La@1.39 place@1.57 repart@1.74 aussitôt@2.10 à@2.63 la@2.81 liste@2.99 d'attente@3.16

Scene 1 (0.00 à 1.25 s) : P14, une annulation
  TEXTE ÉCRAN : sous-titre « Une [boîte : annulation] ? » (Une 0.29, boîte 0.41, annulation 0.43) ; il sort de 1.10 à 1.24 ; dans le téléphone : « Couvert », bulle entrante « Bonjour, votre table pour 4 demain à 20 h 30. Répondez OUI pour confirmer. », bulle sortante « Désolés, on ne pourra pas venir. ».
  IMAGE DE DÉPART : handoff_in.
  ÉTAPES : 0.00 à 0.25 fin du filé sur T4 cam(2320, 560, 1.3), plan flou 6 px ; le fil du téléphone change (le fil de T4 glisse à la place, 0,1 s) ; 0.29 la bulle entrante ; 0.43 sur « annulation » la réponse « Désolés, on ne pourra pas venir. » ; 0.70 derrière, l'étiquette de T4 passe à « Libérée » (contour braise, 0,12 s) ; 1.00 le téléphone part vers le haut (0,2 s power2.in).
  PISTE CAMÉRA : dérive avant 1,3 → 1,35 ; 1.05 à 1.25 départ du recul.
  COUCHES ET PROFONDEUR : fond le plan flou et T4 ; sujet le téléphone ; couches animées 2.
  OBJET-PONT ET VECTEUR : l'étiquette « Libérée » de T4 est la cible de P15.
  SON : notification 0.43.
  IMAGE CLÉ : 0.80 : le téléphone avec l'annulation « Désolés, on ne pourra pas venir. », la table 4 floue derrière avec son étiquette « Libérée », « Une [annulation] ? » (P14.png).

Scene 2 (1.25 à 3.84 s) : P15, la place repart à la liste d'attente
  TEXTE ÉCRAN : sous-titre « La place repart aussitôt à la [boîte : liste d'attente]. » (La 1.39, place 1.57, repart 1.74, aussitôt 2.10, à 2.63, la 2.81, boîte 2.97, liste 2.99, d'attente 3.16) ; il sort de 3.70 à 3.84 ; carte « LISTE D'ATTENTE » avec « Dubois · 4 pers. », « Morel · 6 pers. », « Leroy · 2 pers. ».
  IMAGE DE DÉPART : T4 « Libérée », en plein recul.
  ÉTAPES : 1.25 à 1.70 recul (expo.out) sur le plan large décalé à gauche cam(1640, 1080, 0.55) ; 1.40 la carte « LISTE D'ATTENTE » s'ouvre à droite (trait de 2 px qui s'ouvre en panneau, 0,22 s) avec ses trois lignes ; 1.74 sur « repart » la ligne « Dubois · 4 pers. » se détache (×1,1, braise) ; 2.10 sur « aussitôt » elle file vers T4 (0,3 s expo.out, flou de bougé 6 px, rotation −6° → 0) ; 2.45 elle se pose sur T4 et devient son étiquette « Confirmé » (même nœud, rétrécit en 0,05 s) ; 2.60 Morel et Leroy remontent d'un cran (FLIP 0,2 s) ; 3.00 T9, T11, T13, T14 reçoivent leur étiquette (0,1 s d'écart) : les 14 tables ; 3.55 la carte sort par la droite ; 3.60 départ du travelling.
  PISTE CAMÉRA : dérive latérale +12 u/s de 1.70 à 3.60 ; 3.60 à 3.84 travelling vers le bas-gauche (power2.in, flou 0 → 10 px).
  COUCHES ET PROFONDEUR : fond la trame ; sujet la ligne Dubois en vol ; plan à gauche, carte à droite, marges égales ; couches animées 2 à 3.
  OBJET-PONT ET VECTEUR : la ligne Dubois devient l'étiquette de T4 ; vecteur : travelling vers la cuisine.
  SON : whoosh-short 2.10 ; pop 2.45 ; pop 3.00.
  IMAGE CLÉ : 2.30 : le plan au propre à gauche, la carte « LISTE D'ATTENTE » à droite, la ligne braise « Dubois · 4 pers. → T4 » en vol entre les deux, « La place repart aussitôt à la [liste d'attente]. » (P15.png).

## Frame 9: Le matin, 38 couverts · 32.89 → 36.77

- scene: La cuisine au matin, le même tableau de liège qu'au début ; le bon de commande se remplit tout seul : 38 couverts, et la carte Couvert le confirme
- duration: 3.88s
- transition_in: cut
- status: outline
- src: compositions/frames/09-le-matin.html
- voiceover: "Et le matin, tu sais exactement pour combien tu cuisines."
- type: payoff
- blueprint: camera-journey (Adapt)
- focal: le « 38 » de la carte Couvert, puis celui du bon
- rules: counting-dynamic-scale, depth-of-field-blur
- world: light
- handoff_in: à 0.00 : cam(1100, 1500, 1.0) flou 10 px, en plein travelling vers le bas-gauche (du plan large vers la cuisine) ; T4 « Confirmé » (Dubois) ; les 14 tables confirmées ; la carte « LISTE D'ATTENTE » est sortie par la droite ; sous-titre sorti ; grain 3 %
- handoff_out: à 3.88 : cam(1100, 1300, 0.8) flou 10 px, en plein recul vers le plan large (vers le haut-droite) ; bon de commande « 38 » épinglé sur le liège ; la carte « 38 couverts confirmés » est repliée en pastille (×0,2) et file vers T12 ; sous-titre sorti ; grain 3 %

Word cues: Et@0.31 le@0.46 matin@0.61 tu@1.19 sais@1.37 exactement@1.55 pour@2.26 combien@2.43 tu@2.79 cuisines@2.97

Scene 1 (0.00 à 1.06 s) : P16, et le matin
  TEXTE ÉCRAN : sous-titre « Et le [boîte : matin], » (Et 0.31, le 0.46, boîte 0.59, matin 0.61) ; la phrase continue en P17 ; sur le bon : « BON DE COMMANDE », « SAM. 14 · 08:00 », « -- », « COUVERTS ».
  IMAGE DE DÉPART : handoff_in.
  ÉTAPES : 0.00 à 0.30 fin du travelling sur le liège cam(510, 1720, 1.6) ; 0.10 un rai de soleil traverse la cuisine en diagonale (0,4 s, opacité 0 → 0,55) ; 0.40 le bon de commande vierge s'épingle (×1,2 flou → net, 0,12 s), même place que le « 40 » du soir (la rime) ; 0.61 sur « matin » « SAM. 14 · 08:00 » s'imprime ; 0.80 le « -- » clignote une fois.
  PISTE CAMÉRA : dérive avant 1,6 → 1,65.
  COUCHES ET PROFONDEUR : avant-plan le rai de soleil ; sujet le bon vierge ; fond le carrelage clair ; couches animées 2.
  OBJET-PONT ET VECTEUR : le bon reste ; la carte Couvert arrive à côté en P17.
  SON : aucun (respiration).
  IMAGE CLÉ : 0.80 : le liège au soleil du matin, le bon de commande vierge « -- couverts », « Et le [matin], » (P16.png).

Scene 2 (1.06 à 3.88 s) : P17, tu sais exactement
  TEXTE ÉCRAN : sous-titre « tu sais [boîte : exactement] pour combien tu cuisines. » (tu 1.19, sais 1.37, boîte 1.53, exactement 1.55, pour 2.26, combien 2.43, tu 2.79, cuisines 2.97) ; il sort de 3.60 à 3.74 ; carte : « COUVERT », « SAMEDI 14 · CE SOIR », « 38 », « couverts confirmés », « 14 tables · 0 en attente ».
  IMAGE DE DÉPART : le bon vierge, cam(510, 1720, 1.65).
  ÉTAPES : 1.06 la carte Couvert arrive à droite du bon ×1,15 flou 8 → net (0,14 s), le fond se floute à 4 px (bascule de netteté) ; 1.37 « SAMEDI 14 · CE SOIR » ; 1.55 sur « exactement » « 38 » roule de 0 à 38 (0,45 s) ; 2.10 « couverts confirmés », 2.30 « 14 tables · 0 en attente » ; 2.43 sur « combien » le « 38 » vole de la carte jusqu'au bon de commande (0,25 s) et remplace « -- » (même nœud) ; 2.97 sur « cuisines » le bon tasse sur le liège ; 3.50 la carte se replie en pastille ; 3.60 départ du recul.
  PISTE CAMÉRA : dérive latérale +10 u/s ; 3.60 à 3.88 recul vers le haut-droite (power2.in, flou 0 → 10 px).
  COUCHES ET PROFONDEUR : fond le liège flou ; sujet la carte ; le bon à gauche ; couches animées 2 à 3.
  OBJET-PONT ET VECTEUR : la pastille de la carte file vers T12 : elle deviendra la table 12 pleine en frame 10.
  SON : key-press 1.55 à 2.00 (« 38 » roule) ; pop 2.68 (« 38 » se pose sur le bon).
  IMAGE CLÉ : 2.30 : la carte Couvert « 38 couverts confirmés » à droite, le bon « 38 » à gauche, flou, « tu sais [exactement] pour combien tu cuisines. » (P17.png).

## Frame 10: Pleine pour de vrai · 36.77 → 40.48

- scene: Le plan large au propre se remplit : les convives s'assoient à chaque table, toutes les bougies sont allumées ; le wordmark Couvert se pose ; puis l'iris se referme sur la bougie de la table 12
- duration: 3.71s
- transition_in: cut
- status: outline
- src: compositions/frames/10-pleine.html
- voiceover: "Couvert. Ta salle, pleine pour de vrai."
- type: payoff
- blueprint: camera-journey (Adapt)
- focal: le plan plein, le wordmark
- rules: waterfall-entry, depth-of-field-blur
- world: light
- handoff_in: à 0.00 : cam(1100, 1300, 0.8) flou 10 px, en plein recul vers le plan large (vers le haut-droite) ; bon de commande « 38 » épinglé sur le liège ; la carte « 38 couverts confirmés » est repliée en pastille (×0,2) et file vers T12 ; sous-titre sorti ; grain 3 %
- handoff_out: à 3.71 : l'iris d'assemble.sh, parti à 3.66 de la bougie de T12 (écran 590, 595), ouvre la carte de fin dans un cercle qui grandit ; dessous, la frame 10 reste montée jusqu'à 4.46 sur le plan plein cam(1640, 1080, 0.53), dérive lente, sous-titre sorti ; la frame 11 commence sur la scène sombre, halo braise centré à 0 %, aucun texte

Word cues: Couvert@0.56 Ta@1.50 salle@1.78 pleine@2.40 pour@2.65 de@2.90 vrai@3.14

Scene 1 (0.00 à 1.33 s) : P18, Couvert
  TEXTE ÉCRAN : wordmark « COUVERT » en haut au centre (Big Shoulders 120, encre), sans sous-titre (le wordmark dit le mot).
  IMAGE DE DÉPART : handoff_in.
  ÉTAPES : 0.00 à 0.40 fin du recul (expo.out) sur cam(1640, 960, 0.5) ; 0.10 la pastille se pose sur T12 ; 0.20 à 0.90 les convives s'assoient, table après table (chaque disque ×1,3 → 1, 0,1 s, 0,03 s d'écart, depuis T12 vers les bords) ; 0.56 sur « Couvert » le wordmark se pose lettre par lettre (×1,4 flou → net 0,12 s, 0,03 s d'écart) ; 0.90 les 14 étiquettes « Confirmé » pulsent ensemble une fois.
  PISTE CAMÉRA : dérive avant 0,5 → 0,52 et vers le bas +20 u/s (vers le cadrage cam(1640, 1080)).
  COUCHES ET PROFONDEUR : fond la trame ; sujet le plan qui se remplit ; wordmark devant ; couches animées 3.
  OBJET-PONT ET VECTEUR : le plan reste ; le wordmark s'efface vers le haut à 1.30 (0,15 s) pour laisser la phrase.
  SON : whoosh 0.00 ; sparkle 0.60.
  IMAGE CLÉ : 1.00 : le plan entier vu de haut, chaque table avec ses convives et son étiquette « Confirmé », « COUVERT » en haut (P18.png).

Scene 2 (1.33 à 3.71 s) : P19, ta salle, pleine pour de vrai
  TEXTE ÉCRAN : sous-titre « Ta salle, [boîte : pleine] [trait : pour de vrai]. » (Ta 1.50, salle 1.78, boîte 2.38, pleine 2.40, pour 2.65, de 2.90, vrai 3.14, trait 2.65 à 3.20) ; il sort de 3.30 à 3.44.
  IMAGE DE DÉPART : le plan plein, cam(1640, 1040, 0.51).
  ÉTAPES : 1.50 les bougies de toutes les tables s'allument en même temps qu'au début du film (même cascade qu'à 2.10, la rime) ; 1.78 un serveur passe en bas du plan (disque qui glisse) ; 2.40 sur « pleine » la caméra pousse doucement ; 2.65 à 3.20 le trait se dessine ; 3.30 à 3.44 le sous-titre sort ; 3.66 l'iris d'assemble.sh ouvre la carte de fin depuis la bougie de T12 (écran 590, 595) ; la frame reste montée et vivante (dérive, flammes) jusqu'à 4.46.
  PISTE CAMÉRA : dérive avant cam(1640, 1040, 0.51) → cam(1640, 1080, 0.53) de 0.00 à 3.66, puis 0,53 → 0,535 jusqu'à 4.46 (T12 reste en (590, 595) à ±5 px pendant l'iris).
  COUCHES ET PROFONDEUR : fond la trame ; sujet le plan plein ; couches animées 2.
  OBJET-PONT ET VECTEUR : la bougie de T12 est le centre de l'iris : la carte de fin s'ouvre sur son halo.
  SON : whoosh-cinematic 3.66 (l'iris).
  IMAGE CLÉ : 2.90 : le plan entier plein, toutes les tables occupées et confirmées, « Ta salle, [pleine] pour de vrai. » avec le trait braise sous « pour de vrai » (P19.png).

## Frame 11: Essaie-le · 40.48 → 45.00

- scene: Back on the dark stage: the wordmark COUVERT, « Ta salle, pleine pour de vrai. » lands, a cursor arrives and clicks « ESSAYER UN MOIS GRATUIT » directly
- duration: 4.52s
- transition_in: cut
- status: outline
- src: compositions/frames/11-fin.html
- voiceover: "Essaie-le gratuitement, un mois."
- type: cta
- blueprint: logo-assemble-lockup (Adapt)
- focal: the wordmark, then the CTA button
- rules: cursor-click-ripple, press-release-spring
- world: dark
- handoff_in: à 0.00 : l'iris d'assemble.sh, parti à 3.66 de la bougie de T12 (écran 590, 595), ouvre la carte de fin dans un cercle qui grandit ; dessous, la frame 10 reste montée jusqu'à 4.46 sur le plan plein cam(1640, 1080, 0.53), dérive lente, sous-titre sorti ; la frame 11 commence sur la scène sombre, halo braise centré à 0 %, aucun texte
- handoff_out: aucun (fin du film, noir à 4.52)

Word cues: Essaie-le@0.33 gratuitement@0.65 un@1.59 mois@1.77 (hold to 4.52)

Scene 1 (0.00 à 2.12 s) : P20, le bouton
  TEXTE ÉCRAN : wordmark « COUVERT » ; promesse « Ta salle, pleine pour de vrai. » ; bouton « ESSAYER UN MOIS GRATUIT » ; URL « couvert-resto.fr » ; sous-titre « Essaie-le [boîte : gratuitement], un mois. » (Essaie-le 0.33, boîte 0.63, gratuitement 0.65, un 1.59, mois 1.77) ; il sort de 2.00 à 2.12.
  IMAGE DE DÉPART : handoff_in.
  ÉTAPES : 0.00 la scène sombre est révélée par le cercle de l'iris (assemble.sh) ; le halo braise s'ouvre au centre (0 → 1, 0,3 s expo.out) ; 0.10 « COUVERT » se pose lettre par lettre (×1,4 flou → net, 0,03 s d'écart) ; 0.45 la promesse arrive mot à mot ; 0.65 le bouton arrive ×1,1 flou → net (0,12 s), avec un anneau qui s'ouvre (comme l'étiquette « Confirmé ») ; 0.90 l'URL ; 1.20 le curseur arrive du bas-droite en UNE courbe (0,45 s power3.out) ; 1.77 sur « mois » clic direct : pression ×0,85 (0,06 s), le bouton passe papier → braise pâle → braise et se remplit (0,12 s), onde braise.
  PISTE CAMÉRA : dérive avant 1 → 1,02 du halo et du texte.
  COUCHES ET PROFONDEUR : fond le noir et le halo ; sujet le bouton ; curseur devant ; couches animées 2 à 3.
  OBJET-PONT ET VECTEUR : le bouton reste, rempli.
  SON : sparkle 0.10 ; click 1.77.
  IMAGE CLÉ : 1.70 : le noir chaud, « COUVERT », la promesse, le bouton « ESSAYER UN MOIS GRATUIT » et le curseur qui arrive dessus, « Essaie-le [gratuitement], un mois. » (P20.png).

Scene 2 (2.12 à 4.52 s) : P21, la tenue vivante
  TEXTE ÉCRAN : wordmark, promesse, bouton et URL inchangés ; aucun sous-titre.
  IMAGE DE DÉPART : le bouton rempli de braise, le curseur dessus.
  ÉTAPES : 2.12 l'onde finit de s'ouvrir ; 2.40 le curseur glisse de 20 px et s'efface (0,3 s) ; 2.60 à 4.00 tenue vivante : le halo dérive et respire en pas finis (2 cycles de 0,7 s), le grain bouge ; 4.00 à 4.52 iris vers le noir sur le bouton.
  PISTE CAMÉRA : dérive avant 1,02 → 1,05.
  COUCHES ET PROFONDEUR : fond le halo ; sujet le bouton ; couches animées 2.
  OBJET-PONT ET VECTEUR : aucun (fin) ; sortie en iris noir.
  SON : la musique finit ; aucun bruitage.
  IMAGE CLÉ : 3.40 : le bouton braise rempli sous « COUVERT », le cercle qui commence à se refermer (P21.png).

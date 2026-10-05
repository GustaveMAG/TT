#!/usr/bin/env python3
"""Planche du storyboard de Couvert : une image par plan (styleframes/png/Pnn.png) avec sa légende.
Usage (depuis couvert/) : py -3.12 styleframes/build-planche.py  -> PLANCHE.html et PLANCHE.png
"""
import html
import pathlib

P = [
    (1, "0,00 → 1,90", "Samedi soir", "« Samedi, vingt heures. »", "La bougie de la table 12 s'allume, le chevalet « Réservé · sam. 20:00 » se redresse.", "Dérive avant sur T12, verre flou en avant-plan.", "La bougie de T12 devient l'une des 14 bougies.", "pop sur la bougie"),
    (2, "1,90 → 4,40", "Samedi soir", "« Ta salle est pleine… sur le papier. »", "Recul : les 14 tables s'allument, chacune « Réservé » ; le cahier tamponné « COMPLET » se pose à côté.", "Recul franc vers le plan large, puis cran avant vers T12.", "Vecteur : cran vers T12.", "whoosh, scintillement, tampon grave"),
    (3, "4,40 → 7,00", "La table de six", "(silence : le gag)", "Table 12 : le serveur redresse la serviette… puis la redresse encore. 20:47 → 20:58.", "Fin du cran, dérive lente.", "Filé vers la table de six.", "deux petits clics, sinon le silence"),
    (4, "7,00 → 8,84", "La table de six", "« La table de six ne viendra pas. »", "La bougie de la table de six s'éteint, fumée, le chevalet « Martin ×6 » tombe à plat.", "Filé vers T7, léger recul.", "Filé vers la droite, vers T4.", "whoosh, souffle"),
    (5, "8,84 → 10,55", "Quarante couverts", "« Ni la table de quatre. »", "La table de quatre s'éteint à son tour : deux trous noirs dans la salle allumée.", "Fin du filé, dérive arrière.", "Tilt vers la cuisine.", "souffle"),
    (6, "10,55 → 13,25", "Quarante couverts", "« Ce matin, tu as acheté pour quarante couverts. »", "Le bon de commande du matin s'épingle, « 40 » roule.", "Tilt vers le liège, dérive avant.", "Whip vers la droite, le long de la cuisine.", "touches, coup grave sur « 40 »"),
    (7, "13,25 → 14,80", "Pour personne", "« Et à vingt-deux heures, »", "Au passe, six assiettes pleines sous les lampes ; l'heure roule jusqu'à 22:00.", "Fin du whip, dérive latérale.", "L'assiette de droite part avec la caméra.", "l'heure roule"),
    (8, "14,80 → 16,55", "Pour personne", "« tu jettes ce que tu as cuisiné… »", "Sur « jettes » l'assiette bascule dans la poubelle, puis deux autres.", "Filé vers la poubelle, secousse au contact.", "Recul vers le plan large.", "impact sur « jettes »"),
    (9, "16,55 → 18,27", "Pour personne", "« pour personne. »", "La salle entière, chaises vides ; les bougies s'éteignent une à une, T12 en dernier.", "Recul, puis glissement vers T12.", "La lueur de T12 reste seule dans le noir.", "whoosh large, puis silence"),
    (10, "18,27 → 22,48", "Une table tenue", "« Et si chaque table réservée était une table tenue ? »", "La question s'écrit sur le noir ; sur « tenue » la bougie de T12 se rallume, sa lumière envahit l'écran.", "Immobile, les lettres dérivent.", "La flamme devient le flash de lumière.", "montée, carillon, souffle du flash"),
    (11, "22,48 → 25,70", "Jour et nuit", "« Couvert prend tes réservations, jour et nuit. »", "Le plan au propre en plein jour ; l'appli Couvert reçoit les résas, même à 02:14.", "Plan flou derrière le téléphone, puis recul.", "Les lignes de résa deviennent les étiquettes.", "notifications"),
    (12, "25,70 → 27,70", "La veille, par SMS", "« Il confirme chaque table la veille, »", "Ven. 18:00 : les étiquettes « Confirmé » se posent table après table.", "Dérive avant, puis cran vers T7.", "L'étiquette de T7 au centre.", "10 petits pops"),
    (13, "27,70 → 29,05", "La veille, par SMS", "« par SMS. »", "Le SMS à Martin, réponse « OUI », « Distribué ».", "Dérive avant, puis filé vers T4.", "Le même téléphone suit la caméra.", "notification, ping"),
    (14, "29,05 → 30,30", "La liste d'attente", "« Une annulation ? »", "« Désolés, on ne pourra pas venir. » La table 4 passe « Libérée ».", "Fin du filé sur T4.", "« Libérée » est la cible du plan suivant.", "notification"),
    (15, "30,30 → 32,89", "La liste d'attente", "« La place repart aussitôt à la liste d'attente. »", "La liste d'attente s'ouvre ; Dubois file s'asseoir à la table 4 et devient « Confirmé ».", "Recul, plan à gauche, liste à droite.", "Travelling vers la cuisine.", "whoosh, pop"),
    (16, "32,89 → 33,95", "Le matin, 38 couverts", "« Et le matin, »", "Le même liège qu'au début, au soleil du matin : le bon de commande est vierge.", "Fin du travelling, dérive.", "Le bon reste, la carte arrive.", "respiration"),
    (17, "33,95 → 36,77", "Le matin, 38 couverts", "« tu sais exactement pour combien tu cuisines. »", "La carte Couvert : « 38 couverts confirmés » ; le 38 vole sur le bon de commande.", "Bascule de netteté, puis recul.", "La carte se replie et file vers T12.", "touches, pop"),
    (18, "36,77 → 38,10", "Pleine pour de vrai", "(le wordmark dit « Couvert. »)", "Les convives s'assoient à chaque table ; « COUVERT » se pose.", "Fin du recul, dérive.", "Le plan reste.", "whoosh, scintillement"),
    (19, "38,10 → 40,48", "Pleine pour de vrai", "« Ta salle, pleine pour de vrai. »", "Le plan plein, toutes les bougies allumées : la rime du plan 2.", "Dérive avant, puis iris sur T12.", "L'iris se referme sur la bougie de T12.", "souffle de l'iris"),
    (20, "40,48 → 42,60", "Essaie-le", "« Essaie-le gratuitement, un mois. »", "Scène sombre : « COUVERT », la promesse, le bouton ; le curseur arrive et clique sur « mois ».", "Dérive lente du halo.", "Le bouton reste, rempli.", "clic"),
    (21, "42,60 → 45,00", "Essaie-le", "(silence)", "Le bouton braise, le halo respire 2 s, puis iris au noir.", "Dérive lente.", "Fin du film.", "la musique finit"),
]

e = html.escape
cards = "".join(
    f'<article><img src="styleframes/png/P{n:02d}.png" alt="Plan {n}"><div class="meta"><div class="top"><b>P{n}</b>'
    f'<span>{t} s</span><em>{e(seq)}</em></div><p class="voix">{e(v)}</p><p>{e(im)}</p><dl><dt>Caméra</dt><dd>{e(c)}</dd>'
    f'<dt>Pont</dt><dd>{e(b)}</dd><dt>Son</dt><dd>{e(s)}</dd></dl></div></article>'
    for n, t, seq, v, im, c, b, s in P)

page = """<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Couvert · planche</title><style>
@font-face{font-family:"Instrument Sans";src:url(assets/fonts/InstrumentSans-400.woff2);font-weight:400}
@font-face{font-family:"Instrument Sans";src:url(assets/fonts/InstrumentSans-600.woff2);font-weight:600}
@font-face{font-family:"Space Mono";src:url(assets/fonts/SpaceMono-400.woff2)}
@font-face{font-family:"Big Shoulders";src:url(assets/fonts/BigShoulders-800.woff2);font-weight:800}
body{margin:0;background:#f5efe4;color:#1c1612;font:400 15px/1.4 "Instrument Sans";padding:40px}
header{display:flex;align-items:baseline;gap:24px;margin-bottom:28px}h1{font:800 48px "Big Shoulders";letter-spacing:.06em;margin:0}
header p{margin:0;color:#5c5348}main{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
article{background:#fffdf8;border-radius:12px;overflow:hidden;box-shadow:0 0 0 1px #ddd2c2}img{width:100%;display:block}
.meta{padding:12px 16px 14px}.top{display:flex;gap:12px;align-items:baseline}.top b{font:800 22px "Big Shoulders";color:#c4532a}
.top span{font:400 13px "Space Mono"}.top em{margin-left:auto;font-style:normal;color:#5c5348;font-size:13px}
.voix{font-weight:600;margin:6px 0 4px}p{margin:0 0 6px}dl{display:grid;grid-template-columns:62px 1fr;gap:2px 8px;margin:0;font-size:13px}
dt{font:400 11px "Space Mono";text-transform:uppercase;letter-spacing:.1em;color:#958a7f;padding-top:2px}dd{margin:0;color:#5c5348}
</style></head><body><header><h1>Couvert</h1><p>Storyboard · 45,00 s · 11 séquences, 21 plans · minuté sur voix-montage.wav (prise 2)</p></header><main>""" + cards + "</main></body></html>"

root = pathlib.Path(__file__).resolve().parent.parent
(root / "PLANCHE.html").write_text(page, encoding="utf-8")

from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1800, "height": 1000})
    pg.goto((root / "PLANCHE.html").as_uri())
    pg.wait_for_load_state("networkidle")
    pg.evaluate("document.fonts.ready.then(() => true)")
    pg.wait_for_timeout(300)
    pg.screenshot(path=str(root / "PLANCHE.png"), full_page=True)
    b.close()
print(root / "PLANCHE.html")
print(root / "PLANCHE.png")

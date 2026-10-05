# Couvert : grille de contrôle du storyboard

Grille en 15 points de `patterns/STORYBOARD-CRAFT.md` § 5, puis les règles maison de `SKILL.md`. Vérifications
automatiques : somme des durées = 45,00 s (11 séquences), les 10 coutures `handoff_out` / `handoff_in` identiques mot pour
mot, aucun `{{` dans `STORYBOARD.md` ni `frame.md`.

| # | Point | Verdict |
|---|---|---|
| 1 | En-tête : monde, stations, fond texturé, couleurs de rôle, signatures datées, registres | OK (parquet sombre / trame claire, 2 signatures, 5 registres) |
| 2 | Piste caméra dans chaque plan, jamais à l'arrêt plus de 0,5 s hors silence écrit | OK ; P10 : caméra du monde immobile, la dérive passe dans les lettres (silence écrit et moment typographique) |
| 3 | Aucun trou de plus de 1 s entre deux étapes | OK ; P3 (gag) : un événement toutes les 0,3 à 0,5 s |
| 4 | Apparitions ≤ 0,2 s, dérives ≥ 1 s, zone 0,3 à 0,9 s réservée à la caméra et au curseur | OK |
| 5 | Chaque tenue nomme sa couche vivante | OK (flammes, fumée, dérive, halo de fin en pas finis) |
| 6 | Chaque jonction nomme son objet-pont ou son vecteur ; zéro dédoublement | OK (un seul téléphone de P11 à P14, un seul bon de commande) |
| 7 | 2 transitions « effet » au plus | OK : le flash (P10 → P11) et l'iris (P19 → P20) |
| 8 | Coupes franches au quota de la voix | OK : 0 coupe |
| 9 | État de départ écrit pour chaque élément principal | OK |
| 10 | Écarts image / voix écrits ; silences > 0,4 s écrits comme des plans | OK (16 silences listés, chacun avec son action) |
| 11 | Au moins 3 verbes joués par un objet | OK : « ne viendra pas » (la bougie s'éteint), « jettes » (l'assiette bascule), « repart » (Dubois file vers T4), « confirme » (les étiquettes) |
| 12 | 3 niveaux dans la moitié des plans, parallaxe par acte | OK (verre flou P1, manche P3, fumée P4, téléphone devant le plan flou P11 à P14, rai de soleil P16) |
| 13 | Couches animées : courant ≥ 2, pic 3 à 4, un seul élément actif | OK |
| 14 | Rime | OK : plan plein 2,40 → 38,10 ; bon « 40 » → « 38 » ; bougie de T12 au début, au pivot et à l'iris |
| 15 | Fin : geste qui rassemble, curseur en courbe, clic direct, 2 à 3 s de tenue vivante, iris | OK |

## Règles maison

- Sous-titre en bas au centre, un mot-clé par phrase dans la boîte braise, 4 traits : OK.
- Le premier mot nomme la cible (« Samedi, vingt heures » : le service du restaurateur), la première image le montre : OK. Le logo n'arrive qu'à 37,33 s.
- Pivot explicite sur noir avant la marque, le sol change avec lui : OK.
- Chaque chiffre roule (40, 22:00, 02:14, 38) : OK.
- **À surveiller à l'animation** : dans les plans proches de la salle (P4, P5), des chevalets « RÉSERVÉ » tombent dans la bande du sous-titre. Les masquer sous la bande (ou décaler le cadrage de 60 px vers le bas) pendant que la phrase est à l'écran.
- **Interfaces** : Couvert est fictif, son interface est la nôtre ; iOS Messages est redessiné de mémoire : à vérifier sur une capture récente avant d'animer.
- **URL** : « couvert-resto.fr » est un exemple à remplacer.

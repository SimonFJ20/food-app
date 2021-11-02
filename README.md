# Food-App

Food App (i starten med navn "FeedMe") var et skoleprojektet lavet af:

- [Theis Pieter Hollebeek](https://tphollebeek.netlify.app/)
- [Simon From Jakobsen](https://simonfromjakobsen.netlify.app/)
- [Maksim Bech](https://www.youtube.com/channel/UCSvZRr6J2j4j8-fQbGMuNWw)

Det var vores afsluttende projekt i Erhvervsinformatik på GF2 på EUX. 
Opgaven var at lave en app der havde noget med mad at gøre.
Projektet havde en varighed på 4 uger.

[Se resultat her](https://feedmeapp.netlify.app/)

Appen ser flottest ud på telefon, eller ved at trykke `ctrl`+`shift`+`M` på Firefox og Chrome på computeren.

Backenden er skrevet i [NodeJS](https://nodejs.org/en/) med [ExpressJS](https://expressjs.com/) og [MongoDB](https://www.mongodb.com/)

Frontenden er skrevet i [JS/Typescript](https://www.typescriptlang.org/), HTML og SASS på en [Angular](https://angular.io/)-agtig måde, bundled med [Webpack](https://webpack.js.org/), med minimale libraries.

---

### Filer/mapper

| Navn | Beskrivelse |
|---|---|
| [`/chevrolet`](/chevrolet) | Første "frontend" kode i udgangspunkt af skitserne |
| [`/citröen_berlingo`](/citröen_berlingo) | Oprydning og udbyggelse af [`/chevrolet`](/chevrolet) |
| [`/concepts`](/concepts) | Forskellige skitser, specifikationer og lidt prototype kode |
| [`/honda`](/honda) | Prototype af "backend" teknologier |
| [`/management`](/management) | Lidt forsøgt planlægning |
| [`/subaru`](/subaru) | Ny backend skrevet fra bunden |
| [`/suzuki`](/suzuki) | Udbygning af [`/subaru`](/subaru) med ny filstruktur, sidste version |
| [`/volkswagen`](/volkswagen) | Oprydning og udbyggelse af [`/citröen_berlingo`](/citröen_berlingo), sidste version |
| [`/web-101`](/web-101) | En lille guide til HTML5, CSS og JavaScript |

### Kode / Sprog

```
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
JSON                             9              1              0           2019
TypeScript                      53            406             16           1395
Sass                            27            321              0           1269
HTML                            32            223              4            766
JavaScript                      22            145              8            683
Markdown                         9            226              0            657
CSS                              3             37              0            166
-------------------------------------------------------------------------------
SUM:                           155           1359             28           6955
-------------------------------------------------------------------------------
```

---

### DONE
##### [Udført] Opgave (Primær Ansvarlig)

 - [x] Maksim skal lærer at kunne læse og forstå HTML, CSS og GitHub. (Simon, Maksim)
 - [x] HHX-tingene skal læses så vi opfylder bogen og Jeppe.
     - [x] Bogen skal læses af alle
         - [x] Theis
         - [x] Maksim
         - [x] Simon
     - [x] Laves en dokument, som beskrever dataansvarlighed. (Simon)
     - [x] Udvikling og dokumentering af problemstilling og idegenerering
         - [x] Rough UI Draft (Theis)
         - [x] Dokumentering af ide (Simon)
         - [x] Tilføjelser, prioriteringer og kritik af ide(er)
     - [x] Udføre en fuld dokumenteret iterationsprocess, til at fastlægge workflowet
 - [x] En plan for hvad og hvornår
 - [x] Lave en virkende prototype
 - [x] Lave et frontend workflow, så Maksim kan deltage. (Theis, Simon)
 - [x] Lave et backend workflow. (Simon)
     - [x] Lav en long term plan
     - [x] Vælg nogle teknologier, NodeJS/Python, REST/GraphQL, MongoDB/PostgreSQL

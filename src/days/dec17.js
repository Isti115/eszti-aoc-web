export default {
  title: 'Dec. 17.\n - Ajándékok minősége 1.',
  description:
`
## Minőségellenőrzés

A Télapó természetesen nagyon fontosnak tartja, hogy mindenkinek a lehető legjobb minőségű ajándékot vigye, ezért kiszállítás előtt minden egyes darabot a manók tüzetes vizsgálatának vet alá.

A négy fő szempont a következő:
* Felület minősége, például bevonatok egyenletessége, mint mondjuk festés. (*surface*)
* Anyagminőség, például szilárdság, van adott esetben ruganyosság. (*material*)
* Funkcionalitás, interaktív elemek esetén azok kipróbálása. (*functionality*)
* Csomagolás minősége. (*packaging*)

Amennyiben egy ajándék semelyik teszten sem bukik meg, akkor nincs vele további teendő. Ha egy vagy két hibás tulajdonságot észlelnek, akkor ezeket a helyi műhelyben próbálják javítani, amennyiben pedig kettőnél több (tehát három vagy négy) probléma adódik, akkor visszaküldik a gyárba.

Feladatunk a manók által által ellenőrzött termékeket kategorizálni. A Mikulás szeretné tudni, hogy mennyi ajándék ment át sikeresen, mennyi került javításra és mennyi visszaküldésre.
Az eredményt egy objektumként közöljük, melynek kulcsai a \`perfect\`, \`repairable\` és \`returned\` nevek legyenek, a hozzájuk tartozó értékek pedig az adott kategóriába eső termékek számát jelöljék.

_Például:_
\`\`\`
{
  "perfect": 1,
  "repairable": 2,
  "returned": 3
}
\`\`\`
`,
  initialInput:
`
[
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": false,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": false,
    "material": true,
    "functionality": false,
    "packaging": true
  },
  {
    "surface": true,
    "material": false,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": false
  },
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": false,
    "functionality": false,
    "packaging": false
  },
  {
    "surface": true,
    "material": true,
    "functionality": false,
    "packaging": true
  },
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": false,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": false,
    "functionality": false,
    "packaging": false
  },
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": false,
    "material": true,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": true
  },
  {
    "surface": true,
    "material": true,
    "functionality": true,
    "packaging": true
  }
]
`,
  initialCode:
`

`,
  validSolution:
`
const result = {
  "perfect": 0,
  "repairable": 0,
  "returned": 0
}

for (const present of data) {
  const score
    = present.surface
    + present.material
    + present.functionality
    + present.packaging

  if (score < 2) {
    result.returned++
  } else if (score < 4) {
    result.repairable++
  } else {
    result.perfect++
  }
}

return result
`,
  code: 9072
}

export default {
  title: 'Dec. 4.\n - Raktárkészlet',
  description:
  `
#Leltár
A manók elkezdenék összekészíteni az ajándékokat, azonban a nagy kavarodásban senki nem találja, hogy mi hol van.

A csomagok pontos pozícióiról nincsenek információik, azonban amikor bekerült a raktárba, akkor mindegyikről feljegyezték, hogy hanyadik polcra tették, továbbá a szabályzatuk előírja, hogy amikor valaki elmozdít valamit, akkor fel kell jegyeznie, hogy azt eggyel balrább (kisebb számú polcra) vagy eggyel jobbrább (nagyobb számú polcra) helyezte. Ezt a naplóban \`-\` és \`+\` jelekkel jelzik a gyors felírhatóság érdekében. Amennyiben több polccal is arrébb viszi, akkor több bejegyzést kell bevinnie a rendszerbe.

Szükség lenne egy olyan programra, ami a kiindulási állapotból és a manók által írt feljegyzésekből előállítja a csomagok jelenlegi pozícióit.
Arról nem voltak hajlandóak nyilatkozni, hogy mi pontosan hogyan helyezkednek el a raktárban, de azt mondták, hogy amikor belépnek a főbejáraton, akkor pont szemben van velük a 0. polc, és ettől jobbra és balra is gyakorlatilag végtelen számú polc található, tehát negatív és pozitív irányba is mehet a számozás.
`,
  initialInput:
  `
{
  "initialPositions": {
    "csokoládé": 0,
    "nyalóka": -2,
    "dió": 3,
    "mogyoró": 1
  },

  "movingLog": [
    {
      "name": "mogyoró",
      "direction": "-"
    },
    {
      "name": "nyalóka",
      "direction": "+"
    },
    {
      "name": "nyalóka",
      "direction": "-"
    },
    {
      "name": "dió",
      "direction": "+"
    },
    {
      "name": "csokoládé",
      "direction": "+"
    },
    {
      "name": "dió",
      "direction": "+"
    },
    {
      "name": "nyalóka",
      "direction": "-"
    }
  ]
}
`,
  initialCode:
`
const positions = {}

// Kezdeti pozícióadatok lemásolása
for (const key in data.initialPositions) {
  positions[key] = data.initialPositions[key]
}

// Ide írd a csomagok mozgatásait feldolgozó ciklust

return positions
`,
  validSolution:
`
const positions = {}

for (const key in data.initialPositions) {
  positions[key] = data.initialPositions[key]
}

for (const entry of data.movingLog) {
  if (entry.direction == "+") {
    positions[entry.name] += 1
  } else if (entry.direction == "-") {
    positions[entry.name] -= 1
  }
}

return positions
`,
  code: 3428
}

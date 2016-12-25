export default {
  title: 'Dec. 11.\n - GYÖMBÉR I.',
  description:
`
A manók egy különleges alakulata, a **Gyanús Összefüggések Megfigyelésére Beiktatott Észrevételi Részleg** jelentette, hogy valami nem stimmel a szaloncukrok gyártásával.
<br />
Arra szeretnének rájönni, hogy melyik géppel lehet a probléma, és ehhez van szükségük egy olyan programra, ami elkészíti a hibák statisztikáját.

A kellő adatok begyűjtéséhez egy darabig diagnosztikai módban futtatták a gépsort, ami így feljegyezte a becsomagolt édességek papírjainak a színeit. (\`actualColors\`)
Tudjuk továbbá, hogy melyik cukorból milyen mennyiség legyártására lettek beállítva a gépek. (\`expectedAmounts\`)

Feladatunk, hogy azokra az ízekre, amikből a gép nem megfelelő mennyiséget állított elő, adjuk meg, hogy túl sok lett, vagy túl kevés.
<br />
A kimenetet egy objektumba csomagoljuk, melynek kulcsai a hibás szaloncukrok típusai, értékei pedig a \`"sok"\` és \`kevés\` string-ek lehetnek.

Például túl sok marcipános és kevés epres esetén:
\`\`\`
{
  "Marcipános": "sok"
  "Epres": "kevés",
}
\`\`\`

> Megjegyzés: Egy objektumon (\`object\`) az \`in\` kulcsszóval lehet a következőképpen megvizsgálni, hogy tartalmaz-e már egy adott kulcsot (\`key\`), és ha még nem tartalmazza, akkor egy bizonyos kezdőértékkel (jelen esetben \`0\`) hozzáadni:
> \`\`\`
> if(!(key in object)) {
>   object[key] = 0
> }
> \`\`\`
`,
  initialInput: `
{
  "expectedAmounts": [
    {
      "type": "Kókuszos",
      "color": "blue",
      "amount": 15
    },
    {
      "type": "Marcipános",
      "color": "white",
      "amount": 10
    },
    {
      "type": "Narancsos",
      "color": "orange",
      "amount": 10
    },
    {
      "type": "Epres",
      "color": "red",
      "amount": 5
    },
    {
      "type": "Mákos",
      "color": "silver",
      "amount": 3
    },
    {
      "type": "Citromos",
      "color": "yellow",
      "amount": 3
    }
  ],

  "actualColors": [
    "blue",
    "red",
    "blue",
    "orange",
    "blue",
    "white",
    "orange",
    "orange",
    "white",
    "orange",
    "orange",
    "yellow",
    "orange",
    "yellow",
    "white",
    "silver",
    "yellow",
    "white",
    "red",
    "orange",
    "white",
    "red",
    "orange",
    "white",
    "orange",
    "red",
    "blue",
    "orange",
    "orange",
    "yellow",
    "orange",
    "white",
    "blue",
    "orange",
    "orange",
    "white",
    "orange",
    "white",
    "red",
    "white"
  ]
}
`,
  initialCode:
`

`,
  validSolution:
`
const colorCount = {}

for (const currentColor of data.actualColors) {
  if (!(currentColor in colorCount)) {
    colorCount[currentColor] = 0
  }

  colorCount[currentColor]++
}

const problems = {}

for (const currentType of data.expectedAmounts) {
  if (colorCount[currentType.color] < currentType.amount) {
    problems[currentType.type] = "kevés"
  } else if (colorCount[currentType.color] > currentType.amount) {
    problems[currentType.type] = "sok"
  }
}

return problems
`,
  code: 2019
}

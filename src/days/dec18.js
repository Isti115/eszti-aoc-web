export default {
  title: 'Dec. 18.\n - Ajándékok minősége 2.',
  description:
`
## Legtöbb hibát kiszűrő vizsgálat

Az előző példában ismertetett módon elvégzett tesztek eredményei után a Mikulás még arra a statisztikai adatra lenne kíváncsi, hogy melyik szempont szerint volt a legtöbb hiba az ajándékokban.

Visszatérési értékként adjuk meg, hogy melyik vizsgálat mennyi hibát jelzett ki összesen, továbbá azt is, hogy melyik probléma fordult elő leggyakrabban.
<br />
A tesztek típusaihoz tartozó értékeket a \`surface\`, \`material\`, \`functionality\` és \`packaging\` kulcsokhoz rendeljük, a legsűrűbb hibát pedig a \`frequent\` kulcshoz társítsuk a neki megfelelő értékkel a következőek közül: **"Felület"**, **"Anyagminőség"**, **"Funkcionalitás"** vagy **"Csomagolás minősége"**.

_Például:_
\`\`\`
{
  "surface": 1,
  "material": 2,
  "functionality": 3,
  "packaging": 4,

  "frequent": "Csomagolás minősége"
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
const problemNames = {
  "surface": "Felület",
  "material": "Anyagminőség",
  "functionality": "Funkcionalitás",
  "packaging": "Csomagolás minősége",
}

const result = {
  "surface": 0,
  "material": 0,
  "functionality": 0,
  "packaging": 0,
}

for (const present of data) {
  for (const property in present) {
    if (present[property] === false) {
      result[property]++
    }
  }
}

const resultArray = []

for (const property in result) {
  resultArray.push({
    name: property,
    value: result[property]
  })
}

resultArray.sort((a, b) => b.value - a.value)

result.frequent = problemNames[resultArray[0].name]

return result
`,
  code: 8455
}

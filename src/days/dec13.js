export default {
  title: 'Dec. 13.\n - GYÖMBÉR II. / 2.',
  description:
`
Most, hogy megvan a problémás ízek listája, rendezzük őket ABC sorrendbe a \`type\` kulcs értékei szerint!

Ehhez használjuk a [Dec. 3.](#dec3)-án megismert \`sort\` eljárást egy megfelelő függvényt megadva paraméterként!

Fontos tudni, hogy a **string**-ek rendelkeznek összehasonlító operátorral, például a következő táblázat mutatja néhány kifejezés igazságétékét.

| Kifejezés                | Igazságéték |
| ------------------------ | ----------- |
| \`"alma" < "banán"\`     | \`true\`    |
| \`"citrom" < "banán"\`   | \`false\`   |
| \`"szendvics" > "sajt"\` | \`true\`    |
`,
  initialInput: `[]`,
  initialCode:
`
function compareCandyByName(a, b) {
  // ide írd az összehasonlítás feltételeit
}

return data.sort(compareCandyByName);
`,
  validSolution:
`
const result = [
  {
    "type": "Kókuszos",
    "problem": "kevés"
  },
  {
    "type": "Narancsos",
    "problem": "sok"
  },
  {
    "type": "Mákos",
    "problem": "kevés"
  },
  {
    "type": "Citromos",
    "problem": "sok"
  }
]

function compareCandyByName(a, b) {
  if (a.type < b.type) {
    return -1
  } else if (a.type > b.type) {
    return +1
  } else {
    return 0
  }
}

return result.sort(compareCandyByName)
`,
  code: 8538
}

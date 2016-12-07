export default {
  title: 'Dec. 5.\n - Raktárkészlet\n   #2',
  description:
`
# Hiányzó ajándékok
Nagy a kapkodás, hiszen ez az utolsó nap az ünnep előtt, és most jöttek csak rá a manók, hogy néhány ajándék még hiányzik!
<br />
A fejetlenség közepén csak tetézi a gondokat, hogy nem is igazán tudják, mire van még szükségük.

Sokat segítene nekik egy olyan program, aminek ha megadják, hogy mi van raktárkészleten (\`stock\`) és a szükséges ajándékok listáját (\`presents\`), akkor ebből előállít egy olyan listát, ami már csak azt tartalmazza, ami hiányzik.

Ehhez segítségünkre lehet a listák \`.includes\` metódusa, ami egy adott elemről el tudja dönteni, hogy a lista tartalmazza-e.
Például:
\`\`\`
const list = [1,3,5,7,9]

console.log(list.includes(3)) // true
console.log(list.includes(4)) // false
\`\`\`

> Megjegyzés: Logikai kifejezések tagadására a már más nyelvekből megszokott \`!\` operátor alkalmas.
`,
  initialInput:
`
{
  "stock": [
    "nyalóka",
    "csokoládé",
    "dió",
    "mogyoró"
  ],

  "presents": [
    "sütemény",
    "mogyoró",
    "aszalt gyümölcs",
    "csokoládé",
    "nyalóka",
    "szörp",
    "keksz",
    "dió"
  ]
}
`,
  initialCode:
`
const stock = data.stock
const presents = data.presents

const missingPresents = []

/*
ide írd meg a ciklust,
ami feltölti a missingPresents
listát a hiányzó ajándékokkal
*/

return missingPresents
`,
  validSolution:
`
const stock = data.stock
const presents = data.presents

const missingPresents = []

for (const present of presents) {
  if (!stock.includes(present)) {
    missingPresents.push(present)
  }
}

return missingPresents
`,
  code: 6923
}

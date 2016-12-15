export default {
  title: 'Dec. 9.\n - Filter',
  description:
`
# Listák további műveletei 2/3
## Szűrés

A \`filter\` egy olyan tagfüggvénye a JavaScript listáinak, ami egy olyan egy argumentumú függvényt vár paraméterként, aminek a visszatérési értéke logikai típusú. Az eredeti lista összes elemére végrehajtva a kapott utasítást létrehoz egy új listát, ami már csak azokat tartalmazza, amelyekre logikai igazat (\`true\`) adott vissza a függvény.

Például:
\`\`\`
const list1 = [52, 135, 124, 925, 512]
const list2 = list1.filter(x => x % 2 == 0)
console.log(list2) // [52, 124, 512]
\`\`\`

Szűrjük a bemeneten kapott listát úgy, hogy csak a 10 évnél fiatalabb gyerekek maradjanak benne!
`,
  initialInput: `
{
  "children": [
    {
      "name": "Aladár",
      "age": 7
    },
    {
      "name": "Beáta",
      "age": 15
    },
    {
      "name": "Cili",
      "age": 4
    },
    {
      "name": "Dominik",
      "age": 17
    },
    {
      "name": "Edit",
      "age": 12
    },
    {
      "name": "Feri",
      "age": 3
    }
  ]
}
`,
  initialCode:
`
return data.children.filter()
`,
  validSolution:
`
return data.children.filter(c => c.age < 10)
`,
  code: 6000
}

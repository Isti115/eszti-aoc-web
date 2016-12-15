export default {
  title: 'Dec. 8.\n - Map',
  description:
`
# Listák további műveletei 1/3
## Leképezés

A \`map\` egy olyan tagfüggvénye a JavaScript listáinak, ami egy függvényt vár paraméterként. Az eredeti lista összes elemére végrehajtva a kapott utasítást ezekből az eredményekből létrehoz egy új listát. Ez lesz a viszatérési értéke.

Például:
\`\`\`
const list1 = [1, 2, 3, 4, 5]
const list2 = list1.map(x => 2 * x)
console.log(list2) // [2, 4, 6, 8, 10]
\`\`\`

A bemeneten kapunk néhány számot, amiknek a négyzetére vagyunk kíváncsiak, továbbá néhány arányt, aminek az inverzét szeretnénk előállítani.
<br />
(_Az arányokat úgy képzeljük el, mintha mondjuk a Rudolf nevű rénszarvasok aránya lenne a rénszarvasok között, nekünk pedig a nem Rudolf nevűek arányára lenne szükségünk._)

Persze megírhatnánk egy ciklussal is, de mivel már megismerkedtünk a lambda kifejezéssel használjuk azokat! ;)

A visszatérési objektum tartalmazzon egy \`squares\` nevű kulcsot, ami mögött a négyzetek vannak értékként, valamint egy \`inverses\` nevűt, ami mögött az inverzek találhatóak.
`,
  initialInput:
`
{
  "numbers":
    [1, 2, 3, 4, 5],

  "ratios": [
    0.6,
    0.2,
    0.75,
    0.5,
    1.0
  ]
}
`,
  initialCode:
`
return {
  "squares": data.numbers.map(/*négyzetre emelő lambda kifejezés*/),
  "inverses": data.ratios.map(/*arány invertáló lambda kifejezés*/)
}
`,
  validSolution:
`
return {
  "squares": data.numbers.map(x => x * x),
  "inverses": data.ratios.map(x => 1 - x)
}
`,
  code: 5288
}

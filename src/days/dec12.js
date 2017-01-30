export default {
  title: 'Dec. 12.\n - GYÖMBÉR II. / 1.',
  description:
`
A Mikulás megbízta a manókat, hogy amint megvan a teszt eredménye juttassák el hozzá, azonban ő nem ismeri a JSON-t, úgyhogy szépen prezentálható állapotba kéne hozni az adatokat.

Ehhez először alakítsuk az előző nap eredményét (onnan átmásolva ennek a napnak a bemeneti mezőjébe és \`data\` néven hozzáférve a programban) egy olyan listává, ami \`type\` és \`problem\` kulcsokat tartalmazó objektumokból áll.
Az előző nap mintakimenete például így nézne ki az átalakítás után:
\`\`\`
[
  {
    "type": "Marcipános",
    "problem": "sok"
  },
  {
    "type": "Epres",
    "problem": "kevés"
  }
]
\`\`\`

A kapott eredmény legyen a visszatérési érték.
`,
  initialInput: `{}`,
  initialCode:
`

`,
  validSolution:
`
const result = {
  "Kókuszos": "kevés",
  "Narancsos": "sok",
  "Mákos": "kevés",
  "Citromos": "sok"
}

const resultList = []

for (const type in result) {
  resultList.push({
    "type": type,
    "problem": result[type]
  })
}

return resultList
`,
  code: 5573
}

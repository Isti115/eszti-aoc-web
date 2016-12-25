export default {
  title: 'Dec. 14.\n - GYÖMBÉR II. / 3.',
  description:
`
## Template-ek

Végezetül a listából össze kéne rakni egy szöveges jelentést. Ez megoldható lenne szövegek és értékek \`+\` operátorral történő összefűzésével is, de sokkal kényelmesebb, ha használhatjuk a template string-nek nevezett JavaScript funkciót.

Ennek működése azon alapul, hogy ha visszafelé dőlő aposztrófok (magyar billentyűzeten _Alt Gr + 7_) közé írunk egy szöveget, akkor abba elhelyezhetünk egy dollár jelet követően két kapcsos zárójel közé értékeket, amiket behelyettesít a szövegbe a program.

Emberek listájából például következő képpen állíthatnánk elő őket leíró mondatokat:
\`\`\`
const people = [
  {"name": "Eszti", "age": 20, "gender": "lány"},
  {"name": "Isti", "age": 19, "gender": "fiú"}
]

const sentences = people.map(
  person => \`\${person.name} egy \${person.age} éves \${person.gender}.\`
)

return sentences.join('\\n')
\`\`\`

Ez a kódrészlet a következő visszatérési értéket eredményezné:
\`\`\`
Eszti egy 20 éves lány.
Isti egy 19 éves fiú.
\`\`\`

> Megjegyzés: _A **string**-ek tömbjére meghívott \`join\` művelet összekapcsolja őket a paraméterként megadott karaktersorozatot közéékelve, ami jelen esetben a \`\\n\`, tehát az "új sor" karakter._

Állítsunk elő egy leírást az előző feladat eredményeként kapott lista alapján az alábbi minta szerint:

A következő objektumokból:
\`\`\`
[
  {
    "type": "Epres",
    "problem": "kevés"
  },
  {
    "type": "Marcipános",
    "problem": "sok"
  }
]
\`\`\`
például az alábbi mondatokat szeretnénk kapni:
\`\`\`
Epres szaloncukorból túl kevés készült.
Marcipános szaloncukorból túl sok készült.
\`\`\`

`,
  initialInput: `[]`,
  initialCode:
`

`,
  validSolution:
`
const result = [
  {
    "type": "Citromos",
    "problem": "sok"
  },
  {
    "type": "Kókuszos",
    "problem": "kevés"
  },
  {
    "type": "Mákos",
    "problem": "kevés"
  },
  {
    "type": "Narancsos",
    "problem": "sok"
  }
]

return result.map(
  problem => \`\${problem.type} szaloncukorból túl \${problem.problem} készült.\`
).join('\\n')
`,
  code: 8158
}

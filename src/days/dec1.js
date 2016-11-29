export default {
  title: 'Dec. 1.\n - Elágazás',
  description:
`
# Feltételes utasítások
A mai feladatban a JavaScript elágazásának használatával fogunk megismerkedni.
Szerepe, hogy bizonyos utasítások végrehajtását feltételekhez kössük.

Szintaxis és működés szempontjából is nagyon hasonló más nyelvekhez.
Az \`if\` kulcsszót követő kerek zárójelekben adhatjuk meg azt a kifejezést, amely alapján a program futás közben dönteni fog.
Ezután egy kapcsos zárójelekkel határolt utasítássorozat írandó, mely akkor lesz érvényes, ha a fent említett kifejezés igazra értékelődik ki.
Opcionálisan megadható még egy \`else\` ág is, szintén

Például:
\`\`\`
if () {

} else {

}
\`\`\`

December kezdetével nekiállt a Mikulás is készülődni az ünnepekre. (először a sajátjár, de azért persze utána majd a Karácsonyba is besegít. ;)
<br />
Meghallotta, hogy valaki pont programozni tanul, úgyhogy gyorsan küldött is egy mintapéldát, hogy felmérje a helyzetet!
Egy olyan programra lenne szüksége, ami az év során összegyűjtött jósági adatok alapján kategorizálja a gyereket.

A bemenő adat egy lista (\`data.children\`), ami gyerekek objektumait tartalmazza. Minden gyerekhez tartozik egy **szöveg** típusú név (\`name\`) és egy 0 és 1 közötti **szám** típusú pontszám (\`score\`).
A kimenő adatnak egy objektumnak kéne lennie, amelynek három gyerek lista típusú adattagja van:
Tehát
`,
  initialInput:
`
{
  "children": [
    {
      "name": "Aladár",
      "score": 0.124
    },
    {
      "name": "Béla",
      "score": 0.724
    },
    {
      "name": "Cili",
      "score": 0.72
    }
  ]
}
`,
  initialCode:
`
const children = data.children
const processedChildren = {
  "decent": [],
  "good": [],
  "veryGood": [],
  "superGood": []
}

for(const child of children) {
  console.log(\`\${child.name}: \${child.score} pont\`)

  if (child.score > 0.75) {
    processedChildren.superGood.push(child)
  } else if (child.score > 0.5) {
    processedChildren.veryGood.push(child)
  } else if (child.score > 0.25) {
    processedChildren.good.push(child)
  } else {
    processedChildren.decent.push(child)
  }
}

return processedChildren
`,
  validSolution:
`
const children = data.children
const processedChildren = {
  "decent": [],
  "good": [],
  "veryGood": [],
  "superGood": []
}

for(const child of children) {
  console.log(\`\${child.name}: \${child.score} pont\`)

  if (child.score > 0.75) {
    processedChildren.superGood.push(child)
  } else if (child.score > 0.5) {
    processedChildren.veryGood.push(child)
  } else if (child.score > 0.25) {
    processedChildren.good.push(child)
  } else {
    processedChildren.decent.push(child)
  }
}

return processedChildren
`,
  code: 8828
}

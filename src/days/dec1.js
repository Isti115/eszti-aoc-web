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
if (x % 2 == 0) {
  console.log('Páros')
} else if (x % 3 == 0) {
  console.log('Hárommal osztható')
} else {
  console.log('Sem kettővel, sem hárommal nem osztható')
}
\`\`\`

December kezdetével nekiállt a Mikulás is készülődni az ünnepekre. (először a sajátjára, de azért persze utána majd a Karácsonyba is besegít. ;))
<br />
Meghallotta, hogy valaki pont programozni tanul, úgyhogy gyorsan küldött is egy mintapéldát, hogy felmérje a helyzetet!
Egy olyan programra lenne szüksége, ami az év során összegyűjtött jósági adatok alapján kategorizálja a gyereket.

A bemenő adat egy lista (\`data.children\`), ami gyerekek objektumait tartalmazza. Minden gyerekhez tartozik egy **szöveg** típusú név (\`name\`) és egy 0 és 1 közötti **szám** típusú pontszám (\`score\`).
A kimenő adatnak egy objektumnak kéne lennie, amelynek három gyerek lista típusú adattagja van:

* (\`decent\`): A 0.25 alatti pontszámú, megfelelő jóságú gyerekek kerüljenek bele.
* (\`good\`): A 0.5 alatti pontszámú, jó gyerekek kerüljenek bele.
* (\`veryGood\`): A 0.75 alatti pontszámú, nagyon jó gyerekek kerüljenek bele.
* (\`superGood\`): A 0.75 és 1 közötti pontszámú, szuper jó gyerekek kerüljenek bele.

> Mindegyikük csak egy listában szerepeljen!
> Ehhez a feltételeket sorrendben kell ellenőrizni, tehát ha valakinek 0.4 a pontszáma, akkor őt csak a simán jók közé rakjuk, bár igaz rá, hogy 0.75-nél is kisebb a pontszáma.
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
      "name": "Beáta",
      "score": 0.724
    },
    {
      "name": "Cili",
      "score": 0.762
    },
    {
      "name": "Dominik",
      "score": 0.475
    },
    {
      "name": "Edit",
      "score": 0.814
    },
    {
      "name": "Feri",
      "score": 0.238
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

// A tegnap megismert, listát felsoroló 'for .. of ..' ciklus:
for(const child of children) {
  console.log(child.name + ': ' + child.score + ' pont')

  /* ebben a ciklusban a 'child' változó
  minden gyereket fel fog venni egyszer értékként */

  // ide írd azt a feltételes elágazást,
  // ami beteszi őket a nekik megfelelő listába
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

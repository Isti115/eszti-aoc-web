export default {
  title: 'Dec. 15.\n - Tájékozódás',
  description:
`
Van néhány gyerek, akik nemrég költöztek, úgyhogy még nem került frissítésre a lakcímük az adatbázisban. Ők elküldték levélben a télapónak azt, hogy egy közismert kezdőpozícióból hogyan kell eljutni hozzájuk. Ezen adatok alapján a Mikulás már egyértelműen oda tudna találni minden házhoz, azonban nagyon időigényes lenne végigjárni az útvonalakat, ezért megkérte a manókat, hogy inkább számítsák ki a házak pontos koordinátáit, hogy ő egyenesen odarepülhessen a szánjával.

Feladatunk egy olyan program megírása, ami a gyerekek által megadott kiindulási pont és instrukciók alapján kiszámítja az ő pontos lakhelyüket!

A bemenet minden gyereknek tartalmazza a nevét (\`name\`), a kiindulási koordinátáit (\`initialPosition\`) valamint a végrehajtandó lépéssorozatot.
Egy lépés mindig két részből áll:
* Először haladunk valamennyit a jelenlegi irányunkba, ennek a mennyiségét jelzi a \`go\` kulcs mögött található érték.
* Végült pedig fordulunk egyet balra vagy jobbra a \`turn\` kulcs mögötti érték szerint.

Feltételezhetjük, hogy mindig pozitív x irányba nézve indulunk.

A forgásokat az alábbi ábrán jelölt irányok alapján végezzünk:
<br />
![Koordinátarendszer](./images/coordinates.png)
(_A körből kiinduló nyíl jelzi a kezdeti irányt._)

A program visszatérési értéke egy lista lesz, amiben a kitöltendő függvény által visszaadott objektumok találhatóak.
Ezeknek a formátuma a következő legyen:
\`\`\`
{
  "name": gyerek_neve,
  "position": {
    "x": gyerek_x_koordinátája,
    "y": gyerek_y_koordinátája
  }
}
\`\`\`
`,
  initialInput: `
[
  {
    "name": "Aladár",
    "initialPosition": {"x": 0, "y": 0},
    "movements": [
      {"go": 5, "turn": "right"},
      {"go": 6, "turn": "left"},
      {"go": 7, "turn": "left"},
      {"go": 12, "turn": "right"},
      {"go": 32, "turn": "right"},
      {"go": 52, "turn": "right"}
    ]
  },
  {
    "name": "Béla",
    "initialPosition": {"x": 10, "y": 10},
    "movements": [
      {"go": 100, "turn": "left"},
      {"go": 52, "turn": "left"},
      {"go": 15, "turn": "right"},
      {"go": 63, "turn": "left"},
      {"go": 27, "turn": "right"},
      {"go": 4, "turn": "right"},
      {"go": 9, "turn": "left"},
      {"go": 11, "turn": "right"},
      {"go": 81, "turn": "right"}
    ]
  },
  {
    "name": "Cili",
    "initialPosition": {"x": 25, "y": 15},
    "movements": [
      {"go": 30, "turn": "right"},
      {"go": 46, "turn": "right"},
      {"go": 12, "turn": "right"},
      {"go": 56, "turn": "left"},
      {"go": 1, "turn": "left"},
      {"go": 23, "turn": "left"}
    ]
  }
]
`,
  initialCode:
`
function calculatePosition(child) {
  /* ide írd meg azokat az utasításokat,
  melyek gyerekenként végül visszatérési értékként
  a mozgások végrehajtása után kapott pozíciót adják */
}

return data.map(calculatePosition)
`,
  validSolution:
`
function calculatePosition(child) {
  const currentPosition = child.initialPosition
  const currentDirection = {x: 1, y: 0}

  for (const movement of child.movements) {
    currentPosition.x += currentDirection.x * movement.go
    currentPosition.y += currentDirection.y * movement.go

    if (movement.turn === "right") {
      [currentDirection.x, currentDirection.y] = [currentDirection.y, -currentDirection.x]
    } else if (movement.turn === "left") {
      [currentDirection.x, currentDirection.y] = [-currentDirection.y, currentDirection.x]
    }
  }

  return {
    name: child.name,
    position: currentPosition
  }
}

return data.map(calculatePosition)
`,
  code: 6422
}

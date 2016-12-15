export default {
  title: 'Dec. 10.\n - Reduce',
  description:
`
# Listák további műveletei 3/3
## Hajtogatás

A listák hajtogatása (vagy más néven redukálása) talán már egy kicsit nehezebben felfogható fogalom.
<br />
Az előző két művelettel ellentétben nem egy listát, hanem egy konkrét értéket ad eredményül.
<br />

Úgy lehet elképzelni, mintha lenne egy olyan gép, ami önmagában egy értéket tud tárolni, valamint egy szalag, amin értékek listája szerepel.
(_A gépben tárolt és a szalagon lévő értékek típusa nem feltétlenül kell, hogy megegyezzen._)
A gépnek meg kell adnunk egy függvényt valamint egy kezdőértéket. Amikor ezeket megkapja, akkor fogja magát és szépen végiggurul a szalagon. :) Miközben gurul, minden értéket elolvas, és mindegyikre meghívja a függvényt úgy, hogy annak első paraméteréül adja azt az adatot, amit jelenleg magában tárol, második paraméterként pedig az értéket, amit éppen akkor olvasott a szalagról. Végül amikor lefutott a függvény akkor annak visszatérési értékével felülírja az önmagában tárolt adatot. Ezt addig ismétli, amíg a szalag végére nem ér, ekkor pedig viszaadja az önmagában tárolt végeredményt.

Egy számok összeadására alkalmas ilyen gép például a következőképpen valósítható meg:
\`\`\`
const list = [1, 2, 3, 4, 5]

// Nulláról indulva mindig adjuk hozzá a belső tárolt értékhez a listából olvasottat.
const sum = list.reduce((a, b) => a + b, 0)
console.log(sum) // 15
\`\`\`

A feladat ismét az ajándékraktár management szekciójától érkezett. Mivel a Karácsony nagyobb ünnep, ezért megnyitották a raktárépületet egy újabb dimenzióban, így már nem csak jobbra és balra vannak polcok, hanem beljebb is lehet vinni valamit az épületben és kijjebb is lehet hozni. Ahhoz, hogy itt is képesek legyenek megtalálni egy ajándék jelenlegi pozícióját új programra van szükségük.

Ennek a bemenete egy kiindulási pozícióból (\`initialPosition\`) és egy listából (\`movingLog\`) fog állni.
A kezdeti pozíció egy \`x\` és \`y\` koordinátát tartalmazó objektum, a lista bejegyzései pedig egy \`direction\` és egy \`amount\` nevű adattaggal rendelkeznek.

Az irány a következőek közül valamelyik:
* **left**: \`x\` irányú pozitív elmozdulás
* **right**: \`x\` irányú negatív elmozdulás
* **in**: \`y\` irányú pozitív elmozdulás
* **out**: \`y\` irányú negatív elmozdulás

Az \`amount\` pedig az elmozdítás mértékét jelzi.

Feladatunk visszaadni a csomag jelenlegi pozícióját.
`,
  initialInput: `
{
  "initialPosition": {
    "x": 0,
    "y": 0
  },

  "movements": [
    {
      "direction": "right",
      "amount": 4
    },
    {
      "direction": "in",
      "amount": 1
    },
    {
      "direction": "left",
      "amount": 15
    },
    {
      "direction": "in",
      "amount": 42
    },
    {
      "direction": "left",
      "amount": 512
    },
    {
      "direction": "out",
      "amount": 7
    }
  ]
}
`,
  initialCode:
`
function applyMovement (position, movement) {
  // Ide írd a pozíción végzendő módosításokat

  return position
}

return data.movements.reduce(applyMovement, data.initialPosition)
`,
  validSolution:
`
function applyMovement (position, movement) {
  if (movement.direction == "left") {
    position.x -= movement.amount
  } else if (movement.direction == "right") {
    position.x += movement.amount
  } else if (movement.direction == "out") {
    position.y -= movement.amount
  } else if (movement.direction == "in") {
    position.y += movement.amount
  }

  return position
}

return data.movements.reduce(applyMovement, data.initialPosition)
`,
  code: 9175
}

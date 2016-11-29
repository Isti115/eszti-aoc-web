export default {
  title: 'Nov. 29.\n - Objektumok',
  description:
`
# Objektumok

Mint azt már a kettővel ez előtti feladatban is láthattuk, az objektumok JavaScript-ben kulcs-érték párokat takarnak, azonban akkor csak a létrehozásukat próbáltuk ki.
<br />
Most azt fogjuk megnézni, hogy miután létrejött egy objektum, hogyan lehet azt használni.

## Létrehozás
Kapcsoszárójelek között vesszővel elválasztva felsorolt nulla vagy több kulcs-érték párral jelölhetünk a ködban egy objektumok, ahol a kulcs kötelező jelleggel szöveg típusű, viszont az érték tetszőleges adat lehet.
Például:
\`\`\`
const object1 = {} // Üres objektum
const setCard1 = {"color": "blue", count: 2, "shape": "diamond", "fill": "striped"}
\`\`\`
## Adattag felvitele és elérése
<br />
Miután létrehoztunk egy objektumot a következőket tehetjük vele:
* Hozzáadhatunk új kulcsot: _pl.:_ \`setCard1.isSelected = false\`
* Megváltoztathatunk egy már meglévő adatot: _pl.:_ \`setCard1.isSelected = true\`
<br />
(_A létrehozás és a megváltoztatás lényegében ugyanaz, hiszen létrehozáskor tulajdonképpen a határozatlan (*undefined*) típusról változtatjuk meg valamire._)

* Lekérdezhetünk egy kulcshoz tartozó értéket: _pl.:_ \`const currentCardColor = setCard1.color\`

## Előre ismeretlen nevű kulcsok

A rugalmasság érdekében van lehetőségünk olyan kulcsok mögött tárolt adatokat is létrehoznunk, módosítanunk valamint elérnünk, amelyeknek a program írásakor még nem feltétlenül ismerjük a nevét.
Ekkor azonban nem alkalmazhatjuk azt a szintaxist, melyben egy pont választotta el a kulcsot az objektum nevétől.
Helyette a listák elemeihez hasonló módon, szögletes zárójelek közötti értékkel mondhatni _indexelhetjük_ az objektumokat.

Például:
\`\`\`
const object2 = {}
const property = "tulajdonság"
const value = "érték"

object2[property] = value
\`\`\`

> Megjegyzés: Tehát a következő két írásmód teljesen ekvivalens: \`objektum.adattag\` és \`objektum['adattag']\`.

A feladatban az otthoni leltárunkban kell egy tárgy bejegyzését frissíteni. :)
<br />
A bemeneti adatok között \`data.original\` néven megkapjuk a tárgy eredeti bejegyzését, a \`data.modification\` objektum pedig tartalmazza a végrehajtandó módosítást.
A \`modification\` a következőképpen épül fel: Egy \`property\` nevű mezőben van megadva, hogy a tárgy melyik tulajdonságát szeretnénk módosítani, a \`newValue\` kulcs mögött pedig az új érték található.
A megadott tulajdonságának lecserélésén felül még növeljük meg egyszer a tárgynak a \`moveCount\` adattagját, ami azt számolja, hogy hányszor raktuk már arrébb. ;)
`,
  initialInput:
`
{
  "original": {
    "name": "valami",
    "place": "polc",
    "moveCount": 3
  },

  "modification": {
    "property": "place",
    "newValue": "szekrény"
  }
}
`,
  initialCode:
`
const newObject = data.original
const modification = data.modification

// newObject módosításai

return newObject
`,
  validSolution:
`
const newObject = data.original
const modification = data.modification

newObject[modification.property] = modification.newValue
newObject.moveCount++

return newObject
`,
  code: 2480
}

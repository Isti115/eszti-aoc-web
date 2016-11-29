export default {
  title: 'Nov. 28.\n - Listák',
  description:
`
Ma a listák kezelésével fogunk ismerkedni.
Listát létrehozni a következőképpen tudunk:
\`\`\`
const list1 = []           // Üres lista
const list2 = [5, 10, 115] // Létrehozáskor már elemeket tartalmazó lista
\`\`\`

Miután létrehoztunk (vagy valahonnan kaptunk) egy listát, a következő műveleteket hajthatjuk végre rajta:

* **[x]**: Lista x-edik eleméhez való hozzáférés. _pl.:_ \`const a = list2[1]\`, \`list2[0] = -5\`
* **push**: Elem hozzáfűzése a lista végéhez. _pl.:_ \`list1.push('asdf')\`
* **pop**: Elem levétele és visszaadása a lista végéről. \`const b = list2.pop()\`
* **shift**: Elem levétele és visszaadása a lista elejéről. \`const c = list2.shift()\`
* **unshift**: Elem hozzáfűzése a lista elejére. \`list1.unshift('qwerty')\`
* **length**: Lista hosszának visszaadása. \`const d = list2.length\`

Ábrával illusztrálva:
<br />
![Lista műveletei](./images/list.png)

Például a következő utasítássorozat egy étterem rendeléseit írhatná le:
<br />
(_Egy kis étteremről van szó, ahol csak egy szakács dolgozik, és mindig egyszerre csak egy ételen, tehát mindig a lista sorrendjében készülnek el az rendelések._)
\`\`\`
const orders = []

orders.push('pizza')            // valaki rendel egy pizzát
orders.push('rántott sajt')     // valaki rendel egy rántott sajtot
list.shift()                    // elkészült a pizza
orders.push('hamburger')        // valaki rendel egy hamburgert
orders.pop()                    // azonban mégis meggondolja magát, és inkább lemondja a rendelést
orders.push('gyros')            // helyette pedig kér egy gyros-t
list.shift()                    // elkészült a rántott sajt
orders.unshift('gyümölcsleves') // érkezik egy nagyon fontos vendég, akinek a rendelése a lista vége helyett az elejére kerül
\`\`\`

A feladatunk egy bevásárlólista kezelése lesz. :) A történet a következő:

- Elindulunk otthonról a bevásárlólistával a zsebünkben.

- Megvesszük a \`tejet\` és a \`kenyeret\`, úgyhogy azokat kihúzzuk a listánkról, azonban \`szalámit\` sajnos nem kapunk.

- Felhív édesanyánk, és közli velünk, hogy kéne venni még \`csomagolópapír\`-t és \`szalag\`-ot is, úgyhogy ezeket felírjuk a lista végére.

- Elindulunk a papírbolt felé, azonban mielőtt belépnénk az ajtón, érkezik még egy hívás, amiből kiderül, hogy \`szalag\` mégis van otthon, úgyhogy azt már nem szükséges beszerezni, ezért letöröljük a lista végről.

Ebben az állapotban szeretnénk visszaadni a bevásárlólista tartalmát.

Ezúttal már foglalkozni kell a bemenettel is, hiszen innen kapjuk meg a bevásárlólistánk kiindulási állapotát.
<br />
A \`data\` objektumon \`shoppingList\` property-nek neveztük el, ezáltal \`data.shoppingList\`-ként férhetünk hozzá.
<br />
(_A kényelmesebb kezelés érdekében a függvény elején a kezdeti kódban látható módon beállíthatunk egy változót, ami ugyanarra a listára fog mutatni._)
`,
  initialInput:
`
{
  "shoppingList": [
    "tej",
    "kenyér",
    "Herz szalámi"
  ]
}
`,
  initialCode:
`
const shoppingList = data.shoppingList

console.log(shoppingList) // shoppingList tartalmának kiíratása
console.log('-----')
// elválasztó, hogy jól látható legyen a kiíratások határa

// ide írd a listán elvégzendő módosítások műveleteit

return shoppingList
`,
  validSolution:
`
const shoppingList = data.shoppingList

shoppingList.shift()
shoppingList.shift()
shoppingList.push('csomagolópapír')
shoppingList.push('szalag')
shoppingList.pop()

return shoppingList
`,
  code: 8417
}

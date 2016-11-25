export default {
  title: 'Nov. 28.\n - Listák',
  description:
`
Ma a listák kezelésével fogunk ismerkedni.
Miután létrehoztunk (vagy valahonnan kaptunk) egy listát, a következő műveleteket hajthatjuk végre rajta:

* **push**: Elem hozzáfűzése a lista végéhez.
* **pop**: Elem levétele és visszaadása a lista végéről.
* **shift**: Elem levétele és visszaadása a lista elejéről.
* **unshift**: Elem hozzáfűzése a lista elejére.
* **length**: Lista hosszának visszaadása.

Például a következő utasítássorozat egy étterem rendeléseit írhatná le:
\`\`\`
const orders = []

orders.push("pizza")            // valaki rendel egy pizzát
orders.push("rántott sajt")     // valaki rendel egy rántott sajtot
list.shift()                    // elkészült a pizza
orders.push("hamburger")        // valaki rendel egy hamburgert
orders.pop()                    // azonban mégis meggondolja magát, és inkább lemondja a rendelést
orders.push("gyros")            // helyette pedig kér egy gyros-t
list.shift()                    // elkészült a rántott sajt
orders.unshift("gyümölcsleves") // érkezik egy nagyon fontos vendég, akinek a rendelése a lista vége helyett az elejére kerül
\`\`\`
// TODO: Insert image here!

A feladatunk egy bevásárlólista kezelése lesz. :) A történet a következő:
<br />
- Elindulunk otthonról a bevásárlólistával a zsebünkben.

- Megvesszük a \`tejet\` és a \`kenyeret\`, úgyhogy azokat kihúzzuk a listánkról, azonban szalámit sajnos nem kapunk.

- Felhív édesanyánk, és közli velünk, hogy kéne venni még \`csomagolópapír\`-t és \`szalag\`-ot is, úgyhogy ezeket felírjuk a lista végére.

- Elindulunk a papírbolt felé, azonban mielőtt belépnénk az ajtón, érkezik még egy hívás, amiből kiderül, hogy \`szalag\` mégis van otthon, úgyhogy azt már nem szükséges beszerezni, úgyhogy letöröljük a lista végről.
Ebben az állapotban szeretnénk visszaadni a bevásárlólista tartalmát.
<br />
Ezúttal már foglalkozni kell a bemenettel is, hiszen innen kapjuk meg a kiindulási bevásárlólistánkat.
<br />
A \`data\` objektumon \`shoppingList\` property-nek neveztük el, ezáltal \`data.shoppingList\`-ként férhetünk hozzá.
<br />
(A kényelmesebb kezelés érdekében a függvény elején a kezdeti kódban látható módon beállíthatunk egy változót, ami ugyanarra a listára fog mutatni.)
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
// elválasztó, hogy jól látható legyen a kiíratások határa
console.log('-----')

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

export default {
  title: 'Nov. 26. - JavaScript',
  description:
`
## Változók

A JavaScript két fontosabb változótípusa:
* **let**: Olyan változót hoz létre, amelynek a tárolt értékét később felül lehet írni. _pl.:_ \`let playerScore = 2500\`
* **const**: Olyan változó, aminek az értéke már nem módosulhat. _pl.:_ \`const e = 2.71\`

## Függvények

A Függvényeket a \`function\` kulcsszóval definiáljuk a paramétereinek listázásával, a törzsében lévő műveletek felsorolásával és a visszatérési értékének megadásával a következőképpen:
\`\`\`
function areaOfRectangle (width, height) {
  const area = width * height
  return area
}
\`\`\`
Az ezen a felületen található kódszerkesztőbe egy olyan függvény törzsét kell megírnunk, melynek egy \`data\` nevű paramétere van, ami a bemeneti adatokat tartalmazza (jelenleg ezzel még nem kell foglalkozni).
<br />
A feladat ennek a függvénytörzsnek a megírása úgy, hogy a kitűzött problémát megoldva annak végeredményét adja visszatérési értékként.

Jelen esetben egy 5 sugarú körnek szeretnénk kiszámítani a területét egy \`areaOfCircle\` függvény segítségével.

> Megjegyzés: A függvények tetszőlegesen egymásba ágyazhatóak.
<br />
> Tipp: A hatványozás helyett szorozzuk meg önmagával a sugarat.
`,
  initialInput: `{}`,
  initialCode:
`
const pi = 3.14

// insert areaOfCircle function definition here

let r = 5

return areaOfCircle(r)
`,
  validSolution:
`
const pi = 3.14

function areaOfCircle (r) {
  return (r * r) * pi
}

let r = 5

return areaOfCircle(r)
`,
  code: 2532
}

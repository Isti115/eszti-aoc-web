export default {
  title: 'Nov. 26.\n - JavaScript',
  description:
`
## Változók

A JavaScript két fontosabb változófajtája:
* **let**: Olyan változót hoz létre, amelynek még később felülírhatjuk, hogy mire mutasson. _pl.:_ \`let playerScore = 2500\`
* **const**: Olyan változó, aminél már nem módosulhat az, hogy mire mutat. _pl.:_ \`const e = 2.71\`
<br />
(_Ez összetett adattípusoknál (lista, objektum) nem jelenti azt, hogy a tárolt adatok sem módosulhatnak, mert például egy listához rendelt változónév nem a listaelemeket jelöli, hanem magát a listát, amihez adott esetben mondjuk még fűzhetünk hozzá utólag, vagy akár törölhetünk is belőle._)

## Függvények

A függvényeket a \`function\` kulcsszóval definiáljuk a paramétereinek listázásával, a törzsében lévő műveletek felsorolásával és a visszatérési értékének megadásával a következőképpen:
\`\`\`
function areaOfRectangle (width, height) {
  const area = width * height
  return area
}
\`\`\`

Jelen esetben egy 5 sugarú körnek szeretnénk kiszámítani a területét egy \`areaOfCircle\` nevű és \`r\` (a kör sugara) paraméterű függvény segítségével.

> Megjegyzés: A kommentelt (\`//\`-rel kezdődő) sor helyére ajánlott elkészíteni a szükséges kódot.
<br />
> Tipp: A hatványozás helyett szorozzuk meg önmagával a sugarat.
`,
  initialInput: `{}`,
  initialCode:
`
const pi = 3.14

// ide írd az areaOfCircle függvény definícióját

let r = 5

const area = areaOfCircle(r)
console.log('The area of a circle with radius ' + r + ' is: ' + area)

return area
`,
  validSolution:
`
const pi = 3.14

function areaOfCircle (r) {
  return (r * r) * pi
}

// const areaOfCircle = r => r*r*pi

let r = 5

const area = areaOfCircle(r)
console.log('The area of a circle with radius ' + r + ' is: ' + area)

return area
`,
  code: 2532
}

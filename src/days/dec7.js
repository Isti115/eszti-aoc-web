export default {
  title: 'Dec. 7.\n - Lambdák',
  description:
`
# Névtelen függvények

Tyű... Végül szerencsére minden rendben sikerült, a manók épp most nagyban ünnepelnek a Mikulás lappföldi főhadiszállásán! :)

Nagyon hálásak a segítségért! Most, hogy nincsenek sürgősen elintézendő ügyek, érdemes lehet tanulni néhány új dolgot. ;)
<br />
Kezdjük például a névtelen (más néven **lambda**) függvényekkel.
Ezen függvények akkor jöhetnek jól, amikor röviden és tömören szeretnénk kifejezni egy műveletet, és egyszerű szintaxisukból adódóan kényelmesen és átláthatóan lehet őket például más függvények paraméterei közé is beírni. Egy ilyen függvény megadható zárójelben felsorolva a vesszővel elválasztott argumentumait (_egy darab paraméter esetén a zárójezés el is hagyható_) és utána egy nyíllal (\`=>\`) elválasztva a visszatérési értékét meghatározó kifejezést.

(_Mivel JavaScript-ben a függvények is kezelhetőek értékként, ezért attól függetlenül, hogy egy függvénynek nincs neve, azt értékül adhatjuk egy változónak._)
<br />
Például az [első nap](http://www.waik.hu/eszti/#nov26)ról ismerős \`areaOfRectangle\` függvény:
\`\`\`
function areaOfRectangle (width, height) {
  const area = width * height
  return area
}
\`\`\`
megadható lenne a következő tömörebb formában:
\`\`\`
const areaOfRectangle = (width, height) => width * height
\`\`\`

A későbbiekben ténylegesen függvények paramétereiként fogunk lambda kifejezéseket felhasználni, azonban most rövid gyakorlásként még írjuk meg újra az \`areaOfCircle\` függvényt, ezúttal névtelen függvényként!

> Megjegyzés: A \`radii\` az angol \`radius\` szó rendhagyó többesszáma.
`,
  initialInput: `
{
  "radii": [
    1,
    5,
    10,
    115
  ]
}
`,
  initialCode:
`
const pi = 3.14

// ide írd az areaOfCircle függvény definícióját

const results = []

for (const r of data.radii) {
  const result = areaOfCircle(r)
  console.log('Area of a circle with radius ' + r + ' is: ' + result)
  results.push(result)
}

return results
`,
  validSolution:
`
const pi = 3.14

const areaOfCircle = (r) => r*r*pi

const results = []

for (const r of data.radii) {
  const result = areaOfCircle(r)
  console.log('Area of a circle with radius ' + r + ' is: ' + result)
  results.push(result)
}

return results
`,
  code: 4565
}

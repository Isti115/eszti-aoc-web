export default {
  title: 'Nov. 30.\n - Ciklusok',
  description:
`
# Ismétlések

Az ciklusok célja bizonyos utasítások egymás után történő többszöri végrehajtása.

## Általános ismétlés:
Alapesetben ez egy bizonyos feltétel teljesülésének mentén történik:
\`\`\`
while (condition) {
  console.log('still running')
}
\`\`\`

## Speciális ismétlések:
Előfordulnak olyan ismétlések is, amik gyakran felhasznált célokra úgymond "szakosodtak", és ezáltal a nekik megfelelő problémához szebb megoldást nyújtanak.

### Számszoros:
Egy sűrűn felmerülő elvárás például az, hogy végig lehessen iterálni egy adott számsorozaton.
Ilyenkor az első utasítás a kezdeti állapot beállítása, a második az ismétlés folytatásának feltétele és a harmadik pedig a ciklus magjának végrehajtásai között elvégzendő utasítás.
\`\`\`
for (let i = 0; i < 15; i++) {
  console.log(i)
}
\`\`\`

### Objektum kulcsain:
Szintén nem ritka, hogy egy objektum kulcsain szeretnénk végigmenni.
<br />
Ekkor az \`in\` kulcsszó előtt álló változó az \`in\` után lévő objektum kulcsait fogja sorra felvenni.
\`\`\`
for (const property in object) {
  console.log(object[property])
}
\`\`\`
> (_Mivel ekkor a \`property\` nevű változó a kulcsot tartalmazza, ezért az értékhez \`object[property]\`-ként férhetünk hozzá._)

### Lista elemein:
Számos alkalommal megesik továbbá az is, hogy egy lista elemeit szeretnénk felsorolni és mindegyikre végrehajtani bizonyos műveleteket.
<br />
Ekkor az \`of\` kulcsszó előtt álló változó az \`of\` után lévő lista elemeit fogja sorra felvenni.
\`\`\`
for (const element of list) {
  console.log(element)
}
\`\`\`

Tipikusan számlálós ciklussal szokták megvalósítani a faktoriális kiszámítását.
<br />
Definiáljuk tehát a \`factorial\` nevű függvényt, ami egy számot kap paraméterként, és visszaadja egytől addig a számok szorzatát.
<br />
(A program ez alapján fogja kiszámolni és egy listaként visszaadni egytől hétig a számok faktoriálisát.)
`,
  initialInput:
`
{}
`,
  initialCode:
`
const x = 7

// ide írd a factorial függvény definícióját

const results = []

for (let i = 1; i <= 7; i++) {
  const result = factorial(i)
  console.log('The factorial of ' + i + ' is: ' + result)

  results.push(result)
}

return results
`,
  validSolution:
`
const x = 7

// ide írd a factorial függvény definícióját

// const factorial = x => x == 1 ? 1 : x * factorial(x - 1)

function factorial (x) {
  let result = 1

  for (let i = 1; i <= x; i++) {
    result = result * i
  }

  return result
}

const results = []

for (let i = 1; i <= 7; i++) {
  const result = factorial(i)
  console.log('The factorial of ' + i + ' is: ' + result)

  results.push(result)
}

return results
`,
  code: 4704
}

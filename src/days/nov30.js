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

}
\`\`\`

## Speciális ismétlések:
Előfordulnak olyan ismétlések is, amik gyakran felhasznált célokra úgymond "szakosodtak", és ezáltal a nekik megfelelő problémához szebb megoldást nyújtanak.

### Számszoros:
Egy sűrűn felmerülő elvárás például az, hogy végig lehessen iterálni egy adott számsorozaton.
Ilyenkor az első utasítás a kezdeti állapot beállítása, a második az ismétlés folytatásának feltétele és a harmadik pedig a ciklus magjának végrehajtásai között elvégzendő utasítások.
\`\`\`
for (let i = 0; i < 15; i++) {
  console.log(i)
}
\`\`\`

### Objektum kulcsain:
Szintén nem ritka, hogy egy objektum kulcsain szeretnénk végigiterálni.
<br />
Ekkor az \`in\` kulcsszó előtt álló változó az \`in\` után lévő objektum kulcsait fogja sorra felvenni.
\`\`\`
for (const property in object) {
  console.log(object[property])
}
\`\`\`

### Lista elemein:
Számos alkalommal megesik továbbá az is, hogy egy lista elemeit szeretnénk felsorolni és mindegyikre végrehajtani bizonyos műveleteket.
<br />
Ekkor az \`of\` kulcsszó előtt álló változó az \`of\` után lévő lista elemeit fogja sorra felvenni.
\`\`\`
for (const element of list) {
  console.log(element)
}
\`\`\`
`,
  initialInput:
`
{}
`,
  initialCode:
`

`,
  validSolution:
`

`,
  code: 4704
}

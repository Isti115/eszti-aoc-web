export default {
  title: 'Dec. 22.\n - Csomagolópapír\n   /Méretek 1.',
  description:
`
A színek mellett a manók minden csomagról feljegyezték, hogy mekkora szélességű, hosszúságú és mélységű téglatest alakú dobozba férne be. Ezeket az adatokat szeretnék betáplálni egy olyan programba, ami megmondja nekik, hogy milyen széles és milyen hosszú lenne az a legkisebb felületű darab csomagolópapír, amivel be lehetne vonni a teljes dobozt. A csomagolást úgy tervezzük, hogy a téglatestet széthajtogatjuk egy lapos testhálójára, azt ráfektetjük a papírra, a papír fennmaradó részeit levágjuk, ami pedig illeszkedik, azt ráragasztjuk és így újra összeillesztjük térben a dobozt.

Példa illusztráció egy lefektetett dobozról és csomagolópapírról:
<br />
![Csomagolópapír](./images/wrapping.png)

Feladatunk, hogy a megadott \`x\`, \`y\` és \`z\` szélességi, hosszúsági és mélységi adatok alapján kiszámoljuk, hogy melyik dobozt legkisebb milyen területű csomagolópapírból kiindulva lehet bevonni. (Tetszőleges testhálójára lapíthatjuk ki, ezek közül is meg kell keresni az optimálisat.) Adjuk meg ennek a szélességét \`width\` és magasságát \`height\` úgy, hogy a szélesség mindig nagyobb vagy egyenlő legyen a hosszúsággal. (Tehát "fektetve" nézzük.)

Például a következők csomagon elvégezve a számításokat: \`{"x": 1, "y": 1, "z": 1}\` a következő eredményt kellene kapnunk: \`{"width": 4, "height": 3}\`.
`,
  initialInput:
`
[
  {"x": 1, "y": 1, "z": 1},
  {"x": 1, "y": 2, "z": 3},
  {"x": 1, "y": 5, "z": 1},
  {"x": 3, "y": 1, "z": 7},
  {"x": 4, "y": 4, "z": 2},
  {"x": 7, "y": 7, "z": 7},
  {"x": 3, "y": 3, "z": 9},
  {"x": 12, "y": 11, "z": 6},
  {"x": 42, "y": 33, "z": 8},
  {"x": 10, "y": 20, "z": 30}
]
`,
  initialCode:
`

`,
  validSolution:
`
const compareConfigurations = (a, b) => (a.width * a.height) - (b.width * b.height)

function getWidthAndHeight ({x, y, z}) {
  const configurations = []

  configurations.push({width: z + x + z + x, height: z + y + z})
  configurations.push({width: z + x + z + x, height: x + y + x})

  configurations.push({width: z + y + z + y, height: z + x + z})
  configurations.push({width: z + y + z + y, height: y + x + y})

  configurations.push({width: y + x + y + x, height: y + z + y})
  configurations.push({width: y + x + y + x, height: x + z + x})

  configurations.sort(compareConfigurations)

  return {
    width: Math.max(configurations[0].width, configurations[0].height),
    height: Math.min(configurations[0].width, configurations[0].height)
  }
}

return data.map(getWidthAndHeight)
`,
  code: 9455
}

export default {
  title: 'Dec. 21.\n - Csomagolópapír\n   /Színek',
  description:
`
A Télapó számára nagyon fontos, hogy az ajándékok esztétikailag hozzájuk illő színű csomagolópapírral legyen bevonva. A manók ezért gondosan fel is jegyezték minden egyes ajándékról, hogy szerintük milyen csomagolópapír lenne megfelelő, és ez alapján készülnek leadni a rendelést a gyárnak, ahol a csomagolópapírt készítik, azonban egy aprócska kis probléma merült fel. A manók komponensenként írták fel a színeket (red, green, blue), azonban a gyár csak hexadecimális formában fogadja a megrendelést ("#rrggbb").

Feladatunk a komponensenként megadott színek listáját hexadecimális színek listájává konvertálni.

Például ha ez lenne a bemenet:
\`\`\`
[
  {"r": 1, "g": 35, "b": 69},
  {"r": 171, "g": 205, "b": 239}
]
\`\`\`

Akkor ez lenne az elvárt kimenet:
\`\`\`
[
  "#012345",
  "#abcdef"
]
\`\`\`

> Megjegyzés: [Itt](http://www.webpagefx.com/web-design/hex-to-rgb/) kényelmesen ki lehet próbálgatni az átváltást, ha bármi kérdés merülne fel.
`,
  initialInput:
`
[
  {"r": 0, "g": 0, "b": 0},
  {"r": 1, "g": 35, "b": 69},
  {"r": 255, "g": 255, "b": 255},
  {"r": 25, "g": 50, "b": 70},
  {"r": 220, "g": 193, "b": 14},
  {"r": 103, "g": 58, "b": 183},
  {"r": 115, "g": 115, "b": 115},
  {"r": 171, "g": 205, "b": 239}
]
`,
  initialCode:
`

`,
  validSolution:
`
function toTwoDigitHex(x) {
  let result = x.toString(16)

  while (result.length < 2) {
    result = '0' + result
  }

  return result
}

return data.map(c => \`#\${toTwoDigitHex(c.r)}\${toTwoDigitHex(c.g)}\${toTwoDigitHex(c.b)}\`)
`,
  code: 9562
}

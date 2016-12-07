export default {
  title: 'Dec. 3.\n - Rendezés',
  description:
`
## Szállítás sorrendje

Egy nagyon fontos kritérium a csomagok kiszállításának sorrendjével kapcsolatban azoknak a tömege. Érdemes először a nehezebbeket kézbesíteni, mert úgy utána kevésbé terheltek a rénszarvasok, ezáltal kíméletesebbek vagyunk velük szemben, továbbá gyorsabban is tudunk haladni!

Ehhez használhatjuk a listák sorbarendezésére alkalmas \`.sort(compareFunction)\` függvényt.
A \`compareFunction\` egy két paraméterrel (legyen most \`a\` és \`b\`) rendelkező függvény kell, hogy legyen, ami a lista két elemét fogja kapni, és el kell döntenie, hogy melyik kerüljön előrébb bizonyos kritérium alapján. A viszatérési értékei a következőek:
* Ha \`a\` előrébb kell, hogy kerüljön, mint \`b\`, akkor adjon vissza \`-1\`-et.
* Ha \`a\` és \`b\` sorrendje nem számít, akkor adjon vissza \`0\`-t.
* Ha \`a\` hátrébb kell, hogy kerüljön, mint \`b\`, akkor adjon vissza \`+1\`-et.

(_Ezt segíthet megjegyezni, ha egy számegyenesen képzeljük el, ahol ugyebár a három közül a \`-1\` helyezkedik el legelöl, a \`0\` középen és a \`+1\` pedig leghátul._)

Számok rendezése például a következő módon valósítható meg:
\`\`\`
function compareNumbers (a, b) {
  if (a < b) {
    return -1
  } else if (a > b) {
    return +1
  } else {
    return 0
  }
}

const list1 = [4, 2, 5, 15, 5, 7]

console.log(list1.sort(compareNumbers))
// Output: [2, 4, 5, 5, 7, 15]
\`\`\`

Ez alapján a feladatunk a csomagok listájának rendezése oly módon, hogy a Mikulás optimális sorrendben szállíthassa ki őket. :)
`,
  initialInput: `
{
  "packageWeights": [
    {
      "name": "Aladár",
      "weight": 64
    },
    {
      "name": "Beáta",
      "weight": 24
    },
    {
      "name": "Cili",
      "weight": 22
    },
    {
      "name": "Dominik",
      "weight": 75
    },
    {
      "name": "Edit",
      "weight": 14
    },
    {
      "name": "Feri",
      "weight": 38
    }
  ]
}
`,
  initialCode:
`
const packageWeights = data.packageWeights

// ide írd a csomagok összehasonlítására szolgáló függvényt és hívd meg vele a sorbarakást

return packageWeights
`,
  validSolution:
`
const packageWeights = data.packageWeights

function comparePackageWeights (a, b) {
  if (a.weight > b.weight) {
    return -1
  } else if (a.weight < b.weight) {
    return +1
  } else {
    return 0
  }
}

packageWeights.sort(comparePackageWeights)

return packageWeights
`,
  code: 5371
}

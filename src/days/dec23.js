export default {
  title: 'Dec. 23.\n - Csomagolópapír\n   /Méretek 2.',
  description:
`
Az előző feladatban kiszámolt csomagolópapír méretekkel még egy teendő akad.
A gyárból csak bizonyos méretű papírokat lehet rendelni, úgyhogy azt kell meghatározni, hogy melyikből mennyire lesz szükség.
Ehhez bemenetként megkapjuk, hogy a gyár milyen méretű papírokat állít elő. Feladatunk meghatározni a csomagok befedéséhez szükséges papírokról, hogy melyik az a legkisebb méret, amire teljesen ráférnek.

Kimenetként azt adjuk meg, hogy melyik méretből mennyit kell rendelni a következő formátumban:
\`\`\`
{
  "small": 0,
  "medium": 0,
  "large": 0
}
\`\`\`
`,
  initialInput:
`
{
  "availableSizes": [
    {
      "name": "small",
      "width": 25,
      "height": 10
    },
    {
      "name": "medium",
      "width": 50,
      "height": 25
    },
    {
      "name": "large",
      "width": 100,
      "height": 75
    }
  ]
}
`,
  initialCode:
`
const requiredSizes = [
  /* Ide másold be az előző nap eredményét!
  Itt nem fog elveszni, ha frissíted az oldalt. ;) */
]


`,
  validSolution:
`
const requiredSizes = [
  {
    "width": 4,
    "height": 3
  },
  {
    "width": 6,
    "height": 5
  },
  {
    "width": 7,
    "height": 4
  },
  {
    "width": 9,
    "height": 8
  },
  {
    "width": 12,
    "height": 8
  },
  {
    "width": 28,
    "height": 21
  },
  {
    "width": 15,
    "height": 12
  },
  {
    "width": 34,
    "height": 24
  },
  {
    "width": 82,
    "height": 58
  },
  {
    "width": 60,
    "height": 50
  }
]

function getFittingSize (size) {
  for (const currentSize of data.availableSizes) {
    if (currentSize.width >= size.width && currentSize.height >= size.height) {
      return currentSize.name
    }
  }
}

const neededSizes = {}

for (const size of requiredSizes) {
  const currentFittingSizeName = getFittingSize(size)

  if (!(currentFittingSizeName in neededSizes)) {
    neededSizes[currentFittingSizeName] = 0
  }

  neededSizes[currentFittingSizeName]++
}

return neededSizes
`,
  code: 8222
}

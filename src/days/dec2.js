export default {
  title: 'Dec. 2.\n - Ajándékok',
  description:
`
## Ajándékok

Most, hogy már tudjuk, melyik gyerek mennyire volt jó, meg kell szervezni az ajándékaik összeszedését.
<br />
A következő programra annak a manónak lesz szüksége, aki a télapó puttonyába pakolja majd be az ajándékokat.

A bemenet a \`presents\` kulcs mögött tartalmaz egy olyan objektumot, melynek kulcsai a gyerekek nevei és a hozzájuk tartozó értékek a gyerekek kedvenc édességei.
<br />
Mivel a puttonyba minden ajándéknak be kell kerülnie, ezért a manónak teljességgel mindegy, hogy melyiket ki kérte. :)
<br />
Feladatunk ebből adódóan egy sima lista előállítása, amely az összes kívánságot tartalmazza.

> Tipp: Az "Input" mezőt át tudod méretezni a jobb alsó sarkánál fogva, így átláthatóbbá válhat a tartalma.
`,
  initialInput:
`
{
  "presents": {
    "Aladár": "Fehér csokoládé",
    "Beáta": "Fekete csokoládé",
    "Cili": "Kerek csokoládé",
    "Dominik": "Lyukas csokoládé",
    "Edit": "Szögletes csokoládé",
    "Feri": "Keserű csokoládé"
  }
}
`,
  initialCode:
`
const presents = data.presents
const presentList = []

// ide írd a megfelelő ciklust

return presentList
`,
  validSolution:
`
const presents = data.presents
const presentList = []

for (const name in presents) {
  presentList.push(presents[name])
}

return presentList
`,
  code: 9911
}

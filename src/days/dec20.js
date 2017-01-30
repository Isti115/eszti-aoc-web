export default {
  title: 'Dec. 20.\n - Plüssállatok nevei',
  description:
`
## Névválasztás
A karácsonykor kapott plüssállatok mindig választhatnak maguknak egy nevet. Természetesen a megajándékozott bármikor elnevezheti őket máshogyan, de ha ez elmarad, akkor az lesz a nevük, amit maguknak választottak.

A Mikulásnak van egy listája, amiről mindegyik állatka választhat. (Szerepelhet olyan név is a listán, amit senki sem választ.) A plüssállatok nagyon műveltek irodalmilag, ezért olyan nevet szeretnek választani, ami alliterál vagy rímel az ő saját fajuk megnevezésével.
<br />
(Jelen esetben jelentse ez azt, hogy vagy megyegyezik az első karakterük, vagy pedig azonos az utolsó két betűjük.)

A bemeneten megadott listákból állítsuk össze, hogy várhatóan ki melyik nevet fogja választani. Az eredményt egy objektumként adjuk vissza, aminek a kulcsai legyenek az állatkák fajtái, a tárolt értékek pedig az általuk választott nevek.

Például:
\`\`\`
{
  "Aligátor": "Sándor",
  "Bagoly": "Boróka"
}
\`\`\`

> Szöveg típusú változók részleteit megszerezhetjük a \`.slice(from, to)\` függvény segítségével. A paraméterek:
> * \`from\`: azt az indexet jelöli, ahonnan szeretnénk, hogy a kiemelt részlet kezdődjön (0-tól számozva, ez a karakter már benne lesz). Amennyiben negatív számot adunk meg, akkor a szöveg hosszából fog annyit kivonni.
> * \`to\`: azt az indexet jelöli, ameddig szeretnénk, hogy a kiemelt rész tartson (0-tól számozva, ez a karakter már nem lesz benne). Amennyiben nem adjuk meg ezt a paramétert, akkor a kiindulási indextől a szöveg végéig tartó részletet kapjuk.
>
> Példák:
> \`\`\`
> const text = "abcdefghi"
>
> text.slice(0, 9)   == "abcdefghi"
> text.slice(3, 5)   == "de"
> text.slice(4)      == "efghi"
> text.slice(-4, -2) == "fg"
> text.slice(-3)     == "ghi"
> \`\`\`

`,
  initialInput:
`
{
  "animals": [
    "Csiga",
    "Kanári",
    "Béka",
    "Róka",
    "Sün",
    "Paci",
    "Zebra",
    "Mackó",
    "Egér"
  ],

  "names": [
    "Elemér",
    "Béla",
    "Ferkó",
    "Rudi",
    "Izabella",
    "Csabi",
    "Tamás",
    "József",
    "Klári",
    "Laci",
    "Simon",
    "Nóra"
  ]
}
`,
  initialCode:
`

`,
  validSolution:
`
const result = {}

for (const animal of data.animals) {
  for (const name of data.names) {
    if (animal[0] === name[0] || animal.slice(-2) === name.slice(-2)) {
      result[animal] = name
    }
  }
}

return result
`,
  code: 5497
}

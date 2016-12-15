export default {
  title: 'Dec. 6.\n - Kiszállítás',
  description:
`
Már kezdődnie kéne a csomagok kiszállításának, viszont adódott némi probléma.
<br />
A télapó nagyon fontosnak tartja a precizitást, ezért biztosra szeretne menni, hogy mindenkinek jó ajándékot vigyen, azonban minden igyekezet ellenére mégis történt egy kis kavarodás. Pontos információkat nem tudunk, hogy miből adódott a hiba, de valószínűleg otthon hagyhatta a szemüvegét az ajándékok felcimkézésével megbízott manó, mert néhány csomagra rossz név került.

A bemeneten megtalálod, hogy ki mit kért, valamint hogy melyik cimkével ellátott csomagban melyik ajándék található.
<br />
Segíts kiválogatni azoknak az embereknek a nevét egy listába, akiknél nem egyezik a két adat!
<br />
(_Tehát a visszaadott érték nevek listája legyen._)

> Mivel ehhez a példához nem szükségesek új ismeretek, összeállítható az eddig tanultakból, valamint a sietségből adódóan ezúttal nem mellékeltek keretkódot sem.
`,
  initialInput:
`
{
  "presents": {
    "Anna": "Fehér csokoládé",
    "Beáta": "Fekete csokoládé",
    "Cili": "Kerek csokoládé",
    "Dominik": "Lyukas csokoládé",
    "Edit": "Szögletes csokoládé",
    "Feri": "Keserű csokoládé",
    "Gabi": "Nyalóka",
    "Hanna": "Sütemény",
    "Ildikó": "Mogyoró",
    "Juli": "Aszalt gyümölcs",
    "Karcsi": "Csokoládé",
    "Laci": "Karamella",
    "Mari": "Szörp",
    "Nóri": "Keksz",
    "Orsi": "Dió"
  },

  "labeled": {
    "Anna": "Sütemény",
    "Beáta": "Fekete csokoládé",
    "Cili": "Aszalt gyümölcs",
    "Dominik": "Lyukas csokoládé",
    "Edit": "Szögletes csokoládé",
    "Feri": "Keserű csokoládé",
    "Gabi": "Szörp",
    "Hanna": "Fehér csokoládé",
    "Ildikó": "Mogyoró",
    "Juli": "Kerek csokoládé",
    "Karcsi": "Csokoládé",
    "Laci": "Karamella",
    "Mari": "Nyalóka",
    "Nóri": "Keksz",
    "Orsi": "Dió"
  }
}
`,
  initialCode:
`

`,
  validSolution:
`
const mismatch = []

for (const name in data.presents) {
  if (data.presents[name] != data.labeled[name]) {
    mismatch.push(name)
  }
}

return mismatch
`,
  code: 4990
}

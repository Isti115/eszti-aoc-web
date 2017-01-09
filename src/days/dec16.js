export default {
  title: 'Dec. 16.\n - Levelek 1.',
  description:
`
A napokban újra munkába állt a rénszarvas-expressz és zsákszámra szállítja a kívánság-leveleket a Mikulásnak.
Olyan sok érkezik így most hirtelen egyszerre, hogy nem tudja megfelelő ütemben átolvasni őket, ezért szüksége lenne valami módszerre, amivel el tudja dönteni, hogy melyikek a sürgősebbek.
Van néhány olyan szó, ami ha előfordul egy levélben, akkor arra utal, hogy azzal hamarabb kell foglalkozni, mert több időt fog igénybevenni a kért ajándékok elkészítése / beszerzése.

Ezek közül a legfontosabbak: "egzotikus", "különleges", "ritka", "speciális"

A **string**-ek \`includes\` művelete arra szolgál, hogy megállapítsuk, egy szöveg tartalmaz-e egy másikat.
<br />
Például:
\`\`\`
const a = 'sajtosszendvics'
const b = 'szonkásszendvics'

a.includes('sajt') == true
b.includes('sajt') == false
\`\`\`

Feladatunk, hogy mindegyik levélhez rendeljük hozzá annak a sürgősségi indexét, amit a benne található kritikus szavak számával egyenlő, majd pedig ezt a kapott értéket felhasználva rendezzük őket prioritási sorrendbe. Amennyiben két levél egyforma számú keresett szóval rendelkezik, akkor azokat hagyjuk beérkezési sorrendben. (Tehát ahogyan a bemeneten megkaptuk.)
<br />
A kimenet már ne tartalmazza a kiszámított adatokat, csak a levelek szövegének rendezett tömbjét adjuk vissza!
`,
  initialInput: `
[
  "Télapó Bácsi! Kérlek hozz nekem egy piros játékautót! Üdvözöllek: Aladár",
  "Kedves Télapó! Nagyon örülnék Karácsonyra egy különleges sapkának. Üdvözlettel, Misi",
  "Édes Mikulás Bácsi! Legyen szíves hozni nekem egy jó meleg sálat! Előre is köszönöm, Feri",
  "Drága Télapó! Lennél olyan szíves, hogy hoznál nekem egy ritka könyvet? :) Előre is köszönöm, Lilla",
  "Tisztelt Télapó! Ha van mód rá, akkor nem utasítanék vissza egy tábla egzotikus csokoládét! Ezen felül hálás lennék egy csomag különleges ízesítésű gumicukorért is. Előre is köszönöm, Feri",
  "Kedves Mikulás! Kaphatnék esetleg tőled egy speciális ecsetet? Tudod, azt, amelyikkel azokat a nagyon finom vékony vonalakat lehet húzni! Előre is köszönöm, Fanni",
  "Drága Mikulás! Szeretnék kérni Karácsonyra egy valamilyen egzotikus gyümölcsöt. Sok szeretettel: Ági"
]
`,
  initialCode:
`

`,
  validSolution:
`
const criticalWords = ["egzotikus", "különleges", "ritka", "speciális"]

function calculatePriority (text) {
  let priority = 0

  for (const criticalWord of criticalWords) {
    if (text.includes(criticalWord)) {
      priority++
    }
  }

  return { text, priority }
}

function comparePriority (a, b) {
  if (a.priority > b.priority) {
    return -1
  } else if (a.priority < b.priority) {
    return +1
  } else {
    return 0
  }
}

return data.map(calculatePriority).sort(comparePriority).map(l => l.text)
`,
  code: 1606
}

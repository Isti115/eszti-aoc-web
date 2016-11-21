export default {
  title: 'Nov. 27. - JSON',
  description:
`
#A JSON adatformátum
A JSON (JavaScript Object Notation) egy elterjedt és kényelmes módja adatok tárolásának.
A JavaScript-ben előforduló objektumok nagyon könnyen konvertálhatóak oda-vissza, ezért ez a rendszer is ilyen formában fogja megadni a bemenő adatokat, és egy JavaScript objektumként fogja várni a kimenetet.

Gyakorlatilag a következő primitív (szám és szöveg) valamint összetett (tömb és objektum) adattípusokból állhat össze:

* _Szám_: számjegyekkel leírt egész vagy tizedestört. _pl.:_ \`5\`, \`2.71\`

* Szöveg: karakterek sorozata idézőjellel körülvéve. _pl.:_ \`"sajt"\`, \`"valami"\`

* Tömb: tetszőleges számú és adattípusú (lehet vegyes is) tag vesszővel elválasztott formában felsorolva szögletes zárójellel körülvéve. _pl.:_ \`[1, 2, 3]\`, \`["pi", 3.14]\`

* Objektum: tetszőleges számú kulcs-érték pár, ahol a kulcs minden esetben szöveg típusú, az érték pedig szabadon választható. _pl.:_ \`{"name": "isti", "age": 19}\`

Ezek a típusok komplex adatszerkezetek lértehozásának céljával tetszőleges mélységgel egymásbaágyazhatóak. Például így:
\`\`\`
[
  {"name": "Eszti", age: 20},
  {"name": "Isti", age: 19}
]
\`\`\`
`,
  initialInput: `{}`,
  initialCode: `return []`,
  validSolution:
`
return [
  {name: 'Benedek', list: [{name: 'csavar', amount: 35}, {name: 'propeller', amount: 10}]}
  {name: 'Mama', list: [{name: 'kalács', amount: 3}, {name: 'pite', amount: 2}]},
]
`,
  code: 2216
}

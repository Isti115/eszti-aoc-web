export default {
  title: 'Nov. 27.\n - JSON',
  description:
`
#A JSON adatformátum
A JSON (JavaScript Object Notation) egy elterjedt és kényelmes módja adatok tárolásának.
A JavaScript-ben előforduló objektumok nagyon könnyen konvertálhatóak oda-vissza, ezért ez a rendszer is ilyen formában fogja megadni a bemenő adatokat, és egy JavaScript objektumként fogja várni a kimenetet.

Gyakorlatilag a következő primitív (**logikai**, **szám** és **szöveg**) valamint összetett (**lista** és **objektum**) adattípusokból állhat össze:

* **Logikai:** Igaz vagy hamis értéket reprezentál. _pl.:_ \`true\`, \`false\`

* **Szám:** számjegyekkel leírt egész vagy tizedestört. _pl.:_ \`5\`, \`2.71\`

* **Szöveg:** karakterek sorozata idézőjellel (lehet aposztróf is) körülvéve. _pl.:_ \`"sajt"\`, \`'valami'\`

* **Lista:** tetszőleges számú és adattípusú (lehet vegyes is) tag vesszővel elválasztott formában felsorolva szögletes zárójellel körülvéve. _pl.:_ \`[1, 2, 3]\`, \`["pi", 3.14]\`

* **Objektum:** tetszőleges számú kulcs-érték pár, ahol a kulcs minden esetben szöveg típusú, az érték pedig szabadon választható. _pl.:_ \`{"name": "isti", "age": 19}\`
<br />
(_Vesszővel elválasztott formában felsorolva kapcsos zárójellel körülvéve._)

Ezek a típusok komplex adatszerkezetek lértehozásának céljával tetszőleges mélységgel egymásbaágyazhatóak. Például így:
\`\`\`
[
  {"name": "Eszti", "age": 20},
  {"name": "Isti", "age": 19}
]
\`\`\`

Adjuk vissza a következő táblázatban található emberek objektumainak listáját **lista**ként (mindenki csak egyszer szerepeljen), ami név szerint ABC rendben növekvően rendezett.
<br />
Egy ember objektuma tartalmazza a nevét (\`name\`) **szöveg**ként és a hozzá tartozó termékek listáját (\`list\`) **lista**ként. A termékek listája szintén legyen ABC rendben növekvő név szerint.
<br />
Egy termék objektuma tartalmazza a termék nevét (\`name\`) **szöveg**ként és a vásárolni kívánt mennyiséget (\`amount\`) **szám**ként.

| Name    | Item      | Amount |
| ------- | --------- | ------ |
| Benedek | csavar    | 35     |
| Benedek | propeller | 10     |
| Mama    | kalács    | 3      |
| Mama    | pite      | 2      |

> Megjegyzés: Ha jónak tűnik az eredmény, azonban a rendszer mégsem fogadja el, akkor ellenőrizd a kis- és nagybetűket valamint az értékek típusait! (A szám **szám** legyen, nem pedig **szöveg**.)
`,
  initialInput: `{}`,
  initialCode:
`
console.log('Adatok előállítása folyamatban...')

return [

]
`,
  validSolution:
`
return [
  {name: 'Benedek', list: [{name: 'csavar', amount: 35}, {name: 'propeller', amount: 10}]},
  {name: 'Mama', list: [{name: 'kalács', amount: 3}, {name: 'pite', amount: 2}]}
]
`,
  code: 2216
}

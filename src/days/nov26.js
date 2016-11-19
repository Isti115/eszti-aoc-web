export default {
  title: 'Nov. 26. - JavaScript',
  description:
`
## Változók

* let
* const 

## Függvények

Gyakorlatilag a következő primitív (szám és szöveg) valamint összetett (tömb és objektum) adattípusokból állhat össze:

* _Szám_: számjegyekkel leírt egész vagy tizedestört. _pl.:_ \`5\`, \`2.71\`

* Szöveg: karakterek sorozata idézőjellel körülvéve. _pl.:_ \`"sajt"\`, \`"valami"\`

* Tömb: tetszőleges számú és adattípusú (lehet vegyes is) tag vesszővel elválasztott formában felsorolva szögletes zárójellel körülvéve. _pl.:_ \`[1, 2, 3]\`, \`["pi", 3.14]\`

* Objektum: tetszőleges számú kulcs-érték pár, ahol a kulcs minden esetben szöveg típusú, az érték pedig szabadon választható. _pl.:_ \`{"name": "isti", "age": 19}\`

Ezek a típusok komplex adatszerkezetek lértehozásának céljával tetszőleges mélységgel egymásbaágyazhatóak. Például így:
\`\`\`
[
  {"name": "Eszti", age:20},
  {"name": "Isti", age:19}
]
\`\`\`
`,
  initialInput: `{}`,
  initialCode:
`
const pi = 3.141592;
return 0
`,
  expectedOutput: {sajt: 10},
  code: 2532
}

export default {
  title: 'Dec. 24.\n - Karácsonyfa díszítés',
  description:
`
Most, hogy már minden elő van készítve és sínen vannak a folyamatok, a manók nekiállhatnak végre feldíszíteni a saját fáikat. :)
Designer Manó kitalálta, hogy milyen legyen az idei stílus, és az egységesség kedvéért mindenki ugyanazt a módszert követve fogja elhelyezni a díszeket, azonban mindenkinek különböző magasságú fája van, és Designer Manónak sok idő lenne mindenkinek egyénileg elkészíteni a díszítési tervet az adott mérethez, úgyhogy szüksége lenne egy programra, amibe ha betáplálja egy fa magasságát, akkor az visszaadja neki a díszítési tervet.

A szabályok a következőek:
* A fa egyik oldalán (nézzük most úgy, hogy ez balra kerüljön) végig kell futtatni egy girlandot. Jelöljük ezt \`/\` jelekkel!
* Ettől jobbra egy egységnyi helyet hagyjunk szabadon.
* Ezt követően felváltva tegyünk fel két féle díszt úgy, hogy mindig két egységnyi fa maradjon szabadon köztük!
* Minden páratlan sorban a \`%\` dísz szerepeljen előszöt, minden párosadikban pedig a \`@\`.

A fa kilátszó részeit \`*\`-gal jelöljük, valamint minden fa törzsét vágjuk két egység magasra. Ennek ábrázolására a fa alá középre igazítva helyezzük el két sorba a következő karaktersorozatot: \`|#|\`

Például a következőképpen néz ki egy négy magas fa:
\`\`\`
   /
  /*@
 /*%**
/*@**%*
  |#|
  |#|
\`\`\`

Ez pedig Designer Manó terve egy hat egység magas fához:
\`\`\`
     /
    /*@
   /*%**
  /*@**%*
 /*%**@**%
/*@**%**@**
    |#|
    |#|
\`\`\`

A program bemenetként egy listát fog kapni, ami tartalmazza a manók fái között előforduló magasságokat. Visszatérési értékként az ezek alapján a számok alapján generált tervek listáját szeretnénk kapni.

(_Megjegyzés: Figyeljünk arra, hogy a kimenet egy sortöréssel (\`\\n\`) kezdődjön és azzal is érjen véget._)

> Szöveg típusú változókat sima \`+\` operátorral tudunk összefűzni. Ha egy már meglévő változóhoz szeretnénk hozzátoldani, akkor az \`x = x + y\` séma rövidítésére használhatjuk a kényelmesebb \`x += y\` operátort.
>
> > Ha nagyon stílusosan szeretnénk megoldani, akkor karakterek sokszorosítására használhatjuk a szöveg típusú változókon elérhető \`repeat\` függvényt. Ennek működése a következő:
> > \`\`\`
> > const char = "a"
> >
> > char.repeat(4) == "aaaa"
> > "b".repeat(7) == "bbbbbbb"
> > \`\`\`

`,
  initialInput:
`
[
  3,
  5,
  7,
  10
]
`,
  initialCode:
`
function makeTree (x) {
  let result = '\\n'

  /* Ide írd azokat az utasításokat,
  amik a "result" változóhoz hozzáfűzve
  előállítják az x magas fát! */

  result += '\\n'
  return result
}

return data.map(makeTree)
`,
  validSolution:
`
function makeTree (x) {
  let result = '\\n'

  for (let i = 0; i < x; i++) {
    result += ' '.repeat(x - i - 1) + '/'
    const offset = 3 * (i % 2)

    for (let j = offset - 1; j < offset + i * 2 - 1; j++) {
      if (j % 6 == 0) {
        result += '%'
      } else if (j % 3 == 0) {
        result += '@'
      } else {
        result += '*'
      }
    }

    result += '\\n'
  }

  result += ' '.repeat(x - 2) + '|#|\\n'
  result += ' '.repeat(x - 2) + '|#|\\n'

  return result
}

return data.map(makeTree)

return \`
    /
   /@*
  /%**@
 /@**%**
/%**@**%*
   |#|
   |#|
\`
`,
  code: 6555
}

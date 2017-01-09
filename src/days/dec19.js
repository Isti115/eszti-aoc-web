export default {
  title: 'Dec. 19.\n - Rénszarvasok',
  description:
`
Hamrosan szükség lesz a rénszarvasok segítségére a szán húzásához, úgyhogy le kell ellenőrizni az állapotukat.
December elején tudjuk, hogy mindannyian jól voltak lakva, viszont azóta a nagy sürgés-forgás közepette a manók csak egy kicsit szétszórtan tudták vezetni az etetésükről szóló naplót.
Nem sorrendben írák fel, hogy mikor kinek adtak enni, viszont minden bejegyzéshez csatoltak egy dátumot.

Az rénszarvasok területén jeleskedő kutató manók munkásságából megtudhatjuk, hogy a jóllakottságukat egy \`0\` és \`30\` közötti skálán lehet mérni, ahol a \`0\` a nagyon éheset jelenti, a \`30\` pedig a teljesen jóllakottat.

Alapvetően nem kap élelmet, akkor egy nap alatt egy rénszarvas egy egységnyi jóllakottságot veszít. Egy adag ételtől a jóllakottsága alapesetben hárommal nő, úgy, hogy \`30\` fölé ekkor sem mehet. Tehát ha evés közben már eléri a \`30\`-at, akkor attól még nyugodtan vígan falatozik tovább, de a jóllakottsága már nem nő.

A kérdés az, hogy melyik rénszarvas jelenleg mennyire van jóllakva. Ezt egy \`0\` és \`30\` közötti számként kell kifejeznünk, ami alapján a manók mindegyiküknek személyes étrendet állítanak össze az ünnepekre.
Adjuk vissza a kért adatot egy objektumként, aminek a kulcsai a rénszarvasok nevei, az általuk jelölt értékek pedig az adott nevekhez tartozó jóllakottsági mutatók legyenek!
`,
  initialInput:
`
{
  "reindeers": [
    "Dasher",
    "Dancer",
    "Prancer",
    "Vixen",
    "Comet",
    "Cupid",
    "Donner",
    "Blitzen",
    "Rudolph"
  ],

  "feedingLog": [
    { "date": 20161201, "name": "Rudolph" },
    { "date": 20161202, "name": "Dancer" },
    { "date": 20161203, "name": "Vixen" },
    { "date": 20161204, "name": "Dasher" },
    { "date": 20161205, "name": "Prancer" },
    { "date": 20161206, "name": "Dasher" },
    { "date": 20161207, "name": "Blitzen" },
    { "date": 20161218, "name": "Cupid" },
    { "date": 20161209, "name": "Blitzen" },
    { "date": 20161210, "name": "Rudolph" },
    { "date": 20161211, "name": "Dancer" },
    { "date": 20161212, "name": "Comet" },
    { "date": 20161213, "name": "Blitzen" },
    { "date": 20161214, "name": "Donner" },
    { "date": 20161215, "name": "Prancer" },
    { "date": 20161216, "name": "Donner" },
    { "date": 20161217, "name": "Cupid" },
    { "date": 20161218, "name": "Comet" },
    { "date": 20161219, "name": "Rudolph" }
  ]
}
`,
  initialCode:
`
// még nincs kész, ne állj neki!
`,
  validSolution:
`
const feedingLevels = {}

for (const reindeer of data.reindeers) {
  feedingLevels[reindeer] = 30
}

const sortedFeedingLog = data.feedingLog.sort((a, b) => a.date - b.date)

for (let i = 20161201; i < 20161220; i++) {
  for (const reindeer in feedingLevels) {
    feedingLevels[reindeer]--
  }

  while (sortedFeedingLog.length > 0 && sortedFeedingLog[0].date === i) {
    const currentLogItem = sortedFeedingLog.shift()
    feedingLevels[currentLogItem.name] = (feedingLevels[currentLogItem.name] + 5 > 30) ? 30 : feedingLevels[currentLogItem.name] + 5
  }
}

return "sajt"
return feedingLevels
`,
  code: 3119
}

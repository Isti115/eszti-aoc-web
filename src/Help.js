import CustomElement from './CustomElement'

export default class Help extends CustomElement {
  constructor (changeDay) {
    super('div')
    this.container.id = 'help'

    this.helpContent = document.createElement('div')
    this.helpContent.id = 'helpContent'

    this.showdownConverter = new showdown.Converter({tables: true})
    this.markdownContent =
`
# Súgó
Üdvözöllek az Advent of Code for Eszti oldalon! :)

Bal felül a naptárból tudod kiválasztani, hogy melyik feladatot szeretnéd épp megoldani.
Előre dolgozni nem szabad, viszont visszafelé nyudogtan lehet menni az időben, nem gond, ha nem pont azon a napont kerül megoldásra egy feladat, mint amihez a naptárban tartozik.

A feladat leírása alatt öt dolog található. Sorrendben balról jobbra:
* **Bemenő adatok mezője:** Ide kerül a példa bemenete, amire a megfelelő kódot lefuttatva megkapjuk a sikeres megoldásért járó kódot, azonban tesztelési célokból nyudogtan át lehet írni más adatokra.

* **Végrehajtandó kód mezője:** Itt kell elkészíteni azoknak a függvényeknek és utasításoknak a kódját, amelyek feldolgozzák a bemenő adatot.
  <br />
  Eleinte ezzel nem kell törődni, csak a későbbi példákban lesz jelentőssége.

* **Kiértékelés gomb:** Végrehajtja a kódot a bemenő adatokra, és kitölti a **kimenő adatok** és az **eredmény** mezőt.

* **Kimenő adatok mező:** A program által \`console.log()\` utasítás segítségével futás közben kiírt üzeneteké

* **Eredmény mező:** A program által \`return\` utasítás segítségével visszaadott érték, valamint annak helyessége, és helyes megoldás esetén a nap kódja.


Az ezen a felületen található kódszerkesztőbe egy olyan függvény törzsét kell megírnunk, melynek egy \`data\` nevű paramétere van, ami a bemeneti adatokat tartalmazza.
<br />
A feladat ennek a függvénytörzsnek a megírása úgy, hogy a kitűzött problémát megoldva annak végeredményét adja visszatérési értékként.
`
    this.helpContent.innerHTML = this.showdownConverter.makeHtml(this.markdownContent.trim())

    this.container.appendChild(this.helpContent)

    this.helpHandle = document.createElement('div')
    this.helpHandle.id = 'helpHandle'
    this.helpHandle.textContent = '?'
    this.helpHandle.addEventListener('click', this.toggle.bind(this))
    this.container.appendChild(this.helpHandle)

    this.open = false
  }

  toggle () {
    if (this.open) {
      this.container.classList.remove('open')
    } else {
      this.container.classList.add('open')
    }

    this.open = !this.open
  }
}

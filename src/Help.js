/* global showdown */
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
Üdvözöllek az Advent of Code Esztinek szánt verziójához készült oldalon! :)

Bal felül a naptárból tudod kiválasztani, hogy melyik feladatot szeretnéd épp megoldani.
Előre dolgozni nem szabad, viszont visszafelé nyudogtan lehet menni az időben, nem gond, ha nem pont azon a napont kerül megoldásra egy feladat, mint amihez a naptárban tartozik.

A feladat leírása alatt öt dolog található. Sorrendben balról jobbra:
* **Bemenő adatok mezője:** Ide kerül a példa bemenete, amire a megfelelő kódot lefuttatva megkapjuk a sikeres megoldásért járó kódot, azonban tesztelési célokból nyudogtan át lehet írni más adatokra.
<br />
A mező fejléce mellett található gomb segítségével visszaállíthatjuk az eredeti tartalmát.
<br />
(_Eleinte ezzel nem kell törődni, mert a szükséges adatok a feladatok szövegében találhatóak, csak a későbbi példákban lesz jelentőssége._)

* **Végrehajtandó kód mezője:** Itt kell elkészíteni azoknak a függvényeknek és utasításoknak a kódját, amelyek feldolgozzák a bemenő adatot.
<br />
A mező tulajdonképpen egy függvény törzsét tartalmazza, melynek egy \`data\` nevű paramétere van, amin keresztül a bemeneti adatok mezőjének tartalmát érhetjük el.
<br />
(_Nem szövegként, hanem JavaScript változóként._)

* **Kiértékelés gomb:** Végrehajtja a kódot a bemenő adatokra, és kitölti a **kimenő adatok** valamint az **eredmény** mezőt.

* **Kimenő adatok mező:** A program (függvény) által \`console.log()\` utasítás segítségével futás közben kiírt üzeneteket tartalmazza, vagy ha van, akkor az értelmezés vagy futás során adódó hibát.

* **Eredmény mező:** A program (függvény) által \`return\` utasítás segítségével visszaadott érték, valamint annak helyessége, és helyes megoldás esetén a nap kódja.

A feladat a kódszerkesztőben található függvénytörzsnek a megírása úgy, hogy a kitűzött problémát megoldva annak végeredményét adja visszatérési értékként.
Jó szórakozást és sok sikert kívánok! :)
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

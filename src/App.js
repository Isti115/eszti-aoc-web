import Header from './Header'
import Content from './Content'
import dayStringStore from './dayStringStore'
import * as DayUtility from './DayUtility'

export default class App {
  /**
   * @param {HTMLElement} container
   */
  constructor (container) {
    window.DayUtility = DayUtility

    this.container = container

    this.header = new Header((dayString) => this.changeDay(dayString))
    this.content = new Content()

    container.appendChild(this.header.container)
    container.appendChild(this.content.container)

    dayStringStore.init()
  }
}

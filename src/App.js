import Header from './Header'
import Content from './Content'
import Calendar from './Calendar'
// import days from './days/index'

export default class App {
  /**
   * @param {HTMLElement} container
   */
  constructor (container) {
    this.container = container

    this.header = new Header()
    this.calendar = new Calendar()

    this.header.container.appendChild(this.calendar.container)

    this.content = new Content()

    container.appendChild(this.header.container)
    container.appendChild(this.content.container)
  }
}

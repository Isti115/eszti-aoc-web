import Header from './Header'
import Content from './Content'
import * as DayUtility from './DayUtility'
import days from './days/index'

const getDayFromURL = () => {
  return window.location.hash ? window.location.hash.slice(1) : 'nov26'
}

const setDayToURL = (dayString) => {
  window.location.hash = dayString
}

export default class App {
  /**
   * @param {HTMLElement} container
   */
  constructor (container) {
    // window.DayUtility = DayUtility

    this.container = container

    this.header = new Header((dayString) => this.changeDay(dayString))
    this.content = new Content()

    container.appendChild(this.header.container)
    container.appendChild(this.content.container)

    this.changeDay(getDayFromURL())
  }

  changeDay (dayString) {
    const newDay = DayUtility.dayFromString(dayString)

    this.header.updateDay(newDay, days[dayString])
    this.content.updateDay(newDay, days[dayString])

    setDayToURL(dayString)
  }
}

import CustomElement from './CustomElement'
import * as DayUtility from './DayUtility'

class CalendarDay extends CustomElement {
  /**
   * @param {DayUtility.Day} day
   */
  constructor (day) {
    super('div')
    this.container.classList.add('calendar-day')

    this.container.appendChild(document.createTextNode(day.number))
  }
}

export default class Content extends CustomElement {
  constructor () {
    super('div')
    this.container.id = 'calendar'

    let startDayNumber = DayUtility.dayNumberFromString('nov26', true)
    let endDayNumber = DayUtility.dayNumberFromString('dec24', true)

    const fillingDiv = document.createElement('div')
    fillingDiv.classList.add('calendar-day', 'filling')

    for (let i = 0; i < 5; i++) {
      this.container.appendChild(fillingDiv.cloneNode())
    }

    for (let i = startDayNumber; i <= endDayNumber; i++) {
      const day = new CalendarDay(DayUtility.dayFromNumber(i, true))
      this.container.appendChild(day.container)
    }

    for (let i = 0; i < 1; i++) {
      this.container.appendChild(fillingDiv.cloneNode())
    }
  }
}

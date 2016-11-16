import CustomElement from './CustomElement'
import * as DayUtility from './DayUtility'

class CalendarDay extends CustomElement {
  /**
   * @param {DayUtility.Day} day
   */
  constructor (day) {
    super('div')
    this.container.classList.add('calendar-day')

    this.container.appendChild(document.createTextNode(day.month))
  }
}

export default class Content extends CustomElement {
  constructor () {
    super('div')
    this.container.id = 'calendar'

    let startDaynumber = DayUtility.dayNumberFromString('nov26', true)
    let endDay = DayUtility.dayNumberFromString('dec24', true)

    for (let i = startDaynumber; i <= endDay; i++) {
      const day = new CalendarDay(DayUtility.dayFromNumber(i, true))
      this.container.appendChild(day.container)
    }

    this.container.appendChild(document.createTextNode('sajt'))
  }
}

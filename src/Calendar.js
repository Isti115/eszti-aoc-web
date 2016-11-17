import CustomElement from './CustomElement'
import * as DayUtility from './DayUtility'

class CalendarDay extends CustomElement {
  /**
   * @param {DayUtility.Day} day
   */
  constructor (day) {
    super('div')
    this.container.classList.add('calendar-day')

    this.day = day

    this.numberDiv = document.createElement('div')
    this.numberDiv.appendChild(document.createTextNode(day.number))

    this.numberDiv.addEventListener('click', () => this.handleClick(), false)

    this.container.appendChild(this.numberDiv)
  }

  handleClick () {
    console.log(this.day.toString())
  }
}

export default class Calendar extends CustomElement {
  constructor (changeDay) {
    super('div')
    this.container.id = 'calendar'

    let startDayNumber = DayUtility.dayNumberFromString('nov26', true)
    let endDayNumber = DayUtility.dayNumberFromString('dec24', true)

    const fillingDiv = document.createElement('div')
    fillingDiv.classList.add('calendar-day', 'filling')

    for (let i = 0; i < 5; i++) {
      this.container.appendChild(fillingDiv.cloneNode())
    }

    /** @type {CalendarDay[]} */
    this.calendarDays = []

    for (let i = startDayNumber; i <= endDayNumber; i++) {
      const calendarDay = new CalendarDay(DayUtility.dayFromNumber(i, true))
      this.calendarDays.push(calendarDay)
      this.container.appendChild(calendarDay.container)
    }

    for (let i = 0; i < 1; i++) {
      this.container.appendChild(fillingDiv.cloneNode(true))
    }
  }

  updateDay (newDay, dayData) {
    console.log('calendar updated')

    for (const calendarDay of this.calendarDays) {
      if (calendarDay.day.toString() === newDay.toString()) {
        calendarDay.numberDiv.classList.add('active')
      } else {
        calendarDay.numberDiv.classList.remove('active')
      }
    }
  }
}

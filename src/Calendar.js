import CustomElement from './CustomElement'
import * as DayUtility from './DayUtility'
import dayStringStore from './dayStringStore'

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
    dayStringStore.setDayString(this.day.toString())
  }
}

export default class Calendar extends CustomElement {
  constructor (changeDay) {
    super('div')
    this.container.id = 'calendar'

    // let startDayNumber = DayUtility.dayNumberFromString('nov26', true)
    // let endDayNumber = DayUtility.dayNumberFromString('dec24', true)

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

      if (i === DayUtility.todayDayNumber(true)) {
        calendarDay.container.classList.add('today')
      }

      this.calendarDays.push(calendarDay)
      this.container.appendChild(calendarDay.container)
    }

    for (let i = 0; i < 1; i++) {
      this.container.appendChild(fillingDiv.cloneNode(true))
    }

    dayStringStore.subscribe((dayString) => this.updateDay(dayString))
  }

  updateDay (dayString) {
    for (const calendarDay of this.calendarDays) {
      if (calendarDay.day.toString() === dayString) {
        calendarDay.container.classList.add('active')
      } else {
        calendarDay.container.classList.remove('active')
      }
    }
  }
}

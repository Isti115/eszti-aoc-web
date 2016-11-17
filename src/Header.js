import CustomElement from './CustomElement'
import Calendar from './Calendar'

export default class Header extends CustomElement {
  constructor (changeDay) {
    super('div')
    this.container.id = 'header'

    this.calendar = new Calendar(changeDay)
    this.container.appendChild(this.calendar.container)
  }

  updateDay (newDay, dayData) {
    console.log('header updated')

    this.calendar.updateDay(newDay, dayData)
  }
}

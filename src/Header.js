import CustomElement from './CustomElement'
import Calendar from './Calendar'
import dayStringStore from './dayStringStore'

export default class Header extends CustomElement {
  constructor (changeDay) {
    super('div')
    this.container.id = 'header'

    this.calendar = new Calendar(changeDay)
    this.container.appendChild(this.calendar.container)

    this.title = document.createElement('h1')
    this.container.appendChild(this.title)

    this.decoration = document.createElement('div')
    this.decoration.id = 'decoration'
    this.container.appendChild(this.decoration)

    dayStringStore.subscribe(this.updateDay.bind(this))
  }

  updateDay (dayString, dayData) {
    this.title.textContent = dayData.title
  }
}

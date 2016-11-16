import CustomElement from './CustomElement'
import Calendar from './Calendar'

export default class Header extends CustomElement {
  constructor () {
    super('div')
    this.container.id = 'header'

    this.calendar = new Calendar()
    this.container.appendChild(this.calendar.container)
  }
}

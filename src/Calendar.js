import CustomElement from './CustomElement'

export default class Content extends CustomElement {
  constructor () {
    super('div')
    this.container.id = 'calendar'

    this.container.appendChild(document.createTextNode('calendar'))
  }
}

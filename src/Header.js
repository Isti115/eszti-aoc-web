import CustomElement from './CustomElement'

export default class Header extends CustomElement {
  constructor () {
    super('div')
    this.container.id = 'header'

    this.container.appendChild(document.createTextNode('header'))
  }
}

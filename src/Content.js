import CustomElement from './CustomElement'

export default class Content extends CustomElement {
  constructor () {
    super('div')
    this.container.id = 'content'

    this.container.appendChild(document.createTextNode('content'))
  }
}

export default class CustomElement {
  /**
   * @param {string} baseElement
   */
  constructor (baseElement) {
    this.container = document.createElement(baseElement)
  }
}

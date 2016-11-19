/* global showdown */

import CustomElement from './CustomElement'
import CodeEditor from './CodeEditor'
import dayStringStore from './dayStringStore'

export default class Content extends CustomElement {
  constructor () {
    super('div')
    this.container.id = 'content'

    this.showdownConverter = new showdown.Converter()

    this.descriptionDiv = document.createElement('div')
    this.descriptionDiv.id = 'description'
    this.container.appendChild(this.descriptionDiv)

    this.container.appendChild(document.createElement('hr'))

    this.codeEditor = new CodeEditor()
    this.container.appendChild(this.codeEditor.container)

    dayStringStore.subscribe(this.updateDay.bind(this))
  }

  updateDay (dayString, dayData) {
    this.descriptionDiv.innerHTML = this.showdownConverter.makeHtml(dayData.description)
  }
}

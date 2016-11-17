/* global CodeMirror */

import CustomElement from './CustomElement'
import dayStringStore from './dayStringStore'

export default class Content extends CustomElement {
  constructor () {
    super('div')
    this.container.id = 'content'

    this.descriptionDiv = document.createElement('div')
    this.container.appendChild(this.descriptionDiv)

    this.codeMirror = CodeMirror(this.container, {
      mode: 'javascript',
      theme: 'esztiaoc',
      tabSize: 2
    })

    window.codeMirror = this.codeMirror

    setTimeout(() => this.codeMirror.refresh())

    dayStringStore.subscribe(this.updateDay.bind(this))
  }

  updateDay (dayString, dayData) {
    this.codeMirror.setValue(dayData.content)
  }
}

/* global CodeMirror */

import CustomElement from './CustomElement'
import dayStringStore from './dayStringStore'

export default class Content extends CustomElement {
  constructor () {
    super('div')
    this.container.id = 'codeEditor'

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
    this.codeMirror.setValue(dayData.initialCode)
  }

  evaluate () {
    try {
      const console = {log: (value) => window.alert(value)}
      const result = new Function('data', this.codeMirror.getValue())(6)
      console.log(result)
    } catch (ex) {
      console.log(ex)
    }
  }
}

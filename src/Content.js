/* global CodeMirror */

import CustomElement from './CustomElement'

export default class Content extends CustomElement {
  constructor () {
    super('div')
    this.container.id = 'content'

    this.container.appendChild(document.createTextNode('content'))

    this.codeMirror = CodeMirror(this.container, {
      value: 'function myScript(){return 100;}\n',
      mode: 'javascript'
    })

    setTimeout(() => { this.codeMirror.refresh() })
  }
}

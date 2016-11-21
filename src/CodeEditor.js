/* global CodeMirror _ */

import CustomElement from './CustomElement'
import Output from './Output'
import dayStringStore from './dayStringStore'

export default class codeEditor extends CustomElement {
  constructor () {
    super('div')
    this.container.id = 'codeEditor'

    this.input = document.createElement('div')

    this.inputHeader = document.createElement('h2')
    this.inputHeader.textContent = 'Input:'
    this.input.appendChild(this.inputHeader)

    this.inputTextarea = document.createElement('textarea')
    this.inputTextarea.id = 'inputTextarea'
    this.input.appendChild(this.inputTextarea)

    this.container.appendChild(this.input)

    this.codeMirror = CodeMirror(this.container, {
      mode: 'javascript',
      theme: 'esztiaoc',
      tabSize: 2
    })
    setTimeout(() => this.codeMirror.refresh())

    this.evaluateButton = document.createElement('button')
    this.evaluateButton.id = 'evaluateButton'
    this.evaluateButton.textContent = 'Evaluate'

    const arrowSpan = document.createElement('span')
    arrowSpan.textContent = '→'
    this.evaluateButton.appendChild(arrowSpan)

    this.evaluateButton.addEventListener('click', this.evaluate.bind(this), false)
    this.container.appendChild(this.evaluateButton)

    this.output = new Output()
    this.container.appendChild(this.output.container)

    dayStringStore.subscribe(this.updateDay.bind(this))
  }

  updateDay (dayString, dayData) {
    this.codeMirror.setValue(dayData.initialCode.trim())
    this.inputTextarea.value = dayData.initialInput.trim()
  }

  evaluate () {
    this.output.reset()

    try {
      const result = new Function('console', 'data', this.codeMirror.getValue())(this.output, JSON.parse(this.inputTextarea.value))

      const dayData = dayStringStore.getDayData()
      const expectedOutput = new Function('data', dayData.validSolution)(JSON.parse(dayData.initialInput))

      this.output.setResult(result, _.isEqual(result, expectedOutput), dayData.code)
    } catch (ex) {
      this.output.error(ex)
    }
  }
}

/* global CodeMirror _ */

import CustomElement from './CustomElement'
import Output from './Output'
import dayStringStore from './dayStringStore'

export default class codeEditor extends CustomElement {
  constructor () {
    super('div')
    this.container.id = 'codeEditor'

    // Input

    this.input = document.createElement('div')

    this.inputHeader = document.createElement('h2')

    this.inputReset = document.createElement('span')
    this.inputReset.classList.add('resetArrow')
    this.inputReset.textContent = '↻'

    this.inputHeader.appendChild(this.inputReset)
    this.inputHeader.appendChild(document.createTextNode(' Input:'))
    this.inputHeader.addEventListener('click', this.resetInput.bind(this))

    this.input.appendChild(this.inputHeader)

    this.inputTextarea = document.createElement('textarea')
    this.inputTextarea.id = 'inputTextarea'
    this.input.appendChild(this.inputTextarea)

    this.container.appendChild(this.input)

    // Code

    this.code = document.createElement('div')

    this.codeHeader = document.createElement('h2')

    this.codeReset = document.createElement('span')
    this.codeReset.classList.add('resetArrow')
    this.codeReset.textContent = '↻'

    this.codeHeader.appendChild(this.codeReset)
    this.codeHeader.appendChild(document.createTextNode(' Code:'))
    this.codeHeader.addEventListener('click', this.resetCode.bind(this))

    this.code.appendChild(this.codeHeader)

    this.codeMirror = CodeMirror(this.code, {
      mode: 'javascript',
      theme: 'esztiaoc',
      tabSize: 2
    })
    setTimeout(() => this.codeMirror.refresh())

    this.container.appendChild(this.code)

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
    const savedCode = window.localStorage.getItem(`day_${dayString}_code`)

    if (savedCode === null) {
      this.codeMirror.setValue(dayData.initialCode.trim())
    } else {
      this.codeMirror.setValue(savedCode)
    }

    this.inputTextarea.value = dayData.initialInput.trim()
  }

  resetInput () {
    this.inputTextarea.value = dayStringStore.getDayData().initialInput.trim()
  }

  resetCode () {
    this.codeMirror.setValue(dayStringStore.getDayData().initialCode.trim())
  }

  evaluate () {
    window.localStorage.setItem(`day_${dayStringStore.getDayString()}_code`, this.codeMirror.getValue())
    this.output.reset()

    try {
      const result = new Function('console', 'data', this.codeMirror.getValue())(this.output, JSON.parse(this.inputTextarea.value))

      const dayData = dayStringStore.getDayData()
      const expectedOutput = new Function('data', dayData.validSolution)(JSON.parse(dayData.initialInput))

      if (expectedOutput === undefined) {
        throw new Error('Problem not yet implemented.')
      }

      const success = _.isEqual(result, expectedOutput)
      this.output.setResult(result, success, dayData.code)

      if (success) {
        window.fetch(
          `https://maker.ifttt.com/trigger/eszti_advent/with/key/b20KfuHXESxVHMPs943CBl?` +
          `value1=${dayStringStore.getDayString()}`,
          { mode: 'no-cors' }
        )
      }
    } catch (ex) {
      this.output.error(ex)
    }
  }
}

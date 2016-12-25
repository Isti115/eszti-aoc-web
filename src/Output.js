import CustomElement from './CustomElement'

export default class Output extends CustomElement {
  constructor () {
    super('div')
    this.container.id = 'outputDiv'

    // Output

    this.output = document.createElement('div')
    this.output.id = 'output'

    this.outputHeader = document.createElement('h2')
    this.outputHeader.textContent = 'Output:'
    this.output.appendChild(this.outputHeader)

    this.outputContent = document.createElement('div')
    this.outputContent.id = 'outputContent'
    this.output.appendChild(this.outputContent)

    this.container.appendChild(this.output)

    // Result

    this.result = document.createElement('div')
    this.result.id = 'result'

    this.resultHeader = document.createElement('h2')
    this.resultHeader.textContent = 'Result:'
    this.result.appendChild(this.resultHeader)

    this.resultContent = document.createElement('div')
    this.resultContent.id = 'resultContent'
    this.result.appendChild(this.resultContent)

    this.container.appendChild(this.result)
  }

  reset () {
    this.outputContent.textContent = ''
  }

  makeOutputString (string) {
    return (JSON.stringify(string, null, '  ') || 'undefined').replace(/\\n/g, '\n') + '\n'
  }

  log (message) {
    this.outputContent.textContent += this.makeOutputString(message)

    this.outputContent.scrollTop = this.outputContent.scrollHeight
  }

  setResult (result, success, code) {
    this.resultContent.textContent = this.makeOutputString(result)
    this.resultContent.textContent += '#==---==#\n'
    this.resultContent.textContent += success ? 'Correct result!\nYour code is: ' + code : 'Wrong result.'

    this.resultContent.scrollTop = this.resultContent.scrollHeight
  }

  error (ex) {
    this.outputContent.textContent = 'Error:\n' + ex
  }
}

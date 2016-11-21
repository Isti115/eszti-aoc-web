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

  log (message) {
    this.outputContent.textContent += JSON.stringify(message, null, '  ') + '\n'

    this.outputContent.scrollTop = this.outputContent.scrollHeight
  }

  setResult (result, success, code) {
    this.resultContent.textContent = JSON.stringify(result, null, '  ')
    this.resultContent.textContent += '\n#==---==#\n'
    this.resultContent.textContent += success ? 'Corret result!\nYour code is: ' + code : 'Wrong result.'

    this.resultContent.scrollTop = this.resultContent.scrollHeight
  }

  error (ex) {
    this.outputContent.textContent = 'Error:\n' + ex
  }
}

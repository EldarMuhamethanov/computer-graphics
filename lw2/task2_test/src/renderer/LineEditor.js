const { Signal }= require('../utils/Signal.js')

class LineEditor {

  constructor () {
    this.show = false
    this.htmlElement = document.getElementById('line-editor')
    this.lineColor = '#000'
    this.lineWidth = 5
    this.lineColorChanged = new Signal()
    this.lineWidthChanged = new Signal()

    this.initStyleSubscribers()
  }

  getLineColor() {
    return this.lineColor
  }

  getLineWidth() {
    return this.lineWidth
  }

  showEditor() {
    this.show = true
    this.htmlElement.style.setProperty('visibility', 'visible')
  }

  hideEditor() {
    this.show = false
    this.htmlElement.style.setProperty('visibility', 'hidden')
  }

  initStyleSubscribers() {
    const lineColorPicker = document.getElementById('line-color-picker')
    const lineWidthInput = document.getElementById('line-width-input')

    lineColorPicker.addEventListener('input', () => {
      this.lineColor = lineColorPicker.value
      this.lineColorChanged.dispatch()
    })
    lineWidthInput.addEventListener('input', () => {
      this.lineWidth = lineWidthInput.value
      this.lineWidthChanged.dispatch()
    })
  }
}

export {
  LineEditor,
}
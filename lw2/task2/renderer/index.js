const { Canvas } = require('./Canvas.js')
const { LineEditor } = require('./LineEditor.js')
const { ipcRenderer } = require('electron')


window.onload = () => {
    const canvas = new Canvas()
    const lineEditor = new LineEditor()

    lineEditor.lineColorChanged.add(() => {
        const lineColor = lineEditor.getLineColor()
        canvas.setLineColor(lineColor)
    })
    lineEditor.lineWidthChanged.add(() => {
        const lineWidth = lineEditor.getLineWidth()
        canvas.setLineWidth(lineWidth)
    })

    ipcRenderer.on('new-image', () => {
        if (canvas.getShowCanvas()) {
            canvas.resetCanvas()
        } else {
            canvas.showCanvas()
            lineEditor.showEditor()
        }
    })

    ipcRenderer.on('save-image', () => {
        const pictureUrl = canvas.getCanvasPictureUrl()
        const link = document.createElement("a")
        link.href = pictureUrl
        link.download = 'canvas-image'
        link.click()
    })

    ipcRenderer.on('image-selected', (event, imageSrc) => {
        const image = new Image()
        image.onload = () => {
            canvas.showCanvas()
            canvas.insertPicture(image)
            lineEditor.showEditor()
        }
        image.onerror = () => console.error('failed to load image')
        image.src = imageSrc
    })
}
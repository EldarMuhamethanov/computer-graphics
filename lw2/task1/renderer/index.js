const {ipcRenderer} = require('electron')
const {Canvas} = require("./Canvas");

window.onload = () => {
    const canvas = new Canvas()

    const a = 10

    window.addEventListener('resize', () => {
        canvas.recalculateCanvasSize()
    })

    ipcRenderer.on('image-uploaded', (event, imageSrc) => {
        const image = new Image()
        image.onload = () => canvas.insertPicture(image)
        image.onerror = () => console.error('failed to load image')
        image.src = imageSrc
    })
}

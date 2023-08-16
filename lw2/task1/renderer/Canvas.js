class Canvas {
    constructor() {
        this.pictures = []
        this.selectedPicture = null
        this.canvasElement = null
        this.initCanvas()
        this.initDnd()
    }
    getCanvasElement() {
        return this.canvasElement
    }

    clearCanvas() {
        const canvasContext = this.canvasElement.getContext('2d')
        const {width, height} = this.canvasElement.getBoundingClientRect()
        canvasContext.clearRect(0, 0, width, height)
    }

    redraw() {
        this.clearCanvas()
        if (this.pictures.length) {
            const canvasContext = this.canvasElement.getContext('2d')
            this.pictures.forEach(picture => {
                canvasContext.drawImage(
                  picture.image,
                  picture.left,
                  picture.top,
                )
            })
        }
    }

    insertPicture(image) {
        const {width, height} = this.canvasElement.getBoundingClientRect()
        const left = (width - image.width) / 2
        const top = (height - image.height) / 2
        this.pictures.push({
            image,
            left,
            top,
            width: image.width,
            height: image.height,
        })
        this.redraw()
    }

    recalculateCanvasSize() {
        const container = document.querySelector('.container')
        const {width,height} = container.getBoundingClientRect()
        this.setCanvasSize(width, height)
    }

    setCanvasSize(width, height) {
        this.canvasElement.setAttribute('width', width)
        this.canvasElement.setAttribute('height', height)
        this.redraw()
    }

    initCanvas() {
        this.canvasElement = document.getElementById('canvas')
        this.recalculateCanvasSize()
    }


    initDnd() {
        this.canvasElement.onmousedown = (e) => this.onMouseDown(e)
    }

    checkPicturesHit(left, top) {
        return [...this.pictures]
          .reverse()
          .find(picture => {
              const {left: pictureLeft, top: pictureTop, width, height} = picture
              return left >= pictureLeft && left <= pictureLeft + width
                && top >= pictureTop && top <= pictureTop + height
          })
    }

    getPointRelativePicture(picture, offsetLeft, offsetTop) {
        return {
            left: offsetLeft - picture.left,
            top: offsetTop - picture.top,
        }
    }

    onMouseUp() {
        window.onmousemove = null
        window.onmouseup = null
        this.selectedPicture = null
    }
    onMouseMove(e, offsetX, offsetY) {
        if (this.selectedPicture) {
            const mouseX = e.offsetX
            const mouseY = e.offsetY
            this.selectedPicture.left = mouseX - offsetX
            this.selectedPicture.top = mouseY - offsetY
            this.redraw()
        }
    }
    onMouseDown(e) {
        if (this.pictures.length) {
            const mouseX = e.offsetX
            const mouseY = e.offsetY
            this.selectedPicture = this.checkPicturesHit(mouseX, mouseY)
            if (this.selectedPicture) {
                const {left: offsetX, top: offsetY} = this.getPointRelativePicture(this.selectedPicture, mouseX, mouseY)
                window.onmousemove = (e) => this.onMouseMove(e, offsetX, offsetY)
                window.onmouseup = () => this.onMouseUp()
            }
        }
    }
}

module.exports = {
    Canvas,
}
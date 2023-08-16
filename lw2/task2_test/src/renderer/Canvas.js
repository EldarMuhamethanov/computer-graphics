
const INITIAL_CANVAS_WIDTH = 500
const INITIAL_CANVAS_HEIGHT = 500


class Canvas {
    constructor() {
        this.show = false
        this.picture = null
        this.canvasElement = null
        this.lineColor = '#000'
        this.lineWidth = 5
        this.drawingInProcess = false
        this.parentContainer = document.querySelector('.editor-container')
        this.initCanvas()
        this.initCanvasDrawing()
    }
    getCanvasElement() {
        return this.canvasElement
    }

    getShowCanvas() {
        return this.show
    }

    showCanvas() {
        if (!this.show) {
            this.show = true
            this.parentContainer.appendChild(this.canvasElement)
            this.setCanvasSize(INITIAL_CANVAS_WIDTH, INITIAL_CANVAS_HEIGHT)
        }
    }

    resetCanvas() {
        this.picture = null
        this.setCanvasSize(INITIAL_CANVAS_WIDTH, INITIAL_CANVAS_HEIGHT)
        this.redraw()
    }

    setLineColor(lineColor) {
        this.lineColor = lineColor
    }

    setLineWidth(lineWidth) {
        this.lineWidth = lineWidth
    }

    clearCanvas() {
        const canvasContext = this.canvasElement.getContext('2d')
        const {width, height} = this.canvasElement.getBoundingClientRect()
        canvasContext.clearRect(0, 0, width, height)
    }

    redraw() {
        this.clearCanvas()
        if (this.picture) {
            const canvasContext = this.canvasElement.getContext('2d')
            canvasContext.drawImage(
              this.picture.image,
              this.picture.left,
              this.picture.top,
            )
        }
    }

    insertPicture(image) {
        this.picture = {
            image,
            left: 0,
            top: 0,
            width: image.width,
            height: image.height,
        }
        this.setCanvasSize(image.width, image.height)
        this.redraw()
    }

    getCanvasPictureUrl() {
        return this.canvasElement.toDataURL("image/jpg")
    }

    setCanvasSize(width, height) {
        this.canvasElement.setAttribute('width', width)
        this.canvasElement.setAttribute('height', height)
        this.redraw()
    }

    initCanvas() {
        this.canvasElement = document.createElement('canvas')
        this.canvasElement.id = 'canvas'
        this.canvasElement.className = 'canvas'
    }

    initCanvasDrawing() {
        this.canvasElement.onmousedown = e => this.onMouseDown(e)
    }

    getPointRelativeCanvas(pointX, pointY) {
        const {left: canvasLeft, top: canvasTop} = this.canvasElement.getBoundingClientRect()
        return [
          pointX - canvasLeft,
          pointY - canvasTop,
        ]
    }

    onMouseUp(e) {
        window.onmousemove = null
        window.onmouseup = null
        const canvasContext = this.canvasElement.getContext('2d')
        const [pointX, pointY] = this.getPointRelativeCanvas(e.clientX, e.clientY)
        canvasContext.lineTo(pointX, pointY);
        canvasContext.stroke();
        canvasContext.closePath();
        this.drawingInProcess = false;
    }
    onMouseMove(e) {
        if(this.drawingInProcess){
            const canvasContext = this.canvasElement.getContext('2d')
            const [pointX, pointY] = this.getPointRelativeCanvas(e.clientX, e.clientY)
            canvasContext.lineTo(pointX, pointY);
            canvasContext.stroke();
        }
    }
    onMouseDown(e) {
        const canvasContext = this.canvasElement.getContext('2d')
        this.drawingInProcess = true
        canvasContext.beginPath()
        canvasContext.lineWidth = this.lineWidth
        canvasContext.strokeStyle = this.lineColor
        const [pointX, pointY] = this.getPointRelativeCanvas(e.clientX, e.clientY)
        canvasContext.moveTo(pointX, pointY)
        window.onmousemove = e => this.onMouseMove(e)
        window.onmouseup = e => this.onMouseUp(e)
    }
}

export {
    Canvas,
}
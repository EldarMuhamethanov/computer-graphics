import {drawPicture} from "./src/drawPicture.mjs";
import {initCanvas} from "../common/initCanvas.mjs";
import {DragNDropHandler} from "./src/DragAndDropHandler.mjs";

const CANVAS_WIDTH = 900
const CANVAS_HEIGHT = 800


function drawCanvas(canvasContext) {
    drawPicture(canvasContext)
}

function initCanvasDragAndDrop(canvas) {
    canvas.style.setProperty('position', 'absolute')
    const dragAndDropHandler = new DragNDropHandler(canvas)
    dragAndDropHandler.getOnMoveSignal().add(({left, top}) => {
        canvas.style.setProperty('left', `${left}px`)
        canvas.style.setProperty('top', `${top}px`)
    })
}

function init() {
    const canvas = initCanvas('canvas', CANVAS_WIDTH, CANVAS_HEIGHT)
    initCanvasDragAndDrop(canvas)
    const canvasContext = canvas.getContext('2d')
    drawCanvas(canvasContext)
}

window.onload = () => init()
import {drawFullNameInitials} from "./src/drawFullNameInitials.mjs";
import {initCanvas} from "../common/initCanvas.mjs";

const CANVAS_WIDTH = 900
const CANVAS_HEIGHT = 500
const MILLISECONDS_PER_SECOND = 1000

function clearCanvas(canvasContext) {
    canvasContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
}

function getDrawCanvasImpl() {
    const startTime = Date.now()
    const fullName = 'Мухаметханов Эльдар Тимурович'

    return (canvasContext) => {
        const dateNow = Date.now()
        const time = dateNow - startTime
        const seconds = time / MILLISECONDS_PER_SECOND
        drawFullNameInitials(canvasContext, fullName, seconds)
    }
}

function loopImpl(canvasContext, drawCanvasImpl) {
    clearCanvas(canvasContext)
    drawCanvasImpl(canvasContext)
}

function initLoop(loopImpl) {
    loopImpl()
    window.requestAnimationFrame(() => initLoop(loopImpl))
}

function init() {
    const canvasContext = initCanvas('canvas', CANVAS_WIDTH, CANVAS_HEIGHT).getContext('2d')
    const drawCanvasImpl = getDrawCanvasImpl()
    initLoop(() => loopImpl(canvasContext, drawCanvasImpl))
}

window.onload = () => init()
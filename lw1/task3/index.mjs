import {drawEllipseByDots} from "./src/drawEllipseByDots.js";
import {initCanvas} from "../common/initCanvas.mjs";

const CANVAS_WIDTH = 900
const CANVAS_HEIGHT = 800
const ELLIPSE_CENTER_X = 500
const ELLIPSE_CENTER_Y = 200
const ELLIPSE_R = 120
const ELLIPSE_COLOR = 'green'

function drawCanvas(canvasContext) {
    drawEllipseByDots(canvasContext, ELLIPSE_CENTER_X, ELLIPSE_CENTER_Y, ELLIPSE_R, ELLIPSE_COLOR)
}

function init() {
    const canvasContext = initCanvas('canvas', CANVAS_WIDTH, CANVAS_HEIGHT).getContext('2d')
    drawCanvas(canvasContext)
}

window.onload = () => init()

export {
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
}
import {drawBackground} from "./drawBackground.mjs";
import {drawHouse} from "./drawHouse.mjs";

function drawPicture(canvasContext) {
    drawBackground(canvasContext)
    drawHouse(canvasContext)
}

export {
    drawPicture,
}
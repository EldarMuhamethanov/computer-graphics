import {drawRect, drawTriangle} from "../../common/drawPrimitive.mjs";

function drawSky(canvasContext) {
    drawRect({
        canvasContext,
        x: 0,
        y: 0,
        width: 900,
        height: 400,
        fillColor: '#92e1e5'
    })
}

function drawGround(canvasContext) {
    drawRect({
        canvasContext,
        x: 0,
        y: 400,
        width: 900,
        height: 400,
        fillColor: '#aa8a5e',
    })
}

function drawFenceSection(canvasContext, position) {
    const getX = x => position.x + x
    const getY = y => position.y + y

    drawRect({
        canvasContext,
        x: getX(0),
        y: getY(125),
        width: 70,
        height: 230,
        fillColor: '#42b22f',
    })
    drawTriangle({
        canvasContext,
        angle1: {
            x: getX(0),
            y: getY(125),
        },
        angle2: {
            x: getX(70),
            y: getY(125),
        },
        angle3: {
            x: getX(35),
            y: getY(95),
        },
        fillStyle: '#42b22f',
    })
}

function drawFence(canvasContext) {
    const sectionsCount = 12
    const fenceWidth = 70
    const fenceSpace = 10
    const startPosition = {
        x: 0,
        y: 90,
    }
    for (let i = 0; i < sectionsCount; i++) {
        drawFenceSection(
            canvasContext,
            {
                x: startPosition.x + (i * (fenceWidth + fenceSpace)),
                y: startPosition.y
            }
        )
    }
    drawRect({
        canvasContext,
        x: 0,
        y: 250,
        width: 900,
        height: 20,
        fillColor: '#42b22f',
    })
    drawRect({
        canvasContext,
        x: 0,
        y: 350,
        width: 900,
        height: 20,
        fillColor: '#42b22f',
    })
}

function drawBackground(canvasContext) {
    drawSky(canvasContext)
    drawGround(canvasContext)
    drawFence(canvasContext)
}

export {
    drawBackground,
}
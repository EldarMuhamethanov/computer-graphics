import {drawRect, drawTriangle, drawEllipse} from "../../common/drawPrimitive.mjs";

function drawWindow(canvasContext) {
    drawRect({
        canvasContext,
        x: 250,
        y: 250,
        width: 150,
        height: 150,
        fillColor: '#7f6000'
    })
    drawRect({
        canvasContext,
        x: 255,
        y: 255,
        width: 67.5,
        height: 140,
        fillColor: '#92e1e5'
    })
    drawRect({
        canvasContext,
        x: 327.5,
        y: 255,
        width: 67.5,
        height: 140,
        fillColor: '#92e1e5'
    })
}

function drawDoor(canvasContext) {
    drawRect({
        canvasContext,
        x: 450,
        y: 250,
        width: 150,
        height: 300,
        fillColor: '#cda62c'
    })
    drawEllipse({
        canvasContext,
        x: 470,
        y: 380,
        radiusX: 10,
        radiusY: 10,
        rotation: 0,
        startAngle: 0,
        endAngle: 360,
        fillStyle: '#8a6531',
    })
}

function drawBase(canvasContext) {
    drawRect({
        canvasContext,
        x: 200,
        y: 200,
        width: 450,
        height: 350,
        fillColor: '#bd5353'
    })
    drawWindow(canvasContext)
    drawDoor(canvasContext)
}

function drawRoof(canvasContext) {
    drawRect({
        canvasContext,
        x: 230,
        y: 30,
        width: 50,
        height: 200,
        fillColor: '#bd5353'
    })
    drawTriangle({
        canvasContext,
        angle1: {
            x: 180,
            y: 200,
        },
        angle2: {
            x: 425,
            y: 50,
        },
        angle3: {
            x: 670,
            y: 200,
        },
        fillStyle: '#8a6531',
    })
}

function drawHouse(canvasContext) {
    drawBase(canvasContext)
    drawRoof(canvasContext)
}

export {
    drawHouse,
}


function initCanvas(canvasId, canvasWidth, canvasHeight) {
    const canvas = document.getElementById(canvasId)
    canvas.setAttribute('width', `${canvasWidth}px`)
    canvas.setAttribute('height', `${canvasHeight}px`)
    return canvas
}

export {
    initCanvas
}
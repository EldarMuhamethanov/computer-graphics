function inRad(num) {
    return num * Math.PI / 180;
}

function drawRect({
    canvasContext,
    x,
    y,
    width,
    height,
    fillColor,
}) {
    canvasContext.save()
    canvasContext.beginPath()
    canvasContext.fillStyle = fillColor
    canvasContext.fillRect(x, y, width, height);
    canvasContext.closePath();
    canvasContext.restore()
}

function drawPolygon({
    canvasContext,
    angles,
    lineWidth,
    lineStyle,
    fillStyle,
}) {
    canvasContext.save()
    canvasContext.beginPath()
    const [firstAngle, ...otherAngles] = angles
    canvasContext.moveTo(firstAngle.x, firstAngle.y)
    otherAngles.forEach(angle => canvasContext.lineTo(angle.x, angle.y))
    canvasContext.lineWidth = lineWidth
    canvasContext.strokeStyle = lineStyle
    canvasContext.fillStyle = fillStyle
    lineWidth && lineStyle && canvasContext.stroke()
    fillStyle && canvasContext.fill()
    canvasContext.closePath();
    canvasContext.restore()
}

function drawTriangle({
    canvasContext,
    angle1,
    angle2,
    angle3,
    lineWidth,
    lineStyle,
    fillStyle,
}) {
    canvasContext.save()
    canvasContext.beginPath()
    canvasContext.moveTo(angle1.x, angle1.y)
    canvasContext.lineTo(angle2.x, angle2.y)
    canvasContext.lineTo(angle3.x, angle3.y)
    canvasContext.closePath();
    canvasContext.lineWidth = lineWidth
    canvasContext.strokeStyle = lineStyle
    canvasContext.fillStyle = fillStyle
    lineWidth && lineStyle && canvasContext.stroke()
    fillStyle && canvasContext.fill()
    canvasContext.restore()
}

function drawEllipse({
    canvasContext,
    x,
    y,
    radiusX,
    radiusY,
    rotation,
    startAngle,
    endAngle,
    lineWidth,
    lineStyle,
    fillStyle,
}) {

    canvasContext.save()
    canvasContext.beginPath();
    canvasContext.lineWidth = lineWidth
    canvasContext.strokeStyle = lineStyle
    canvasContext.fillStyle = fillStyle
    canvasContext.ellipse(x, y, radiusX, radiusY, inRad(rotation), inRad(startAngle), inRad(endAngle));
    lineWidth && lineStyle && canvasContext.stroke()
    fillStyle && canvasContext.fill()
    canvasContext.closePath();
    canvasContext.restore()
}

function drawDot({
    canvasContext,
    x,
    y,
    fillStyle,
}) {
    drawRect({
        canvasContext,
        x,
        y,
        width: 1,
        height: 1,
        fillColor: fillStyle,
    })
}

export {
    drawDot,
    drawTriangle,
    drawEllipse,
    drawRect,
    drawPolygon,
}
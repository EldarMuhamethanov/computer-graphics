import {drawDot} from "../../common/drawPrimitive.mjs";
import {CANVAS_HEIGHT, CANVAS_WIDTH} from "../index.mjs";

function getEllipseFn(a, b, r) {
    return (x) => {
        const v = Math.pow(r, 2) - Math.pow((x - a), 2)
        if (v < 0) {
            return []
        }
        if (v > 0) {
            const y1 = Math.sqrt(v) + b
            const y2 = -Math.sqrt(v) + b
            return [
                {
                    x: x,
                    y: y1
                },
                {
                    x: x,
                    y: y2,
                }
            ]
        }
        if (v === 0) {
            return [
                {
                    x: x,
                    y: b,
                },
            ]
        }
    }
}

function drawEllipseByDots(canvasContext, cx, cy, r, color) {
    const ellipseFn = getEllipseFn(cx, cy, r)

    const x1 = Math.max(0, cx - r)
    const x2 = Math.min(CANVAS_WIDTH, cx + r)
    const y1 = Math.max(0, cy - r)
    const y2 = Math.min(CANVAS_HEIGHT, cy + r)
    const canvasImageData = canvasContext.getImageData(
        0,
        0,
        CANVAS_WIDTH,
        CANVAS_HEIGHT,
    )

    const getPixelIndex = (x, y) => {
        return y * CANVAS_WIDTH + x
    }

    const fillPixel = (x, y) => {
        const pixelIndex = getPixelIndex(x, y)
        canvasImageData.data[pixelIndex] = 0
        canvasImageData.data[pixelIndex + 1] = 0
        canvasImageData.data[pixelIndex + 2] = 0
        canvasImageData.data[pixelIndex + 3] = 0
    }

    for (let x = x1; x <= x2; x++) {
        const dots = ellipseFn(x)
        dots.forEach(dot => {
            // fillPixel(dot.x, dot.y)
            drawDot({
                canvasContext,
                x: dot.x,
                y: dot.y,
                fillStyle: color
            })
        })
        // if (dots.length === 2) {
        //     const [startY, endY] =  dots[0].y < dots[1].y
        //         ? [dots[0].y, dots[1].y]
        //         : [dots[1].y, dots[0].y]
        //     for (let y = Math.max(startY, 0); y <= Math.min(endY, CANVAS_HEIGHT); y++) {
        //         drawDot({
        //             canvasContext,
        //             x,
        //             y,
        //             fillStyle: color
        //         })
        //     }
        // }
        // if (dots.length === 1) {
        //     drawDot({
        //         canvasContext,
        //         x: dots[0].x,
        //         y: dots[0].y,
        //         fillStyle: color
        //     })
        // }
    }
    // canvasContext.putImageData(canvasImageData, 0, 0);
}

export {
    drawEllipseByDots,
}
import {drawPolygon, drawTriangle, drawEllipse, drawRect} from "../../common/drawPrimitive.mjs";

function drawLetter(canvasContext, letter, position, color) {
    const getX = (offset) => position.x + offset
    const getY = (offset) => position.y + offset
    switch (letter) {
        case 'А':
            drawPolygon({
                canvasContext,
                angles: [
                    {
                        x: getX(0),
                        y: getY(150),
                    },
                    {
                        x: getX(70),
                        y: getY(20),
                    },
                    {
                        x: getX(80),
                        y: getY(20),
                    },
                    {
                        x: getX(10),
                        y: getY(150),
                    },
                ],
                lineWidth: 0,
                lineStyle: color,
                fillStyle: color,
            })
            drawPolygon({
                canvasContext,
                angles: [
                    {
                        x: getX(70),
                        y: getY(20),
                    },
                    {
                        x: getX(80),
                        y: getY(20),
                    },
                    {
                        x: getX(150),
                        y: getY(150),
                    },
                    {
                        x: getX(140),
                        y: getY(150),
                    },
                ],
                lineWidth: 0,
                lineStyle: color,
                fillStyle: color,
            })
            drawRect({
                    canvasContext,
                    x: getX(25),
                    y: getY(102),
                    width: 100,
                    height: 10,
                    fillColor: color,
            })
            break
        case 'Б':
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 100,
                height: 10,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(80),
                width: 75,
                height: 10,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(140),
                width: 75,
                height: 10,
                fillColor: color,
            })
            drawEllipse({
                canvasContext,
                x: getX(70),
                y: getY(115),
                radiusX: 30,
                radiusY: 30,
                rotation: 0,
                startAngle: 270,
                endAngle: 90,
                lineWidth: 10,
                lineStyle: color,
            })
            break
        case 'В':
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color,
            })
            drawEllipse({
                canvasContext,
                x: getX(70),
                y: getY(55),
                radiusX: 30,
                radiusY: 30,
                rotation: 0,
                startAngle: 270,
                endAngle: 90,
                lineWidth: 10,
                lineStyle: color,
            })
            drawEllipse({
                canvasContext,
                x: getX(70),
                y: getY(115),
                radiusX: 30,
                radiusY: 30,
                rotation: 0,
                startAngle: 270,
                endAngle: 90,
                lineWidth: 10,
                lineStyle: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 75,
                height: 10,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(80),
                width: 75,
                height: 10,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(140),
                width: 75,
                height: 10,
                fillColor: color,
            })
            break
        case 'Г':
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 100,
                height: 10,
                fillColor: color,
            })
            break
        case 'Д':
            drawTriangle({
                canvasContext,
                angle1: {
                    x: getX(75),
                    y: getY(30),
                },
                angle2: {
                    x: getX(120),
                    y: getY(120)
                },
                angle3: {
                    x: getX(30),
                    y: getY(120)
                },
                lineWidth: 10,
                lineStyle: color,
            })
            drawRect({
                canvasContext,
                x: getX(10),
                y: getY(115),
                width: 130,
                height: 10,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(10),
                y: getY(115),
                width: 10,
                height: 30,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(130),
                y: getY(115),
                width: 10,
                height: 30,
                fillColor: color
            })
            break
        case 'Е':
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 100,
                height: 10,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(80),
                width: 100,
                height: 10,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(140),
                width: 100,
                height: 10,
                fillColor: color,
            })
            break
        case 'Ё':
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 100,
                height: 10,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(80),
                width: 100,
                height: 10,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(140),
                width: 100,
                height: 10,
                fillColor: color,
            })
            drawEllipse({
                canvasContext,
                x: getX(40),
                y: getY(10),
                radiusX: 5,
                radiusY: 5,
                rotation: 0,
                startAngle: 0,
                endAngle: 360,
                lineWidth: 10,
                lineStyle: color,
                fillStyle: color
            })
            drawEllipse({
                canvasContext,
                x: getX(70),
                y: getY(10),
                radiusX: 5,
                radiusY: 5,
                rotation: 0,
                startAngle: 0,
                endAngle: 360,
                lineWidth: 10,
                lineStyle: color,
                fillStyle: color
            })
            break
        case 'Ж':
            drawRect({
                canvasContext,
                x: getX(70),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            drawPolygon({
                canvasContext,
                angles: [
                    {
                        x: getX(0),
                        y: getY(150),
                    },
                    {
                        x: getX(140),
                        y: getY(20),
                    },
                    {
                        x: getX(150),
                        y: getY(20),
                    },
                    {
                        x: getX(10),
                        y: getY(150),
                    },
                ],
                lineWidth: 0,
                lineStyle: color,
                fillStyle: color,
            })
            drawPolygon({
                canvasContext,
                angles: [
                    {
                        x: getX(0),
                        y: getY(20),
                    },
                    {
                        x: getX(10),
                        y: getY(20),
                    },
                    {
                        x: getX(150),
                        y: getY(150),
                    },
                    {
                        x: getX(140),
                        y: getY(150),
                    },
                ],
                lineWidth: 0,
                lineStyle: color,
                fillStyle: color,
            })
            break
        case 'З':
            drawEllipse({
                canvasContext,
                x: getX(70),
                y: getY(55),
                radiusX: 30,
                radiusY: 30,
                rotation: 0,
                startAngle: 240,
                endAngle: 90,
                lineWidth: 10,
                lineStyle: color,
            })
            drawEllipse({
                canvasContext,
                x: getX(70),
                y: getY(115),
                radiusX: 30,
                radiusY: 30,
                rotation: 0,
                startAngle: 270,
                endAngle: 120,
                lineWidth: 10,
                lineStyle: color,
            })
            break
        case 'И':
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color,
            })
            drawPolygon({
                canvasContext,
                angles: [
                    {
                        x: getX(0),
                        y: getY(150),
                    },
                    {
                        x: getX(10),
                        y: getY(150),
                    },
                    {
                        x: getX(120),
                        y: getY(20),
                    },
                    {
                        x: getX(110),
                        y: getY(20),
                    }
                ],
                lineWidth: 0,
                lineStyle: color,
                fillStyle: color,
            })
            drawRect({
                canvasContext,
                x: getX(110),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            break
        case 'Й':
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color,
            })
            drawPolygon({
                canvasContext,
                angles: [
                    {
                        x: getX(0),
                        y: getY(150),
                    },
                    {
                        x: getX(10),
                        y: getY(150),
                    },
                    {
                        x: getX(120),
                        y: getY(20),
                    },
                    {
                        x: getX(110),
                        y: getY(20),
                    }
                ],
                lineWidth: 0,
                lineStyle: color,
                fillStyle: color,
            })
            drawRect({
                canvasContext,
                x: getX(110),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(45),
                y: getY(10),
                width: 30,
                height: 10,
                fillColor: color
            })
            break
        case 'К':
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color,
            })
            drawPolygon({
                canvasContext,
                angles: [
                    {
                        x: getX(10),
                        y: getY(85),
                    },
                    {
                        x: getX(100),
                        y: getY(20),
                    },
                    {
                        x: getX(110),
                        y: getY(20),
                    },
                    {
                        x: getX(20),
                        y: getY(85),
                    },
                ],
                lineWidth: 0,
                lineStyle: color,
                fillStyle: color,
            })
            drawPolygon({
                canvasContext,
                angles: [
                    {
                        x: getX(10),
                        y: getY(85),
                    },
                    {
                        x: getX(100),
                        y: getY(150),
                    },
                    {
                        x: getX(110),
                        y: getY(150),
                    },
                    {
                        x: getX(20),
                        y: getY(85),
                    },
                ],
                lineWidth: 0,
                lineStyle: color,
                fillStyle: color,
            })
            break
        case 'Л':
            drawRect({
                canvasContext,
                x: getX(100),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(40),
                y: getY(20),
                width: 60,
                height: 10,
                fillColor: color,
            })
            drawPolygon({
                canvasContext,
                angles: [
                    {
                        x: getX(0),
                        y: getY(150),
                    },
                    {
                        x: getX(40),
                        y: getY(20),
                    },
                    {
                        x: getX(50),
                        y: getY(20),
                    },
                    {
                        x: getX(10),
                        y: getY(150),
                    },
                ],
                lineWidth: 0,
                lineStyle: color,
                fillStyle: color,
            })
            break
        case 'М':
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            drawPolygon({
                canvasContext,
                angles: [
                    {
                        x: getX(0),
                        y: getY(20),
                    },
                    {
                        x: getX(10),
                        y: getY(20),
                    },
                    {
                        x: getX(80),
                        y: getY(150),
                    },
                    {
                        x: getX(70),
                        y: getY(150),
                    }
                ],
                lineWidth: 0,
                lineStyle: color,
                fillStyle: color,
            })
            drawPolygon({
                canvasContext,
                angles: [
                    {
                        x: getX(140),
                        y: getY(20),
                    },
                    {
                        x: getX(150),
                        y: getY(20),
                    },
                    {
                        x: getX(80),
                        y: getY(150),
                    },
                    {
                        x: getX(70),
                        y: getY(150),
                    }
                ],
                lineWidth: 0,
                lineStyle: color,
                fillStyle: color,
            })
            drawRect({
                canvasContext,
                x: getX(140),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            break
        case 'Н':
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(100),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(80),
                width: 100,
                height: 10,
                fillColor: color
            })
            break
        case 'О':
            drawEllipse({
                canvasContext,
                x: getX(60),
                y: getY(85),
                radiusX: 50,
                radiusY: 60,
                rotation: 0,
                startAngle: 0,
                endAngle: 360,
                lineWidth: 10,
                lineStyle: color,
            })
            break
        case 'П':
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(100),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 100,
                height: 10,
                fillColor: color
            })
            break
        case 'Р':
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color,
            })
            drawEllipse({
                canvasContext,
                x: getX(70),
                y: getY(55),
                radiusX: 30,
                radiusY: 30,
                rotation: 0,
                startAngle: 270,
                endAngle: 90,
                lineWidth: 10,
                lineStyle: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 75,
                height: 10,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(80),
                width: 75,
                height: 10,
                fillColor: color,
            })
            break
        case 'С':
            drawEllipse({
                canvasContext,
                x: getX(60),
                y: getY(85),
                radiusX: 50,
                radiusY: 60,
                rotation: 0,
                startAngle: 35,
                endAngle: 305,
                lineWidth: 10,
                lineStyle: color,
            })
            break
        case 'Т':
            drawRect({
                canvasContext,
                x: getX(70),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 150,
                height: 10,
                fillColor: color
            })
            break
        case 'У':
            drawPolygon({
                canvasContext,
                angles: [
                    {
                        x: getX(40),
                        y: getY(150),
                    },
                    {
                        x: getX(100),
                        y: getY(20),
                    },
                    {
                        x: getX(110),
                        y: getY(20),
                    },
                    {
                        x: getX(50),
                        y: getY(150),
                    },
                ],
                lineWidth: 0,
                lineStyle: color,
                fillStyle: color,
            })
            drawPolygon({
                canvasContext,
                angles: [
                    {
                        x: getX(20),
                        y: getY(20),
                    },
                    {
                        x: getX(30),
                        y: getY(20),
                    },
                    {
                        x: getX(75),
                        y: getY(90),
                    },
                    {
                        x: getX(65),
                        y: getY(90),
                    },
                ],
                lineWidth: 0,
                lineStyle: color,
                fillStyle: color,
            })
            break
        case 'Ф':
            drawRect({
                canvasContext,
                x: getX(70),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            drawEllipse({
                canvasContext,
                x: getX(80),
                y: getY(85),
                radiusX: 50,
                radiusY: 40,
                rotation: 0,
                startAngle: 270,
                endAngle: 90,
                lineWidth: 10,
                lineStyle: color,
            })
            drawEllipse({
                canvasContext,
                x: getX(70),
                y: getY(85),
                radiusX: 50,
                radiusY: 40,
                rotation: 0,
                startAngle: 90,
                endAngle: 270,
                lineWidth: 10,
                lineStyle: color,
            })
            break
        case 'Х':
            drawPolygon({
                canvasContext,
                angles: [
                    {
                        x: getX(30),
                        y: getY(150),
                    },
                    {
                        x: getX(110),
                        y: getY(20),
                    },
                    {
                        x: getX(120),
                        y: getY(20),
                    },
                    {
                        x: getX(40),
                        y: getY(150),
                    },
                ],
                lineWidth: 0,
                lineStyle: color,
                fillStyle: color,
            })
            drawPolygon({
                canvasContext,
                angles: [
                    {
                        x: getX(30),
                        y: getY(20),
                    },
                    {
                        x: getX(40),
                        y: getY(20),
                    },
                    {
                        x: getX(120),
                        y: getY(150),
                    },
                    {
                        x: getX(110),
                        y: getY(150),
                    },
                ],
                lineWidth: 0,
                lineStyle: color,
                fillStyle: color,
            })
            break
        case 'Ц':
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 110,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(100),
                y: getY(20),
                width: 10,
                height: 110,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(130),
                width: 110,
                height: 10,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(110),
                y: getY(130),
                width: 10,
                height: 20,
                fillColor: color
            })
            break
        case 'Ч':
            drawRect({
                canvasContext,
                x: getX(100),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 75,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(85),
                width: 100,
                height: 10,
                fillColor: color,
            })
            break
        case 'Ш':
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(70),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(140),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(140),
                width: 150,
                height: 10,
                fillColor: color
            })
            break
        case 'Щ':
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(60),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(130),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(140),
                width: 140,
                height: 10,
                fillColor: color
            })
            drawRect({
                canvasContext,
                x: getX(140),
                y: getY(140),
                width: 10,
                height: 30,
                fillColor: color
            })
            break
        case 'Э':
            drawEllipse({
                canvasContext,
                x: getX(60),
                y: getY(85),
                radiusX: 50,
                radiusY: 60,
                rotation: 0,
                startAngle: 215,
                endAngle: 145,
                lineWidth: 10,
                lineStyle: color,
            })
            drawRect({
                canvasContext,
                x: getX(35),
                y: getY(80),
                width: 70,
                height: 10,
                fillColor: color,
            })
            break
        case 'Ю':
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color
            })
            drawEllipse({
                canvasContext,
                x: getX(85),
                y: getY(85),
                radiusX: 50,
                radiusY: 60,
                rotation: 0,
                startAngle: 0,
                endAngle: 360,
                lineWidth: 10,
                lineStyle: color,
            })
            drawRect({
                canvasContext,
                x: getX(0),
                y: getY(80),
                width: 35,
                height: 10,
                fillColor: color,
            })
            break
        case 'Я':
            drawRect({
                canvasContext,
                x: getX(100),
                y: getY(20),
                width: 10,
                height: 130,
                fillColor: color,
            })
            drawEllipse({
                canvasContext,
                x: getX(30),
                y: getY(55),
                radiusX: 30,
                radiusY: 30,
                rotation: 0,
                startAngle: 90,
                endAngle: 270,
                lineWidth: 10,
                lineStyle: color,
            })
            drawRect({
                canvasContext,
                x: getX(30),
                y: getY(20),
                width: 75,
                height: 10,
                fillColor: color,
            })
            drawRect({
                canvasContext,
                x: getX(30),
                y: getY(80),
                width: 75,
                height: 10,
                fillColor: color,
            })
            drawPolygon({
                canvasContext,
                angles: [
                    {
                        x: getX(0),
                        y: getY(150),
                    },
                    {
                        x: getX(100),
                        y: getY(85),
                    },
                    {
                        x: getX(110),
                        y: getY(85),
                    },
                    {
                        x: getX(10),
                        y: getY(150),
                    },
                ],
                lineWidth: 0,
                lineStyle: color,
                fillStyle: color,
            })
            break
    }
}

export {
    drawLetter,
}
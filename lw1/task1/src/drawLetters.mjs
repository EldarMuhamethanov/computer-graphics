import {drawLetter} from "./drawLetter.mjs";

const LETTER_WIDTH = 150
const LETTER_SPACE = 25
const START_SPEED = 70
const SECONDS_LAG = 2
const ACCELERATION = 10
const LETTER_HEIGHT = 150

function calculateTheEquation(a, b, c) {
    const d = Math.pow(b, 2) - 4 * a * c
    if (d === 0) {
        const x = - b / (2 * a)
        return [x, x]
    }
    if (d > 0) {
        const x1 = (-b + Math.sqrt(d)) / (2 * a)
        const x2 = (-b - Math.sqrt(d)) / (2 * a)
        return [x1, x2]
    }
    throw new Error('the equation has no solutions')
}

function calculateFlightTime(v0, y0) {
    const [t1, t2] = calculateTheEquation(- ACCELERATION / 2, v0, y0)
    return t1 > t2
        ? t1
        : t2
}

function remapYCoordinate(y) {
    return 500 - LETTER_HEIGHT - y
}

function calculateY(t, y0) {
    const flightTime = calculateFlightTime(START_SPEED, y0)
    const time = t % flightTime
    return remapYCoordinate(START_SPEED * time - (ACCELERATION / 2) * Math.pow(time, 2))
}

function drawLetters(canvasContext, letters, time) {
    letters.forEach((letter, index) => {
        drawLetter(
            canvasContext,
            letter.value,
            {
                x: (LETTER_WIDTH * index + LETTER_SPACE * index),
                y: calculateY(time + (index * SECONDS_LAG), 0),
            },
            letter.color,
        )
    })
}

export {
    drawLetters,
}
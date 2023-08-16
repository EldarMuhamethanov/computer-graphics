import {drawLetters} from "./drawLetters.mjs";

const colors = ['green', 'yellow', 'blue', 'green', 'yellow', 'blue']

function getInitials(fullName) {
    return fullName
        .trim()
        .replace(/\s+/g, ' ')
        .split(' ')
        .map(word => word[0].toUpperCase())
        .slice(0, 3)
        .join('')
}

function drawFullNameInitials(canvasContext, fullName, time) {
    const initials = getInitials(fullName)
        .split('')
        .map((initial, index) => ({
            value: initial,
            color: colors[index]
        }))
    drawLetters(canvasContext, initials, time)
}

export {
    drawFullNameInitials
}
import {Signal} from "./Signal.mjs";

class DragNDropHandler {
    #m_element
    #onMoveSignal = new Signal()
    #onDropSignal = new Signal()

    #onShapeMouseDownCallback = () => {}
    #onShapeMouseMoveCallback = () => {}
    #onShapeMouseUpCallback = () => {}

    constructor(element) {
        this.#m_element = element
        this.#onShapeMouseDownCallback = (e) => this.#onShapeMouseDown(e)
        this.#m_element.addEventListener('mousedown', this.#onShapeMouseDownCallback)
    }

    getOnMoveSignal() {
        return this.#onMoveSignal
    }
    getOnDropSignal() {
        return this.#onDropSignal
    }

    #onShapeMouseUp(e, leftOffset, topOffset) {
        window.removeEventListener('mousemove', this.#onShapeMouseMoveCallback)
        window.removeEventListener('mouseup', this.#onShapeMouseUpCallback)
        this.#onDropSignal.dispatch({
            left: e.x - leftOffset,
            top: e.y - topOffset,
        })
    }

    #onShapeMove(e, leftOffset, topOffset) {
        this.#onMoveSignal.dispatch({
            left: e.x - leftOffset,
            top: e.y - topOffset,
        })
    }

    #onShapeMouseDown(e) {
        if (!e.defaultPrevented) {
            e.preventDefault()
            const elementBounds = this.#m_element.getBoundingClientRect()
            const resultLeftOffset = (e.x - elementBounds.left)
            const resultTopOffset = (e.y - elementBounds.top)

            this.#onShapeMouseMoveCallback = (e) => this.#onShapeMove(e, resultLeftOffset, resultTopOffset)
            this.#onShapeMouseUpCallback = (e) => this.#onShapeMouseUp(e, resultLeftOffset, resultTopOffset)
            window.addEventListener('mousemove', this.#onShapeMouseMoveCallback)
            window.addEventListener('mouseup', this.#onShapeMouseUpCallback)
        }
    }
}

export {
    DragNDropHandler,
}
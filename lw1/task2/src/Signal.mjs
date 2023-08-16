class Signal {
    #m_listeners = []

    add(fn) {
        this.#m_listeners.push(fn)
        return () => {
            const index = this.#m_listeners.indexOf(fn)
            if (index >= 0) {
                this.#m_listeners.splice(index, 1)
            }
        }
    }

    dispatch(value) {
        for (const sb of this.#m_listeners) {
            sb(value)
        }
    }
}

export {
    Signal,
}
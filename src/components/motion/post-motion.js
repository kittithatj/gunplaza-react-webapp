export const appPostMotion = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3
        }
    },
    exit: {
        opacity: 0
    }
}

export const postContentMotion = {
    initial: {
        y: -100
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.3
        }
    },
    exit: {
        y: -100,
        transition: {
            duration: 0.3
        }
    }
}

export const postMainMotion = {
    initial: {
        x: -250
    },
    animate: {
        x: 0,
        transition: {
            duration: 0.3,
            delay: 0.6
        }
    },
    exit: {
        y: -100,
        transition: {
            duration: 0.3
        }
    }
}

export const postImageMotion = {
    initial: {
        x: 200
    },
    animate: {
        x: 0,
        transition: {
            delay: 0.6,
            duration: 0.3
        }
    },
    exit: {
        y: -100,
        transition: {
            duration: 0.3
        }
    }
}


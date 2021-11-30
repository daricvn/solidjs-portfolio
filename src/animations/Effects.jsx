import anime from "animejs"

export const fadeLeft = {
    enter: (el, done)=> {
        var delay = el.getAttribute("delay") ?? 0
        anime({
            targets: el,
            opacity: [0, 1],
            translateX: [ 50, 0],
            delay: +delay,
            duration: 900,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            complete: done
        })
    },
    leave: (el, done)=> {
        var delay = el.getAttribute("delay") ?? 0
        anime({
            targets: el,
            opacity: [0, 1],
            translateX: [ 50, 0],
            delay: +delay,
            duration: 300,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            direction: "reverse",
            complete: done
        })
    },
}

export const zoomAppear = {
    enter: (el, done)=> {
        var delay = el.getAttribute("delay") ?? 0
        anime({
            targets: el,
            opacity: [0, 1],
            scale: [ 1.4, 1],
            delay: +delay,
            position: "absolute",
            duration: 1200,
            complete: done
        })
    },
    leave: (el, done)=> {
        var delay = el.getAttribute("delay") ?? 0
        anime({
            targets: el,
            opacity: [0, 1],
            scale: [ 1.4, 1],
            delay: +delay,
            duration: 300,
            position: "absolute",
            easing: 'cubicBezier(.5, .05, .1, .3)',
            direction: "reverse",
            complete: done
        })
    }
}
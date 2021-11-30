import anime from "animejs"

export const slideLeft = {
    enter: (el, done)=> {
        var delay = el.getAttribute("delay") ?? 0
        anime({
            targets: el,
            opacity: [0, 1],
            translateX: [ 150, 0],
            delay: +delay,
            duration: 1000,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            complete: done
        })
    },
    leave: (el, done)=> {
        var delay = el.getAttribute("delay") ?? 0
        anime({
            targets: el,
            opacity: 0,
            translateX: 150,
            delay: +delay,
            duration: 300,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            complete: done
        })
    }
}

export const slideUp = {
    enter: (el, done)=>{
        var delay = el.getAttribute("delay") ?? 0
        anime({
            targets: el,
            opacity: [0, 1],
            translateY: [ anime.random(60, 120), 0],
            rotate: [ anime.random(-60, 60), 0],
            delay: +delay,
            duration: 2000,
            complete: done
        })
    },
    leave: (el, done)=>{
        var delay = el.getAttribute("delay") ?? 0
        anime({
            targets: el,
            opacity: 0,
            translateY: 180,
            delay: +delay,
            duration: 500,
            complete: done
        })
    }
}

export const textDraw = {
    enter: (el, done)=>{
        var delay = el.getAttribute("delay") ?? 0
        const path = el.firstChild.children
        anime({
            targets: path,
            strokeDashoffset: {
                value: [anime.setDashoffset, 0],
                delay: (el, i)=> +delay + 500 + (i* 300)
            },
            scale: [ 0.7, 1],
            translateX: {
                 value: [ anime.random(50, 150), 0],
                 duration: 2500
            },
            rotate: [ anime.random(-40, 40), 0],
            delay: (el, i)=> +delay + (i * 250),
            duration: 2000,
            complete: done
          });
    },
    leave: (el, done)=>{
        anime({
            targets: path,
            strokeDashoffset: {
                value: [anime.setDashoffset, 0],
                delay: (el, i)=> +delay + 500 + (i* 200)
            },
            scale: [0.3, 1],
            rotate: [ anime.random(-40, 40), 0],
            direction:'reverse',
            duration: 500,
            complete: done
          });
    }
}

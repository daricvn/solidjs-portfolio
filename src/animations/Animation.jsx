import anime from "animejs"

export const moveUpDown = (el, duration)=>{
    return anime({
        targets: el,
        translateY: [0, 15],
        direction: 'alternate',
        easing: 'easeInOutSine',
        duration: duration ?? 500,
        loop: true
    })
}
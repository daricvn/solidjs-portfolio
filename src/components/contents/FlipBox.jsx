import anime from "animejs";
import { createEffect, createSignal, onMount } from "solid-js";
import { useGlobalState } from "../../store";

const MAX_ROTATE = 7;
export default function FlipBox(props){
    const [ state, setState ] = useGlobalState()
    const [ getBreakPoint, setBreakpoint ] = createSignal()
    const [ getBreakPointY, setBreakpointY ] = createSignal()
    const [ getDeg, setDeg ] = createSignal(0)
    const [ getDegY, setDegY ] = createSignal(0)
    const [ getAnime, setAnime ] = createSignal()
    let mainRef;

    createEffect(()=>{
        if (!mainRef || getBreakPoint() || getBreakPointY() || !state.size.width)
            return
        setBreakpoint(mainRef.offsetHeight / 2)
        setBreakpointY(mainRef.offsetWidth / 2)
    })

    const handleMouseMoveEffect = (e)=>{
        if (getAnime())
            return
        let breakpoint = getBreakPoint()
        let breakpointY = getBreakPointY()
        let currentOffset = e.offsetY
        let currentOffsetY = e.offsetX
        let deg = 0
        let degY = 0
        if (currentOffset <= breakpoint)
            deg = Math.round((1 - currentOffset / breakpoint) * MAX_ROTATE)
        else
            deg = -Math.round(((currentOffset - breakpoint) / breakpoint) * MAX_ROTATE)
        if (currentOffsetY <= breakpointY)
            degY = -Math.round((1 - currentOffsetY / breakpointY) * MAX_ROTATE)
        else
            degY = Math.round(((currentOffsetY - breakpointY) / breakpointY) * MAX_ROTATE)
        setDeg(deg)
        setDegY(degY)
    }

    const handleMouseLeave = (e)=>{
        setDeg(0)
        setDegY(0)
    }

    const handleMouseDown = (e)=>{
        if (getAnime())
            return
        let x = getDeg() / MAX_ROTATE
        let y = getDegY() / MAX_ROTATE;
        setAnime(anime({
            targets: mainRef.firstChild,
            rotateX: [ MAX_ROTATE * 4 * x, 0 ],
            rotateY: [ MAX_ROTATE * 4 * y, 0 ],
            duration: 300,
            easing: 'easeInOutSine',
            complete: ()=> setAnime(null)
        }))
    }

    return <div ref={mainRef} delay={props.delay} className={`inline-block relative select-none cursor-pointer`} onMouseMove={handleMouseMoveEffect}
        onMouseLeave={handleMouseLeave} 
        onMouseDown={handleMouseDown}
        onClick={props.onClick}
        style="perspective: 600px;">
        <div className={`inline-block ${props.className ?? ""} transition-all`} style={!getAnime() ? `transform: rotateX(${getDeg()}deg) rotateY(${getDegY()}deg); transform-style: preserve-3d;` : ''}>
            { props.children }
        </div>
    </div>
}
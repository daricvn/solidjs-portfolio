import { createEffect, createSignal, onCleanup } from "solid-js";
import { moveUpDown } from "../../animations/Animation";

export default function SeeMore(props){
    const [ getAnimation, setAnimation ] = createSignal()
    let moreInfoRef;

    createEffect(()=>{
        if (!moreInfoRef)
            return
        togglePlay(!!props.play)
    })

    onCleanup(()=>{
        if (getAnimation())
            getAnimation().pause()
    })

    const togglePlay = (play)=>{
        var animation = getAnimation()
        if (!animation){
            animation = moveUpDown(moreInfoRef,400)
            setAnimation(animation)
        }
        if (play)
            animation.play();
        else animation.pause();
    }

    return <div ref={moreInfoRef} className="text-white text-center uppercase cursor-pointer select-none"
            onMouseOver={()=> togglePlay(false)} onMouseLeave={()=> togglePlay(true)}
            onClick={props.onClick}
            {...props}>
            learn more
            <div>
                <i className="fas fa-chevron-down"></i>
            </div>
        </div>
}
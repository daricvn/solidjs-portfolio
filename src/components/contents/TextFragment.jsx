import anime from "animejs";
import { createMemo, For } from "solid-js";
import { Transition } from "solid-transition-group";


const textAppear = {
    enter: (el, done)=>{
        anime({
            targets: el.children,
            translateY: [-40,0],
            opacity: [0,1],
            rotateY: [ 180, 0],
            delay: anime.stagger(150),
            duration: 1000,
            easing: 'easeInOutElastic(1, .6)',
            complete: done
        })
    },
    leave: (el, done)=>{
        anime({
            targets: el,
            translateY: [0,-100],
            opacity: [1,0],
            duration: 250,
            easing: 'easeInOutElastic(1, .6)',
            complete: done
        })
    }
}

export default function TextFragment(props){

    const words = createMemo(()=>{
        let res = []
        if (!props.value)
            return res;
        for (let i=0; i< props.value.length; i++)
            res.push(props.value[i])
        return res;
    })
    return <Transition appear onExit={textAppear.leave} onEnter={textAppear.enter}>
        {
            props.show && 
            <div className={props.className}>
                <For each={words()}>
                    {(word)=><div className={`inline-block ${word == " " ? "ml-2": ""}`}>{word}</div> }
                </For>
            </div>
        }
    </Transition>
}
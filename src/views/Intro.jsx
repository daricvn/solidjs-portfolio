import { createEffect, createSignal } from "solid-js";
import { Transition } from "solid-transition-group";
import { slideUp } from "../components/intro/IntroEffects";
import IntroText from "../components/intro/IntroText";
import SeeMore from "../components/intro/SeeMore";
import { useGlobalState } from "../store";
import { DomUtility } from "../utilities/DomUtility";
import Section from "./Section";

const id = ""

export default function Intro(){
    const [ state, setState ] = useGlobalState()
    const [ getPlay, setPlay ] = createSignal(false)
    const [ getShow, setShow ] = createSignal(false)
    const [ getDelay, setDelay ] = createSignal(7000)
    let mainRef;

    createEffect(()=>{
        if (!mainRef || state.currentRef != id)
            return
        DomUtility.scrollTo(mainRef)
    })

    const afterEnter = ()=>{
        setPlay(true)
        setDelay(0)
    }

    const updateShow = ()=>{
        if (!mainRef)
            return
        setShow((DomUtility.getViewPortRate(mainRef) > 0.6) || state.currentRef == id)
    }

    const handleCompleteIntro = ()=>{
        updateShow()
        afterEnter()
    }

    return <Section id="" onChange={(e, s)=> setShow(s)}>
        <div className="container flex-grow flex-auto block py-4 md:py-8 px-2 max-w-4xl mx-auto relative top-0 left-0 flex flex-wrap content-between z-30">
            <IntroText onCompleted={()=> handleCompleteIntro()} />
            <div className="bottom-0 mx-auto relative overflow-hidden h-20 w-24 pt-4">
                <Transition onEnter={slideUp.enter} onExit={slideUp.leave} onAfterEnter={afterEnter} onAfterExit={()=> setPlay(false)} appear>
                    {
                        getShow() &&
                        <SeeMore delay={getDelay()} play={getPlay()} onClick={()=> setState("currentRef", ()=> "#about")} />
                    }
                </Transition>
            </div>
        </div>
    </Section>
}
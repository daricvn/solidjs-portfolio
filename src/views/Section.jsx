import { createEffect, createSignal } from "solid-js";
import { useGlobalState } from "../store";
import { DomUtility } from "../utilities/DomUtility";

const screenThreshold = 0.33;

export default function Section(props){
    const [ state, setState ] = useGlobalState()
    const [ getShow, setShow ] = createSignal()
    var mainRef;

    createEffect(()=>{
        if (!mainRef || state.scrollY < 0 || DomUtility.isScrolling || state.currentRef == props.id || getShow())
            return
        const shouldShow = DomUtility.getViewPortRate(mainRef) > screenThreshold;
        if (shouldShow)
            setState("currentRef", ()=> props.id)
    })

    createEffect(()=>{
        var shouldShow = state.currentRef == props.id
        if (getShow() != shouldShow){
            setShow(shouldShow)
            if (props.onChange)
                props.onChange(mainRef, shouldShow)
        }
        if (!mainRef || state.currentRef != props.id || DomUtility.isScrolling)
            return
        DomUtility.scrollTo(mainRef)
    })

    return <div className={`px-2 py-16 block min-h-screen w-full overflow-x-hidden text-white relative flex flex-col ${props.className ?? ""}`} ref={mainRef}>
        {props.children}
    </div>
}
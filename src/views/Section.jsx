import { createEffect, createSignal } from "solid-js";
import { useGlobalState } from "../store";
import { DomUtility } from "../utilities/DomUtility";

export default function Section(props){
    const [ state, setState ] = useGlobalState()
    const [ getShow, setShow ] = createSignal()
    var mainRef;

    createEffect(()=>{
        if (!mainRef || props.id == null || state.scrollY < 0 || DomUtility.isScrolling)
            return
        const shouldShow = DomUtility.getViewPortRate(mainRef) > 0.62 || state.currentRef == props.id;
        if (shouldShow != getShow() && props.onChange)
            props.onChange(mainRef, shouldShow)
        setShow(shouldShow)
        if (DomUtility.getViewPortRate(mainRef) > 0.63 && state.currentRef != props.id){
            setState("currentRef", ()=> props.id)
        }
    })

    createEffect(()=>{
        if (!mainRef || state.currentRef != props.id)
            return
        DomUtility.scrollTo(mainRef)
    })

    return <div className={`px-2 py-16 block min-h-screen w-full overflow-x-hidden text-white relative flex flex-col ${props.className ?? ""}`} ref={mainRef}>
        {props.children}
    </div>
}
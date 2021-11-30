import { createEffect, onMount } from "solid-js"
import { useGlobalState } from "../../store"
import './NavButton.css'

export default function NavButtons(props){
    const [ state, setState ] = useGlobalState()
    let indicator

    createEffect(()=>{
        if (state.size.width || state.currentRef != null)
            refreshIndicator()
    })

    const selectItem = (item)=>{
        setState("currentRef", () => item.to)
    }

    const refreshIndicator = ()=>{
        if (!indicator || !props.links)
            return
        for (let i = 0; i< props.links.length ; i++)
            if (props.links[i].ref && props.links[i].to == state.currentRef)
                updateIndicator(props.links[i].ref)
    }

    const updateIndicator = (target)=>{
        if (!indicator)
            return
        const rect = target.getBoundingClientRect()
        const parentRect = target.parentNode.getBoundingClientRect()
        indicator.style.top = ((rect.top - parentRect.top) + rect.height + 4) + "px"
        indicator.style.left = (rect.left - parentRect.left) + "px"
        indicator.style.width = rect.width + "px"
    }

    return <div className={`nav-buttons ${props.className ?? ""}`}>
        <div className="space-x-3 px-1">
            <For each={props.links}>
                {(child) => <div ref={child.ref} className={`link ${child.to === state.currentRef ? "selected":""} opacity-80 hover:opacity-100`} onClick={()=> selectItem(child)}>{child.title}</div> }
            </For>
        </div>
        <div className="indicator" ref={indicator}></div>
    </div>
}
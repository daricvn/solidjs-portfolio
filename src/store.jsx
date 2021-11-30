import { createContext, onMount, useContext } from "solid-js";
import { createStore } from 'solid-js/store'

const initStore = {
    currentRef: '',
    size: {},
    scrollY: 0
}

const StoreContext = createContext([ initStore, {}])

export const StoreProvider = (props)=>{
    const [state, setState] = createStore(initStore)

    onMount(()=>{
        setState('size', ()=> ({ width: window.innerWidth, height: window.innerHeight }))
        window.onresize = ()=>{
            setState('size', ()=> ({ width: window.innerWidth, height: window.innerHeight }))
        }
        var t = 0
        window.onscroll = ()=>{
            if (t)
                clearTimeout(t)
            t = setTimeout(()=>{
                setState('scrollY', () => window.scrollY)
            }, 80)
        }
    })

    return <StoreContext.Provider value={[ state, setState ]}>
        {props.children}
    </StoreContext.Provider>
}

export function useGlobalState(){
    return useContext(StoreContext)
}
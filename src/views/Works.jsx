import { createSignal, For } from "solid-js";
import { Transition } from "solid-transition-group";
import { fadeLeft, zoomOut } from "../animations/Effects";
import ExpandBox from "../components/contents/ExpandBox";
import TextFragment from "../components/contents/TextFragment";
import Construction from "./Construction";
import Section from "./Section";
import { worksList } from "./WorksList";

const title = "My Works"

export default function Works(){
    const [ getShow, setShow ] = createSignal(false)

    const handleShow = (e, s)=>{
        setShow(s)
    }

    const openLink = (url)=>
    {
        window.open(url)
    }

    return <Section id="#works" className="bg-white text-black" onChange={handleShow}>
        <div className="flex-grow flex flex-col pt-8 h-full z-10 container mx-auto">
            <div className="pb-12">
                <TextFragment className="text-4xl lg:text-6xl select-none text-black text-right pr-4" show={getShow()} value={title} />
            </div>
            <div className="flex-grow pt-8">
                <div className="block">
                    <Transition appear onEnter={fadeLeft.enter} onExit={fadeLeft.leave}>
                        {
                            getShow() &&
                            <div className="inline-block text-black pb-4 text-lg" delay={2000}>
                                These are open-source projects that I worked on.
                            </div>
                        }
                    </Transition>
                </div>
                <div className="inline-block">
                    {
                        getShow() &&
                        <div className="flex flex-grow flex-col md:flex-row">
                            <For each={worksList}>
                                {
                                    (item, i)=>
                                    <Transition onEnter={zoomOut.enter} onExit={zoomOut.leave} appear>
                                        <ExpandBox delay={3000 + i()*300} className="bg-black text-white cursor-pointer" label={item.label} title={item.title} onClick={()=> openLink(item.url)}>
                                            {item.desc}
                                        </ExpandBox>
                                    </Transition>
                                }
                            </For>
                            
                        </div>
                    }
                </div>
            </div>
        </div>
    </Section>
}
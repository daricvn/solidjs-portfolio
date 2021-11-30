import { createEffect, createSignal } from "solid-js";
import { Transition } from "solid-transition-group";
import { fadeLeft, zoomAppear } from "../animations/Effects";
import TextFragment from "../components/contents/TextFragment";
import { useGlobalState } from "../store";
import { DomUtility } from "../utilities/DomUtility";
import { ExperienceMessage, WelcomeMessage } from "./AboutContent";
import AboutTechnologies from "./AboutTechnologies";
import itBackground from '../assets/it-background.jpg'
import Section from "./Section";

const title = "About"
const id = "#about"

export default function About(props){
    const [ state, setState ] = useGlobalState()
    const [ getShow, setShow ] = createSignal(false)

    return <Section id={id} onChange={(target, show) => setShow(show)}>
                <div className="absolute top-0 left-0 h-full w-full" style="z-index: 0;">
                    <div className="w-full h-full  absolute top-0 left-0" style="z-index: 2; background-image: radial-gradient(circle, rgba(0,0,0,0.6), rgba(0,0,0,0.8), rgba(0,0,0,0.9), black);"></div>
                    <div className="w-full h-full absolute top-0 left-0 filter blur-sm" style="z-index: 1">
                        <img src={itBackground} alt="" className="w-full h-full pointer-events-none" />
                    </div>
                </div>
                <div className="flex-grow flex flex-col pt-8 h-full z-10 container mx-auto">
                    <div className="pb-12">
                        <TextFragment className="text-4xl select-none" show={getShow()} value={title} />
                    </div>
                    <div className="flex-auto px-2 flex flex-col">
                        <div className="grid grid-cols-1 flex-grow lg:grid-cols-2">
                            <div>
                                <Transition appear onEnter={fadeLeft.enter} onExit={fadeLeft.leave}>
                                    {   
                                        getShow() &&
                                        <div className="inline-block text-lg" innerHTML={WelcomeMessage} delay={500}>
                                        </div>
                                    }
                                </Transition>
                                <div className="mt-6"></div>
                                <Transition appear onEnter={fadeLeft.enter} onExit={fadeLeft.leave}>
                                    {   
                                        getShow() &&
                                        <div className="inline-block text-lg" innerHTML={ExperienceMessage} delay={1500}>
                                        </div>
                                    }
                                </Transition>
                            </div>
                            <div className="flex flex-wrap justify-end content-end">
                                <div className="inline-block px-6 overflow-hidden">
                                    <Transition appear onEnter={zoomAppear.enter} onExit={zoomAppear.leave}>
                                        {
                                            getShow() && <AboutTechnologies delay={2000} />
                                        }
                                    </Transition>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Section>
}
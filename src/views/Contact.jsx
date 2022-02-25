import { createSignal, For } from "solid-js"
import TextFragment from "../components/contents/TextFragment"
import Section from "./Section"
import solidLogo from '../assets/solid-logo.svg'
import tailwindLogo from '../assets/tailwindcss-logo.svg'
import FlipBox from "../components/contents/FlipBox"
import { Transition } from "solid-transition-group"
import { fadeLeft, flipOut, zoomAppear } from "../animations/Effects"
import mediaBackground from '../assets/media-background.jpg'

const id = "#contact"
const title = "Contact Me"

const contactList = [
    { icon: "fab fa-linkedin text-2xl", desc: "LinkedIn", url: "https://www.linkedin.com/in/daricvn/" },
    // { icon: "fab fa-facebook text-2xl", desc: "Facebook", url: "https://www.facebook.com/onikaichou" },
    { icon: "fab fa-twitter text-2xl", desc: "Twitter", url: "https://twitter.com/Onikaichou" },
]

export default function Contact(){
    const [ getShow, setShow ] = createSignal(false)

    const handleShow = (e, s)=>{
        setShow(s)
    }

    const openLink = (url)=>{
        window.open(url)
    }

    return <Section id={id} onChange={handleShow} className="pb-0">
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden" style="z-index: 0;">
                    <div className="w-full h-full  absolute top-0 left-0" style="z-index: 2; background-image: linear-gradient(270deg, rgba(0,0,0,0.9), rgba(0,0,0,0.8), rgba(0,0,0,1), black);"></div>
                    <div className="w-full h-full absolute top-0 left-0 filter blur-md" style="z-index: 1">
                        <Transition onEnter={zoomAppear.enter} onExit={zoomAppear.leave} appear>
                            {
                                getShow() && <img src={mediaBackground} alt="" className="w-full h-full pointer-events-none;" style="object-fit: cover;" />
                            }
                        </Transition>
                    </div>
                </div>
        <div className="flex-grow flex flex-col pt-8 h-full z-10 container mx-auto">
            <div className="pb-12">
                <TextFragment className="text-4xl lg:text-6xl select-none pl-4" show={getShow()} value={title} />
            </div>
            <div className="flex-grow pt-8 pl-4">
                {
                    getShow() &&
                    <div className="block text-xl max-w-xl">
                        <Transition onEnter={fadeLeft.enter} onExit={fadeLeft.leave} appear>
                            {
                                getShow() && <div delay="500">
                                    It's <span className="bg-white px-1 text-black inline-block">an honour</span> to meet you. Want to connect with me? <br />
                                    Feel free to send me a message via
                                </div>}
                        </Transition>
                        <div className="pt-4 grid grid-cols-1 w-64 md:w-72 lg:w-96">
                            <For each={contactList}>
                                {
                                    (contact, i)=> <Transition onEnter={flipOut.enter} onExit={flipOut.leave} appear>
                                            <FlipBox className="h-16 w-full bg-white text-black py-4 px-4 mt-1" delay={1000 + i() * 500}
                                                onClick={()=> openLink(contact.url)}>
                                                <i className={contact.icon}></i>
                                                <span className="ml-3 text-xl">{contact.desc}</span>
                                            </FlipBox>
                                        </Transition>
                                }
                            </For>
                        </div>
                    </div>
                }
            </div>
        </div>
        <div className="block bg-white bg-opacity-80 h-16 text-black py-4 pointer-events-none select-none; z-10">
            <div className="pr-8 text-sm md:text-base" style="float: right">
                Made with <img src={solidLogo} alt="Solid Logo" className="h-4 md:h-7 inline-block" />
                and <img src={tailwindLogo} alt="TailwindCSS Logo" className="ml-2 h-3 md:h-5 inline-block" />
            </div>
        </div>
    </Section>
}
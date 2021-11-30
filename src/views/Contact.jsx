import { createSignal } from "solid-js"
import TextFragment from "../components/contents/TextFragment"
import Section from "./Section"
import solidLogo from '../assets/solid-logo.svg'
import tailwindLogo from '../assets/tailwindcss-logo.svg'

const id = "#contact"
const title = "Contact Me"

export default function Contact(){
    const [ getShow, setShow ] = createSignal(false)

    const handleShow = (e, s)=>{
        setShow(s)
    }

    return <Section id={id} onChange={handleShow} className="pb-0">
        <div className="flex-grow flex flex-col pt-8 h-full z-10 container mx-auto">
            <div className="pb-12">
                <TextFragment className="text-4xl select-none pl-4" show={getShow()} value={title} />
            </div>
            <div className="flex-grow pt-8">
                {
                    getShow() &&
                    <div className="text-center block text-5xl">
                        This page is under construction... <br /><span className="bg-white px-2 text-black mt-6 inline-block">Please comeback later.</span>
                    </div>
                }
            </div>
        </div>
        <div className="block bg-white bg-opacity-80 h-16 text-black py-4 pointer-events-none select-none">
            <div className="container mx-auto">
                Made with <img src={solidLogo} alt="Solid Logo" className="h-8 inline-block" />
                and <img src={tailwindLogo} alt="TailwindCSS Logo" className="ml-2 h-5 inline-block" />
            </div>
        </div>
    </Section>
}
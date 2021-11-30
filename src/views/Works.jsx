import { createSignal } from "solid-js";
import TextFragment from "../components/contents/TextFragment";
import Section from "./Section";

const title = "My Works"

export default function Works(){
    const [ getShow, setShow ] = createSignal(false)

    const handleShow = (e, s)=>{
        setShow(s)
    }

    return <Section id="#works" className="bg-white text-black" onChange={handleShow}>
        <div className="flex-grow flex flex-col pt-8 h-full z-10 container mx-auto">
            <div className="pb-12">
                <TextFragment className="text-4xl select-none text-black text-right pr-4" show={getShow()} value={title} />
            </div>
            <div className="flex-grow pt-8">
                {
                    getShow() &&
                    <div className="text-center text-black block text-5xl">
                        This page is under construction... <br /><span className="bg-black px-2 text-white mt-6 inline-block">Please comeback later.</span>
                    </div>
                }
            </div>
        </div>
    </Section>
}
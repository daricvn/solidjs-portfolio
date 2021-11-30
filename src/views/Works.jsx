import { createSignal } from "solid-js";
import TextFragment from "../components/contents/TextFragment";
import Construction from "./Construction";
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
                    <Construction />
                }
            </div>
        </div>
    </Section>
}
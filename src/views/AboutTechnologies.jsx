import { createMemo, For } from "solid-js"
import SideBox from "../components/contents/SideBox"

const technologies = [
    { a: "C#", desc: "CSharp", frontClass: "bg-white text-black font-bold", backClass: "text-white font-bold border-4 border-white", loc: 0 },
    { icon: "fab fa-react", desc: "ReactJS", frontClass: "bg-white text-black text-3xl", backClass: "text-white font-bold border-4 border-white", loc: 2 },
    { icon: "fab fa-node-js", desc: "NodeJS", frontClass: "bg-white text-black text-3xl", backClass: "text-white font-bold border-4 border-white", loc: 4 },
    { icon: "fab fa-css3", desc: "CSS", frontClass: "bg-white text-black", backClass: "text-white font-bold border-4 border-white", loc: 6 },
    { icon: "fab fa-vuejs", desc: "VueJS", frontClass: "bg-white text-black", backClass: "text-white font-bold border-4 border-white", loc: 8 },
]

export default function AboutTechnologies(props) {
    const grids = createMemo(()=>{
        let res = []
        // Fill array
        for (let i = 0; i < technologies.length; i++)
            res[technologies[i].loc] = technologies[i];
        return res;
    })

    const createClass = (append, smallFont)=>{
        return (smallFont ? "text-lg md:text-2xl lg:text-4xl ": "text-3xl md:text-5xl lg:text-7xl " )+"text-center px-3 py-3 md:px-4 md:py-5 lg:px-5 lg:py-8 " + append
    }

    const createContent = (tech)=>{
        if (tech.icon)
            return <i className={tech.icon} />
        return <span>{tech.a}</span>
    }

    return <div delay={props.delay} className="grid grid-cols-5 lg:grid-cols-3">
        <For each={grids()}>
            {(tech)=> !tech ? <div></div> : 
                <div className="relative">
                    <SideBox className="h-16 w-16 md:h-24 md:w-24 lg:w-36 lg:h-36 select-none" frontClass={createClass(tech.frontClass)} backClass={createClass(tech.backClass, true)}
                        frontComponent={createContent(tech)} backComponent={tech.desc} />
                </div>}
        </For>
    </div>
}
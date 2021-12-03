import './ExpandBox.css'

export default function ExpandBox(props){

    return <div className={`expand-box relative overflow-hidden inline-block select-none ${props.className ?? ""}`}
        onClick={props.onClick}
        delay={props.delay}
        style="transition: width 0.2s ease-in-out">
        <div className="icon inline-block">
            <span className="font-bold">{props.label}</span>
        </div>
        <div className="content top-0 inline-block">
            <div className="block pb-1 font-bold text-xl">{props.title}</div>
            <div className="block desc">{props.children}</div>
        </div>
    </div>  
}
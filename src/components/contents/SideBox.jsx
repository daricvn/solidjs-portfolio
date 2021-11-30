import './SideBox.css'

export default function SideBox(props){
    return <div className={`inline-block relative card ${props.className ?? ""}`}>
        <div className={`card-face front-deck ${props.frontClass ?? ""}`}>
            {props.frontComponent}
        </div>
        <div className={`card-face back-flip ${props.backClass ?? ""}`}>
            {props.backComponent}
        </div>
    </div>
}
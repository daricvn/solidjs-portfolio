export default function Construction(props) {

    return <div className={`text-center text-${props.color == 1 ? "white": "black"} block text-5xl`}>
        This page is under construction... <br /><span className={`bg-${props.color == 1 ? "white": "black"} px-2 text-${props.color == 1 ? "black": "white"} mt-6 inline-block`}>Please comeback later.</span>
    </div>
}
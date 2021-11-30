import NavButtons from "./nav/NavButton";

const links = [
    { to: '', title: "Welcome" },
    { to: '#about', title: "About" },
    { to: '#works', title: "Works" },
    { to: '#contact', title: "Contact" },
]

export default function Header(){
    return <div className="block bg-white bg-opacity-80 w-full fixed h-12 z-50">
        <div className="container mx-auto py-2">
            <div className="flex">
                <div>
                    <p className="hidden md:inline-block font-mono text-lg font-bold select-none">Portfolio</p>
                </div>
                <div className="flex-auto">
                    <NavButtons className="text-right" links={links} />
                </div>
            </div>
        </div>
    </div>
}
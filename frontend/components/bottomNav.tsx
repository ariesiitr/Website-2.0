import Link from "next/link"

export default function BottomNav() {
    return (
        <div className="flex items-center justify-center">
        <div className="inline-flex items-center hidden gap-2 px-4 py-2 shadow-md rounded-3xl backdrop-blur-2xl md:flex ml:flex" style={{ background: 'rgba(0, 0, 0, 0.10)', borderRadius: '1.5rem', boxShadow: '2px 2px 2px 0px rgba(255, 255, 255, 0.05) inset, -1px -1px 4px 0px rgba(255, 255, 255, 0.05) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.10)' }}>
        <Link href="" className="flex items-center justify-center w-10 h-10 bg-blue-700 rounded-full">
            <img className="w-5 h-5 shrink-0" src="/home.svg" alt="Home" />
        </Link>
        <Link href="">
            <img className="w-5 h-5 mx-2 shrink-0" src="/info.svg" alt="Info" />
        </Link>
        <Link href="">
            <img className="w-5 h-5 mx-2 shrink-0" src="/lightBulb.svg" alt="Light Bulb" />
        </Link>
        <Link href="">
            <img className="w-5 h-5 mx-2 shrink-0" src="/fluentPeople.svg" alt="People" />
        </Link>
        <Link href="">
            <img className="w-5 h-5 mx-2 shrink-0" src="/contactUs.svg" alt="Contact Us" />
        </Link>
    </div>
    </div>
    );

}

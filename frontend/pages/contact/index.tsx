// pages/index.js
import Head from 'next/head'
import img from 'next/image';
import Link from "next/link";
export default function Home() {
    return (
        <div className="flex flex-col min-h-screen space-y-8 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/bg.png')" }}>
            <Head>
                <title>Contact Page</title>
            </Head>
            <div className="flex items-center justify-center mt-8 md:hidden ml:hidden">
                <div className="flex justify-between w-full max-w-md px-4 mg:w-[90vw] sm:w-[90vw] xs:w-[90%]">
                    <button
                        className="flex items-center justify-center w-10 h-10 bg-white rounded-full bg-opacity-20"
                    >
                        <Link href="/">
                            <img
                                src="/clarity_arrow-line.svg"
                                className="w-6 h-6"
                                alt="Arrow"
                            />
                        </Link>
                    </button>
                    <button
                        className="flex items-center justify-center w-10 h-10 bg-white rounded-full bg-opacity-20"
                    >
                        <Link href="/">
                            <img
                                src="/charm.svg"
                                className="w-6 h-6"
                                alt="Charm"
                            />
                        </Link>
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center text-center mb-9 md:mb-4">
                <h1 className="px-5 py-3 mx-auto text-xl font-semibold shadow-lg rounded-2xl backdrop-blur-md" style={{ boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    Get in touch
                </h1>

            </div>
            <div className="flex flex-col w-full pb-0 mx-auto lp:w-8/12 ml:w-11/12 md:p-10 md:pb-16 ml:pt-4 ml:pb-16">
                <div className="grid hidden w-full grid-cols-2 gap-4 mx-auto mb-10 mh:grid-cols-3 mh:w-8/12 justify-items-center sm:grid-cols-2 lg:grid-cols-3 lg:w-8/12 ml:grid">
                    <Link href="mailto:example@example.com" className="flex items-center justify-center bg-blue-100 rounded-full w-36 h-36">
                        <img src="images/mail.png" alt="Mail" className="w-full h-full" />
                    </Link>
                    <Link href="tel:+123456789" className="flex items-center justify-center bg-green-100 rounded-full w-36 h-36">
                        <img src="images/phone.png" alt="Phone" className="w-full h-full" />
                    </Link>
                    <Link href="https://twitter.com" className="flex items-center justify-center bg-blue-100 rounded-full w-36 h-36">
                        <img src="images/twitter.png" alt="Twitter" className="w-full h-full" />
                    </Link>
                </div>

                <div className="grid hidden w-full grid-cols-2 gap-4 mx-auto mh:grid-cols-4 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-11/12 ml:grid">
                    <Link href="https://linkedin.com" className="flex items-center justify-center rounded-full h-36 w-36">
                        <img src="images/linkedin.png" alt="LinkedIn" className="w-full h-full" />
                    </Link>
                    <Link href="https://facebook.com" className="flex items-center justify-center rounded-full h-36 w-36">
                        <img src="images/fb.png" alt="Facebook" className="w-full h-full" />
                    </Link>
                    <Link href="https://instagram.com" className="flex items-center justify-center rounded-full h-36 w-36">
                        <img src="images/insta.png" alt="Instagram" className="w-full h-full" />
                    </Link>
                    <Link href="https://maps.google.com" className="flex items-center justify-center rounded-full h-36 w-36">
                        <img src="images/map.png" alt="Google Maps" className="w-full h-full" />
                    </Link>
                </div>
                <div className="flex flex-wrap items-center justify-center w-full gap-16 mx-auto mg:px-5 ms:px-5 mg:mb-8 sd:w-11/12 ml:hidden md:w-10/12 ">
                    <Link href="mailto:example@example.com" className="flex items-center justify-center bg-blue-100 rounded-full w-28 h-28 mg:w-24 mg:h-24 ms:w-[7rem] ms:h-[7rem]">
                        <img src="images/mail.png" alt="Mail" className="w-full h-full" />
                    </Link>
                    <Link href="tel:+123456789" className="flex items-center justify-center bg-green-100 rounded-full w-28 h-28 mg:w-24 mg:h-24 ms:w-[7rem] ms:h-[7rem]">
                        <img src="images/phone.png" alt="Phone" className="w-full h-full" />
                    </Link>
                    <Link href="https://twitter.com" className="flex items-center justify-center bg-blue-100 rounded-full w-28 h-28 mg:w-24 mg:h-24 ms:w-[7rem] ms:h-[7rem]">
                        <img src="images/twitter.png" alt="Twitter" className="w-full h-full" />
                    </Link>
                    <Link href="https://linkedin.com" className="flex items-center justify-center bg-blue-100 rounded-full w-28 h-28 mg:w-24 mg:h-24 ms:w-[7rem] ms:h-[7rem]">
                        <img src="images/linkedin.png" alt="LinkedIn" className="w-full h-full" />
                    </Link>
                    <Link href="https://facebook.com" className="flex items-center justify-center bg-green-100 rounded-full w-28 h-28 mg:w-24 mg:h-24 ms:w-[7rem] ms:h-[7rem]">
                        <img src="images/fb.png" alt="Facebook" className="w-full h-full" />
                    </Link>
                    <Link href="https://instagram.com" className="flex items-center justify-center bg-blue-100 rounded-full w-28 h-28 mg:w-24 mg:h-24 ms:w-[7rem] ms:h-[7rem]">
                        <img src="images/insta.png" alt="Instagram" className="w-full h-full" />
                    </Link>
                    <Link href="https://maps.google.com" className="flex items-center justify-center bg-green-100 rounded-full w-28 h-28 mg:w-24 mg:h-24 ms:w-[7rem] ms:h-[7rem]">
                        <img src="images/map.png" alt="Google Maps" className="w-full h-full" />
                    </Link>
                </div>
            </div>
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
        </div>
    )
}

// pages/index.js
import Head from 'next/head'
import Link from "next/link";
export default function Projects() {
    return (
        <div className="flex flex-col min-h-screen bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/bg.png')" }}>
            <Head>
                <title>Projects Page</title>
            </Head>
            <div className="flex items-center justify-center mt-8 md:hidden ml:hidden">
                <div className="flex justify-between w-full max-w-md px-4 mg:w-[90vw] sm:w-[90vw] xs:w-[90%]">
                    <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full bg-opacity-20">
                        <Link href="/">
                            <img src="/clarity_arrow-line.svg" className="w-6 h-6" alt="Arrow" />
                        </Link>
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full bg-opacity-20">
                        <Link href="/">
                            <img src="/charm.svg" className="w-6 h-6" alt="Charm" />
                        </Link>
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center mt-12 md:mb-4">
                <h1 className="px-5 py-3 mx-auto text-xl font-semibold shadow-lg rounded-2xl backdrop-blur-md" style={{ boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    Our Projects
                </h1>
            </div>
            <div className="flex justify-center my-8 space-x-8">
                {/* AI/ML Card */}
                <div
                    className="relative flex flex-col justify-end p-6 shadow-xl rounded-2xl w-80 h-96"
                    style={{
                        backgroundColor: "#9E958C", // Background color
                        backgroundImage: "url('/images/ai.svg')", // Only the image
                        boxShadow:
                            "0 -4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h3 className="text-2xl font-semibold text-white">AI / ML</h3>
                    <p className="mb-3 text-white">Mind and Machine Merge!</p>
                    <button
                        style={{
                            background: 'linear-gradient(0deg, #9E7EF4 0%, #A795D5 100%)',
                        }}
                        className="flex items-center justify-center w-full px-4 py-2 text-center text-white rounded-md hover:opacity-80"
                    >
                        View Projects
                        <span className="ml-2 text-xl">🡒</span> {/* Sans-serif Right Arrow */}
                    </button>
                </div>



                {/* Robotics Card */}
                <div
                    className="relative flex flex-col justify-end p-6 shadow-xl rounded-2xl w-80 h-96"
                    style={{
                        backgroundColor: "#9E958C", // Adding the background color
                        backgroundImage: "url('/images/robotics.svg')", // Background image
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h3 className="text-2xl font-semibold text-white">Robotics</h3>
                    <p className="mb-3 text-white">Evolving dreams, building bots.</p>
                    <button
                        style={{
                            background: 'linear-gradient(0deg, #9E7EF4 0%, #A795D5 100%)',
                        }}
                        className="flex items-center justify-center w-full px-4 py-2 text-center text-white rounded-md hover:opacity-80"
                    >
                        View Projects
                        <span className="ml-2 text-xl">🡒</span> {/* Sans-serif Right Arrow */}
                    </button>
                </div>

                {/* AR/VR & Dev Card */}
                <div
                    className="relative flex flex-col justify-end p-6 shadow-xl rounded-2xl w-80 h-96"
                    style={{
                        backgroundColor: "#9E958C", // Adding the background color
                        backgroundImage: "url('/images/arvr.svg')", // Background image
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h3 className="text-2xl font-semibold text-white">AR / VR & Dev</h3>
                    <p className="mb-3 text-white">Crafting Digital Realms.</p>
                    <button
                        style={{
                            background: 'linear-gradient(0deg, #9E7EF4 0%, #A795D5 100%)',
                        }}
                        className="flex items-center justify-center w-full px-4 py-2 text-center text-white rounded-md hover:opacity-80"
                    >
                        View Projects
                        <span className="ml-2 text-xl">🡒</span> {/* Sans-serif Right Arrow */}
                    </button>

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
    );
}

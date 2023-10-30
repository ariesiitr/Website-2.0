

import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';





const aboutUs = () => {
    return (
        <div className="bg-[url('/images/bg.png')] bg-cover bg-center h-[100vh] pt-[1vh] overflow-hidden">
            <Carousel>
                <div className=' h-[100vh] flex flex-col items-center'>
                    <div className="w-[20vw] inline-flex px-5 py-3 flex-col justify-center items-center gap-2.5 rounded-3xl text-[2rem] mt-10 bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 100%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 100%, rgba(255, 255, 255, 0.10) 100%)]font-extrabold sm:mb-[2vh] md:mb-[-2.5vh] sm:text-[11vw] sm:py-8  md:text-[5vw] md:py-8 backdrop-blur-2xl sm:py-[1.1vh]">About Us</div>
                    <br /><br />
                    <div className="flex ml-[15vw]">
                    <div className="border px-6 py-1 h-[35vh] w-[55%]  mt-2 ml-[5vw]  mt-[-2vh] inline-flex  flex-col justify-center item-center items-center gap-2.5 rounded-3xl text-[1.5rem]  bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 100%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 100%, rgba(255, 255, 255, 0.10) 100%)]font-extrabold sm:mb-[2vh] md:mb-[-2.5vh] sm:text-[11vw] sm:py-8  md:text-[2.0rem] md:py-8 backdrop-blur-2xl  md:mb-[5vh] md:mt-[3vh] sm:text-[1rem] sm:w-[60%] text-justify ">
                        <h1>Yo fam!</h1>
                        <h2>Welcome to ARIES - where AI and electronics collide, and innovation soars! <br />
                            We Create mind-blowing projects that will reshape the future! </h2>
                    </div>
                    <img src="/images/about_us_robot.webp" alt="" className="mt-[-2vh]rounded-t-lg !w-[20rem]   h-[50vh]  mt-[6.5rem] md:w-[40vw] md:h-[30vw] sm:w-[40vw]  justify-center"
                    />
                    </div>
                </div>
                <div className=' h-[100vh] flex flex-col items-center'>
                    <div className="w-[20vw] inline-flex px-5 py-3 flex-col justify-center items-center gap-2.5 rounded-3xl text-[2rem] mt-10 bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 100%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 100%, rgba(255, 255, 255, 0.10) 100%)]font-extrabold sm:mb-[2vh] md:mb-[-2.5vh] sm:text-[11vw] sm:py-8  md:text-[5vw] md:py-8 backdrop-blur-2xl sm:py-[1.1vh]">We make Drones</div>
                    <br /><br />
                    <div className="border px-2 py-2 w-[65%]  mt-8 text-center mt-[-2vh] inline-flex  flex-col justify-center item-center items-center gap-2.5 rounded-3xl text-[1.5rem]  bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 100%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 100%, rgba(255, 255, 255, 0.10) 100%)]font-extrabold sm:mb-[2vh] md:mb-[-2.5vh] sm:text-[11vw] sm:py-8  md:text-[2.0rem] md:py-8 backdrop-blur-2xl  md:mb-[5vh] md:mt-[3vh] sm:text-[1rem] sm:w-[60%] ">We are the architects of the sky, crafting high-tech drones that defy gravity and capture the beauty of the world from above.</div>
                    <img src="/images/drone.webp" alt="" className="mt-[-2vh]rounded-t-lg !w-[20rem]   h-[50vh]  mt-6 md:w-[40vw] md:h-[30vw] sm:w-[40vw]  justify-center"
                    />
                </div>
                <div className=' h-[100vh] flex flex-col items-center'>
                    <div className="w-[20vw] inline-flex px-5 py-3 flex-col justify-center items-center gap-2.5 rounded-3xl text-[2rem] mt-10 bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 100%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 100%, rgba(255, 255, 255, 0.10) 100%)]font-extrabold sm:mb-[2vh] md:mb-[-2.5vh] sm:text-[11vw] sm:py-8  md:text-[5vw] md:py-8 backdrop-blur-2xl sm:py-[1.1vh]">We work on AI</div>
                    <br /><br />
                    <div className="border px-2 py-2 w-[65%]  mt-8 text-center mt-[-2vh] inline-flex  flex-col justify-center item-center items-center gap-2.5 rounded-3xl text-[1.5rem]  bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 100%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 100%, rgba(255, 255, 255, 0.10) 100%)]font-extrabold sm:mb-[2vh] md:mb-[-2.5vh] sm:text-[11vw] sm:py-8  md:text-[2.0rem] md:py-8 backdrop-blur-2xl  md:mb-[5vh] md:mt-[3vh] sm:text-[1rem] sm:w-[60%] ">With a passion and a commitment to innovation, we harness the power of artificial intelligence to create solutions that defy expectations.</div>
                    <img src="/images/ai.webp" alt="" className="mt-[-2vh]rounded-t-lg !w-[20rem]   h-[40vh]  mt-6 md:w-[40vw] md:h-[30vw] sm:w-[40vw]  justify-center"
                    />
                </div>
                <div className=' h-[100vh] flex flex-col items-center'>
                    <div className="w-[35vw] inline-flex px-5 py-3 flex-col justify-center items-center gap-2.5 rounded-3xl text-[2rem] mt-10 bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 100%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 100%, rgba(255, 255, 255, 0.10) 100%)]font-extrabold sm:mb-[2vh] md:mb-[-2.5vh] sm:text-[11vw] sm:py-8  md:text-[5vw] md:py-8 backdrop-blur-2xl sm:py-[1.1vh]">We work on AR, VR and Dev</div>
                    <br /><br />
                    <div className="border px-2 py-2 w-[65%]  mt-8 text-center mt-[-2vh] inline-flex  flex-col justify-center item-center items-center gap-2.5 rounded-3xl text-[1.5rem]  bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 100%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 100%, rgba(255, 255, 255, 0.10) 100%)]font-extrabold sm:mb-[2vh] md:mb-[-2.5vh] sm:text-[11vw] sm:py-8  md:text-[2.0rem] md:py-8 backdrop-blur-2xl  md:mb-[5vh] md:mt-[3vh] sm:text-[1rem] sm:w-[60%] ">We are the pioneers of Augmented Reality (AR), Virtual Reality (VR), and cutting-edge Development (Dev) projects.</div>
                    <img src="/images/ar_vr.webp" alt="" className="mt-[-2vh]rounded-t-lg !w-[25rem]   h-[50vh]  mt-6 md:w-[40vw] md:h-[30vw] sm:w-[40vw]  justify-center"
                    />
                </div>
                <div className=' h-[100vh] flex flex-col items-center'>
                    <div className="w-[45vw] inline-flex px-5 py-3 flex-col justify-center items-center gap-2.5 rounded-3xl text-[2rem] mt-10 bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 100%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 100%, rgba(255, 255, 255, 0.10) 100%)]font-extrabold sm:mb-[2vh] md:mb-[-2.5vh] sm:text-[5vw] sm:py-8  md:text-[5vw] md:py-8 backdrop-blur-2xl sm:py-[1.1vh]">We work on Electronics and IOT</div>
                    <br /><br />
                    <div className="border px-2 py-2 w-[65%]  mt-8 text-center mt-[-2vh] inline-flex  flex-col justify-center item-center items-center gap-2.5 rounded-3xl text-[1.5rem]  bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 100%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 100%, rgba(255, 255, 255, 0.10) 100%)]font-extrabold sm:mb-[2vh] md:mb-[-2.5vh] sm:text-[11vw] sm:py-8  md:text-[2.0rem] md:py-8 backdrop-blur-2xl  md:mb-[5vh] md:mt-[3vh] sm:text-[1rem] sm:w-[60%] ">We fuse creativity with technology to craft smart and connected devices that bring convenience, efficiency, and joy to everyday life.</div>
                    <img src="/images/iot.webp" alt="" className="mt-[-2vh]rounded-t-lg !w-[22rem]   h-[50vh]  mt-6 md:w-[40vw] md:h-[30vw] sm:w-[40vw]  justify-center sm:h-[30%] sm:w-[80vw]"
                    />
                </div>
                





            </Carousel>
            <button className='bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 100%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 100%, rgba(255, 255, 255, 0.10) rounded-xl m-auto h-[6vh] w-[6vw] ml-[49vw] mt-[85vh]'><img src="/images/navigation.svg" alt="" /></button>
        </div>
    )
}

export default aboutUs


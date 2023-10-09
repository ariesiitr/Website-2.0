"use client";

import React, { useState } from "react";

import Card from "@/components/Card";

const OurTeam = () => {
    const styleObj = {
        borderRadius: "1.5rem",
        boxShadow:
            "2px 2px 2px 0px rgba(35, 17, 17, 0.05) inset, -1px -1px 4px 0px rgba(255, 255, 255, 0.05) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.10);",
        color: "white",
        
        fontWeight: "600",
        zIndex: "10"
       
    };
    const bg = {
        background: "#8F8A8A",
        backgroundBlendMode: "luminosity",
        marginRight: "-6rem",
    };
    
    const [Active,setActive]=useState(1);
    
    const activeButton={
        background:"#C2BBBB",
        backgroundBlendMode:"color-dodge, normal"
    }

    
    
    const members = new Array(11).fill({
        Name: "Name",
        Designation: "Designer",
        Image: "/images/member.webp",
    });
    return (
        <>
            <div className="bg-[url('/images/bg.png')] bg-cover bg-center h-[100vh] ">
                <div className="w-full flex justify-center md:mb-[4vh] md:mt-[3vh]">
                    <div
                        className=" inline-flex px-5 py-3 flex-col justify-center items-center gap-2.5 rounded-3xl text-3xl mt-10 bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 100%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 100%, rgba(255, 255, 255, 0.10) 100%)]font-extrabold sm:mb-[2vh] md:mb-[-2.5vh] sm:text-[11vw] sm:py-8  md:text-[5vw] md:py-8 backdrop-blur-2xl sm:py-[1.1vh]"
                        style={styleObj}
                    >
                        Our Team
                    </div>
                </div>
                <div className="flex h-[80%] justify-end sm:flex-col sm:mb-[-2.5vh]">
                    <div className="flex w-[15%] items-center justify-end sm:mx-auto sm:mt-2  ">
                        <div
                            className="flex  -rotate-90 h-14 items-center gap-2 shrink-0 rounded-3xl backdrop-blur-2xl  justify-end px-4  sm:rotate-0   font-['Helvetica'] bg-blend-luminosity ]"
                            style={bg}
                        >
                            <div className="bg-[rgba(94, 94, 94, 0.18)]">
                                <button
                                    className={`flex h-10   px-4 py-5 items-center rounded-3xl  bg-blend-luminosity text-center sm:text-[5vw] md:text-[2.5vw]`}
                                    style={Active?activeButton:{}}
                                    onClick={()=>{setActive(1)}}>
                                    Current Team
                                </button>
                            </div>
                            <div className="bg-[rgba(94, 94, 94, 0.18)]">
                                <button
                                    className={`flex h-10   px-4 py-5 items-center rounded-3xl bg-blend-luminosity text-center sm:text-[5vw] md:text-[2.5vw]`}
                                    style={Active?{}:activeButton}
                                    onClick={()=>{setActive(0)}}>
                                    Alumni
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 m-auto block  overflow-y-scroll  scroll-smooth scrollbar-thin h-[66vh] w-[75%] pl-[2vw] pt-[1%]  flex flex-row flex-wrap overflow-hidden justify-around sm:w-[100%] mr-[13.3vw] sm:h-[55vh]">
                        {members.map((member, it) => {
                            return (
                                <>
                                    <Card
                                        Name={member.Name}
                                        Designation={member.Designation}
                                        Image={member.Image}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>

                <div className="flex  align-center justify-center mt-[-6vh] sm:mt-[-7vh]  md:mt-[-6vh]">
                    <div
                        className="inline-flex px-2 py-4 items-start gap-2 rounded-3xl  backdrop-blur-2xl sm:-mt-5 sm:mb-[3vh]"
                        style={styleObj}
                    >
                        <a href="">
                            <img
                                className="h-5 w-5 mx-2 shrink-0"
                                src="/images/home.svg"
                                alt=""
                            />
                        </a>
                        <a href="">
                            <img
                                className="h-5 w-5 mx-2 shrink-0"
                                src="/images/info.svg"
                                alt=""
                            />
                        </a>
                        
                        <a href="">
                            <img
                                className="h-5 w-5 mx-2 shrink-0"
                                src="/images/lightBulb.svg"
                                alt=""
                            />
                        </a>
                        <a href="">
                            <img
                                className="h-5 w-5 mx-2 shrink-0"
                                src="/images/fluentPeople.svg"
                                alt=""
                            />
                        </a>
                        <a href="">
                            <img
                                className="h-5 w-5 mx-2 shrink-0"
                                src="/images/contactUs.svg"
                                alt=""
                            />
                        </a>
                        
                        
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurTeam;

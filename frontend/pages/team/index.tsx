'use client';

import React , { useState } from 'react'


import './../../styles/team.module.css'
import Card from '@/components/Card';


const OurTeam = () => {
    const styleObj = {
        background: ";",
        borderRadius: "1.5rem",
        boxShadow: "2px 2px 2px 0px rgba(35, 17, 17, 0.05) inset, -1px -1px 4px 0px rgba(255, 255, 255, 0.05) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.10);"
    }
    const bg = {
        background: "rgba(170, 170, 170, 0.30)",
        
        backgroundBlendMode: "luminosity",
        marginRight: "-6rem"
    }
    const imgStyle = {
        width: "12.4rem",
        height: "12.8rem",
        flexShrink: "0",
        flexBasis: "21%",
        borderRadius: "1.5rem"
    }
   

    const [bgColor,setBgColor]=useState(0);
    const members = new Array(20).fill({Name: "XYZ", Designation: "XYZ", Image:"https://s.yimg.com/fz/api/res/1.2/N0fIf9F9GTzoaOqJ13.lNw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE2NQ--/https://s.yimg.com/zb/imgv1/d71ffb26-8c8a-34b1-bc0f-abfcfb942420/t_500x300"});
    return (

        <>

            <div className="bg-[url('/images/bg.png')] bg-cover bg-center h-[100vh]">

                <div className='w-full flex justify-center'>
                    <div className=" inline-flex px-5 py-5 flex-col justify-center items-center gap-2.5 rounded-3xl text-3xl mt-10 bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.10) 100%)] " style={styleObj}>Our Team</div>
                </div>
                <div className='flex h-[80%] justify-end'>
                    <div className="flex w-[15%] items-center justify-end  ">
                        <div className="flex  -rotate-90 h-14 items-center gap-2 shrink-0 rounded-3xl backdrop-blur-2xl  justify-end px-4  " style={bg}>
                            <div><button className={`flex h-10 ${ bgColor == 0 ? "activeButton" : ""  }  px-4 py-5 items-center rounded-3xl  bg-blend-luminosity text-center`}  >Current Team</button></div>
                            <div><button className={`flex h-10  ${ bgColor == 1 ? "activeButton" : ""  } px-4 py-5 items-center rounded-3xl bg-blend-luminosity text-center`} >Alum</button></div>
                        </div>
                    </div>
                    <div className="mt-5 m-auto block text-center overflow-y-scroll  scroll-smooth scrollbar-thin h-[66vh] w-[75%] pl-[2%] pt-[1%] flex flex-row flex-wrap overflow-hidden justify-around">
                        
                       { members.map((member,it)=>{
                            return(<>
                                <Card Name={member.Name} Designation={member.Designation} Image={member.Image}/>
                                
                            </>)}
                        )
                        }
                    </div>
                </div>

                <div className="flex  align-center justify-center -mt-10 mb-0">
                    <div className="inline-flex px-2 py-4 items-start gap-2 rounded-3xl  shadow-md shadow-slate-100 backdrop-blur-2xl " style={styleObj}>
                        <a href=""><img className='h-5 w-5 mx-2 shrink-0' src="/images/contactUs.svg" alt="" /></a>
                        <a href=""><img className='h-5 w-5 mx-2 shrink-0' src="/images/fluentPeople.svg" alt="" /></a>
                        <a href=""><img className='h-5 w-5 mx-2 shrink-0' src="/images/home.svg" alt="" /></a>
                        <a href=""><img className='h-5 w-5 mx-2 shrink-0' src="/images/info.svg" alt="" /></a>
                        <a href=""><img className='h-5 w-5 mx-2 shrink-0' src="/images/lightBulb.svg" alt="" /></a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OurTeam

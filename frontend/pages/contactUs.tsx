import Icon from '@/components/Icon';
import React from 'react'


const Contact = () => {

    const styleObj = {
        borderRadius: "1.5rem",
        boxShadow: "2px 2px 2px 0px rgba(35, 17, 17, 0.05) inset, -1px -1px 4px 0px rgba(255, 255, 255, 0.05) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.10);"
    }

    const contacts = new Array(7).fill({ Image: "https://cdn-icons-png.flaticon.com/128/4138/4138124.png" });


    return (
        <>
            <div className="bg-[url('/images/bg.png')] bg-cover bg-center h-[100vh] pt-[1vh]">
                <div className='w-full flex justify-center'>
                    <div className=" inline-flex px-5 py-1.5 backdrop-blur-2xl font-medium flex-col justify-center items-center gap-2 rounded-3xl text-3xl mt-[5%] bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.10) 100%)] md:mb-[2vh]" style={styleObj}>Get In Touch</div>
                </div>

                <div className=' m-auto block text-center    h-[75vh] w-[75%] pl-[2%] pr-[2%]  pt-[1%] flex flex-row flex-wrap overflow-scroll-y justify-around sm:pt-[1vh] md:pt-[-2.0vh]'>
                    {contacts.map((contact, it) => {
                        return (<>
                            <Icon Image={contact.Image} />

                        </>)
                    }
                    )
                    }
                </div>
                <div className="flex  align-center justify-center mt-[0vh] mb-0 md:mt-[2.5vh]">
                    <div className="inline-flex px-2 py-4 items-start gap-2 rounded-3xl   " style={styleObj}>
                        <a href=""><img className='h-5 w-5 mx-2 shrink-0 sm:h-[3vw] sm:w-[3vw] md:h-[3vw] md:w-[3vw]' src="/images/contactUs.svg" alt="" /></a>
                        <a href=""><img className='h-5 w-5 mx-2 shrink-0 sm:h-[3vw] sm:w-[3vw] md:h-[3vw] md:w-[3vw]' src="/images/fluentPeople.svg" alt="" /></a>
                        <a href=""><img className='h-5 w-5 mx-2 shrink-0 sm:h-[3vw] sm:w-[3vw] md:h-[3vw] md:w-[3vw]' src="/images/home.svg" alt="" /></a>
                        <a href=""><img className='h-5 w-5 mx-2 shrink-0 sm:h-[3vw] sm:w-[3vw] md:h-[3vw] md:w-[3vw]' src="/images/info.svg" alt="" /></a>
                        <a href=""><img className='h-5 w-5 mx-2 shrink-0 sm:h-[3vw] sm:w-[3vw] md:h-[3vw] md:w-[3vw]' src="/images/lightBulb.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
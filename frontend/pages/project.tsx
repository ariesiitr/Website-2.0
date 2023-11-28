import React from 'react'
import ProjectItem from '@/components/Project';

const Project = () => {

    const styleObj = {
        borderRadius: "1.5rem",
        boxShadow: "2px 2px 2px 0px rgba(35, 17, 17, 0.05) inset, -1px -1px 4px 0px rgba(255, 255, 255, 0.05) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.10);"
    }

    

    const projects = new Array(3).fill({ Image: "/images/Robot.svg", Vertical: "Robotics" , Quote: "Evolving dreams, building bots." });

    return (
        <div>
            <div className="bg-[url('/images/bg.png')] bg-cover bg-center h-[100vh] pt-[10vh]">
                <div className='w-full flex justify-center'>
                    <div className=" inline-flex px-5 py-2.5 backdrop-blur-2xl font-medium flex-col justify-center items-center gap-2 rounded-3xl text-3xl mt-[-1%] bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.10) 100%)] sm:py-8  md:text-[5vw] md:py-8 backdrop-blur-2xl sm:py-[1.1vh]" style={styleObj}> Our Projects</div>
                </div>


                <div className="flex align-center justify-center">
                <div className='h-[60vh] w-[90vw] flex justify-around my-[5vh] sm:flex-col sm:justify-center sm:items-center sm:h-[60vh] sm:overflow-y-scroll  sm:scroll-smooth sm:scrollbar-thin sm:pt-[60vh] md:flex-col md:justify-center md:items-center md:h-[60vh] md:overflow-y-scroll  md:scroll-smooth md:scrollbar-thin md:pt-[65vh]'>
                {projects.map((project, it) => {
                        return (<>
                            <ProjectItem Image={project.Image} Vertical={project.Vertical} Quote={project.Quote} />

                        </>)
                    }
                    )
                    }
                </div>
                </div>

                <div className="flex  align-center justify-center mt-[-1.5vh]">
                <div className="inline-flex px-2 py-4 items-start gap-2 rounded-3xl   " style={styleObj}>
                    <a href=""><img className='h-5 w-5 mx-2 shrink-0' src="/images/contactUs.svg" alt="" /></a>
                    <a href=""><img className='h-5 w-5 mx-2 shrink-0' src="/images/fluentPeople.svg" alt="" /></a>
                    <a href=""><img className='h-5 w-5 mx-2 shrink-0' src="/images/home.svg" alt="" /></a>
                    <a href=""><img className='h-5 w-5 mx-2 shrink-0' src="/images/info.svg" alt="" /></a>
                    <a href=""><img className='h-5 w-5 mx-2 shrink-0' src="/images/lightBulb.svg" alt="" /></a>
                </div>
            </div>
            </div>


            
        </div>
    )
}

export default Project

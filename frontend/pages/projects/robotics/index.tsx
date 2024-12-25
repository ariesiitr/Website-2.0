import Head from "next/head";   
import ProjectCard from "../../../components/projectcard";
import BottomNav from '../../../components/bottomNav';

export default function Robotics() {
    const projects = [
        {
            title: "Project 1",
            description: "Description for project 1",
            imageUrl: "/images/project1.jpg",
            link: "/projects/arvr/project1"
        },
        {
            title: "Project 2",
            description: "Description for project 2",
            imageUrl: "/images/project2.jpg",
            link: "/projects/arvr/project2"
        },
        {
            title: "Project 2",
            description: "Description for project 2",
            imageUrl: "/images/project2.jpg",
            link: "/projects/arvr/project2"
        },
        {
            title: "Project 2",
            description: "Description for project 2",
            imageUrl: "/images/project2.jpg",
            link: "/projects/arvr/project2"
        },
        {
            title: "Project 2",
            description: "Description for project 2",
            imageUrl: "/images/project2.jpg",
            link: "/projects/arvr/project2"
        }
    ];


  
    return (
        <>
        <div className="flex flex-col min-h-screen bg-center bg-no-repeat bg-cover bottom-2 fixed inset-0" style={{ backgroundImage: "url('/bg.png')" }}>
            <Head>
            <title>Robotics Projects</title>
            </Head>
            <div className="flex items-center justify-center mt-12 md:mb-4"></div>
                <h1 className="px-5 py-3 mx-auto text-xl font-semibold shadow-lg rounded-2xl backdrop-blur-md" style={{ boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    Robotics Projects
                </h1>
            
            
            <div className="flex justify-center my-4 overflow-x-auto space-x-8 scrollbar-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <div className={`min-width = ${projects.length * 20}px`}></div>
                    {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        section={"individual"}
                        backgroundImage={project.imageUrl}
                        title={project.title}
                        desc={project.description}
                        reflink={project.link}
                    />
                    ))}
                    <div className="min-w-[200px]"></div>
            </div>
            <style jsx>{`
                .scrollbar-hidden::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            
            <BottomNav />
        </div>
       
        </>
    );
}
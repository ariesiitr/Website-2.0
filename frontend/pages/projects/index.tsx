// pages/index.js
import Head from 'next/head'
import ProjectCard from "../../components/projectcard";
import BottomNav from '../../components/bottomNav';
export default function Projects() {
    return (
        <>
        <div className="flex flex-col min-h-screen bg-center bg-no-repeat bg-cover bottom-2 fixed inset-0" style={{ backgroundImage: "url('/bg.png')" }}>
            <Head>
            <title>Projects Page</title>
            </Head>
            <div className="flex items-center justify-center mt-12 md:mb-4"></div>
                <h1 className="px-5 py-3 mx-auto text-xl font-semibold shadow-lg rounded-2xl backdrop-blur-md" style={{ boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                Our Projects
                </h1>
            
            
            <div className="flex justify-center my-4 overflow-x-auto space-x-8 scrollbar-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <ProjectCard
                    section={"overall"}
                    backgroundImage="/images/ai.svg"
                    title="AI / ML"
                    desc="Mind and Machine Merge!"
                    reflink="/projects/ai"
                />

                {/* Robotics Card */}
                 <ProjectCard
                    section={"overall"}
                    backgroundImage="/images/robotics.svg"
                    title="Robotics"
                    desc="Evolving dreams, building bots."
                    reflink="/projects/robotics"
                />

                {/* AR/VR & Dev Card */}
                <ProjectCard
                    section={"overall"}
                    backgroundImage="/images/arvr.svg"
                    title="AR / VR & Dev"
                    desc="Crafting Digital Realms."
                    reflink="/projects/arvr"
                />
                
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

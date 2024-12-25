import React from 'react';

interface ProjectCardProps {
    backgroundImage: string;
    title: string;
    desc: string;
    reflink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ backgroundImage, title, desc, reflink }) => (
    <div
        className="relative flex flex-col justify-end p-6 shadow-xl rounded-2xl w-80 h-96"
        style={{
            backgroundColor: "#9E958C", // Background color
            backgroundImage: `url(${backgroundImage})`, // Only the image
            boxShadow:
                "0 -4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mb-3 text-white">{desc}</p>
        <button
            style={{
                background: 'linear-gradient(0deg, #9E7EF4 0%, #A795D5 100%)',
            }}
            className="flex items-center justify-center w-full px-4 py-2 text-center text-white rounded-md hover:opacity-80"
            onClick={() => { window.location.href = reflink }}
        >
            View Projects
            <span className="ml-2 text-xl">🡒</span> {/* Sans-serif Right Arrow */}
        </button>
    </div>
);

export default ProjectCard;
import React from 'react';

const ProjectsPage = () => {
  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat bg-opacity-60" 
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Title Section */}
      <div className="mt-10 mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-white bg-opacity-10 rounded-lg w-auto px-6 py-2 bg-white">
          Our Projects
        </h1>
      </div>

      {/* Projects Cards Container */}
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {/* AI / ML Card */}
        <div className="relative bg-white bg-opacity-10 rounded-lg w-80 h-96 p-6 flex flex-col items-center shadow-lg backdrop-filter backdrop-blur-md border border-white border-opacity-20">
          {/* Icon */}
          <div className="w-24 h-24 bg-center bg-no-repeat" 
               style={{ backgroundImage: "url('/ai-icon.png')", backgroundSize: "contain" }}>
          </div>
          {/* Content Container at the bottom with dark glassmorphic effect */}
          <div className="absolute bottom-0 w-full p-6 bg-black bg-opacity-20 rounded-lg backdrop-filter backdrop-blur-md flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold text-white">AI / ML</h2>
            <p className="text-white">Mind and Machine Merge!</p>
            <button className="w-full px-6 py-3 bg-[#9E7EF4] text-white rounded-lg font-bold">
              View Projects →
            </button>
          </div>
        </div>

        {/* Robotics Card */}
        <div className="relative bg-white bg-opacity-10 rounded-lg w-80 h-96 p-6 flex flex-col items-center shadow-lg backdrop-filter backdrop-blur-md border border-white border-opacity-20">
          {/* Icon */}
          <div className="w-24 h-24 bg-center bg-no-repeat" 
               style={{ backgroundImage: "url('/robotics-icon.png')", backgroundSize: "contain" }}>
          </div>
          {/* Content Container at the bottom with dark glassmorphic effect */}
          <div className="absolute bottom-0 w-full p-6 bg-black bg-opacity-20 rounded-lg backdrop-filter backdrop-blur-md flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold text-white">Robotics</h2>
            <p className="text-white">Evolving dreams, building bots.</p>
            <button className="w-full px-6 py-3 bg-[#9E7EF4] text-white rounded-lg font-bold">
              View Projects →
            </button>
          </div>
        </div>

        {/* AR / VR & Dev Card */}
        <div className="relative bg-white bg-opacity-10 rounded-lg w-80 h-96 p-6 flex flex-col items-center shadow-lg backdrop-filter backdrop-blur-md border border-white border-opacity-20">
          {/* Icon */}
          <div className="w-24 h-24 bg-center bg-no-repeat" 
               style={{ backgroundImage: "url('/arvr-icon.png')", backgroundSize: "contain" }}>
          </div>
          {/* Content Container at the bottom with dark glassmorphic effect */}
          <div className="absolute bottom-0 w-full p-6 bg-black bg-opacity-20 rounded-lg backdrop-filter backdrop-blur-md flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold text-white">AR / VR & Dev</h2>
            <p className="text-white">Crafting Digital Realms.</p>
            <button className="w-full px-6 py-3 bg-[#9E7EF4] text-white rounded-lg font-bold">
              View Projects →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

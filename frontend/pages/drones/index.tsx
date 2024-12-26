import React from 'react';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Drone = () => {
  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center relative bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      
      {/* Top Title */}
      <div className='absolute top-10 flex justify-center items-center font-extrabold text-3xl rounded-lg w-auto px-6 h-[60px] bg-white bg-opacity-10 text-white'>
        We make Drones
      </div>
      
      {/* Glassmorphic container with AI information */}
      <div className="w-[90%] max-w-3xl h-auto p-10 mb-10"> 
        <div className='w-full h-auto bg-white bg-opacity-20 rounded-lg text-white text-center p-8'>
          <p className='text-xl font-bold'>
            We are the architects of the sky, crafting high-tech drones that defy gravity and capture the beauty of the world from above.
          </p>
        </div>
      </div>

      {/* Centered Container for Robot and Navigation Arrows */}
      <div className="flex items-center justify-center space-x-10 mb-20"> {/* Centered with spacing */}
        
        {/* Left Arrow */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border border-white border-opacity-20">
          <GrFormPrevious className='w-8 h-8 text-white' />
        </div>
        
        {/* Robot Icon */}
        <div className="w-40 h-40 bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/robot.png')", backgroundSize: "contain" }}>
        </div>

        {/* Right Arrow */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border border-white border-opacity-20">
          <GrFormNext className='w-8 h-8 text-white' />
        </div>
      </div>

      {/* Middle Navigation Bar */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-32 h-12 rounded-2xl bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border border-white border-opacity-20">
        <GrFormPrevious className='w-9 h-9 text-white' />
        <GrFormNext className='w-9 h-9 text-white' />
      </div>
    </div>
  );
}

export default Drone;

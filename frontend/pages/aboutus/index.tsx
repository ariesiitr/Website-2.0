import React from 'react';
import { GrFormNext, GrFormNextLink, GrFormPrevious } from "react-icons/gr";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: "url('/bg.png')" }}>
      
      {/* Title moved to the top */}
      <div className='absolute top-10 flex justify-center items-center font-extrabold text-4xl rounded-lg w-auto h-[70px] bg-white bg-opacity-10 text-white'>
        About Us
      </div>
      
      {/* Glassmorphic container */}
      <div className="w-[90%] max-w-3xl h-auto p-10 flex flex-col items-center justify-center relative mb-10 md:mb-20">
        <div className='w-full h-auto flex flex-col bg-white bg-opacity-20 rounded-lg items-start text-white text-left p-8'>
          <h1 className='font-bold mb-5 text-3xl'>Yo fam!</h1>
          <p className='text-xl font-bold'>Welcome to ARIES - where AI and electronics collide, and innovation soars!</p>
          <p className='text-xl font-bold'>We create mind-blowing projects that will reshape the future!</p>
        </div>
      </div>

      {/* Robot icon on the right, responsive */}
      <div className="w-64 h-64 absolute right-10 transform translate-y-[-50%] top-[65%] hidden md:block"
           style={{ backgroundImage: "url('/robot.png')", backgroundSize: "contain" }}>
      </div>

      {/* Robot icon for mobile view */}
      <div className="w-40 h-40 md:hidden flex justify-center items-center absolute  bottom-36 left-1/2 transform -translate-x-1/2"
           style={{ backgroundImage: "url('/robot.png')", backgroundSize: "contain", backgroundPosition: "center" }}>
      </div>

      {/* Bottom navigation icons with separate glassmorphic backgrounds */}
      <div className="absolute bottom-5 w-full flex items-center justify-center space-x-6">
        <div className='relative flex items-center w-full'>

          {/* First Icon Container */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-32 h-12 rounded-2xl bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border border-white border-opacity-20">
            <GrFormPrevious className='w-9 h-9 text-white' />
            <GrFormNext className='w-9 h-9 text-white' />
          </div>

          {/* Third Icon Container */}
          <div className="absolute bottom-10 flex right-10 items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border border-white border-opacity-20">
            <GrFormNextLink className='w-9 h-9 text-white' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;

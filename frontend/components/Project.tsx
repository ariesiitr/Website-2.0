
import React from "react";

type PropType = {
  Vertical: string,
  Quote: string,
  Image: string
}

function Project(props: PropType) {
  const cardStyle = {
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), rgba(255, 255, 255, 0.10)"
  }
  return (

    <>

      <div className="w-[25vw] h-[100%] flex flex-col rounded-xl mx-[0.2rem] sm:h-[40vh] sm:my-[5vh] sm:pt-[3vh] sm:w-[50vw] md:w-[50vw] md:my-[10vh] md:h-[30vh]" style={cardStyle}>
        <div className="flex items-center justify-center"><img src={props.Image} alt="Project Image Not Loaded" className="h-[75%] w-[90%] z-5" /></div>
        <div className=" h-[90%] mt-[-12vh] rounded-xl self-end w-[100%] sm:h-[130%]" style={{ background: "rgba(71, 71, 71, 0.50)" }}>
          <h1 className="mt-[7vh] ml-[2vw] text-[1.875rem] md:text-[4vw] sm:text-[4vw]">{props.Vertical}</h1>
          <h3 className="ml-[2vw] mt-[0.5vh] text-[1.25rem] md:text-[3vw] sm:text-[3vw]">{props.Quote}</h3>
          <div className="flex items-center justify-center">
            <button className="flex-row inline-flex py-[1rem] px-[2rem] sm:px-[0.5rem] justify-center items-center rounded-[0.375rem] bg-purple-500 my-[4vh] w-[85%] m-auto color-white h-[3vw] md:h-[7.5vw]" style={{ background: "linear-gradient(0deg, #9E7EF4 0%, #A795D5 100%)" }}><span className="text-[1.5vw] md:text-[3vw] sm:text-[4.5vw]">View Projects</span> <img src="/images/arrow.svg" alt="" className="w-[10%] ml-[0.5vw]" /></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;

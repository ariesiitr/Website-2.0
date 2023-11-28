
import React from "react";
type PropType = {
  Image: string
}
function Icon(props: PropType) {


  return (
    <div >
      <div className='  h-auto w-[16vw]  my-4 gap-1 px-[-1vw] z-[5] flex flex-col w-[90%] transition-transform duration-300 transform hover:scale-125  md:h-[20vh] md:w-[30vw]  sm:h-[15vh] sm:w-[30vw] sm:my-[.5vh] md:my-[-1.5vh] md:mb-[2vh] sm:mx-[2.1vw]' >
        <a href="#"><img src={props.Image} alt="" className={` object-cover max-w-full h-auto mx-auto z-0   w-[13.6rem] h-[13.9rem] flex-shrink-0 flex-basis-[21%] rounded-[1.5rem] md:w-[80%] sm:h-[90%] sm:w-[100%] `} /></a>
      </div >
    </div>
  );
}

export default Icon;

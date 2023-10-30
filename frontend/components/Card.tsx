
import React, { useState } from "react";

type PropType = {
  Name: string,
  Designation: string,
  Image: string
}
function Card(props: PropType) {

  const [hover, setHover] = useState(0);
  return (
    <div>
      
      <div className='h-[13.9rem] w-[13.6rem]  my-4 gap-1 px-[-1vw] z-[5] flex flex-col w-[90%] transition-transform duration-300 transform hover:scale-125 sm:hover:scale-[105%] sm:hover:my-[14vh] sm:w-[18rem] sm:h-[15rem] mg:h-[35vh] mg:pb-[5vh] mg:w-[80wv] mg:mb-[3.5rem] '  onMouseEnter={() => { setHover(1) }} onMouseLeave={() => { setHover(0) }}>
        <img src={props.Image} alt="" className={` object-cover max-w-full h-auto align-middle z-[55]   z-0 memberImage  w-[13.6rem] h-[13.9rem] flex-shrink-0 flex-basis-[21%] rounded-[1.5rem] sm:w-[15rem] sm:h-[15rem] sm:px-[0rem] mg:w-[17.5rem] mg:h-[18rem]  `}  />

        <div className={`text-left -mt-16 z-[61] memberDetails `} >

          <span className={`pl-4 text-xl ${hover ? "opacity-0 opacity-1" : ""}  md:text-[3vw] `} >{props.Name}</span ><br />
          <span className={`pl-4 text-base ${hover ? "opacity-0 opacity-1" : ""} md:text-[2vw]`}>{props.Designation}</span>
        </div>
        <div className={` z-[60]  flex justify-center ${hover ? "opacity-1" : "opacity-0"} : ""}  h-12`}>
          <a href="" className="memberContacts"><img src="/images/aboutUs.svg" alt="" className='w-12 -mt-14 mx-2 h-12' /></a>
          <a href="" className="memberContacts"><img src="/images/linkedin.svg" alt="" className='w-12 -mt-14 mx-2 h-12' /></a>
          <a href="" className="memberContacts"><img src="/images/insta.svg" alt="" className='w-12 -mt-14 mx-2 h-12' /></a>
        </div>

      </div >
    </div>
  );
}

export default Card;

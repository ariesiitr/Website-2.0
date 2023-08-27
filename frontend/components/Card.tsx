import React from "react";
import Head from "next/head";
import styles from './../styles/card.module.css'

type PropType = {
  Name:string,
  Designation:string,
  Image:string
}

function Card(props:PropType) {
  const imgStyle = {
    width: "12.4rem",
    height: "12.8rem",
    flexBasis: "21%",
  };


  return (
    <>
    
    <div className=' my-4 gap-1 flex flex-col .flex-shrink-0 ' style={imgStyle} >
      <img src={props.Image} alt="memberImage not loaded" className='object-cover max-w-full h-auto align-middle  transition-transform duration-300 transform hover:scale-125  z-0 memberImage md:my-1 rounded-3xl' style={imgStyle} />
      <div className={`text-left -mt-16 z-10 ${styles.memberDetails} ${styles.memberImage}`}><span className='pl-4 text-xl'>{props.Name}</span ><br /><span className='pl-4 text-base'>{props.Designation}</span>
        <div className='flex justify-center'>
          {/* <img src="/insta.svg" alt="contactIcons not loading" className='w-12 -mt-10 mx-2 memberContacts' />
          <img src="/message.svg" alt="contactIcons not loading" className='w-12 -mt-10 mx-2 memberContacts' />
          <img src="/linkedin.svg" alt="contactIcons not loading" className='w-12 -mt-10 mx-2 memberContacts' /> */}
          {/* Above are usefull comments */}
        </div>
      </div>
    </div>
    </>
  );
}

export default Card;

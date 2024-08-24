import React from "react";
import { BiX } from 'react-icons/bi'
import curl from '../assets/img/curl.png'


const AboutUs = ({setAbout}) => {
  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] z-[998] bg-[#F0F9FF] rounded">
        <div className="flex flex-col justify-center items-center text-center mx-auto m-4 p-8 w-[100%] md:w-[60%]">
      <BiX className='z-[99] p-2 rounded-full bg-white my-4 text-4xl text-black absolute right-4 top-0 cursor-pointer border-[2px] border-[#6AC4FF]' onClick={()=>setAbout(false)}/>
      <h1 className="font-bold text-4xl my-4"> About Us_</h1>
      <p>
        Afritube stands as a pioneering platform, driving the enrichment and
        development of young minds. With a focused dedication to curating
        captivating and educational African video content, offering parents an
        indispensable resource for providing their children with a safe,
        engaging, and culturally rich digital experience. By fostering
        exploration, education, and entertainment, Afritube unlocks the full
        potential within children, empowering them to become well-rounded
        individuals who appreciate the beauty of Africa and the world from a
        view.
      </p>
      </div>
      <img src={curl} alt="curl" className="absolute top-0 left-[20%] z-[9] opacity-[70%]"/>
    </div>
  );
};

export default AboutUs;

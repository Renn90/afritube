import React, { useContext, useState } from "react";
import rainCloud from '../assets/rainCloud.png'
import Button from "./UI/Button";
import bright from "../assets/brightElips.png";
import cloudSm from "../assets/VectorCloud.png";
import cloudBig from "../assets/vectorBig.png";
import stars from "../assets/stars.png";
import musicPreview from "../assets/musicPreview.png";
import {Link} from 'react-router-dom'
import Favouritecontext from "../store/reducer";

const MusicIntro = () => {
  const [clickPromt, setClickPromt] = useState(false)
  const ctx = useContext(Favouritecontext)

  return (
    <div className="bg-autioIntro py-[10px] relative pb-[80px] z-[998]">
      <img
        src={cloudSm}
        alt="/"
        className="absolute top-[-50px] left-0 z-0 lt:top-[-100px]"
      />
      <img
        src={cloudBig}
        alt="/"
        className="absolute top-[-50px] right-0 z-0 lt:top-[-100px]"
      />
      <img src={stars} alt="/" className="w-[100%] absolute z-10 opacity-60" />
      <div className="container mx-auto pt-6 px-[0px]">
        <div className="relative flex flex-col justify-between items-center md:flex-row">
          <div className="px-2 md:w-1/2">
            <img
              src={bright}
              className="absolute top-[20px] z-[9] w-[170px] opacity-[10%]"
            />
            <h1 className="font-bold text-3xl text-primary relative z-[99]">
              Listen
            </h1>
            <h2 className="font-medium text-xl text-white py-3 relative z-[99] md:pr-[20%]">
              Escape into rhythms and stories with our extensive collection of tunes, tales, melodies and stories.
            </h2>
            <Link to='/content/grandma'>
            <Button
              spec="relative z-[99] my-4 bg-white text-black hover:bg-[grey]"
              cta="View Music & Audio Books"
              onClick={()=>ctx.dispatch({type: 'BOOKS'})}
            />
            </Link>
          </div>
          <Link to='/content/grandma' className="md:w-1/2" onClick={()=>ctx.dispatch({type: 'BOOKS'})}>
          <div className="relative">
            <img src={musicPreview} alt="/" className="cursor-pointer my-4 ml-auto w-[480px]" onMouseOver={()=> setClickPromt(true)} onMouseLeave={()=> setClickPromt(false)}/>
            {clickPromt && <h1 className="bg-white p-4 absolute top-[20px] rounded-full cursor-pointer" onMouseOver={()=> setClickPromt(true)}>Click to Listen to music and Audio books</h1>}
          </div>
          </Link>
        </div>
        <img src={rainCloud} className="z-[99] absolute left-[-40px] bottom-[-120px] w-[250px] hidden md:left-[10%] sm:block"/>
      </div>
    </div>
  );
};

export default MusicIntro;

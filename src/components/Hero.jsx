import { FaGooglePlay, FaApple, FaShieldAlt } from "react-icons/fa";
import { GiHut } from "react-icons/gi";
import { HiMiniWindow } from "react-icons/hi2";
import posterSrc from '../../src/assets/img/poster.png'
import khumba from "../assets/VideoAssests/African/Khumba.mp4";

const Hero = () => {

  return (
    <div className="mb-4 bg-white pb-8">
      <div className="video-background">
        <video autoPlay muted loop poster={posterSrc} className=" object-cover">
          <source src={khumba} type="video/mp4" />
        </video>
        <div className="content-overlay w-[100%] text-center">
        <div className="absolute inset-0 z-[997] bg-[#000000a1] w-full h-[100%] flex items-center justify-center "/>
          <span className="flex flex-col items-center h-[100%] justify-center relative z-[998] leading-10">
          <h1 className="text-white text-bold  my-1 px-2 text-4xl md:text-6xl">Safe and fun for little learners</h1>
          <p className="text-white montserrat">
            Watch curated collection of delightful and educational videos for
            kids
          </p>
          <span className="flex flex-col sm:flex-row">
            <button className="montserrat px-4 py-2 mr-0 text-start rounded-lg flex items-center outline-0 text-white sm:text-center sm:mr-3">
              <FaApple className="mr-2 text-3xl mb-1" /> Get on Apple
            </button>
            <button className="montserrat px-4 py-2 mr-0 text-start rounded-lg flex items-center outline-0 text-white sm:text-center sm:mr-3">
              <FaGooglePlay className="mr-2 text-2xl" /> Get on Google Play
            </button>
          </span>
          </span>
        </div>
      </div>
      {/*cards*/}
      <div className="flex flex-col relative items-center justify-center container mx-auto mt-[-60px] z-[998] text-center md:flex-row">
        <div className="h-[180px] flex flex-col items-center p-4 py-6 border-[1px] border-grey w-[75%] leading-8 bg-white rounded-lg md:w-1/4">
          <span className="p-4 text-3xl text-white bg-[#59D51F] rounded-full">
          <FaShieldAlt />
          </span>
          <h2 className="text-3xl">Parents</h2>
          <p className="montserrat text-xs font-semibold">Safety First, Learning Always! </p>
        </div>
        <div className="h-[180px] flex flex-col items-center px-8 py-6 border-[1px] w-[75%] border-grey leading-8 bg-white rounded-lg my-4 md:mx-5 md:my-0 md:w-1/4">
          <span className="p-4 text-4xl text-white bg-[#F67A20] rounded-full">
          <HiMiniWindow />
          </span>
          <h2 className="text-3xl">Watch&nbsp;Anywhere</h2>
          <p className="montserrat text-xs font-semibold">Watch Afritube at home or on the go!</p>
        </div>
        <div className="h-[180px] flex flex-col items-center p-4 py-6 border-[1px] border-grey w-[75%] leading-8 bg-white rounded-lg md:w-1/4">
          <span className="p-4 text-3xl text-white bg-[#865FF7] rounded-full">
          <GiHut/>
          </span>
          <h2 className="text-3xl">Grandma’s&nbsp;Hut</h2>
          <p className="montserrat text-xs font-semibold">An enjoyable classroom filled with content & African culture.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

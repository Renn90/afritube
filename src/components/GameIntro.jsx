import React, { useState } from "react";
import gameImage from "../assets/gameImage.png";
import cloud from "../assets/white-cloud.png";

const GameIntro = () => {
  const isLargeScreen = window.innerWidth >= 976;
  return (
    <div className="relative bg-white pb-[100px]">
      <div className="container mx-auto px-[0px] py-6">
        <div className="relative flex flex-col justify-between items-center md:flex-row-reverse">
          <span className="py-8 px-2 md:w-1/2 text-start md:text-start">
            <h1 className="font-bold text-3xl text-primary relative z-[99]">
              Play Games
            </h1>
            <h2 className="font-medium text-xl py-3 relative z-[99] ">
              Dive into an immersive world of thrilling adventures and
              challenges with our captivating selection of games!
            </h2>
            <div
              className={`bg-black p-1 text-white w-[200px] flex overflow-hidden flow-animation rounded mr-auto`}
            >
              <h2 className='right'>
                COMING&nbsp;SOON&nbsp;&nbsp;COMING&nbsp;SOON&nbsp;&nbsp;COMING&nbsp;SOON
              </h2>
            </div>
          </span>
          <div className="md:w-1/2">
          <img src={gameImage} className="w-[480px] mt-8 relative z-[99]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameIntro;

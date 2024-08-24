import React, { useState } from "react";
import { IoIosPartlySunny } from "react-icons/io";
import NavButton from "./navButton/NavButton";
import End from "./UI/End";
import sun from '../assets/sunCloud.png'
import dimsun from '../assets/dimSun.png'

function getGreeting() {
  const currentHour = new Date().getHours();
  if (currentHour >= 5 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function Kdashboard() {
  const [showEnd, setShowEnd] = useState(true)
  const greeting = getGreeting();

  return (
    <>
      <h4 className="pt-4 pb-2 flex items-center font-semibold text-xl flex justify-center">
        <img src={greeting === 'Good Evening' ? dimsun : sun}/> {greeting}
      </h4>
      <NavButton />
      {showEnd && <End show={setShowEnd}/>}
    </>
  );
}

export default Kdashboard;

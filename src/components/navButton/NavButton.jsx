import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BiSolidVideos } from "react-icons/bi";
import { IoGameController } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { HiOutlineMusicNote } from "react-icons/hi";
import { GiHut } from "react-icons/gi";
import "../navButton/NavButton.jsx";
function NavButton() {
  const location = useLocation();
  const [isgrandmaHutActive, setIsgrandmaHutActive] = useState(false);

  useEffect(() => {
    setIsgrandmaHutActive(location.pathname.includes("/grandma"));
  }, [location]);

  return (
    <div className="w-auto flex justify-center ">
      <div className="relative pt-2 pb-2 pl-6 pr-6  w-64 my-10 rounded-full flex justify-between flex-row bg-[#FAFAFA]">
        <NavLink
          to="/content"
          className={`relative flex items-center justify-center ${
             !isgrandmaHutActive && "mx-12"
          }`}
        >
          {" "}
          <BiSolidVideos
            className={`${
               !isgrandmaHutActive &&
              "navbtn-bg text-white p-[20px] absolute text-[75px]"
            } p-2 rounded-full bg-white text-4xl`}
          />{" "}
        </NavLink>
          {" "}
          <IoGameController className="p-2 text-[#8E8E8E] rounded-full bg-white text-4xl" />
        <NavLink
          to="grandma"
          className={`relative flex items-center justify-center ${
            isgrandmaHutActive && "mx-12"
          }`}
        >
          {" "}
          <GiHut
            className={`${
              isgrandmaHutActive &&
              "navbtn-bg text-white p-[20px] absolute text-[75px]"
            } p-2 rounded-full bg-white text-4xl`}
          />{" "}
        </NavLink>

        
      </div>
    </div>
  );
}

export default NavButton;

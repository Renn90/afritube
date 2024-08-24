import React, { useContext, useState } from "react";
import logo from "../assets/AFRITUBE-ICON.png";
import { NavLink } from "react-router-dom";
import { ImHome3 } from "react-icons/im";
import { RiHomeGearFill, RiParentFill } from "react-icons/ri";
import { FcBinoculars } from "react-icons/fc";
import { BiSearch } from "react-icons/bi";
import Favouritecontext from "../store/reducer";
import Logo from "./UI/Logo";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const ctx = useContext(Favouritecontext)
  const parentSecHandler =()=> {
    ctx.dispatch({
      type: 'PARENTSEC'
    })
  }

  return (
    <>
      <header className="bg-white container mx-auto">
        <nav
          className="mx-auto flex flex-col items-center justify-between p-4 lt:flex-row"
          aria-label="Global"
        >
         <Logo />

          <div className="flex hidden border-[1px] border-grey rounded-full py-2 px-4 sm:flex">
            <BiSearch className="text-black text-xl self-center cursor-pointer mr-1" />
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="relative border-0 rounded-full outline-0 text-black"
            />
            <FcBinoculars className="text-2xl self-center cursor-pointer" />
          </div>
          <div className="flex flex-row-reverse">
            <a
              className="flex cursor-pointer flex-row gap-4 align-center order-2 text-xl font-medium"
            >
              <RiParentFill className="self-center rounded-full text-[grey] text-4xl p-2 bg-[lightgrey] hover:text-black" onClick={parentSecHandler}/>
            </a>
            <NavLink
              to="/"
              className="flex flex-row ml-2 align-center text-xl font-medium"
            >
              <ImHome3 className="self-center bg-gray-300 rounded-full p-2 text-4xl" />
            </NavLink>
            <NavLink
              to="/security"
              className="flex flex-row ml-2 align-center text-xl font-medium"
            >
               <RiHomeGearFill className="self-center rounded-full text-[grey] text-4xl p-2 bg-[lightgrey] hover:text-black"/>
            </NavLink>
          </div>
        </nav>
        <div className="flex justify-between my-4 border-[1px] border-black rounded-full py-2 px-4 sm:hidden">
        <BiSearch className="text-black text-xl self-center cursor-pointer" />
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="relative border-0 rounded-full outline-0 text-black"
            />
            <FcBinoculars className="text-2xl self-center cursor-pointer" />
          </div>
      </header>
    </>
  );
};

export default Header;
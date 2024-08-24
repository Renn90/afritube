import React from "react";
import Button from "./Button";
import { BiX } from "react-icons/bi";
import { Link } from "react-router-dom";

const End = ({show}) => {
  return (
    <div className="fixed z-[998] bottom-0 left-0 w-[100%] p-8 flex flex-col bg-[#f3f3f3] justify-between px-[20%] items-start md:flex-row md:items-center">
      <div className="mb-8">
        <h2 className="text-[#0096fa] text-xl">Explore AfriTube <br /> for The Kids You LOVE.</h2>
        <p className="text-sm text-[#4C4A55]">Get you kids to enjoy learning in a safe environment</p>
      </div>
      <Link to='/pricing'>
      <Button cta={"Subscribe for More"} spec={"bg-[#0096fa] text-white"}/>
      </Link>
      <BiX className="absolute top-0 right-0 text-6xl text-[#DF2935] p-4 mr-4 cursor-pointer hover:text-[grey]" onClick={()=>show(false)}/>
    </div>
  );
};

export default End;

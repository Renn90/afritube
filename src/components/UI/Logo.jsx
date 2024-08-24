import React from "react";
import logo from '../../assets/AFRITUBE-ICON.png'
import { Link } from "react-router-dom";

//xl:px-[200px]

const Logo = ({text}) => {
  return (
    <Link to='/' className="flex">
      <div className="flex items-center">
        <h1 className={`font-bold text-lg text-${text}`}>Afritube</h1>
        <img src={logo} alt="logo" className="w-[45px]" />
      </div>
    </Link>
  );
};

export default Logo;

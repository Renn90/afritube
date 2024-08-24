import React from "react";
import logo from "../assets/AFRITUBE-ICON.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const anc = "cursor-pointer text-[grey] py-1 hover:text-black";
  return (
    <footer className="bg-white">
      <div className="container px-2 mx-auto flex flex-col justify-between py-[80px] md:flex-row">
        <img src={logo} alt="/" className="w-[45px] my-4 h-[45px] md:my-0" />
        <ul className="flex flex-col">
          <a className={anc}>Team</a>
          <a className={anc}>Product</a>
          <a className={anc}>Design</a>
          <a className={anc}>Development</a>
        </ul>
        <ul className="flex flex-col">
          <Link to='/content/grandma' className={anc}>
            Grand Ma's Hut
          </Link>
          <Link  to='/content' className={`${anc} hover:text-black`}>Watch</Link>
          <Link to='/content/grandma' className={anc}>Play</Link>
        </ul>
        <ul className="flex flex-col">
          <a className={anc}> Apple</a>
          <a className={anc}> Android</a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

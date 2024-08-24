import React from "react";
import icon from "../../assets/AFRITUBE-ICON.png";

const Loader = () => {
  return (
    <div className="">
      <img src={icon} alt="icon" className="bounce-animation w-[20%] md:w-[10%]" />
    </div>
  );
};

export default Loader;

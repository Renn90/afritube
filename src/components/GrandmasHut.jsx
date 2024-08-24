import React, { useContext } from "react";
import grandma from "../assets/Grandma.png";
import stories from "../assets/stories.png";
import culture from "../assets/culture.png";
import explore from "../assets/explore.png";
import cutOut from "../assets/cu.png";
import hut from "../assets/hutLogo.png";
import topCloud from "../assets/cloudbtm.png";
import rainCloud from '../assets/rainCloud.png'
import { Link, NavLink } from "react-router-dom";
import Button from "./UI/Button";
import Favouritecontext from "../store/reducer";

const GrandmasHut = () => { 
  const ctx = useContext(Favouritecontext)
  return (
    <div className="bg-white relative z-[997] px-[20px] py-[20px] sm:py-[80px] overflow-x-hidden">
      <img src={topCloud} className="absolute right-0 top-[-40px]"/>
      <div className="container mx-auto flex flex-col-reverse px-[0px] py-6 items-center justify-between md:flex-row">
        <div className="mr-[30px] px-2">
          <img src={hut} />
          <h2 className="text-5xl text-[#A9603A] font-medium my-3">
            Grand Ma<br/> welcomes you to her hut
          </h2>
          <p>Step into Grandma's hut and experience her <br /> heartwarming hospitality like never before.</p>
          <NavLink to='/content/grandma'>
          <Button
              color="transparent"
              spec="ml-[0px] text-white text-sm my-3 px-8 py-2 hover:bg-[grey] rounded bg-btn"
              cta="SEE&nbsp;MORE"
            />
          </NavLink>
        </div>
        <div className="relative flex justify-center my-8 pl-14 sm:pl-0">
        <img src={grandma} className="w-[250px] p-8 my-8 z-10 mr-[250px]" />
        <img src={cutOut} className="absolute top-0 left-0 w-[50px]"/>
        <Link to='/content/grandma' className="absolute z-[99] top-0 books" onClick={()=>ctx.dispatch({type: 'BOOKS'})}>
          <p className="bg-[#FDE197] w-[200px] p-4 rounded-[12px]">Audio Books</p>
          <img src={stories} className="absolute w-[100px] top-[-90%] right-[-15px]"/>
        </Link>

        <Link to='/content/grandma' className="absolute z-[99] bottom-0 explore" onClick={()=>ctx.dispatch({type: 'EXPLORE'})}>
          <p className="bg-[#DC6D33] w-[200px] p-4 rounded-[12px]">Explore Africa</p>
          <img src={explore} className="absolute w-[100px] top-[-90%] right-[-15px]"/>
        </Link>

        <Link to='/content/grandma' className="absolute z-[99] top-[40%] left-[150px] sm:left-[250px] history" onClick={()=>ctx.dispatch({type: 'HISTORY'})}>
          <p className="bg-[#78D030] w-[200px] p-4 rounded-[12px]">African History</p>
          <img src={culture} className="absolute w-[100px] top-[-90%] right-[-15px]"/>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default GrandmasHut;

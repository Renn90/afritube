import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AboutUs from "./AboutUs";
import Logo from "./UI/Logo";

const NavBar = ({text}) => {
  const [openSideBar, setOpenSideBar] = useState(null);
  const [aboutUs, setAboutUs] = useState(false)
  const [scroll, setscroll] = useState(false)

  useEffect(()=>{
    if(openSideBar){
     document.body.style.overflowY='hidden'
    }else if(!openSideBar){
      document.body.style.overflowY='auto' 
    }

  },[openSideBar])
 

  const openBarHandler = () => {
    setOpenSideBar((prev) => !prev);
  };

  window.onresize = () => {
    if (window.innerWidth >= 768) {
      setOpenSideBar(null);
    }
  };

  const close = () => {
    setOpenSideBar(false);
  };

  let slide = null;

  if (openSideBar && window.innerWidth < 768) {
    slide = "animate-slide-in";
  } else if (!openSideBar && window.innerWidth < 768) {
    slide = "animate-slide-out";
  }

  const onHandleNavchange =()=> {
    setOpenSideBar(false)
  }

  window.addEventListener('scroll', ()=> {
    if(window.scrollY >= 280){
     setscroll(true)
    }else{
      setscroll(false)
    }
  })

  return (
    <>
      <div className={`${scroll && 'bg-blur' } left-0 p-2 fixed top-0 w-[100%] z-[999]`}>
        {openSideBar && (
          <div
            className="fixed inset-0 z-[9] bg-[#0000008f] h-[100vh] w-full  flex items-center justify-center"
            onClick={close}
          />
        )}
        <div className="container mx-auto flex items-center justify-between w-[100%]">
        <Logo text={text}/>
        <div
          className={`flex fixed left-0 z-40 top-0 w-[80%] h-[100%] flex-col items-center transform translate-x-[-500px] md:translate-x-[0px] md:w-1/2 md:items-center md:justify-between md:flex-row md:relative ${openSideBar && 'bg-white h-[100vh]'} ${slide}`}
        >
          <div className={`flex flex-col items-center w-1/2 justify-between mt-[150px] md:flex-row md:mt-0 md:ml-auto text-${openSideBar ? 'black' : text}`}>
            <NavLink to='/' className="font-medium ml-2  text-sm my-4 md:my-0 hover:text-[grey]">Home</NavLink>
            <NavLink to='/content' className="font-medium ml-2  text-sm my-4 md:my-0 hover:text-[grey]" onClick={onHandleNavchange}>Videos</NavLink>
            <NavLink to='/content/grandma' className="font-medium ml-2  text-sm my-4 md:my-0 hover:text-[grey]">Stories</NavLink>
            <NavLink to='/pricing' className="font-medium ml-2  text-sm my-4 md:my-0 hover:text-[grey]">Pricing</NavLink>
          </div>
          <div>
          </div>
          </div>
          <div
          className={`relative hamburger ${openSideBar && 'activeHamburger'} z-[99] md:hidden cursor-pointer`}
          onClick={openBarHandler}
        >
          <span className={`bg-${text}`}></span>
           <span className={`bg-${text}`}></span>
           <span className={`bg-${text}`}></span>
        </div>
        </div> 

      </div>
     {aboutUs && <AboutUs setAbout={setAboutUs}/>}
    </>
  );
};

export default NavBar;

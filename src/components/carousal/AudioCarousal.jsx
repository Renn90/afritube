import React, { useContext, useRef, useState, useEffect } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { BiPlay } from "react-icons/bi";
import { audios } from "../../AudioData";
import { Link } from "react-router-dom";
import Favouritecontext from "../../store/reducer";
import { BiRightArrowAlt } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

const AudioCarousal = () => {

  // arranging the walk and scroll onngrab
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [move, setMove] = useState(100)
  const [transition, setTransition] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 760) {
        setMove(330);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDown(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDown) return;

    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollRightHandler = () => {
    setTransition(true)
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + move;
    setTimeout(() => {
      setTransition(false)
    }, 2000);

  };
  const scrollLeftHandler = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - move;
  };


  const ctx = useContext(Favouritecontext);
  const favourites = ctx.state.audioFavourites;
  const addHandler = (e) => {
    ctx.dispatch({
      type: "ADDAUDIO",
      payload: e,
    });
  };

  const removeFromFav = (e) => {
    ctx.dispatch({
      type: "REMOVEAUDIO",
      payload: e,
    });
  };

  const playHandler = (e) => {
    ctx.dispatch({
      type: "PLAYAUDIO",
      payload: e,
    });
  };

  return (
    <div className="container mx-auto px-2 relative my-10 unTap">
      <span className="flex items-end">
      <p className="text-2xl">Stories</p>
      <span className="flex items-center ml-4 cursor-pointer">
      <Link to='/content/grandma' className="flex items-center books text-xs" onClick={()=>ctx.dispatch({type: 'BOOKS'})}><p>See more</p>
      <BiRightArrowAlt className="text-xl"/>
      </Link>
      </span>
      </span>
      <div className={`flex my-3 overflow-hidden cursor-pointer ${transition && 'transit'}`}
             ref={sliderRef}
             onMouseDown={handleMouseDown}
             onMouseUp={handleMouseUp}
             onMouseMove={handleMouseMove}
             onMouseLeave={() => setIsDown(false)}
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleMouseUp}
      >
        {audios.slice(0, 6).map((audio) => (
            <div key={audio.id}>
          <div
            className="w-[180px] h-[200px] flex flex-col justify-between bg-white p-2 rounded-lg mx-4 m-4"
          >
            <img
              src={audio.thumbnail}
              alt="/"
              className="rounded-lg h-[85px] object-cover w-[100%]"
            />
            <p className="text-[12px] py-2 text-start overflow-scroll">{audio.name.length > 25 ? `${audio.name.slice(0, 25)}...` : audio.name}</p>
            <span className="flex text-xl justify-between items-center py-2">
              <BiPlay
                className="text-3xl rounded-full bg-primary p-2 text-white cursor-pointer"
                onClick={() => playHandler(audio)}
              />
              {favourites.find((vid) => vid.id === audio.id) ? <MdFavorite className="cursor-pointer text-2xl text-[red]" onClick={()=>removeFromFav(audio)}/> : <AiOutlineHeart className="text-2xl cursor-pointer" onClick={()=>addHandler(audio)}/>}
            </span>
          </div>
          </div>
        ))}
         <div className="flex z-[99]">
          <span className="absolute left-0 top-[50%] p-1 bg-white rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <button
              className="p-2 btn-bg rounded-full text-white outline-0"
              onClick={scrollLeftHandler}
            >
              <FiArrowLeft />
            </button>
          </span>
          <span className="absolute right-0 top-[50%] p-1 bg-white rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <button
              className="p-2 btn-bg rounded-full text-white outline-0"
              onClick={scrollRightHandler}
            >
              <FiArrowRight />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AudioCarousal;

import React, { useContext, useRef, useState, useEffect } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import Rating from "../Rating";
import { Link } from "react-router-dom";
import Favouritescontext from "../../store/reducer";
import { africanContent } from "../../VideoData";
import { BiRightArrowAlt } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

const VideoCarousal = () => {
  // arranging the walk and scroll onngrab

  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [move, setMove] = useState(100);

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
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + move;
  };
  const scrollLeftHandler = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - move;
  };

  const ctx = useContext(Favouritescontext);

  const addToFav = (e) => {
    ctx.dispatch({
      type: "ADD",
      payload: e,
    });
  };

  const removeFromFav = (e) => {
    ctx.dispatch({
      type: "REMOVE",
      payload: e,
    });
  };
  const playedVid = () => {
    ctx.dispatch({
      type: "PLAYED",
    });
  };
  const favourites = ctx.state.favourites;

  return (
    <div className="container mx-auto px-2 my-6 relative unTap">
      <h2 className="text-2xl my-2">Watch Fun Content</h2>
      <span className="flex items-end">
        <p className="text-xl">Videos</p>
        <Link to='/content' className="flex items-center ml-4 cursor-pointer books text-xs">
          <p>See more</p>
          <BiRightArrowAlt className="text-xl" />
        </Link>
      </span>
      <div
        className="flex overflow-hidden cursor-pointer"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsDown(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {africanContent.map((video) => (
          <div
            className="flex flex-col items-center justify-center mx-2  my-4"
            key={video.id}
          >
            <Link to={`content/${video.id}`} className="relative h-[100px] w-[250px]">
              <img
                src={video.thumbnail}
                className=" h-[100%] rounded w-full object-cover rounded-t-[2rem]"
                onClick={playedVid}
              />
            </Link>
            <div className="bg-white w-[100%] px-6 py-4 rounded-b-[2rem] md:w-[250px]">
              <div className="mb-1 flex flex-row text-medium justify-between">
                <h5 className="text-sm text-videoListTextColor ">
                  {video.name}
                </h5>
                <SlOptionsVertical className="self-center cursor-pointer" />
              </div>
              <div className="flex flex-row gap-2 mb-4">
                <small className="rounded-[1.4rem] px-[.5rem] py-[.1rem] text-[.6rem] bg-videoListDetailColor">
                  {video.length} secs.
                </small>
                <small className="rounded-[1.4rem] px-[.5rem] py-[.1rem] text-[.6rem] bg-videoListDetailColor">
                  {video.duration}
                </small>
              </div>
              <div className="flex flex-row justify-between mt-4">
                <Rating numStars={video.rating} />
                {favourites.find((vid) => vid.id === video.id) ? (
                  <MdFavorite
                    className="cursor-pointer text-2xl text-[red]"
                    onClick={() => removeFromFav(video)}
                  />
                ) : (
                  <AiOutlineHeart
                    className="text-2xl cursor-pointer"
                    onClick={() => addToFav(video)}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="flex z-[99]">
          <span className="absolute left-0 top-[50%] p-1 bg-white rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <button
              className="p-3 btn-bg rounded-full text-white outline-0"
              onClick={scrollLeftHandler}
            >
              <FiArrowLeft />
            </button>
          </span>
          <span className="absolute right-0 top-[50%] p-1 bg-white rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <button
              className="p-3 btn-bg rounded-full text-white outline-0"
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

export default VideoCarousal;

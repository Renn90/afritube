import React, { useContext } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import Favouritescontext from '../store/reducer' 

function VideoList({data}) {
  const ctx = useContext(Favouritescontext);

  const addToFav =(e)=> {
    ctx.dispatch({
      type: 'ADD', 
      payload: e,
     })
  }

  const removeFromFav =(e)=> {
    ctx.dispatch({
      type: 'REMOVE', 
      payload: e,
     })
  }
  const playedVid =()=> {
    ctx.dispatch({
      type: 'PLAYED'
     })
  }

 const favourites = ctx.state.favourites;
  return (
    <>
      {data.map((video) => (
        <div className="flex flex-col items-center justify-center  my-4" key={video.id}>
          <Link to={`${video.id}`} className="relative h-40 w-[100%] md:w-72">
            <img
              src={video.thumbnail}
              className=" h-[100%] rounded w-full object-cover rounded-t-[2rem]"
              onClick={playedVid}
            />
          </Link>
          <div className="bg-white w-[100%] px-6 py-4 rounded-b-[2rem] md:w-72">
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
              <Rating numStars={video.rating}/>
             {favourites.find((vid) => vid.id === video.id) ? <MdFavorite className="cursor-pointer text-2xl text-[red]" onClick={()=>removeFromFav(video)}/> : <AiOutlineHeart className="text-2xl cursor-pointer" onClick={()=>addToFav(video)}/>}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default VideoList;

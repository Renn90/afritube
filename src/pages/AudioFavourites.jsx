import React, {useEffect} from "react";
import End from '../components/UI/End'
import { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import Favouritecontext from "../store/reducer";
import { BiPlay, BiHeart } from "react-icons/bi";
import { FaSadTear } from "react-icons/fa";
import AudioPlayer from "../components/AudioPlayer";

const AudioFavourites = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  const ctx = useContext(Favouritecontext);
  const favourites = ctx.state.audioFavourites;

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
    <div className="container mx-auto bg-secBlue rounded-xl p-7 mx-8">
      {favourites.length > 0 &&
      <>
      <div className="flex flex-wrap items-center my-6">
        {favourites.map((audio) => (
          <div className="w-[100%] bg-white p-2 rounded-lg mx-4 sm:w-1/5" key={audio.id}>
            <img
              src={audio.thumbnail}
              alt="/" 
              className="rounded-lg h-[85px] object-cover w-[100%]"
            />
            <p className="text-[12px] py-2 overflow-scroll">{audio.name}</p>
            <span className="flex text-xl justify-between items-center py-2">
              <BiPlay className="text-3xl rounded-full bg-primary p-2 text-white cursor-pointer" onClick={()=>playHandler(audio)}/>
              {favourites.find((vid) => vid.id === audio.id) ? <MdFavorite className="cursor-pointer text-2xl text-[red]" onClick={()=>removeFromFav(audio)}/> : <AiOutlineHeart className="text-2xl cursor-pointer" onClick={()=>addHandler(audio)}/>}
            </span>
          </div>
        ))}
      </div>
      </>}
      {favourites.length < 1 && 
       <div className='p-4 flex flex-col items-center p-8'>
       <FaSadTear className='text-4xl'/>
       <h1 className='text-2xl my-4'>No Favourite Audio Books..</h1>
     </div>
      }
      <div className="container ml-[-10px] mx-auto fixed w-[100%] top-[80vh]">
      <AudioPlayer />
      </div>
    </div>
  );
};

export default AudioFavourites;

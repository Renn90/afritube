import React, { useContext } from "react";
import { BiPlay } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import Favouritecontext from "../store/reducer";

const RecentlyPlayed = () => {

  const ctx = useContext(Favouritecontext);
  const recentlyPlayed = ctx.state.recentlyPlayed;
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
    <div className="flex flex-wrap items-center my-3">
      {recentlyPlayed.map((audio) => (
        <div className="w-[100%] bg-white p-2 rounded-lg mx-4 md:w-1/5" key={audio.id}>
          <img
            src={audio.thumbnail}
            alt="/"
            className="rounded-lg h-[85px] object-cover w-[100%]"
          />
          <p className="text-[12px] py-2 overflow-scroll">{audio.name}</p>
          <span className="flex text-xl justify-between items-center py-2">
            <BiPlay
              className="text-3xl rounded-full bg-primary p-2 text-white cursor-pointer"
              onClick={() => playHandler(audio)}
            />
            {favourites.find((vid) => vid.id === audio.id) ? (
              <MdFavorite
                className="cursor-pointer text-2xl text-[red]"
                onClick={() => removeFromFav(audio)}
              />
            ) : (
              <AiOutlineHeart
                className="text-2xl cursor-pointer"
                onClick={() => addHandler(audio)}
              />
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentlyPlayed;

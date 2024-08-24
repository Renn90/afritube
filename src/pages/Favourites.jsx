import React, { useContext } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import Rating from "../components/Rating";
import Favouritecontext from "../store/reducer";
import { FaSadTear } from "react-icons/fa";
import { Link } from "react-router-dom";

const Favourites = () => {
  const ctx = useContext(Favouritecontext);
  const favourites = ctx.state.favourites;

  const removeFromFav = (e) => {
    ctx.dispatch({
      type: "REMOVE",
      payload: e,
    });
  };

  return (
    <div className="container mx-auto bg-secBlue rounded-xl p-7 mx-8  ">
      {favourites.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {favourites.map((video) => (
            <div className="flex flex-col items-center  my-4" key={video.id}>
              <Link
                to={`/content/${video.id}`}
                className="relative h-44 w-[100%] md:w-72"
              >
                <div className="relative h-44 w-[100%] md:w-72">
                  <img
                    src={video.thumbnail}
                    className=" h-[100%] rounded w-full object-cover rounded-t-[2rem]"
                  />
                </div>
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
                  <Rating />
                  {favourites.find((vid) => vid.id === video.id) ? (
                    <MdFavorite
                      className="text-2xl text-[red] cursor-pointer"
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
        </div>
      ) : (
        <div className="p-4 flex flex-col items-center">
          <FaSadTear className="text-4xl" />
          <h1 className="text-2xl">No Favourite Videos..</h1>
        </div>
      )}
    </div>
  );
};
export default Favourites;

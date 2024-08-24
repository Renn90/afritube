import React, { useContext } from "react";
import AUdioList from "../AUdioList";
import AudioPlayer from "../AudioPlayer";
import RecentlyPlayed from "../RecentlyPlayed";
import Favouritecontext from "../../store/reducer";

const AudiBooks = () => {
  const ctx = useContext(Favouritecontext)
  const recentlyPlayed = ctx.state.recentlyPlayed
  return (
    <div className="container mx-auto p-4 bg-secBlue rounded-lg">
     {recentlyPlayed.length > 0 && <span className="flex flex-col justify-center">
        <h1 className="mx-4 text-xl text-[#8E8E8E]">Recently Played</h1>
        <RecentlyPlayed />
      </span>}
      <span className="flex flex-col justify-center">
        <h1 className="mx-4 text-xl text-[#8E8E8E]">Stories</h1>
        <AUdioList categories="stories" />
      </span>
      <span>
        <h1 className="mx-4 text-xl text-[#8E8E8E]">Audio Books</h1>
        <AUdioList categories="audiobook" />
      </span>
      <div className="container mx-auto fixed w-[100%] top-[80vh] mx-auto">
      <AudioPlayer />
      </div>
    </div>
  );
};

export default AudiBooks;

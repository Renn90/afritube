import { BiPlay, BiX } from "react-icons/bi";
import { BiPause } from "react-icons/bi";
import stars from '../assets/PlayerStars.png'

import React, { useState, useRef, useContext } from "react";
import ReactPlayer from "react-player";
import Favouritecontext from "../store/reducer";

const AudioPlayer = () => {
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(1);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);

  const ctx = useContext(Favouritecontext)
  const play = ctx.state.playing;
  const closeHandler =()=> {
    ctx.dispatch({
      type: 'CLOSEPLAYER'
    })
  }

  const handlePlayPauseClick = () => {
    setPlaying((prevPlaying) => !prevPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleProgress = (state) => {
    setPlayed(state.played);
  };

  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseDown = () => {
    // Pause the audio when the user starts dragging the progress bar
    setPlaying(false);
  };

  const handleSeekMouseUp = () => {
    // Seek to the selected position when the user releases the progress bar
    playerRef.current.seekTo(played);
    setPlaying(true);
  };

  return (
    <div div className="container mx-auto inset-x-0 fixed bottom-0 z-[9999]">
   {play && <div className="w-full p-4 relative bg-[#0C1344] rounded-lg">
        <img src={stars} alt="/" className="absolute w-[100%] z-[9]"/>
        <BiX className="absolute right-2 top-1 text-3xl text-white cursor-pointer z-[99]" onClick={closeHandler}/>
      <ReactPlayer
        ref={playerRef}
        url={play.audio}
        playing={playing}
        volume={volume}
        controls={false}
        onProgress={handleProgress}
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          pointerEvents: "none",
        }}
      />

      {/* Custom Controls */}
      <div className="flex flex-col items-center justify-between w-full h-full z-[99] sm:flex-row">
        <span className="flex items-center sm:ml-4">
          <img src={play.thumbnail} alt="/" className="rounded-lg h-[80px] w-[80px] bg-white p-2 object-cover" />
          <span className="text-white mx-2 text-[12px]">
            <h1>{play.name}</h1>
            <p>{play.categories}</p>
          </span>
        </span>


        <div className="flex flex-col items-center w-[50%] z-[99]">
          <button
            onClick={handlePlayPauseClick}
            className="text-white text-4xl outline-0 cursor-pointer"
          >
            {playing ? <BiPause /> : <BiPlay />}
          </button>
          
        {/* Progress Bar */}
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={played}
          onChange={handleSeekChange}
          onMouseDown={handleSeekMouseDown}
          onMouseUp={handleSeekMouseUp}
          onTouchStart={handleSeekMouseDown}
          onTouchEnd={handleSeekMouseUp}
          className="h-3 mx-2 w-[100%] h-[2px] z-[99] cursor-pointer inp outline-0"
        />
        </div>
        
        <div className="z-[99]">
        <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={volume}
            onChange={handleVolumeChange}
            className="h-[2px] mx-2 z-[99] cursor-pointer w-[50px] outline-0"
          />
          <span className="text-white text-[12px] z-[99]">{(volume * 100).toFixed(0)}%</span>
        </div>
      </div>
    </div>}
    </div>
  );
};

export default AudioPlayer;

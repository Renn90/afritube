import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import GameIntro from "../components/GameIntro";
import MusicIntro from "../components/MusicIntro";
import GrandmasHut from "../components/GrandmasHut";
import Testimonial from "../components/Testimonial";
import PreFooter from "../components/PreFooter";
import Footer from "../components/Footer";
import VideoCarousal from "../components/carousal/VideoCarousal";
import AudioCarousal from "../components/carousal/AudioCarousal";
import AudioPlayer from "../components/AudioPlayer";

const HomePage = () => {
  return (
    <>
    <div className="container mx-auto z-[999]">
    <NavBar text={'white'}/>
    </div>
      <Hero />
      <VideoCarousal />
      <AudioCarousal />
      <AudioPlayer />
      <GameIntro />
      <MusicIntro />
      <GrandmasHut />
      <Testimonial />
      <PreFooter />
      <Footer />
    </>
  );
};

export default HomePage;

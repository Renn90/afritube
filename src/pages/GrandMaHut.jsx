import React, { useState } from "react";
import AudiBooks from "../components/GrandmasHut/AudiBooks";
import AudioSuggestion from "../components/AudioSuggestion";
import AfricanHistory from "../components/GrandmasHut/AfricanHistory";
import ExploreAfrica from "../components/GrandmasHut/ExploreAfrica";
import Favouritecontext from "../store/reducer";
import { useContext, useEffect } from "react";
import TextModal from "../components/GrandmasHut/TextModal";

const GrandMaHut = () => {
  let history = 'history';
  let books = 'books';
  let explore = 'explore';

  const btn = 'text-sm px-3 w-32  py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white'

  const ctx = useContext(Favouritecontext);
  const textModal = ctx.state.textModal;
  const activeTab = ctx.state.activeTab

  useEffect(()=>{
    if(textModal === true){
      document.body.style.overflowY='hidden'
    }else{
      document.body.style.overflowY='auto'
    }
  },[textModal])

  return (
    <div className="container mx-auto p-4 bg-secBlue rounded-lg">
    <div className="flex flex-row flex-wrap self-center justify-center gap-2 py-4 align-center">
      <button className={`${btn} ${activeTab === explore? 'bg-black text-white' : ''}`} onClick={()=>ctx.dispatch({type: 'EXPLORE'})}>
        Explore&nbsp;Africa
      </button>
      <button className={`${btn} ${activeTab === books ? 'bg-black text-white' : ''}`} onClick={()=>ctx.dispatch({type: 'BOOKS'})}>
        Audio&nbsp;Books
      </button>
      <button className={`${btn} ${activeTab === history ? 'bg-black text-white' : ''}`} onClick={()=>ctx.dispatch({type: 'HISTORY'})}>
        African&nbsp;History{" "}
      </button>
    </div>
    <AudioSuggestion />
    {activeTab === history&&  <AfricanHistory />}
     {activeTab === books && <AudiBooks />}
     {activeTab === 'explore' && <ExploreAfrica />}
     {textModal && <TextModal />}
    </div>
  );
};

export default GrandMaHut;

import React from "react";
import { useReducer } from "react";

const Favouritecontext = React.createContext({
    favourites: [],
    parentSecModal: false,
    audioFavourites: [],
    recentlyPlayed: [],
    playing: null,
    vidCount: 0,
    premiumModal: false, 
    textModal: false,
    textRefrence: null,
    activeTab: 'explore'
  });

  const reducer = (state, dispatch) => {
    if(dispatch.type === 'ADD'){
      const alreadyAdded = state.favourites.find((video)=> video.id === dispatch.payload.id)
      if(alreadyAdded){
        return state;
      }else{
        return {...state, favourites: [...state.favourites, dispatch.payload]}
      }
    }
    if(dispatch.type === 'REMOVE'){
      const filtered = state.favourites.filter((video)=> video.id !== dispatch.payload.id)
      return {...state, favourites: filtered}
    }
    if(dispatch.type === 'PLAYED'){
      let isVisible = state.vidCount > 0 && state.vidCount % 3 === 0
      console.log(isVisible)
       return {...state, vidCount: state.vidCount + 1, premiumModal: isVisible}
    }
    if(dispatch.type === 'CLOSECOUNTDOWN'){
      return {...state, premiumModal: false}
    }
    if(dispatch.type === 'PARENTSEC'){
      return {...state, parentSecModal: !state.parentSecModal}
    }
    if(dispatch.type === 'PARENTSECCLOSE'){
      return {...state, parentSecModal: false}
    }
    if(dispatch.type === 'ADDAUDIO'){
      const alreadyAdded = state.audioFavourites.find((audio)=> audio.id === dispatch.payload.id)
      if(alreadyAdded){
        return state;
      }else{
        return {...state, audioFavourites: [...state.audioFavourites, dispatch.payload]}
      }
    }
    if(dispatch.type === 'REMOVEAUDIO'){
      const filtered = state.audioFavourites.filter((audio)=> audio.id !== dispatch.payload.id)
      return {...state, audioFavourites: filtered}
    }
    if (dispatch.type === 'PLAYAUDIO') {
      const updatedRecentlyPlayed = state.recentlyPlayed.filter(audio => audio.id !== dispatch.payload.id);
      
      if (state.recentlyPlayed.length > updatedRecentlyPlayed.length) {
        updatedRecentlyPlayed.unshift(dispatch.payload);
      } else {
        if (updatedRecentlyPlayed.length >= 4) {
          updatedRecentlyPlayed.pop();
        }
        updatedRecentlyPlayed.unshift(dispatch.payload);
      }
      return {
        ...state,
        playing: dispatch.payload,
        recentlyPlayed: updatedRecentlyPlayed
      };
    }
    if(dispatch.type === 'CLOSEPLAYER'){
      return {...state, playing: null}
    }if(dispatch.type === 'OPENTEXTMODAL'){
      return {...state, textModal: true, textRefrence: dispatch.payload}
    }if(dispatch.type === 'CLOSETEXTMODAL'){
      return {...state, textModal: false, textRefrence: null}
    }if(dispatch.type === 'EXPLORE'){
      return {...state, activeTab: 'explore'}
    }
    if(dispatch.type === 'BOOKS'){
      return {...state, activeTab: 'books'}
    }
    if(dispatch.type === 'HISTORY'){
      return {...state, activeTab: 'history'}
    }
    
    return state;
  }

  export const FavouritesReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, {
      favourites: [],
      parentSecModal: false,
      audioFavourites: [],
      recentlyPlayed: [],
      playing: null,
      vidCount: 0,
      premiumModal: false,
      textModal: false,
      textRefrence: null,
      activeTab: 'explore'
    })

  return (
    <Favouritecontext.Provider value={
        {state, dispatch}
    }>
      {props.children}
    </Favouritecontext.Provider>
  )
}

export default Favouritecontext

import React, { useReducer, useState, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "FAV_PHOTO_ADDED":
      const newFavList = [...state.favList, action.payload];
      return { ...state, favList: newFavList };

    case "FAV_PHOTO_REMOVED":
      const newFavListR = state.favList.filter(
        (item) => item !== action.payload
      );
      return { ...state, favList: newFavListR };

    case "SET_PHOTO_DATA":
      return { ...state, photoData: action.payload };

    case "SET_TOPIC_DATA":
      return { ...state, topicData: action.payload };

    case "SELECT_PHOTO":
      return { ...state, selectedPhoto: action.payload };

    case "DISPLAY_PHOTO_DETAILS":
      return { ...state, showModal: action.payload };
    
      case "SET_DARK_MODE":
      return {...state,isDarkMode:action.payload}

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {
  const initialState = {
    photoData: [],
    topicData: [],
    favList: [],
    showModal: false,
    selectedPhoto: {},
    isDarkMode:false
  };

  useEffect(() => {
    //fetch request to get photos
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((photoData) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData })
      )
      .then((error) => console.error(error));

    //fetch request to get topics
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((topicData) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData })
      )
      .then((error) => console.error(error));
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (favPhotoId) => {
    // setFavList(list);
    // console.log("favPhotoId:", favPhotoId);
    if (!state.favList.includes(favPhotoId)) {
      dispatch({ type: "FAV_PHOTO_ADDED", payload: favPhotoId });
    } else {
      dispatch({ type: "FAV_PHOTO_REMOVED", payload: favPhotoId });
    }
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: "SELECT_PHOTO", payload: photo });
  };
  const onClosePhotoDetailsModal = () => {
    //console.log("showModal value before dispatch: ", showModal);
    dispatch({ type: "DISPLAY_PHOTO_DETAILS", payload: !state.showModal });
  };
  const getPhotosByTopics = (topic_id) => {
    fetch(`http://localhost:8001/api/topics/photos/${topic_id}`)
      .then((res) => res.json())
      .then((photoData) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
      });
  };

  const setDarkMode = (mode)=>{
    dispatch({type: "SET_DARK_MODE", payload:mode});

  }

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getPhotosByTopics,
    setDarkMode
  };
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
  SET_DARK_MODE:"SET_DARK_MODE"
};

export default useApplicationData;

import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "FAV_PHOTO_ADDED":
      console.log("action:", action);
      const newFavList = [...state.favList, action.payload];
      return { ...state, favList: newFavList };

    case "FAV_PHOTO_REMOVED":
      const newFavListR = favList.filter((item) => item !== action.payload);
      return { ...state, favList: newFavListR };
    // case SET_PHOTO_DATA:

    //    return {}
    // case SET_TOPIC_DATA:
    case "SELECT_PHOTO":
      return { ...state, selectedPhoto: action.payload };

    case "DISPLAY_PHOTO_DETAILS":
      console.log("action.payload in display photo details", action.payload);
      return { ...state, showModal: action.payload };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {
  // const [showModal, setShowModal] = useState(false);
  //const [selectedPhoto, setSelectedPhoto] = useState({});
  //const [favList, setFavList] = useState([]);

  // The state object will contain the entire state of the application.
  // The updateToFavPhotoIds action can be used to set the favourite photos.
  // The setPhotoSelected action can be used when the user selects a photo.
  // The onClosePhotoDetailsModal action can be used to close the modal.

  //const [state,setState]=useState({selectedPhoto,favList,showModal})

  // const state = {
  //   selectedPhoto: selectedPhoto,
  //   favList: favList,
  //   showModal: showModal,
  // };
  const initialState = {
    favList: [],
    showModal: false,
    selectedPhoto: {},
  };
  //console.log("initialState:", initialState);

  // const toggleModal = () => {
  //  setShowModal(!showModal);
  // };
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (favPhotoId) => {
    // setFavList(list);
    // console.log("favPhotoId:", favPhotoId);
    dispatch({ type: "FAV_PHOTO_ADDED", payload: favPhotoId });
  };

  // const updateToFavPhotoIds = (favPhotoId) => {
  //   // setFavList(list);
  //  // console.log("favPhotoId:", favPhotoId);
  //   dispatch({ type: "FAV_PHOTO_R", payload: favPhotoId });
  // };
  const setPhotoSelected = (photo) => {
    //setSelectedPhoto(photo);
    //dispatch here
    //console.log("photo:", photo);
    dispatch({ type: "SELECT_PHOTO", payload: photo });
  };
  const onClosePhotoDetailsModal = () => {
    // if (showModal) {
    //setShowModal(!showModal);

    //console.log("showModal value before dispatch: ", showModal);
    dispatch({ type: "DISPLAY_PHOTO_DETAILS", payload: !state.showModal });
    // console.log("showModal value after dispatch: ", !state.showModal);

    // }
  };
  //const [state, dispatch] = useReducer(reducer, initialState);

  //console.log("state:", state);
  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

export default useApplicationData;

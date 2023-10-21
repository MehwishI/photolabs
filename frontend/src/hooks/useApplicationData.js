import React, { useReducer, useState, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "FAV_PHOTO_ADDED":
      console.log("action:", action);
      const newFavList = [...state.favList, action.payload];
      return { ...state, favList: newFavList };

    case "FAV_PHOTO_REMOVED":
      const newFavListR = state.favList.filter(
        (item) => item !== action.payload
      );
      return { ...state, favList: newFavListR };

    case "SET_PHOTO_DATA":
      return { ...state, photoData: action.payload };

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
    photoData: [],
    topicData: [],
    favList: [],
    showModal: false,
    selectedPhoto: {},
  };
  //console.log("initialState:", initialState);

  // const toggleModal = () => {
  //  setShowModal(!showModal);
  // };
  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((photoData) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData })
      );
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

  // const updateToFavPhotoIds = (favPhotoId) => {
  //   // setFavList(list);
  //  // console.log("favPhotoId:", favPhotoId);
  //   dispatch({ type: "FAV_PHOTO_R", payload: favPhotoId });
  // };
  const setPhotoSelected = (photo) => {
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
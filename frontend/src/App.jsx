import React, { useState } from "react";
import useApplicationData from "hooks/useApplicationData";

//import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
import TopNavigationBar from "./components/TopNavigationBar";

import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "./components/PhotoList";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        toggleModal={onClosePhotoDetailsModal}
        selectedPhoto={state.selectedPhoto}
        setSelectedPhoto={setPhotoSelected}
        key={state.selectedPhoto.id}
        id={state.selectedPhoto.id}
        favList={state.favList}
        photoData={state.photoData}
        setFavList={updateToFavPhotoIds}
      />
      {state.showModal && (
        <>
          <PhotoDetailsModal
            showModal={state.showModal}
            setShowModal={onClosePhotoDetailsModal}
            selectedPhoto={state.selectedPhoto}
            id={state.selectedPhoto.id}
            favList={state.favList}
            setFavList={updateToFavPhotoIds}
            photoData={state.photoData}
          />
        </>
      )}
    </div>
  );
};

export default App;

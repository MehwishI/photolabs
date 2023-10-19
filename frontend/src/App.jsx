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
  // const [showModal, setShowModal] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState("");
  // const [favList, setFavList] = useState([]);

  // const toggleModal = () => {
  //   setShowModal(true);
  // };
  //console.log("favList:", favList);

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
          />
        </>
      )}
    </div>
  );
};

export default App;

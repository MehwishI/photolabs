import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import photos from "mocks/photos";

const HomeRoute = (props) => {
  const {
    favList,
    topicData,
    getPhotosByTopics,
    setFavList,
    toggleModal,
    selectedPhoto,
    setSelectedPhoto,
    photoData,
    setDarkMode,
    isDarkMode,
  } = props;
  return (
    <div className="home-route">
      <TopNavigationBar
        favList={favList}
        topicData={topicData}
        getPhotosByTopics={getPhotosByTopics}
        setDarkMode={setDarkMode}
        isDarkMode={isDarkMode}
      />
      <PhotoList
        favList={favList}
        setFavList={setFavList}
        toggleModal={toggleModal}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
        key={selectedPhoto.id}
        id={selectedPhoto.id}
        photoData={photoData}
      />
    </div>
  );
};

export default HomeRoute;

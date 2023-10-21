import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar
        favList={props.favList}
        topicData={props.topicData}
        getPhotoByTopics={props.getPhotoByTopics}
      />
      <PhotoList
        favList={props.favList}
        setFavList={props.setFavList}
        toggleModal={props.toggleModal}
        selectedPhoto={props.selectedPhoto}
        setSelectedPhoto={props.setSelectedPhoto}
        key={props.selectedPhoto.id}
        id={props.selectedPhoto.id}
        photoData={props.photoData}
      />
    </div>
  );
};

export default HomeRoute;

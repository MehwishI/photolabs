import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = (props) => {
  const {
    favList,
    setFavList,
    toggleModal,
    selectedPhoto,
    setSelectedPhoto,
    key,
    id,
    photoData,
  } = props;

  const photoList = photoData.map((photo) => {
    return (
      <PhotoListItem
        key={key}
        id={id}
        favList={favList}
        setFavList={setFavList}
        toggleModal={toggleModal}
        photoData={photo}
        setSelectedPhoto={setSelectedPhoto}
      />
    );
  });

  return <ul className="photo-list">{photoList}</ul>;
};

export default PhotoList;

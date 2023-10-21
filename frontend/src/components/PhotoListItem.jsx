import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    key,
    id,
    photoData,
    setSelectedPhoto,
    toggleModal,
    favList,
    setFavList,
  } = props;

  const handleClick = () => {
    setSelectedPhoto(photoData);
    toggleModal();
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        favList={favList}
        setFavList={setFavList}
        id={photoData.id}
      />
      <img
        src={photoData.urls.regular}
        className="photo-list__image"
        onClick={() => handleClick()}
      ></img>
      <br />
      <div className="photo-list__user_header">
        <img
          src={photoData.user.profile}
          className="photo-list__user-profile"
        ></img>
        <div className="photo-list__user-details">
          <h3 className="photo-list__user-info">{photoData.user.username}</h3>
          <div className="photo-list__user-location">
            {photoData.location.city}, {photoData.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

import React, { useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  //destructuring props

  const {
    showModal,
    setShowModal,
    favList,
    setFavList,
    toggleModal,
    selectedPhoto,
    setSelectedPhoto,
    key,
    id,
    photoData,
  } = props;

  return showModal ? (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button
          className="photo-details-modal__close-button"
          onClick={() => setShowModal()}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <PhotoFavButton
        favList={favList}
        setFavList={setFavList}
        //key={props.key}
        id={id}
        modal={true}
      />

      <img
        src={selectedPhoto.urls.regular}
        className="photo-details-modal__image"
        onClick={() => handleClick()}
      ></img>
      <br />
      <div className="photo-details-modal__header">
        <img
          src={selectedPhoto.user.profile}
          className="photo-details-modal__photographer-profile"
        ></img>
        <div className="photo-details-modal__photographer-details">
          <h3 className="photo-details-modal__photographer-info">
            {selectedPhoto.user.username}
          </h3>
          <h3 className="photo-details-modal__photographer-location">
            {selectedPhoto.location.city}, {selectedPhoto.location.country}
          </h3>
        </div>
      </div>
      <div className="photo-details-modal_similar-photos">Similar Photos</div>
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
  ) : null;
};

export default PhotoDetailsModal;

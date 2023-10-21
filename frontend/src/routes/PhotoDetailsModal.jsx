import React, { useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

// const handleClick = () => {
//   setShowModal(false);

//   // window.opener = null;
//   // window.open("", "_self");
//   // window.close();
// };

const PhotoDetailsModal = (props) => {
  console.log("props received by photodetailsmodal:-", props);
  const { showModal, setShowModal, selectedPhoto } = props;
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
        favList={props.favList}
        setFavList={props.setFavList}
        //key={props.key}
        id={props.id}
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
  ) : null;
};

export default PhotoDetailsModal;

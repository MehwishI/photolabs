import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

const PhotoListItem = (props) => {
  //console.log(props);
  const { photoData, setSelectedPhoto, toggleModal, favList, setFavList } =
    props;

  const handleClick = () => {
    toggleModal();

    // console.log("props received by photolistitem", props);
    setSelectedPhoto(photoData);
    //  console.log("setSelectedphoto", selectedPhoto);
  };
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        favList={favList}
        setFavList={setFavList}
        //key={props.key}
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

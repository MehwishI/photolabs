import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

// const sampleDataForPhotoList = [
//   {
//     id: "1",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     },
//     user: {
//       id: "1",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
//   {
//     id: "2",
//     location: {
//       city: "Toronto",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
//     },
//     user: {
//       id: "2",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
//   {
//     id: "3",
//     location: {
//       city: "Ottawa",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
//     },
//     user: {
//       id: "3",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
// ];

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
  console.log("photoData received by Photolist", photoData);
  const photoList = photoData.map((photo) => {
    return (
      <PhotoListItem
        //sampleData={photo}
        key={id}
        id={id}
        favList={favList}
        setFavList={setFavList}
        toggleModal={toggleModal}
        // selectedPhoto={prop}
        photoData={photo}
        setSelectedPhoto={setSelectedPhoto}
      />
    );
  });

  return <ul className="photo-list">{photoList}</ul>;
};

export default PhotoList;

import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  // const [favList, setFavList] = useState([]);

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar favList={props.favList} />
      <PhotoList
        favList={props.favList}
        setFavList={props.setFavList}
        toggleModal={props.toggleModal}
        selectedPhoto={props.selectedPhoto}
        setSelectedPhoto={props.setSelectedPhoto}
        key={props.selectedPhoto.id}
        id={props.selectedPhoto.id}
      />
    </div>
  );
};

export default HomeRoute;

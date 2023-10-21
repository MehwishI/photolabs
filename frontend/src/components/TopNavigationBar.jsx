import React, { useState, useEffect } from "react";

import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";

const TopNavigationBar = (props) => {
  const [isFavPhotoExist, setisFavPhotoExist] = useState(false);
  //console.log("in nav bar", props.favList);

  useEffect(() => {
    props.favList.length !== 0
      ? setisFavPhotoExist(true)
      : setisFavPhotoExist(false);
  }, [props.favList]);
  //isFavPhotoExist={isFavPhotoExist}
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topicData={props.topicData}
        getPhotosByTopics={props.getPhotosByTopics}
      />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigationBar;

import React, { useState, useEffect } from "react";

import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";

const TopNavigationBar = (props) => {
  const [isFavPhotoExist, setisFavPhotoExist] = useState(false);
  
  const { favList, topicData, getPhotosByTopics } = props;

  useEffect(() => {
    favList.length !== 0 ? setisFavPhotoExist(true) : setisFavPhotoExist(false);
  }, [favList]);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={topicData} getPhotosByTopics={getPhotosByTopics} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigationBar;

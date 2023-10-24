import React, { useState, useEffect } from "react";

import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";
import useApplicationData from "hooks/useApplicationData";

const TopNavigationBar = (props) => {
  const [isFavPhotoExist, setisFavPhotoExist] = useState(false);

  const { favList, topicData, getPhotosByTopics, setDarkMode, isDarkMode } =
    props;
  //const { state, setDarkMode } = useApplicationData();

  useEffect(() => {
    favList.length !== 0 ? setisFavPhotoExist(true) : setisFavPhotoExist(false);
  }, [favList]);

  const togglemode = () => {
    //isDarkMode ? setDarkMode(false): setDarkMode(true);
    setDarkMode(!isDarkMode);
  };
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={topicData} getPhotosByTopics={getPhotosByTopics} />

      <FavBadge isFavPhotoExist={isFavPhotoExist} />
      <button onClick={togglemode}>
        {/* {state.isDarkMode ? <div>Dark mode</div> : <div>Light Mode </div>} */}
        Switch mode
      </button>
    </div>
  );
};

export default TopNavigationBar;

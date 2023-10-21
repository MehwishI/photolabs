import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topicData, getPhotosByTopics } = props;
  const topicList = topicData.map((topic) => {
    return (
      <TopicListItem
        topic={topic}
        key={topic.id}
        getPhotosByTopics={getPhotosByTopics}
      />
    );
  });
  return <div className="top-nav-bar__topic-list">{topicList}</div>;
};

export default TopicList;

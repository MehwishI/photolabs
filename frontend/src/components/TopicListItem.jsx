import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { topic, getPhotosByTopics } = props;
  return (
    <div className="topic-list__item">
      <h3 onClick={() => getPhotosByTopics(topic.id)}>{topic.title}</h3>
    </div>
  );
};

export default TopicListItem;

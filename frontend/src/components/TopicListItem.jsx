import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  const { topic, getPhotosByTopics } = props;
  return (
    <div className="topic-list__item">
      <h3 onClick={() => getPhotosByTopics(topic.id)}>{topic.title}</h3>
    </div>
  );
};

export default TopicListItem;

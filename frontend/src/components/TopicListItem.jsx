import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};
// const handleClick=(props.id)=>{
//   props.getPhotosByTopics

// }

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <h3 onClick={() => props.getPhotosByTopics(props.topic.id)}>
        {props.topic.title}
      </h3>
    </div>
  );
};

export default TopicListItem;

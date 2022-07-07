import React from "react";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList({ feed, handleClick }) {
  if (!feed || feed.length === 0) {
    return (
      <div>
        <p>No feedback yet!</p>
      </div>
    )
  }
  return (
    <div className="feedback-list">
      {feed.map((item) => (
        <FeedbackItem key={item.id} item={item} handleClick={handleClick} />
      ))}
    </div>
  );
}

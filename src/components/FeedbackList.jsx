import React from "react";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList({ feedback, handleClick }) {
  if (!feedback || feedback.lenght === 0) {
    return (
      <div className="p-2">
        <p>No feedback yet!</p>{" "}
      </div>
    );
  }
  return (
    <div className="feedback-List">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleClick={handleClick} />
      ))}
    </div>
  );
}

import {motion,AnimatePresence} from 'framer-motion'
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
      <AnimatePresence>
          {feed.map((item) => (
            <motion.div 
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
              <FeedbackItem key={item.id} item={item} handleClick={handleClick} />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
}

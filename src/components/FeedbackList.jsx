import {motion,AnimatePresence} from 'framer-motion'
import FeedbackContext from '../Context/FeedbackContext';
import { useContext } from 'react';
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return (
      <div>
        <p>No feedback yet!</p>
      </div>
    )
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
          {feedback.map((item) => (
            <motion.div 
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
              <FeedbackItem key={item.id} item={item}  />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
}

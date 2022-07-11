import {motion,AnimatePresence} from 'framer-motion'
import FeedbackContext from '../Context/FeedbackContext';
import { useContext } from 'react';
import FeedbackItem from "./FeedbackItem";
import Spinner from './shared/spinner';

export default function FeedbackList() {
  const {feedback,isLoading} = useContext(FeedbackContext)

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return (
      <div>
        <p>No feedback yet!</p>
      </div>
    )
  }
  return isLoading ? <Spinner/> : (<div className="feedback-list">
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
</div>)
  
}

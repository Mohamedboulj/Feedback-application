import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';
import FeedbackItem from "./FeedbackItem";

export default function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
  let average = Math.round(feedback.reduce((acc,{rating})=>
    (acc+rating)
  ,0)/feedback.length)
  
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating : {isNaN(average) ? 0 : average }</h4>
    </div>
  )
}

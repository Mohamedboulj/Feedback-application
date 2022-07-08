import Card from "./shared/Card"
import { FaTimes } from "react-icons/fa"
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'


function FeedbackItem({item}) {
  const {deleteFeedback} = useContext(FeedbackContext)

  return (
    <Card className="card">
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=>deleteFeedback(item.id)}>
        <FaTimes color='purple' />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;

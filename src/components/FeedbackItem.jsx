import React from 'react'
import {useState} from 'react'
function FeedbackItem() {
  const [rating,SetRating] = useState(7);
  const [feed,SetFeed] = useState('default feedback');


  return (
    <div className='card'>
        <div className='num-display'>{rating}</div>
        <div className='text-display'>{feed}</div>

    </div>
  )
}

export default FeedbackItem
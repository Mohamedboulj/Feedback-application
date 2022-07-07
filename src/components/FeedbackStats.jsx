import React from 'react'

export default function FeedbackStats({feed}) {
  
  let average = Math.round(feed.reduce((acc,{rating})=>
    (acc+rating)
  ,0)/feed.length)
  
  return (
    <div className='feedback-stats'>
        <h4>{feed.length} Reviews</h4>
        <h4>Average rating : {isNaN(average) ? 0 : average }</h4>
    </div>
  )
}

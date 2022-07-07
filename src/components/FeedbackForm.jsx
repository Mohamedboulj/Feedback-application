import { useState } from 'react'
import Ratingselect from './Ratingselect'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm() {
    const [text,SetText] = useState('')
    const [btnDisabled,SetBtnDisabled] = useState(true)
    const [message,SetMessage] = useState('')
    const [rating,SetRating] = useState(10)
    const handleTextChange = (e)=>{
        if (text ==='') {
            SetBtnDisabled(true)
            SetMessage(null)
        }else if (text !== '' && text.trim().length <9 ){
            SetBtnDisabled(true)
            SetMessage('Text must be at least 10 characters!')
        } else{
            SetBtnDisabled(false)
            SetMessage(null)
        }
        SetText(e.target.value)
    }
  return (
    <Card>
        <form>
            <h2>How would you rate our services?</h2>
            <Ratingselect select={(rating)=>SetRating(rating)}/>
            <div className='input-group'>
                <input  
                type="text"
                
                placeholder='Write a review'
                onChange={handleTextChange}
                value={text} />
                <Button type='submit' isDisabled={btnDisabled} >Send</Button>
            </div>
            {message && <div className='message'>{message}</div> }
        </form>
    </Card>
  )
}

export default FeedbackForm
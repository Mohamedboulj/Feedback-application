import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you wanna delete?')){
        setFeedback(feedback.filter((item) => item.id !== id))
    }
   
  }
  return (
    <>
      <Header />
      <div>
        <FeedbackList feed={feedback} handleClick={deleteFeedback} />
      </div>
    </>
  );
}
export default App;

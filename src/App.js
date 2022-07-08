
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/Pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback)=>{
    newFeedback.id = uuidv4()
    setFeedback([newFeedback,...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you wanna delete?')){
        setFeedback(feedback.filter((item) => item.id !== id))
    }
   
  }
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={
            <>
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStats feed={feedback} />
              <FeedbackList feed={feedback} handleClick={deleteFeedback} />
              <AboutIconLink/>
            </>
          }>
          </Route>
          <Route path="/about" element={<AboutPage />} />
           
        </Routes>
       
      </div>
    </BrowserRouter>
  );
}
export default App;

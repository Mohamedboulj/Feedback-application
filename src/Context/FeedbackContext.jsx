import { createContext, useState,useEffect} from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "context 1",
      rating: 10,
    },
    {
      id: 2,
      text: "context 2",
      rating: 7,
    },
    {
      id: 3,
      text: "context 3",
      rating: 6,
    },
  ]);

  const [FeedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you wanna delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  const updateFeedback = (id,feedbackUpd) => {
    setFeedback(
      feedback.map((item) =>
        (item.id === id ? { ...item, ...feedbackUpd } : item)
      )
    )
  }
  const fetchFeedback = async () =>{
    const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
    const data = await response.json()
    setFeedback(data)

  }
  useEffect(() => {
    fetchFeedback()

  })
  

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        FeedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

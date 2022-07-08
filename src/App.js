import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/Pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./Context/FeedbackContext";

function App() {
    
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm/>
                <FeedbackStats/>
                <FeedbackList/>
                <AboutIconLink/>
              </>
            }>
            </Route>
            <Route path="/about" element={<AboutPage />} />
            
          </Routes>
        
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}
export default App;

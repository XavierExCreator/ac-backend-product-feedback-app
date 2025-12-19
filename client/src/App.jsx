import { Routes, Route, Link } from 'react-router-dom'; //importing install dom
import Home from './Pages/Home'; //importing home page
import AddFeedbackApp from './Pages/AddFeedbackApp';
// import { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <>
        <div className='feedbackAppsLinks'>
      <Routes>

        {/*When user clicks 'back' button in add feedback page*/}
        <Route path="/" element={ <Home /* Add what is needed inside here *//>} />

        {/*When user clicks the 'add suggestion' button in the homepage 
        OR
        When there are no suggestions on a specific category
        */}
        <Route path="/add-feedback-page" element={ <AddFeedbackApp /* Add what is needed inside here *//>} />
        </Routes>
        
    </div>
    </>
  );
}

export default App;

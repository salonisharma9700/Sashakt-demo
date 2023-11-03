import React from 'react';
import { Route ,Routes} from 'react-router-dom';
import './App.css'
import MyNav from './ComponentApp.js/MyNav';
import Home from './ComponentApp.js/Home';
import AboutUs from './ComponentApp.js/AboutUs'
import ParentalControls from './ComponentApp.js/PrentalControls'
import Feedback from './ComponentApp.js/Feedback'
import Chatbot from './ComponentApp.js/Chatbot'


function App() {

  return (
    <div className="App">
      <header/>
      <MyNav/>
      <React.StrictMode>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <AboutUs/> } />
        <Route path="/parent" element={ <ParentalControls/> } />
        <Route path="/chatbot" element={ <Chatbot/> } />
        <Route path="/feedback" element={ <Feedback/> } />
        
      </Routes>

      </React.StrictMode>

    </div>


    



      

  );
}

export default App; 



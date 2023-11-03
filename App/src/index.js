import {React} from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from "react-router-dom";
import { render } from "react-dom/client";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
    <App />
    </Router> 
  </StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

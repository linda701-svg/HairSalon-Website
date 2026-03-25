import React from 'react';
import ReactDOM from 'react-dom/client';
import './custom.scss';
import App from './App';
import axios from 'axios';
import reportWebVitals from './reportWebVitals';
axios.defaults.baseURL = 'https://hairsalon-website-5inh.onrender.com';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

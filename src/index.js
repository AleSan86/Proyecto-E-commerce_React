import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Firebase */
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1-SjKcU9ISlN63aScG_rycW8fX8Ou4zk",
  authDomain: "react-e-commerce-25981.firebaseapp.com",
  projectId: "react-e-commerce-25981",
  storageBucket: "react-e-commerce-25981.appspot.com",
  messagingSenderId: "874303337162",
  appId: "1:874303337162:web:ca201b2000736161707a33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();

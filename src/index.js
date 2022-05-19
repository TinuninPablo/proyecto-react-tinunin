import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/cart-context';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCLTb8dtP4vjviiupIhSo9Dz6EgtM21Rkc",
  authDomain: "proyecto-react-tinunin.firebaseapp.com",
  projectId: "proyecto-react-tinunin",
  storageBucket: "proyecto-react-tinunin.appspot.com",
  messagingSenderId: "22492442753",
  appId: "1:22492442753:web:dee9acffe533b8f08c5d80"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


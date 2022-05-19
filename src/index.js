import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './CartContext/cart-context';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLTb8dtP4vjviiupIhSo9Dz6EgtM21Rkc",
  authDomain: "proyecto-react-tinunin.firebaseapp.com",
  projectId: "proyecto-react-tinunin",
  storageBucket: "proyecto-react-tinunin.appspot.com",
  messagingSenderId: "22492442753",
  appId: "1:22492442753:web:dee9acffe533b8f08c5d80"
};

const app=initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db

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




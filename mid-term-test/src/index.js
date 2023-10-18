import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddProduct from './components/AddProduct/AddProducts'; // Correct the import path
import reportWebVitals from './reportWebVitals';
import SignUpUser from './components/signUpUser/signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddProduct />
    <SignUpUser/>
  </React.StrictMode>
);

reportWebVitals();
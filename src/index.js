import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyConverter from './components/CurrencyConverter';
import Tools from './components/Tools';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './css/custom.css'
import Feedback from './components/Feedback';

ReactDOM.render(
  <React.StrictMode>
    <div className="container-fluid header">
      <NavBar />
      <CurrencyConverter />
    </div>
    <Tools />
    <Feedback />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
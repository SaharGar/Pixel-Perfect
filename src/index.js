import React from 'react';
import ReactDOM from 'react-dom';
import { RootCmp } from './RootCmp';
import { HashRouter as Router } from 'react-router-dom'

// Styles
import "./assets/styles/main.scss"



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RootCmp />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


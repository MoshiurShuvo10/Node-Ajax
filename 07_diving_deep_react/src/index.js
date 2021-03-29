import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Jsonlist from './components/Jsonlist';
import App from './App';
import About from './components/router-components/About'
import Home from './components/router-components/Home'
import Contact from './components/router-components/Contact'
import Profile from './components/router-components/Profile'
import { Route, Link, BrowserRouter as Router } from '../node_modules/react-router-dom'

const myrouter = (
  <Router>
    <div>   
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
    </div>
    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/profile" component={Profile} />
  </Router>
);

ReactDOM.render(
  myrouter,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import Profile from './Profile';
import Login from './login';
import Signup from './signup';
import Varma from './varma';
import './index.css';



/*ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={ App }/>
    <Route path="/Profile" component={ Profile } />
	<Route path="/login" component={ Login } />
	<Route path="/signup" component={ Signup } />
  </Router>,
document.getElementById('root')
);

 

/* ReactDOM.render(
 <App />,
 document.getElementById('App')
 );
ReactDOM.render(
 <Profile />,
 document.getElementById('Profile')
 );*/
ReactDOM.render(
 <Varma />,
 document.getElementById('varma')
 );

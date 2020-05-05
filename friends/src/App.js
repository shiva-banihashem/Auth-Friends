import React, { Component } from 'react';
import {Switch,Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getFriends } from './actions';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

import Home from './components/Home';

function App() {
  

  
    return (
    <div className="App">
      <h2>Auth Friends</h2>
      
      <ul>
      <li>
            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
          </li>
          <li>
            <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
          </li>
          <li>
            <Link to="/friends" style={{ textDecoration: 'none' }}>Friends Page</Link>

          </li>

          <li>
            <Link  to="/" onClick={() => {localStorage.removeItem("token");}} style={{ textDecoration: 'none' }}>Log Out!</Link>
            </li>
    

          
        </ul>
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/login" component={Login} />
        
        <PrivateRoute exact path="/friends" component={FriendsList} />
      </Switch>
    </div>
    );
  }




export default App;

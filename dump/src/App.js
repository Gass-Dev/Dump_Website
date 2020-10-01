import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Imports components
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

// Imports 
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import PostRegister from './components/Post_Report';

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

function App() {
  return (
    <>
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
          <Header />
          <Switch>

            <Route path="/post_report">
              <PostRegister />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </Router>
      </AlertProvider>
    </>
  );
}

export default App;

// Imports
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import"./sass/style.scss";

//Imports components
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

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

            <Route exact path="/post_report">
              <PostRegister />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
        </Router>
      </AlertProvider>
    </>
  );
}

export default App;

// Imports
import React, { useEffect, useReducer } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Imports components
import Home from './components/pages/Home/Home';
import Header from './components/organisms/Header';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import PostRegister from './components/pages/PostReport/Post_Report';

// Imports 
import "./components/config/style.scss";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
// import AuthContext from './context/auth';
import reducer from './context/reducer';

export const AuthContext = React.createContext({
  state: null,
  dispatch: () => { },
});

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

function App() {
  const [state, dispatch] = useReducer(reducer.reducer, initialState);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const result = await Axios.get("http://localhost:8001/api/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (result.status === 200) {
          console.log("dispatch app.js ==>", result.data);
          dispatch({
            type: "LOAD_USER",
            payload: result.data,
          });
        }
      }
    };

    fetchUser();

  }, []);

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <AuthContext.Provider value={{ state, dispatch }}>
        <Router>
          <Header />
          <Switch>
            {/* <Route exact path="/profil">
            <Profil />
          </Route> */}
            <Route exact path="/post_register">
              <PostRegister />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/" >
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </AlertProvider>
  );
}

export default App;

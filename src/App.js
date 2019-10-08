import React from 'react';
import './scss/main.scss';
import { connect } from 'react-redux'


import {
  HashRouter,
  Route
} from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

function App() {
 
  return (
    <HashRouter>
      <Route exact path={`/`} component={Home}/>
      <Route path={`/logowanie`} component={Login}/>
      <Route path={`/rejestracja`} component={Register}/>
      <Route path={`/wylogowano`} component={Logout}/>
    </HashRouter>
  );
}

export default App

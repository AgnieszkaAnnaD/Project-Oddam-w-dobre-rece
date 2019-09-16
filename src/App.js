import React from 'react';
import './scss/main.scss';
import Home from "./components/Home";
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Route exact path={`/`} component={Home}/>
    </HashRouter>
  );
}

export default App;

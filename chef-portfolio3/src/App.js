import React from 'react';
import {LoginPage} from './components/LoginPage';
import {CreatepostPage} from './components/CreatepostPage';
import Home from "./components/Home/Home";
import Scroll from "./components/Home/Nav/Nav";
import Registration from "./components/Register/Register.js";
import { Switch, Route, Link } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Scroll/>
      <Route exact path="/" component={Home} />
      <Route path="/register" render={()=> {
        return <Registration />
      }} />
    </div>
  );
}

export default App;

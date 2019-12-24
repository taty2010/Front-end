import React from 'react';

import {LoginPage} from './components/LoginPage';
import {CreatepostPage} from './components/CreatepostPage';
import Home from "./components/Home/Home";
import Nav from "./components/Home/Nav/Nav";
import Register from "../src/components/Register/Register";
import { Switch, Route, Link } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
     <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
    </div>
  );
}

export default App;

import React from 'react';
import {LoginPage} from './components/LoginPage';
import {CreatepostPage} from './components/CreatepostPage';
import Home from "./components/Home/Home";
import Scroll from "./components/Home/Nav/Nav";
import Registration from "./components/Register/Register.js";
import Recipes from "./components/RecipePage/RecipePage";
import Post from "./components/CreatepostPage"
import { Switch, Route, Link } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Scroll/>
      <Route exact path="/" component={Home} />
      <Route path="/recipes" render={()=> {
        return <Recipes />
      }} />
      <Route path="/register" render={()=> {
        return <Registration />
      }} />
      <Route path="/userlogin/post" render={()=>{
        return <Post />
      }}/>
    </div>
  );
}

export default App;

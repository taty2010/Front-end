import React, {useState, useEffect} from 'react';
import axios from "axios";
import {LoginPage} from './components/LoginPage';
import {CreatepostPage} from './components/CreatepostPage';
import Home from "./components/Home/Home";
import Scroll from "./components/Home/Nav/Nav";
import Registration from "./components/Register/Register.js";
import Recipes from "./components/Home/Body/Recipes";
import Post from "./components/CreatepostPage";
import Portfolio from "./components/PortfolioPage";
import RecipePage from "./components/RecipePage/RecipePage";
import data from "./Food";
import { Switch, Route, Link } from "react-router-dom";

import './App.css';

function App() {


  const [list, getlist] = useState([]);
  const [recipe, setRecipe] = useState(data);

  useEffect(() => {
    axios
      .get("https://chef-portfolio-done-right.herokuapp.com/api/posts/all")
      .then(response => {
        getlist(response.data.concat(recipe));
        console.log(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, [recipe]);

  console.log(list)

  return (
    <div className="App">
      <Scroll/>
      <Route path="/our-chefs" component={Home} />
      <Route exact path="/recipes" render={()=> {
        return <Recipes recipe={list}/>
      }} />
      <Route path="/recipes/:id" render={(props)=> {
        return <RecipePage {...props} recipe={list}/>
      }}/>
      <Route path="/register" render={()=> {
        return <Registration />
      }} />
      <Route path="/userlogin/post" render={()=>{
        return <Post />
      }}/>
      <Route path="/user/1" render={()=>{
        return <Portfolio />
      }}/>
    </div>
  );
}

export default App;

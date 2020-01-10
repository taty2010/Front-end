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
import RecipeBlock from "./components/Home/Body/RecipeBlock"
import data from "./Food";
import HomePage from "./components/HomePage"
import { Switch, Route, Link } from "react-router-dom";

import './App.css';

function App() {


  const [list, getlist] = useState([]);
  const [recipe, setRecipe] = useState(data);
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function fetchData(){
    try{
      const posts = await axios.get(`https://chef-portfolio-done-right.herokuapp.com/api/posts/all`);
        getlist(posts.data.concat(recipe)); 
    }catch(err) {
        console.log(err);
      }
    try{
      const users = await axios.get(`https://chef-portfolio-done-right.herokuapp.com/api/users/all`);
          setApi(users.data); 
          console.log(users.data)
      }catch(err) {
          console.log(err);
        }
    }
    fetchData()
  }, [recipe]);

  console.log(list)


  return (
    <div className="App">
      <Scroll/>
      <Switch>
      <Route path="/our-chefs" render={() =>{
        return <Home user={api} />
        }} />
      <Route exact path="/recipes" render={()=> {
        return <Recipes recipe={list}/>
      }} />
      <Route path="/register" render={()=> {
        return <Registration />
      }} />
      <Route path="/userlogin/post" render={()=>{
        return <Registration />
      }}/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/recipes/:id" render={(props)=> {
        return <RecipePage {...props} user={api} recipe={list}/>
      }}/>
      <Route path="/user/:id" render={(props)=>{
        return <Portfolio {...props} user={api} recipe={list}/>
      }}/>
      </Switch>
    </div>
  );
}

export default App;

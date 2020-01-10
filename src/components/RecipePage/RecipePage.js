import React,{useEffect, useState} from 'react';
import axios from "axios";
import Recipes from "../Home/Body/Recipes"
import data, {Cuisine} from "../../Food";
import CuisineBlocks from "./CuisineBlocks"
import styled from 'styled-components';
import ChefCard from '../Home/Carousel/ChefCards';
import { Redirect, Route, Link} from "react-router-dom";

const RecipePage = ({recipe, match, user}) => {

    const paramFoodId = match.params.id;

    const recipes = recipe.filter(list => {
        return list.id === Number(paramFoodId);
    })[0];

    console.log(paramFoodId)

    const Header = styled.div`
    background-image: url(${recipes.item_photo});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 95vw;
    height: 75vh;
    margin: 0 auto;
  `;

  const Recipe = styled.div`
    font-size: 2.5vw;
    height: auto;
    width: 85vw;
    margin: 0 auto;
    h4{
        font-size: 1.5vw;
        background-color: pink;
        border: solid 1px gray;
        width: 15%;
        border-radius: 50px;
        margin: 0 auto;
    }
    ul{
        width: 50vw;
        margin: 0 auto;
    }
    ul li{
        padding: 1% 0;
        font-size: 2vw;
        line-height: 45px;
    }
  `;

  console.log(recipe)
  return (
    <div>
      <Header />
      <Recipe>
        <h1>{recipes.recipe_title}</h1>
        <h4>{recipes.Type} </h4>
        <p>{recipes.item_ingredients}</p>
        <ul>
            <li>
                Step1:Cupcake ipsum dolor sit amet cake chocolate cake toffee biscuit. Tiramisu sesame snaps donut chocolate cake tiramisu lemon drops. 
                Jujubes chocolate cake tiramisu bonbon wafer. Chupa chups chocolate cake tiramisu sesame snaps marzipan.",
            </li>
            <li> 
            step2:
            "Pudding powder tart donut. Tart marzipan tart caramels croissant jelly-o. Tiramisu tiramisu cake pie liquorice fruitcake. 
            Carrot cake pie jelly beans soufflé.",
            </li>
            <li>
                step3:
                "Soufflé tootsie roll biscuit marzipan pie. Bonbon halvah tiramisu dragée. Bear claw croissant lollipop tootsie roll ice 
                cream pudding apple pie."
            </li>
        </ul>
        {user.map(list =>{
            if(list.id === Number(paramFoodId)){

                return (<ChefCard className="recipeUser" user={list}><Redirect to='user'/></ChefCard>)
            }
            })
            } 
      </Recipe>
    </div>
  );
}

export default RecipePage
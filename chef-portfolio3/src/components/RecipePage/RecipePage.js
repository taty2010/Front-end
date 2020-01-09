import React,{useEffect, useState} from 'react';
import axios from "axios";
import Recipes from "../Home/Body/Recipes"
import {Cuisine} from "../../Food";
import CuisineBlocks from "./CuisineBlocks"
import styled from 'styled-components';

const RecipePage = ({recipe, match}) => {

    const paramFoodId = match.params.id;

    const recipes = recipe.filter(list => {
        return list.id === Number(paramFoodId);
    })[0];

    console.log(recipes)

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
  `;
  return (
    <div>
      <Header />
      <Recipe>
        {/* {recipes.description}
        {recipes.directions.step1} */}
      </Recipe>
    </div>
  );
}

export default RecipePage
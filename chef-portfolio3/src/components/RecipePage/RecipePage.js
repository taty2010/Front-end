import React,{useEffect, useState} from 'react';
import axios from "axios";
import Recipes from "../Home/Body/Recipes"
import {Cuisine} from "../../Food";
import CuisineBlocks from "./CuisineBlocks"
import styled from 'styled-components';

const RecipePage = () => {
    // const [cuisine, setCuisine] = useState('');
    
    // useEffect(() =>{
    //     axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex"),
    //     Headers:{"content-type":"application/octet-stream",
    //     "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    //     "x-rapidapi-key":"e7410d73cdmshb2f00026e084046p194e49jsn0f6c74ac7e81"}
    // })


        const CuisineB = styled.div `
            display:flex;
            flex-flow: row wrap;
            margin-top: 15%;
        
        `;

    return(
        <div>
            <CuisineB>
                {Cuisine.map((list)=>(
                    <CuisineBlocks key={list.param} list={list} />
                ))}
            </CuisineB>
        <Recipes />
        <Recipes />
        <Recipes />
        </div>
    )
}

export default RecipePage
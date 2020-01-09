import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

const RecipeBlock = ({ recipe }) => {
  const Img = styled.div`
    background-image: url(${recipe.item_photo});
    background-position: center;
    background-size: cover;
    width: 25vw;
    height: 25vh;
    padding: 1% 2%;
  `;

  return (
    <Link to={`recipes/${recipe.id}`}>
    <div className="recipeBlock">
      <Img><span role="img" aria-label={recipe.alt}></span></Img>
      <h2>{recipe.recipe_title}</h2>
      <p>{recipe.time_cook}</p>
    </div>
    </Link>
  );
};

export default RecipeBlock;

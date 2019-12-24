import React from "react";
import styled from "styled-components";

const RecipeBlock = ({ recipe }) => {
  const Img = styled.img`
    width: 350px;
    height: 300px;
  `;

  return (
    <div className="recipeBlock">
      <Img src={recipe.image} alt={recipe.alt} />
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeBlock;

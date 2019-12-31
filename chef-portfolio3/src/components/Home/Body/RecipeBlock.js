import React from "react";
import styled from "styled-components";

const RecipeBlock = ({ recipe }) => {
  const Img = styled.div`
    background-image: url(${recipe.image});
    background-position: center;
    background-size: cover;
    width: 30vw;
    height: 30vh;
  `;

  return (
    <div className="recipeBlock">
      <Img><span role="img" aria-label={recipe.alt}></span></Img>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeBlock;

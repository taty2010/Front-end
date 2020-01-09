import React, { useState } from "react";
import RecipeBlock from "./RecipeBlock";

const Recipes = ({recipe}) => {
  return (
    <div className="recipeContainer">
      {recipe.map(list => (
        <RecipeBlock key={list.id} recipe={list} />
      ))}
    </div>
  );
};

export default Recipes;

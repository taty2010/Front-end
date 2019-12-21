import React, { useState } from "react";
import { Food } from "../../Food";
import RecipeBlock from "./RecipeBlock";

const Recipes = () => {
  return (
    <div className="recipeContainer">
      {Food.map(list => (
        <RecipeBlock key={list.image} recipe={list} />
      ))}
    </div>
  );
};

export default Recipes;

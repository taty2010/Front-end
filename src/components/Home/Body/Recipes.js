import React, { useState } from "react";
import RecipeBlock from "./RecipeBlock";
import Carousel from "../Carousel/Carousel";
import styled from "styled-components"

const Recipes = ({recipe}) => {

  const [random ,setRandom] = useState(Math.floor(Math.random() * Math.floor(9)))
  const list = recipe.map((list, i) => {
    return list.item_photo;
  })

  const Header = styled.div`
  background-image: url(${list[random]});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 50vh;

  `;

  const RecipeContainer = styled.div`
    width: 95vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 5% auto;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-image: url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?");
    @media only screen and (max-width: 600px) {
      flex-flow: column;
    }
  `;
  return (
    <div>
    <Header/>
    <h2>Recipes</h2>
    <RecipeContainer>
      {recipe.map(list => (
        <RecipeBlock key={list.id} recipe={list} />
      ))}
    </RecipeContainer>
    </div>
  );
};

export default Recipes;

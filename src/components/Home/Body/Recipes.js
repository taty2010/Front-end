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

  const Paragraph = styled.div`
  width: 60vw;
  margin: 0 auto;
  padding: 5% 0;
  h2{
    font-size: 3vw;
  }
  p{
    font-size: 1.5vw;
    line-height: 30px;
  }
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
    <Paragraph>
    <h2>Recipes</h2>
    <p>
          Bacon ipsum dolor amet pastrami aliqua in, jowl pariatur lorem short 
          ribs dolor proident. Esse jerky pastrami meatball incididunt, beef nisi 
          rump shankle tongue proident swine tri-tip short ribs. Ullamco turducken
          eiusmod ad, culpa ut meatball dolore cupidatat. T-bone ground round pork 
          loin sunt. Ipsum tempor exercitation id cillum pancetta ut. Lorem frankfurter 
          proident pastrami, doner quis shank ullamco.
    </p>
    </Paragraph>
    <RecipeContainer>
      {recipe.map(list => (
        <RecipeBlock key={list.id} recipe={list} />
      ))}
    </RecipeContainer>
    </div>
  );
};

export default Recipes;

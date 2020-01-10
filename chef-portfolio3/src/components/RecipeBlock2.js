import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons"; 

const RecipeBlock2 = ({ recipe }) => {

  const RecipeBlock = styled.div`
    background-color: rgba(255,255,255,1);
    border-radius: 30px;
    margin: 5%;
    width: 28vw;
    height: 400px;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
    :hover{
      background-color: rgba(121, 87, 104, 0.8);
      box-shadow: 5px 10px 9px rgb(154, 174, 189);
    }
    @media only screen and (max-width: 600px) {
      width: 90vw;
    }
  `;
  const Img = styled.div`
    background-image: url(${recipe.item_photo});;
    background-position: center;
    background-size: cover;
    width: 25vw;
    height: 25vh;
    padding: 1% 2%;
    border-radius: 30px;
    @media only screen and (max-width: 600px) {
      width: 50vw;
    }
  `;

  const Time = styled.div`
    display: flex;
    flex-flow: row;
    width: 20vw;
    justify-content: center;
    align-items: center;
  `;

  const P = styled.p `
    padding: 5%;
  `;

return (
    <Link className="routeLink" to={`recipes/${recipe.id}`}>
    <RecipeBlock>
      <Img><span role="img" aria-label={recipe.alt}></span></Img>
      <h2>{recipe.recipe_title}</h2>
      <Time>
        <FontAwesomeIcon icon={faClock} />
        <P>{recipe.time_cook} min</P>
      </Time>
    </RecipeBlock>
    </Link>
  );
};

export default RecipeBlock2;

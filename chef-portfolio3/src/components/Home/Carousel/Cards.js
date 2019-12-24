import React, { useState } from "react";
import styled from "styled-components";

const Cards = ({ images, index }) => {
  const [translate, setTranslate] = useState("");

  const Card = styled.div`
    background-image: url(${images[index]});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 50% 60%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-content: center;
    height: 500px;
    width: 100%;
    transform: translateX(0px);
    transition: transform ease-out 0.45s;
    color: white;
  `;

  console.log(images[0]);

  return (
    <Card>
      <h1 className="text">ChefTopia</h1>
      {/* <Img src={images} alt="food"></Img> */}
      {/* <h2>{food.title}</h2>
      <p>{food.description}</p> */}
    </Card>
  );
};

export default Cards;

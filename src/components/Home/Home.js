import React from "react";
import Carousel from "../Home/Carousel/Carousel";
import Recipes from "./Body/Recipes";
import Footer from "./Body/Footer";
import Chefs from "./Carousel/ChefCards";
import styled from "styled-components"
const OurChefs = ({user}) => {

  const Wrapper = styled.div`
  display:flex;
  flex-flow: row wrap;
  margin: 0 auto;

  `;

  return (
    <div>
      <Carousel />
      <Wrapper>
      {user.map(list =>(
          <Chefs user={list}/>
      ))
      }
      </Wrapper>
      {/* <Recipes /> */}
      <Footer />
    </div>
  );
};

export default OurChefs;
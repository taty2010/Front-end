import React from "react";
import Carousel from "../components/Home/Carousel/Carousel";
import Recipes from "../components/Home/Body/Recipes";
import Footer from "../components/Home/Body/Footer";
import Chefs from "../components/Home/Carousel/ChefCards";
import styled from "styled-components"
const HomePage = ({user}) => {

  const Wrapper = styled.div`
  display:flex;
  flex-flow: row wrap;
  margin: 0 auto;
  width: 45vw;
  height: 75vh;
  justify-content:center;
  align-items: center;
  h3{
    font-size: 2vw;
    line-height: 40px;
  }
  

  `;

  return (
    <div>
      <Carousel />
      <Wrapper>
      <h3>Life is too short to be alone, too precious. Share it with a friend. We're not trying to teach you a thing to copy. 
              We're just here to teach you a technique, then let you loose into the world. I'm gonna start with a little Alizarin 
              crimson and a touch of Prussian blue Just relax and let it flow. That easy.</h3>
      </Wrapper>
      {/* <Recipes /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
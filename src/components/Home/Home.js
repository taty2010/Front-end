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

  const ChefCards = styled.div`
  display:flex;
  flex-flow: row wrap;
  margin: 0 auto;
  // height: 700px;
  // overflow: hidden;
  @media only screen and (max-width: 600px) {
    flex-flow: column;
  }  `;

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
  @media only screen and (max-width: 600px) {
    width: 90vw;
  } 
  `;

  return (
    <div>
      <Carousel />
      <Wrapper>
      <Paragraph>
        <h2>Our Chefs</h2>
        <p>
          Bacon ipsum dolor amet pastrami aliqua in, jowl pariatur lorem short 
          ribs dolor proident. Esse jerky pastrami meatball incididunt, beef nisi 
          rump shankle tongue proident swine tri-tip short ribs. Ullamco turducken
          eiusmod ad, culpa ut meatball dolore cupidatat. T-bone ground round pork 
          loin sunt. Ipsum tempor exercitation id cillum pancetta ut. Lorem frankfurter 
          proident pastrami, doner quis shank ullamco.
        </p>
      </Paragraph>
      <ChefCards>
      {user.map(list =>(
          <Chefs user={list}/>
      ))
      }
      </ChefCards>
      </Wrapper>
      {/* <Recipes /> */}
      <Footer />
    </div>
  );
};

export default OurChefs;
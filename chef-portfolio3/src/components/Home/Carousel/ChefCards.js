import React from 'react';
import styled from 'styled-components';
import logo from '../../img/user.jpg'

const ChefCards = () => {

    const Wrapper = styled.div`
    width: 85vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
    /* align-items: center; */
    align-content: center;
    justify-items: center;
    margin: 2% auto;

    `;

    const Chef = styled.div`
    justify-content: flex-start;
    display: flex;
    border-bottom: gray 1px solid;
    border-right: gray 1px solid;
    box-shadow: 5px 6px 9px 0px #84949a;
    padding: 2%;
  
    `;
  
    const Img = styled.img`
      background-image: url(${logo});
      width: 50%;
      background-color: palegoldenrod;
      height: 250px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
  
    `;

    const InfoWrap = styled.div`
        display:flex;
        flex-flow: column;
        width: 45vw;
        padding: 2%;

    `
  
    return(
      <Wrapper>
        <h2>Checkout Our New Users!</h2>
        <Chef>
          <Img></Img>
          <InfoWrap>
            <h2>Chef Name</h2>
            <p>Life is too short to be alone, too precious. Share it with a friend. We're not trying to teach you a thing to copy. 
              We're just here to teach you a technique, then let you loose into the world. I'm gonna start with a little Alizarin 
              crimson and a touch of Prussian blue Just relax and let it flow. That easy.</p>
          </InfoWrap>
        </Chef>
      </Wrapper>
    )
  }

  export default ChefCards
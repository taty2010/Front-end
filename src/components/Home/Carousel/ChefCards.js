import React, {useState} from 'react';
import styled from 'styled-components';
import logo from '../../img/user.jpg';
import {Images} from '../../../Food'
import { Route, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; 

const ChefCards = ({user}) => {

  const [index, currentIndex] = useState(
    Math.floor(Math.random() * Math.floor(8))
  );

  const [image, setImage] = useState(user.item_photo)
  console.log(image)

    if(image === null || image === `http//google.com`){
      console.log('hello')
      setImage(Images[index]);
    }
  

    const Wrapper = styled.div`
    // width: 30vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
    /* align-items: center; */
    align-content: center;
    justify-items: center;
    margin: 2% auto;
    filter: grayscale(100%);
    transition: transform 0.3s ease;
    &:hover {
      filter: grayscale(0);
      }
    a{
      color: black;
      text-decoration: none;
      width:max-content;
    }

    p{
      line-height: 25px;
    }
    h3{
      color: brown;
  }
  svg{
      padding: 0 2%;
      color: red;
    }
    
    `;

    const Chef = styled.div`
    justify-content: flex-start;
    display: flex;
    border-bottom: gray 1px solid;
    border-right: gray 1px solid;
    box-shadow: 5px 6px 9px 0px #84949a;
    padding: 2%;
    width: 30vw;
    flex-flow: column;
    @media only screen and (max-width: 600px) {
      width: 90vw;
      padding: 0 ;
    
    }
  
    `;
  
    const Img = styled.img`
      background-image: url(${image});
      width: 95%;
      margin: 0 auto;
      background-color: palegoldenrod;
      height: 250px;
      background-size: cover;
      background-position: top;
      background-repeat: no-repeat;
      ${user.item_photo}? null : background-image: url('')
    `;

    const InfoWrap = styled.div`
        display:flex;
        flex-flow: column;
        // width: 45vw;
        padding: 2%;

    `

    
  
    return(
      <Wrapper>
        {/* <h2>Checkout Our New Users!</h2> */}
        <Link to={`user/${user.id}`}>
        <Chef>
          <Img></Img>
          <InfoWrap>
            <h2>{user.username}</h2>
            <h3><FontAwesomeIcon icon={faMapMarkerAlt} />{user.location}</h3>
            <p>Life is too short to be alone, too precious. Share it with a friend. We're not trying to teach you a thing to copy. 
              We're just here to teach you a technique, then let you loose into the world. I'm gonna start with a little Alizarin 
              crimson and a touch of Prussian blue Just relax and let it flow. That easy.</p>
          </InfoWrap>
        </Chef>
        </Link>
      </Wrapper>
    )
  }

  export default ChefCards
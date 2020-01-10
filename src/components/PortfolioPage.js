import React, {useState} from 'react';
import styled from 'styled-components';
import headerImg from './img/profilebg.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; 
import RecipeBlock from './Home/Body/RecipeBlock';
import { Redirect, Route, Link} from "react-router-dom";
import {Images} from '../Food';

const PortfolioPage = ({user, match, recipe}) => {

   
    // let [rec, setRec] = useState([])
    const paramUserId = match.params.id;
    console.log(match.params)

    const users = user.filter(list => {
        return list.id === Number(paramUserId);
    })[0];

     const recipes = recipe.map(list =>{
        if (list.user_id === Number(paramUserId)){
            return list
        };
    });

    const [index, currentIndex] = useState(
        Math.floor(Math.random() * Math.floor(8))
      );
    
      const [image, setImage] = useState(users.item_photo)
      console.log(image)
    
        if(image === null || image === `http//google.com`){
          console.log('hello')
          setImage(Images[index]);
        }

    const Wrapper = styled.div`


    `;

    const Header = styled.div`
        background-image: linear-gradient(to bottom,rgba(82, 28, 63, 0.76),rgba(31, 28, 82, 0.76)),url(/static/media/profilebg.2a191059.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 95vw;
        margin: 2% auto;
        height: 65vh;
        h1{
            padding-top: 10%;
            color:white;
        }
        h2{
            color: pink;
        }
        svg{
            padding: 0 1%;
            color: white;
        }

    `;

    const ProfileImg = styled.div`
        background-image: url(${image});
        border-radius: 50%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 45vh;
        width: 25vw;
        max-width: 240px;
        max-height: 250px;
        left: 0;
        top: 15vh;
        position: relative;
        margin: 0 auto;
        /* overflow: overlay; */
        /* z-index: 1; */
        box-shadow: inset 0px 0px 0px 3px rgba(255, 255, 255, 0.5);
    `;

    const Body = styled.div`
        width: 45vw;
        margin: 0 auto;
        line-height: 25px;

    `;

    const UserRecipe = styled.div`
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin: 0 auto;


    `

    return (
       <Wrapper>
           <Header>
               <ProfileImg></ProfileImg>
               <h1>{users.username}</h1>
                <h2><FontAwesomeIcon icon={faMapMarkerAlt} />{users.location}</h2>
           </Header>
           <h2>About</h2>
           <Body>
           <p>Let's have a happy little tree in here. You can get away with a lot. I get carried away with this brush 
               cleaning. Follow the lay of the land. It's most important. These little son of a guns hide in your brush 
               and you just have to push them out.
            </p>

            <p>Working it up and down, back and forth. A beautiful little sunset. There's not a thing in the world wrong 
                with washing your brush. Mix your color marbly don't mix it dead. Let your heart be your guide.
            </p>

            <p>Look around, look at what we have. Beauty is everywhere, you only have to look to see it. Now let's put some 
                happy little clouds in here. Without washing the brush, I'm gonna go right into some Van Dyke Brown, some Burnt 
                Umber, and a little bit of Sap Green. Let your imagination just wonder around when you're doing these things.
            </p>
           </Body>
           <UserRecipe>
           {recipe.map(list =>{
            if(list.user_id === Number(paramUserId)){

                return (<RecipeBlock recipe={list}><Redirect to='recipes'/></RecipeBlock>)
            }
            })
            } 
            </UserRecipe>      
       
       </Wrapper>

    );

}

export default PortfolioPage
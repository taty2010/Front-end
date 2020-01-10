import React, {useState} from "react";
import styled from "styled-components"


const CuisineBlocks = ({list}) =>{

    const Img = styled.div`
    background-image: url(${list.img});
    background-color: pink;
    background-position: center;
    background-size: cover;
    width: 20vw;
    height: 20vh;
    padding: 7% 0;
    `;

    const Blocks = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    
    `;

    return(
        <Blocks className="recipeBlock">
        <Img />
        <h2>{list.param}</h2>
        </Blocks>
    
    )
}

export default CuisineBlocks
import React from "react";
import styled from "styled-components";
import logo from "../../img/cheftopia_logo.png";
import { Route, Link, NavLink } from "react-router-dom";


const Footer = () => {
    const Footer = styled.div`
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      height: 250px;
      margin: 0 auto;
      display: flex;
      flex-flow: column;
      justify-content: center;
      a{
        color: white;
        padding: 5% 1%;
        text-decorations: none;
      }
    `;
    return (
      <Footer>
        <h2>Cheftopia</h2>
        <div>
        <div>
        <a href="https://pensive-meninsky-694a51.netlify.com/" target="_blank">Home</a>
        <a href="https://pensive-meninsky-694a51.netlify.com/about.html" target="_blank">About Us</a>
        <Link to="/recipes">Recipes</Link>
        <Link to="/our-chefs">Our Chefs</Link>
      </div>
        </div>
      </Footer>
    );
  };
  
  export default Footer;
import React from "react";
import styled from "styled-components";

const Nav = () => {
  const Nav = styled.h3`
    font-weight: bold;
    border-bottom: 1px solid blue;
    margin: 5% 1%;
    font-size: 1.5rem;
  `;
  return (
    <nav>
      <Nav>Home</Nav>
      <Nav>About Us</Nav>
      <Nav>Recipes</Nav>
      <Nav>Our Chef's</Nav>
      <Nav>Sign In</Nav>
    </nav>
  );
};

export default Nav;

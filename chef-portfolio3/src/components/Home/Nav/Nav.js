import React from "react";
import styled from "styled-components";
import { Route, Link, NavLink } from "react-router-dom";

const Nav = () => {
  const Nav = styled.h3`
    font-weight: bold;
    border-bottom: 1px solid blue;
    margin: 5% 1%;
    font-size: 1.5rem;
  `;
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="chefs">Our Chef's</NavLink>
        <NavLink to="signin">Sign In</NavLink>
        <NavLink to="/Register">Register</NavLink>
    </nav>
  );
};

export default Nav;

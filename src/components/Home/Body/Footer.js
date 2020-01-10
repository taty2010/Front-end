import React from "react";
import styled from "styled-components"


const Footer = () => {
    const Footer = styled.div`
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      height: 350px;
    `;
    return (
      <Footer>
        <h2>This is the Footer</h2>
      </Footer>
    );
  };
  
  export default Footer;
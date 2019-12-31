import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const Left = ({ back }) => {
  const Button = styled.button`
    text-decoration: none;
    background-color: transparent;
  `;

  return (
    <Button onClick={back} className="backArrow">
      <FontAwesomeIcon icon={faArrowAltCircleLeft} />
    </Button>
  );
};

export default Left;

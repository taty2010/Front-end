import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Right = ({ next }) => {
  const Button = styled.button`
    text-decoration: none;
    background-color: transparent;
  `;

  return (
    <Button onClick={next} className="backArrow">
      <FontAwesomeIcon icon={faArrowAltCircleRight} />
    </Button>
  );
};

export default Right;

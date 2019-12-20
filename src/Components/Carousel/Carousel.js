import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cards from "./Cards";
import { Images } from "../../../public/Food";
import Left from "./LButton";
import Right from "./RButton";

const Carousel = () => {
  const [images, setImages] = useState([Images]);
  const [setIndex, currentIndex] = useState(
    Math.floor(Math.random() * Math.floor(4))
  );

  const Container = styled.div`
    width: 100%;
    margin: 0;
    height: 500px;
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
  `;

  const nextSlide = () => {
    if (setIndex < 4) {
      currentIndex(setIndex + 1);
    } else {
      currentIndex(0);
    }
  };

  const prevSlide = () => {
    if (setIndex > 0) {
      currentIndex(setIndex - 1);
    }
  };

  return (
    <div className="header">
      <Left back={prevSlide} />
      <Container>
        {images.map((list, index) => (
          <Cards key={index} index={setIndex} images={list} />
        ))}
      </Container>
      <Right next={nextSlide} />
    </div>
  );
};

export default Carousel;

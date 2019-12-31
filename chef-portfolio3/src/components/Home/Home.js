import React from "react";
import Carousel from "../Home/Carousel/Carousel";
import Recipes from "./Body/Recipes";
import Footer from "./Body/Footer";
const Home = () => {
  return (
    <div>
      <Carousel />
      <Recipes />
      <Footer />
    </div>
  );
};

export default Home;
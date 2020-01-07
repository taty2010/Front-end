import React from "react";
import Carousel from "../Home/Carousel/Carousel";
import Recipes from "./Body/Recipes";
import Footer from "./Body/Footer";
import Chefs from "./Carousel/ChefCards"
const Home = () => {
  return (
    <div>
      <Carousel />
      <Chefs />
      <Recipes />
      <Footer />
    </div>
  );
};

export default Home;
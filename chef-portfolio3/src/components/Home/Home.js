import React from "react";
import Carousel from "../Home/Carousel/Carousel";
import Recipes from "../Home/Body/Recipes";
// import Footer from "./Footer/Footer";
const Home = () => {
  return (
    <div>
      <Carousel />
      <Recipes />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
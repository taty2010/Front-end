import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./Components/Carousel/Carousel";
import Nav from "./Components/Nav/Nav";
import "./styles.css";
import Recipes from "./Components/Body/Recipes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <Recipes />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);

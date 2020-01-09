import React, { useState } from "react";
import main from "../src/components/img/main.jpg";
import logo from "./components/img/cheftopia_logo.png"
import chef1 from "./components/img/chef1.jpg";
import chef2 from "./components/img/chef2.jpg";
import chef3 from "./components/img/chef3.jpg";
import chef4 from "./components/img/chef4.jpg";
import chef5 from "./components/img/chef5.jpg";
import chef6 from "./components/img/chef6.jpg";

export default [
  {
  chef_name: "Fabian",
    id: 51,
    item_photo:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    recipe_title: "Title Here",
    chef_location: "Mexico",
    item_ingredients: "Description Here",
    type: "Lunch",
    time_cook: "15",
    directions: {
      step1:
        "Cupcake ipsum dolor sit amet cake chocolate cake toffee biscuit. Tiramisu sesame snaps donut chocolate cake tiramisu lemon drops. Jujubes chocolate cake tiramisu bonbon wafer. Chupa chups chocolate cake tiramisu sesame snaps marzipan.",

      step2:
        "Pudding powder tart donut. Tart marzipan tart caramels croissant jelly-o. Tiramisu tiramisu cake pie liquorice fruitcake. Carrot cake pie jelly beans soufflé.",

      step3:
        "Soufflé tootsie roll biscuit marzipan pie. Bonbon halvah tiramisu dragée. Bear claw croissant lollipop tootsie roll ice cream pudding apple pie.",

      step4:
        "Tootsie roll pastry brownie chocolate bar donut cake jelly-o. Jelly-o tootsie roll gummi bears chupa chups macaroon toffee croissant macaroon. Liquorice dragée liquorice tootsie roll donut chocolate bar gummi bears gingerbread. Tart icing pie cupcake chupa chups.",

      step5:
        "Donut apple pie sweet roll croissant gingerbread biscuit marzipan tart bear claw. Pie sweet dessert apple pie sweet carrot cake toffee. Cupcake marzipan chupa chups. Lemon drops cupcake biscuit cake dragée caramels gummies cotton candy jelly."
    }
  },
  {
    chef_name: "Rafael",
    id: 52,
    item_photo:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    recipe_title: "Title Here",
    chef_location: "Mexico",
    item_ingredients: "Description Here",
    type: "Lunch",
    time_cook: "",
    directions: {
      step1:
        "Cupcake ipsum dolor sit amet cake chocolate cake toffee biscuit. Tiramisu sesame snaps donut chocolate cake tiramisu lemon drops. Jujubes chocolate cake tiramisu bonbon wafer. Chupa chups chocolate cake tiramisu sesame snaps marzipan.",

      step2:
        "Pudding powder tart donut. Tart marzipan tart caramels croissant jelly-o. Tiramisu tiramisu cake pie liquorice fruitcake. Carrot cake pie jelly beans soufflé.",

      step3:
        "Soufflé tootsie roll biscuit marzipan pie. Bonbon halvah tiramisu dragée. Bear claw croissant lollipop tootsie roll ice cream pudding apple pie.",

      step4:
        "Tootsie roll pastry brownie chocolate bar donut cake jelly-o. Jelly-o tootsie roll gummi bears chupa chups macaroon toffee croissant macaroon. Liquorice dragée liquorice tootsie roll donut chocolate bar gummi bears gingerbread. Tart icing pie cupcake chupa chups.",

      step5:
        "Donut apple pie sweet roll croissant gingerbread biscuit marzipan tart bear claw. Pie sweet dessert apple pie sweet carrot cake toffee. Cupcake marzipan chupa chups. Lemon drops cupcake biscuit cake dragée caramels gummies cotton candy jelly."
    }
  },
  {
    chef_name: "Julia",
    id: 53,
    item_photo:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    recipe_title: "Title Here",
    chef_location: "Mexico",
    item_ingredients: "Description Here",
    type: "Lunch",
    time_cook: "",
    directions: {
      step1:
        "Cupcake ipsum dolor sit amet cake chocolate cake toffee biscuit. Tiramisu sesame snaps donut chocolate cake tiramisu lemon drops. Jujubes chocolate cake tiramisu bonbon wafer. Chupa chups chocolate cake tiramisu sesame snaps marzipan.",

      step2:
        "Pudding powder tart donut. Tart marzipan tart caramels croissant jelly-o. Tiramisu tiramisu cake pie liquorice fruitcake. Carrot cake pie jelly beans soufflé.",

      step3:
        "Soufflé tootsie roll biscuit marzipan pie. Bonbon halvah tiramisu dragée. Bear claw croissant lollipop tootsie roll ice cream pudding apple pie.",

      step4:
        "Tootsie roll pastry brownie chocolate bar donut cake jelly-o. Jelly-o tootsie roll gummi bears chupa chups macaroon toffee croissant macaroon. Liquorice dragée liquorice tootsie roll donut chocolate bar gummi bears gingerbread. Tart icing pie cupcake chupa chups.",

      step5:
        "Donut apple pie sweet roll croissant gingerbread biscuit marzipan tart bear claw. Pie sweet dessert apple pie sweet carrot cake toffee. Cupcake marzipan chupa chups. Lemon drops cupcake biscuit cake dragée caramels gummies cotton candy jelly."
    }
  },
  {
    chef_name: "Karen",
    id: 54,
    item_photo:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    recipe_title: "Title Here",
    chef_location: "Mexico",
    item_ingredients: "Description Here",
    type: "Lunch",
    time_cook: "",
    directions: {
      step1:
        "Cupcake ipsum dolor sit amet cake chocolate cake toffee biscuit. Tiramisu sesame snaps donut chocolate cake tiramisu lemon drops. Jujubes chocolate cake tiramisu bonbon wafer. Chupa chups chocolate cake tiramisu sesame snaps marzipan.",

      step2:
        "Pudding powder tart donut. Tart marzipan tart caramels croissant jelly-o. Tiramisu tiramisu cake pie liquorice fruitcake. Carrot cake pie jelly beans soufflé.",

      step3:
        "Soufflé tootsie roll biscuit marzipan pie. Bonbon halvah tiramisu dragée. Bear claw croissant lollipop tootsie roll ice cream pudding apple pie.",

      step4:
        "Tootsie roll pastry brownie chocolate bar donut cake jelly-o. Jelly-o tootsie roll gummi bears chupa chups macaroon toffee croissant macaroon. Liquorice dragée liquorice tootsie roll donut chocolate bar gummi bears gingerbread. Tart icing pie cupcake chupa chups.",

      step5:
        "Donut apple pie sweet roll croissant gingerbread biscuit marzipan tart bear claw. Pie sweet dessert apple pie sweet carrot cake toffee. Cupcake marzipan chupa chups. Lemon drops cupcake biscuit cake dragée caramels gummies cotton candy jelly."
    }
  },
  {
    chef_name: "Ramsey",
    id: 55,
    item_photo:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    recipe_title: "Title Here",
    chef_location: "Mexico",
    item_ingredients: "Description Here",
    type: "Lunch",
    time_cook: "",
    directions: {
      step1:
        "Cupcake ipsum dolor sit amet cake chocolate cake toffee biscuit. Tiramisu sesame snaps donut chocolate cake tiramisu lemon drops. Jujubes chocolate cake tiramisu bonbon wafer. Chupa chups chocolate cake tiramisu sesame snaps marzipan.",

      step2:
        "Pudding powder tart donut. Tart marzipan tart caramels croissant jelly-o. Tiramisu tiramisu cake pie liquorice fruitcake. Carrot cake pie jelly beans soufflé.",

      step3:
        "Soufflé tootsie roll biscuit marzipan pie. Bonbon halvah tiramisu dragée. Bear claw croissant lollipop tootsie roll ice cream pudding apple pie.",

      step4:
        "Tootsie roll pastry brownie chocolate bar donut cake jelly-o. Jelly-o tootsie roll gummi bears chupa chups macaroon toffee croissant macaroon. Liquorice dragée liquorice tootsie roll donut chocolate bar gummi bears gingerbread. Tart icing pie cupcake chupa chups.",

      step5:
        "Donut apple pie sweet roll croissant gingerbread biscuit marzipan tart bear claw. Pie sweet dessert apple pie sweet carrot cake toffee. Cupcake marzipan chupa chups. Lemon drops cupcake biscuit cake dragée caramels gummies cotton candy jelly."
    }
  },
  {
    chef_name: "Sara",
    id: 56,
    item_photo:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    recipe_title: "Title Here",
    chef_location: "Mexico",
    item_ingredients: "Description Here",
    type: "Lunch",
    time_cook: "",
    directions: {
      step1:
        "Cupcake ipsum dolor sit amet cake chocolate cake toffee biscuit. Tiramisu sesame snaps donut chocolate cake tiramisu lemon drops. Jujubes chocolate cake tiramisu bonbon wafer. Chupa chups chocolate cake tiramisu sesame snaps marzipan.",

      step2:
        "Pudding powder tart donut. Tart marzipan tart caramels croissant jelly-o. Tiramisu tiramisu cake pie liquorice fruitcake. Carrot cake pie jelly beans soufflé.",

      step3:
        "Soufflé tootsie roll biscuit marzipan pie. Bonbon halvah tiramisu dragée. Bear claw croissant lollipop tootsie roll ice cream pudding apple pie.",

      step4:
        "Tootsie roll pastry brownie chocolate bar donut cake jelly-o. Jelly-o tootsie roll gummi bears chupa chups macaroon toffee croissant macaroon. Liquorice dragée liquorice tootsie roll donut chocolate bar gummi bears gingerbread. Tart icing pie cupcake chupa chups.",

      step5:
        "Donut apple pie sweet roll croissant gingerbread biscuit marzipan tart bear claw. Pie sweet dessert apple pie sweet carrot cake toffee. Cupcake marzipan chupa chups. Lemon drops cupcake biscuit cake dragée caramels gummies cotton candy jelly."
    }
  }
];

export const Images = [
  `${chef1}`,
  `${chef2}`,
  `${chef3}`,
  `${chef4}`,
  `${chef5}`,
  `${chef6}`,
  // `${main}`,
  // "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  // "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  // "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  // "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  // "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];

export const chefs = [
  {
    profile:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Title Here",
    bio: "Description Here",
    alt: "alternative text"
  },
  {
    profile:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Title Here",
    bio: "Description Here",
    alt: "alternative text"
  },
  {
    profile:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Title Here",
    bio: "Description Here",
    alt: "alternative text"
  },
  {
    profile:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Title Here",
    bio: "Description Here",
    alt: "alternative text"
  },
  {
    profile:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Title Here",
    bio: "Description Here",
    alt: "alternative text"
  },
  {
    profile:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Title Here",
    bio: "Description Here",
    alt: "alternative text"
  }
]

export const Cuisine = [
      {img: `${logo}`,
     param: "African"},
      {img: `${logo}`,
      param: 'American'},
      {img: `${logo}`,
      param:'Chinese'},
      {img: `${logo}`,
      param:'European'},
      {img: `${logo}`,
      param:'Indian'},
      {img: `${logo}`,
      param:'Japanese'},
      {img: `${logo}`,
      param:'Korean'},
      {img: `${logo}`,
      param:'Latin American'},
      {img: `${logo}`,
      param:'Mediterranean'},
      {img: `${logo}`,
      param:'Thai'},
      {img: `${logo}`,
      param:'Vietnamese'}
]

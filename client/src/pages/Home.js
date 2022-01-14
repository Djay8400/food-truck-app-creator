import React from "react";
// import FormCustomization from "../components/Form";
// import FoodItem from "../components/FoodItem";
import Nav from "../components/Nav";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="main-container">
      <h1>FOOD TRUCK APP</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;

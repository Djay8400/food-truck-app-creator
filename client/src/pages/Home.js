import React from "react";
import FormCustomization from "../components/Form";
// import FoodItem from "../components/FoodItem";
import Nav from "../components/Nav";
// import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="main-container">
      <div className="NavBar">
        <Nav />
        <h1>FOOD TRUCK APP</h1>
        {/* <FormCustomization /> */}
      </div>
      <div>
        {/* dynamically add FTO logo from form */}
        <image></image>
        {/* map through products and list them here */}
        {/* put cart at bottom of page here */}
      </div>
    </div>
  );
};

export default Home;

import React from "react";
// import FormCustomization from "../components/Form";
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
        <div className="app-preview">
          <image></image>
          <h1>Business Name Title</h1>
          {/* add products here */}
        </div>
        <div>{/* dynamically add products */}</div>
      </div>
    </div>
  );
};

export default Home;

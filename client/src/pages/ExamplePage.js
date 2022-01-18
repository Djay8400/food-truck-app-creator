import React from "react";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import yourLogoHere from "../assets/your-logo-here.png";

const ExamplePage = () => {
  return (
    <div className="container">
      <div className="hero-head">
        <a className="" href="../">
          <img
            src={yourLogoHere}
            alt="your-logo-here logo"
            width={"300px"}
          ></img>
        </a>
      </div>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};
export default ExamplePage;

import React from "react";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import yourLogoHere from "../assets/exampleLogo.png";

const ExamplePage = () => {
  return (
    <div className="container example__container">
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

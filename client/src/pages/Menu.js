import React from "react";
// import FormCustomization from "../components/Form";
// import FoodItem from "../components/FoodItem";
import Nav from "../components/Nav";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const Menu = () => {
  const { data } = useQuery(QUERY_USER);
  console.log(data);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <div className="main-container">
      <h1>FOOD TRUCK APP</h1>
      <div className="column mt-5">
        <div className="row">
          {user ? <h2>First Name: {user[0].firstName}</h2> : <h2>No Data</h2>}
          {user ? <h2>Last Name: {user[0].lastName}</h2> : <h2>No Data</h2>}
        </div>
      </div>

      <ProductList />
      <Cart />
    </div>
  );
};

export default Menu;

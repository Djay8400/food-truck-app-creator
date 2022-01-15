import React from "react";
// import FormCustomization from "../components/Form";
// import FoodItem from "../components/FoodItem";
import Nav from "../components/Nav";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const Home = () => {
  const { data } = useQuery(QUERY_USER);
  console.log(data);
  let user;

  if (data) {
    user = data.users;
  }

  return (
    <div className="main-container">
      <h1>FOOD TRUCK APP</h1>
      {user?(<h2>test user: {user[0].firstName}</h2>):<h2>No Data</h2>}
      {/* <ProductList /> */}
      <Cart />
    </div>
  );
};

export default Home;

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
    user = data.user;
  }

  return (
    <div className="main-container">
      <h1>FOOD TRUCK APP</h1>
      <div className="column md-3">
        <div className="row">
          {user ? (
            <table className="table is-bordered is-narrow">
              <thead>
                <tr>
                  <th title="First">First Name</th>
                  <th title="First">Last Name</th>
                  <th title="First">User Name</th>
                  <th title="First">Email Address</th>
                  <th title="First">Business Name</th>
                  <th title="First">Home Address</th>
                  <th title="First">City</th>
                  <th title="First">State</th>
                  <th title="First">Zip</th>
                  <th title="First">Color</th>
                  <th title="First">Logo URL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* this will be changed to use map  function instead of accessing the first index of the array */}
                  <td>{user[0].firstName}</td>
                  <td>{user[0].lastName}</td>
                  <td>{user[0].username}</td>
                  <td>{user[0].email}</td>
                  <td>{user[0].businessName}</td>
                  <td>{user[0].homeAddress}</td>
                  <td>{user[0].city}</td>
                  <td>{user[0].state}</td>
                  <td>{user[0].zipCode}</td>
                  <td>{user[0].primaryColor}</td>
                  <td>{user[0].logo}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <h2>NO DATA</h2>
          )}
        </div>
      </div>

      {/* <ProductList /> */}
      <Cart />
    </div>
  );
};

export default Home;

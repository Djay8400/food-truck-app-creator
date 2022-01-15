import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    businessName: "",
    logo: "",
    menuItem: "",
    menuDescription: "",
    productImage: "",
    price: "",
  });
  //creating empty pieces of state, should it be done here or within GlobalState.js
  // pull in our users like const { users } = state();

  // const [customChoices, setCustomChoices] = useState({
    
  // });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    console.log(formState);
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
        businessName: formState.businessName,
        logo: formState.logo,
        menuItem: formState.menuItem,
        menuDescription: formState.menuDescription,
        productImage: formState.productImage,
        price: formState.price,
      },
    });
    console.log(mutationResponse);
    console.log(error);
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // const handleChange2 = (event) => {
  //   const { name, value } = event.target;
  //   setCustomChoices({
  //     ...customChoices,
  //     [name]: value,
  //   });
  // };

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>

      <h1>TRUCK-FOOD-CUSTOMIZATION</h1>

      <h1>
        <strong>Profile Setup</strong>
      </h1>

      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">First Name:</label>
          <input
            placeholder="First-Name"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last-Name"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="userName">username:</label>
          <input
            placeholder="userName"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Re-type password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd2"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="businessName">Food-Truck-Name</label>
          <input
            placeholder="Food-Truck-Name"
            name="businessName"
            type="businessName"
            id="businessName"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="address">Home Street Address:</label>
          <input
            placeholder="123 North"
            name="homeAddress"
            type="homeAddress"
            id="homeAddress"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="city">City</label>
          <input
            placeholder="city"
            name="city"
            type="city"
            id="city"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="state">State</label>
          <input
            placeholder="state"
            name="state"
            type="state"
            id="state"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            placeholder="Zip-code"
            name="zipCode"
            type="zipCode"
            id="zipCode"
            onChange={handleChange}
          />
        </div>

        <h1>
          <strong>Products</strong>
        </h1>

        <div className="flex-row space-between my-2">
          <label htmlFor="menu">Menu Item</label>
          <input
            placeholder="Menu-item"
            name="menuItem"
            type="menuItem"
            id="menuItem"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="menuDescription">Menu Description</label>
          <input
            placeholder="Menu-item"
            name="menuDescription"
            type="menuDescription"
            id="menuDescription"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="menuDescription">Upload Image</label>
          <input
            placeholder="productImage"
            name="productImage"
            type="file"
            id="productImage"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="price">Price</label>
          <input
            placeholder="price"
            name="price"
            type="price"
            id="price"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="Allergens">Allergens</label>
          <input
            placeholder="allergens"
            name="allergens"
            type="allergens"
            id="allergens"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="logo">Import Logo</label>
          <input
            placeholder="logo"
            name="logo"
            type="file"
            id="logo"
            onChange={handleChange}
          />
        </div>

        <h1>
          <strong>Primary Color</strong>
        </h1>

        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu3"
            >
              <span>Click me</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu3" role="menu">
            <div className="dropdown-content">
              <a href="" className="dropdown-item">
                Red
              </a>
              <a href="" className="dropdown-item">
                Blue
              </a>
              <a href="" className="dropdown-item">
                Green
              </a>
              <a href="" className="dropdown-item">
                Yellow
              </a>
              <a href="" className="dropdown-item">
                Black
              </a>
              <a href="" className="dropdown-item">
                White
              </a>
              <a href="" className="dropdown-item">
                Gray
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                More
              </a>
            </div>
          </div>
        </div>
        <br />
        {/* secondary color */}
        <h1>
          <strong>Secondary Color</strong>
        </h1>

        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu3"
            >
              <span>Click me</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu3" role="menu">
            <div className="dropdown-content">
              <a href="" className="dropdown-item">
                Red
              </a>
              <a href="" className="dropdown-item">
                Blue
              </a>
              <a href="" className="dropdown-item">
                Green
              </a>
              <a href="" className="dropdown-item">
                Yellow
              </a>
              <a href="" className="dropdown-item">
                Black
              </a>
              <a href="" className="dropdown-item">
                White
              </a>
              <a href="" className="dropdown-item">
                Gray
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                More
              </a>
            </div>
          </div>
        </div>
        <br />
        {/* fonts  */}
        <h1>
          <strong>Fonts</strong>
        </h1>

        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu3"
            >
              <span>Click me</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu3" role="menu">
            <div className="dropdown-content">
              <a href="" className="dropdown-item" id="sans-serif">
                Sans-Serif
              </a>
              <a href="" className="dropdown-item" id="serif">
                Serif
              </a>
              <a href="" className="dropdown-item">
                Grid
              </a>
              <a href="" className="dropdown-item">
                Form
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                More
              </a>
            </div>
          </div>
        </div>
        <br />

        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;

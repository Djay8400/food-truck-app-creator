import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    console.log(formState);
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
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

  return (
    <section className="hero signup__hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="auth__title">
            <h1>Sign Up</h1>
          </div>

          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form onSubmit={handleFormSubmit} className="box">
                <div className="field">
                  <label htmlFor="" className="label">
                    Email
                  </label>
                  <div className="control has-icons-left">
                    <input
                      name="email"
                      onChange={handleChange}
                      type="email"
                      id="email"
                      placeholder="e.g. bobsmith@gmail.com"
                      className="input"
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="" className="label">
                    Username
                  </label>
                  <div className="control has-icons-left">
                    <input
                      name="username"
                      onChange={handleChange}
                      type="username"
                      id="username"
                      placeholder="e.g. SmokeySamsBBQ"
                      className="input"
                      required
                    />
                    <span className="icon is-small is-left">
                    <i class="uil uil-user"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="" className="label">
                    Password
                  </label>
                  <div className="control has-icons-left">
                    <input
                      name="password"
                      onChange={handleChange}
                      type="password"
                      id="password"
                      placeholder="*******"
                      className="input"
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <button className="button is-success">Signup</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div className="container my-1">
    //   <h1>
    //     <strong>New User Signup</strong>
    //   </h1>

    //   <form onSubmit={handleFormSubmit} className="box">
    //     <div className="field">
    //       <p className="control has-icons-left has-icons-right">
    //       <label htmlFor="userName">User:</label>
    //         <input
    //           className="input"
    //           name="email"
    //           type="email"
    //           id="email"
    //           onChange={handleChange}
    //           placeholder="Email"
    //         />
    //         <span className="icon is-small is-left">
    //           <i className="fas fa-envelope"></i>
    //         </span>
    //         <span className="icon is-small is-right">
    //           <i className="fas fa-check"></i>
    //         </span>
    //       </p>
    //     </div>
    //     <div className="field">
    //       <p className="control has-icons-left">
    //         <input className="input" type="password" placeholder="Password" />
    //         <span className="icon is-small is-left">
    //           <i className="fas fa-lock"></i>
    //         </span>
    //       </p>
    //     </div>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="userName">User:</label>
    //       <input
    //         placeholder="userName"
    //         name="username"
    //         type="username"
    //         id="username"
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         placeholder="youremail@test.com"
    //         name="email"
    //         type="email"
    //         id="email"
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="pwd">Password:</label>
    //       <input
    //         placeholder="******"
    //         name="password"
    //         type="password"
    //         id="pwd"
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="pwd">Re-type password:</label>
    //       <input
    //         placeholder="******"
    //         name="password"
    //         type="password"
    //         id="pwd2"
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="flex-row flex-end">
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // </div> */
  );
}

export default Signup;

{
  /* <div className="flex-row space-between my-2">
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
        </div> */
}

{
  /* <div className="flex-row space-between my-2">
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
            placeholder="youremail@test.com"
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
        <br /> */
}

import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useMutation } from "@apollo/client";
// import Auth from "../utils/auth";

function FormCustomization() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form submitted");
  };
  return (
    <div>
      <h1>TRUCK-CUSTOMIZATION</h1>
      <form onSubmit={handleSubmit}>
        <h1>
          <strong>Profile Setup</strong>
        </h1>
        <fieldset>
          <label>
            <p>First Name</p>
            <input type={"text"} name="name"></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Last Name</p>
            <input type={"text"} name="name"></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>User Name</p>
            <input type={"text"} name="name"></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Email</p>
            <input type={"email"} name="email"></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Password</p>
            <input type={"password"} name="password"></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Re-enter Password</p>
            <input type={"text"} name="name"></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Business Name</p>
            <input type={"text"} name="name"></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Home Address Street</p>
            <input type={"text"} name="name"></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>City</p>
            <input type={"text"} name="name"></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>State</p>
            <input type={"text"} name="name"></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Zip Code</p>
            <input type={"text"} name="name"></input>
          </label>
        </fieldset>
        <h1>
          <strong>Products</strong>
        </h1>
        <fieldset>
          <label>
            <p>Product Name</p>
            <input type={"text"} name="name"></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Product Description</p>
            <input type={"text"} name="name"></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Product Image</p>
            <input type={"file"} name="image"></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Product Price</p>
            <input type={"text"} name="name"></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Allergens</p>
            <input type={"text"} name="name"></input>
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>
              <strong>Import Logo</strong>
            </p>
            <input type={"file"} name="name"></input>
          </label>
        </fieldset>

        <h1>
          <strong>Customize App Colors</strong>
        </h1>
        {/* customize dropdowns */}
        {/* primary color */}
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

        {/* customize dropdowns */}

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default FormCustomization;

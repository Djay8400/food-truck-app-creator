import React, { useState } from "react";
import FTFlogo from "../assets/FTFlogo.png";
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
    <section className="hero is-fullheight">
      <div className="hero-body level-item signup__container">
        <div className="container">
        <a className="home-dev__logo" href="../">
            <img src={FTFlogo} alt="food-truck-fix logo" width={"150px"}></img>
          </a>
          <div className="signup__title">
            <h1>Sign Up</h1>
          </div>

          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form onSubmit={handleFormSubmit} className="box">
                <div className="field">
                  <label htmlFor="" className="label signup__label">
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
                  <label htmlFor="" className="label signup__label">
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
                      <i className="uil uil-user"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="" className="label signup__label">
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
                  <label htmlFor="" className="label signup__label">
                    Confirm Password
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
                  <button className="button signup__button">Signup</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
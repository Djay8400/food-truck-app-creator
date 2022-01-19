import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import FTFlogo from "../assets/FTFlogo.png";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [htmlFormState, sethtmlFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handlehtmlFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: htmlFormState.email, password: htmlFormState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    sethtmlFormState({
      ...htmlFormState,
      [name]: value,
    });
  };

  return (
    <section className="hero login__hero is-fullheight">
      <div className="hero-body">
        <div className="container">
        <a className="home-dev__logo" href="../">
            <img src={FTFlogo} alt="food-truck-fix logo" width={"150px"}></img>
          </a>
        <div className="login__title">
            <h1>Login</h1>
          </div>
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form onSubmit={handlehtmlFormSubmit} className="box">
                <div className="field">
                  <label htmlFor="email" className="label login__label">
                    Email
                  </label>
                  <div className="control has-icons-left">
                    <input
                      onChange={handleChange}
                      name="email"
                      id="email"
                      type="email"
                      placeholder="e.g. youremail@gmail.com"
                      className="input"
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="" className="label login__label">
                    Password
                  </label>
                  <div className="control has-icons-left">
                    <input
                      onChange={handleChange}
                      name="password"
                      id="password"
                      type="password"
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
                  <button type="submit" className="button login__button">
                    Login
                  </button>
                  {error ? (
                    <div>
                      <article className="message is-danger mt-2">
                        <div className="message-header">
                          <p>Incorrect Email/Password</p>
                          <button className="delete" aria-label="delete"></button>
                        </div>
                      </article>
                    </div>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
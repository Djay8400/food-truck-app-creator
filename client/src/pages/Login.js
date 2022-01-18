import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
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
    <section className="hero signup__hero is-fullheight">
      <div className="hero-body">
        <div className="container">
        <div className="auth__title">
            <h1>Login</h1>
          </div>
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form onSubmit={handlehtmlFormSubmit} className="box">
                <div className="field">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <div className="control has-icons-left">
                    <input
                      onChange={handleChange}
                      name="email"
                      id="email"
                      type="email"
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
                  <label htmlFor="" className="checkbox">
                    <input type="checkbox" />
                    Remember me
                  </label>
                </div>

                <div className="field">
                  <button type="submit" className="button is-hoverable">
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
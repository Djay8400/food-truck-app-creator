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

    // <div className="container my-1">
    //   <h1>
    //     <strong>New User Signup</strong>
    //   </h1>

    //   <htmlForm onSubmit={handlehtmlFormSubmit} className="box">
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
    //   </htmlForm>
    // </div> */
  );
}
// <div className="container my-1">
//   <Link to="/signup">← Go to Signup</Link>

//   <h2>Login</h2>
//   <htmlForm onSubmit={handlehtmlFormSubmit}>
//     <div className="flex-row space-between my-2">
//       <label htmlFor="email">Email address:</label>
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
//     {error ? (
//       <div>
//         <p className="error-text">The provided credentials are incorrect</p>
//       </div>
//     ) : null}
//     <div className="flex-row flex-end">
//       <button type="submit">Submit</button>
//     </div>
//   </htmlForm>
// </div>

export default Login;

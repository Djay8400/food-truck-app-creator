import React from "react";
import burgerBtn from "../js/burgerButton";
// import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <div className="button is-danger">
                <Link to="/signup" style={{ color: "white" }}>
                  Signup
                </Link>
              </div>
              <div className="button is-success">
                <Link to="/login" style={{ color: "white" }}>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>

        // <nav
        //   className="navbar"
        //   role={"navigation"}
        //   aria-label={"main navigation"}
        // >
        //   <div className="navbar-brand">
        //     <Link to="/signup">Signup</Link>
        //   </div>
        //   <li className="mx-1">
        //     <Link to="/login">Login</Link>
        //   </li>
        // </nav>
      );
    }
  }

  return (
    <nav
      className="navbar has-background-light"
      role="navigation"
      aria-label="main navigation navbar-is-dark"
      style={{ fontWeight: "bolder", color: "royalblue" }}
      // style={{ backgroundColor: "#EAC435" }}
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          {/* <img src="" width="112" height="28" /> */}
          <Link to="/">FTF</Link>
        </div>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/home">Home</Link>
          </div>

          <a className="navbar-item">Profile</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">Food-Trucks</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>
      </div>
      <div>{showNavigation()}</div>
    </nav>

    // <header className="flex-row px-1">
    //   <h1>
    //     <Link to="/">
    //       <span role="img" aria-label="shopping bag">
    //         🛍️
    //       </span>
    //       Food-Truck-Fix
    //     </Link>
    //   </h1>

    //   <nav>{showNavigation()}</nav>
    // </header>
  );
}

export default Nav;

// function Nav() {
//   return (
//     <div className="main-container">
//       <Link to="/signup">
//         <p>Signup</p>
//       </Link>
//     </div>
//   );
// }

// export default Nav;

{
  /* <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io"></a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          // onClick={burgerBtn}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>

          <a className="navbar-item">Documentation</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">Profile</a>
              <a className="navbar-item">Food-Trucks</a>

              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/signup">
                <strong>Sign up</strong>
              </Link>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav> */
}

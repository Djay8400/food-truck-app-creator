import React from "react";
import burgerBtn from "../js/burgerButton";
// import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <div className="button is-hoverable">
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <div className="button is-hoverable">
                <Link to="/signup">Signup</Link>
              </div>
              <div className="button is-success">
                <Link to="/login" style={{ color: "white" }}>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
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
          data-target="navbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/example">Example Page</Link>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <Link to="/contact">Contact us</Link>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
              <a className="navbar-item">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?data=Chef Movie&amp;size=100x100"
                  alt="qr code"
                  title="qr code"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>{showNavigation()}</div>
    </nav>
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

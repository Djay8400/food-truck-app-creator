import React from "react";
import burgerBtn from "../js/burgerButton";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNav() {
    if (Auth.loggedIn()) {
      return (
        <nav
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
              onClick={burgerBtn}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div className="navbar-start">
              <a class="navbar-item">Home</a>

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
                  <a className="button is-dark">
                    <strong>Sign up</strong>
                  </a>
                  <a
                    className="button is-light"
                    href="/"
                    onClick={() => Auth.logout()}
                  >
                    Log out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    } else {
      <nav
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
            onClick={burgerBtn}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div className="navbar-start">
            <a class="navbar-item">Home</a>

            <a className="navbar-item">
              <Link to="/orderHistory">Order History</Link>
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-info">
                  <strong>
                    <Link to="/signup">Signup</Link>
                  </strong>
                </a>
                <a className="button is-light">
                  <Link to="/login">Login</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>;
    }
  }
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="Food Item">
            🍲
          </span>
          Food-Truck-Fix
        </Link>
      </h1>

      <nav>{showNav()}</nav>
    </header>
  );
}

export default Nav;

{
  /* <nav className="navbar is-light" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io"></a>

    <a
      role="button"
      className="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      onClick={burgerBtn}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div className="navbar-start">
      <a class="navbar-item">Home</a>

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
          <a className="button is-dark">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">Log in</a>
        </div>
      </div>
    </div>
  </div>
</nav>; */
}

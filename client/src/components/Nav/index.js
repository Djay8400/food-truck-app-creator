import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import burgerBtn from "../js/burgerButton";
function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <div className="button nav__button">
                <a
                  href="/"
                  className="nav__button"
                  onClick={() => Auth.logout()}
                >
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
              <div className="button nav__button">
                <Link to="/signup" className="nav__button">
                  Signup
                </Link>
              </div>
              <div className="button nav__button">
                <Link to="/login" className="nav__button">
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
      className="navbar has-background-light mb-3"
      role="navigation"
      aria-label="main navigation navbar-is-dark"
      // style={{ backgroundColor: "#EAC435" }}
    >
      <div className="navbar-brand">
        <div className="navbar-item nav__item">
          <Link to="/" className="nav__item">
            <i className="uil uil-truck mr-.5"></i>
            <strong>FTF</strong>
          </Link>
        </div>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          onClick={() => burgerBtn}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/example" className="nav__item">
              Example
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="/services" className="nav__item">
              Services
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="/contact" className="nav__item">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div>{showNavigation()}</div>
    </nav>
  );
}

export default Nav;

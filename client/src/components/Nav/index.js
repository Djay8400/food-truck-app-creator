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
          <Link to="/">
            <i className="uil uil-truck mr-.5"></i>FTF
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
            <Link to="/example">Example Page</Link>
          </div>
          <div className="navbar-item">
            <Link to="/services">Services</Link>
          </div>
          <div className="navbar-item">
            <Link to="/contact">Contact</Link>
          </div>

        </div>
      </div>
      <div>{showNavigation()}</div>
    </nav>
  );
}

export default Nav;

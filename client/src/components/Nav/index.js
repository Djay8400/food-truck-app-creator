import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io"></a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">Home</a>
          <a class="navbar-item">Contact</a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-dark">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

// function showNavigation() {
//   if (Auth.loggedIn()) {
//     return (
//       <ul className="flex-row">
//         <li className="mx-1">
//           <Link to="/orderHistory">Order History</Link>
//         </li>
//         <li className="mx-1">
//           {/* this is not using the Link component to logout or user and then refresh the application to the start */}
//           <a href="/" onClick={() => Auth.logout()}>
//             Logout
//           </a>
//         </li>
//       </ul>
//     );
//   } else {
//     return (
//       <ul className="flex-row">
//         <li className="mx-1">
//           <Link to="/signup">Signup</Link>
//         </li>
//         <li className="mx-1">
//           <Link to="/login">Login</Link>
//         </li>
//       </ul>
//     );
//   }
// }

import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
          <div className="columns home-dev__footer">
            <div className="column is-3 is-offset-2">
              <h2>
                <strong>Contact</strong>
              </h2>
              <ul>
                <li>
                  <a href="#">github</a>
                </li>
                <li>
                  <a href="#">email</a>
                </li>
              </ul>
            </div>
            <div className="column is-3">
              <h2>
                <strong>Careers</strong>
              </h2>
              <ul>
                <li>
                  <a href="#">Apply</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
              </ul>
            </div>
            <div className="column is-4">
              <h2>
                <strong>Related</strong>
              </h2>
              <ul>
                <li>
                  <a href="#">Food Truck Websites</a>
                </li>
                <li>
                  <a href="#">Food Network </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content has-text-centered">
            <p>
              <a
                className="icon"
                href="https://github.com/Djay8400/food-truck-app-creator"
              >
                <i className="uil uil-github nav__icon"></i>
              </a>
            </p>
            <div className="control level-item">
              <a href="https://github.com/Djay8400/food-truck-app-creator">
                <div className="tags has-addons">
                  <span className="tag is-dark">FTFdevs</span>
                  <span className="tag is-info">MIT license</span>
                </div>
              </a>
            </div>
            <div className="control level-item mt-3">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?data=Chef Movie&amp;size=100x100"
                alt="qr code"
                title="qr code"
              />
            </div>
          </div>
        </div>
        <script src="../js/bulma.js"></script>
      </footer>
  );
}
export default Footer;
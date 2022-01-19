import React from "react";

function Footer() {
  return (
    <footer className="footer rows mt-5">
      
        <div className="columns">
          <div className="column is-one-third is-offset-2">
            <h2 className="footer__title">
              <strong>Contact</strong>
            </h2>
            <ul>
              <li>
                <a
                  className="icon footer__icon"
                  href="https://github.com/Djay8400/food-truck-app-creator"
                >
                  <i className="uil uil-github"></i>
                  Github
                </a>
              </li>
              <li>
                <a
                  className="icon mt-2 footer__icon"
                  href="https://github.com/Djay8400/food-truck-app-creator"
                >
                  <i className="uil uil-facebook"></i>
                  Facebook
                </a>
              </li>
              <li>
                <a className="icon mt-2 footer__icon" href="/contact">
                  <i className="uil uil-envelope-upload"></i>
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="column is-3">
            <h2 className="footer__title">
              <strong>Careers</strong>
            </h2>
            <ul>
              <li>
                <a className="footer__icon mt-2" href="/contact">
                  Apply
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="control level-item">
            <a href="https://github.com/Djay8400/food-truck-app-creator">
              <div className="tags has-addons">
                <span className="tag is-dark">FTFdevs</span>
                <span className="tag is-info">MIT license</span>
              </div>
            </a>
          </div>
        </div>
      
    </footer>
  );
}
export default Footer;

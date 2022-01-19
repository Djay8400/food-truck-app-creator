import React from "react";
// import FormCustomization from "../components/Form";
// import FoodItem from "../components/FoodItem";
// import Nav from "../components/Nav";
// import Cart from "../components/Cart";
import FTFlogo from "../assets/FTFlogo.png";
import { Link } from "react-router-dom";
// import modal from "../components/js/modal";

const HomeDev = () => {
  return (
    <div>
      <section className="hero home-dev__hero is-small is-bold">
        <div className="hero-head">
          <a className="home-dev__logo" href="../">
            <img src={FTFlogo} alt="food-truck-fix logo" width={"300px"}></img>
          </a>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="home-dev__title">
              Looking to take your business to the next level?
            </h1>
            <h2 className="home-dev__subtitle">
              Setup your very own application with Food Truck Fix.
            </h2>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="columns features">
          <div className="column is-4 home-dev__features">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <i className="uil uil-check nav__icon"></i>
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>Simple</h4>
                  <p>
                    FTF's user-friendly interface allows even first time users
                    to quickly get an application deployed in no time.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4 home-dev__features">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <i className="uil uil-dollar-alt nav__icon"></i>
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>Affordable</h4>
                  <p>
                    FTF is very affordable for small business owners. Different packages are available for a one time purchase.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4 home-dev__features">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <i className="uil uil-lightbulb-alt nav__icon"></i>
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>Ingenious</h4>
                  <p>
                    While maintaing its simplicity, FTF allows you to get as
                    complex as you want in your customization.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
};

export default HomeDev;

import React from "react";
import FTFlogo from "../assets/FTFlogo.png";
import "../index.css";
const HomeDev = () => {
  return (
    <div className="">
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
              Setup your very own mobile app with Food Truck Fix.
            </h2>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="columns features">
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <i className="uil uil-check nav__icon"></i>
              </div>
              <div className="card-content">
                <div className="content home-card__title">
                  <h4 className="home-card__title">Simple</h4>
                  <p>
                    FTF's user-friendly interface allows even first time users
                    to quickly get an application deployed in no time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <i className="uil uil-dollar-alt nav__icon"></i>
              </div>
              <div className="card-content">
                <div className="content home-card__title">
                  <h4>Affordable</h4>
                  <p>
                    FTF is very affordable for small business owners. Different
                    packages are available for a one time purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <i className="uil uil-lightbulb-alt nav__icon"></i>
              </div>
              <div className="card-content">
                <div className="content home-card__title">
                  <h4>Ingenious</h4>
                  <p>
                    While maintaing its simplicity, FTF allows you to get as
                    complex as you want in your customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDev;

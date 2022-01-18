import React from "react";
import truckImg from "../assets/foodtruck.jpg";
import FTFlogo from "../assets/FTFlogo.png";
import { Link } from "react-router-dom";


export default function Contact() {
  return (
    <div>
      <section className="hero home-dev__hero is-large is-bold">
        <div className="hero-head">
          <img src={FTFlogo} alt="food-truck-fix logo" width={"300px"}></img>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="home-dev__title">CONTACT US</h1>
            <p className="home-dev__subtitle">
              Email us at{" "}
              <a href="mailto:foodtruckfixco@gmail.com">
                <strong>foodtruckfixco@gmail.com</strong>
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

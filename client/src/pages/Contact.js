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
          </div>
        <form
            action="https://formsubmit.co/1442d7a021f7f0c8eb82404a9f87ceb9"
            method="POST"
            className="contact__form grid"
          >
            <div className="contact__inputs">
              <div className="contact__content mb-2">
                <label htmlFor="" className="contact__label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="contact__input"
                  required
                />
              </div>
              <div className="contact__content mb-2">
                <label htmlFor="" className="contact__label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="contact__input"
                  required
                />
              </div>
            </div>
            <div className="contact__content mb-2">
              <label htmlFor="" className="contact__label">Subject</label>
              <input
                type="text"
                name="_subject"
                className="contact__input"
                required
              />
            </div>
            <div className="contact__content mb-2">
              <label htmlFor="" className="contact__label">Message</label>
              <textarea
                name="message"
                id=""
                cols="0"
                rows="7"
                className="contact__input"
                required
              ></textarea>
            </div>
            <div>
              <button type="submit" className="button button--flex">
                Send Message
                <i className="uil uil-message button__icon"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
      
    </div>
  );
}

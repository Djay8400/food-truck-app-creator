import React from "react";
// import FTFlogo from "../assets/FTFlogo.png";
// import { Link } from "react-router-dom";
// import Cart from "../components/Cart";
export default function PackageInput() {
  return (
    <div>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">Customize your app</h1>
            <p className="is-size-5">
              Provide as much information as you wish. Business Name, Cuisine
              type, Menu items, Pricing, Options, etc.
            </p>
            <div className="columns is-8 is-variable ">
              <div className="column is-two-thirds has-text-left">
                <form
                  action="https://formsubmit.co/foodtruckfixco@gmail.com"
                  method="POST"
                  className="contact__form"
                >
                  <div className="field">
                    <label htmlFor="" className="contact__label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="Full Name"
                      className="contact__input"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="" className="contact__label">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="Business Name"
                      className="contact__input"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="" className="contact__label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="Email"
                      className="contact__input"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="" className="contact__label">
                      Type of Cuisine
                    </label>
                    <input
                      type="text"
                      name="_subject"
                      className="contact__input"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="" className="contact__label">
                      Menu Item #1 (Provide item name, description, price,
                      customization options)
                    </label>
                    <textarea
                      name="Menu Item #1"
                      id=""
                      cols="0"
                      rows="2"
                      className="contact__input"
                      required
                    ></textarea>
                  </div>
                  <div className="field">
                    <label htmlFor="" className="contact__label">
                      Menu Item #1 (Provide item name, description, price,
                      customization options)
                    </label>
                    <textarea
                      name="Menu Item #1"
                      id=""
                      cols="0"
                      rows="2"
                      className="contact__input"
                      required
                    ></textarea>
                  </div>
                  <div className="field">
                    <label htmlFor="" className="contact__label">
                      Menu Item #1 (Provide item name, description, price,
                      customization options)
                    </label>
                    <textarea
                      name="Menu Item #1"
                      id=""
                      cols="0"
                      rows="2"
                      className="contact__input"
                      required
                    ></textarea>
                  </div>
                  <div className="field">
                    <label htmlFor="" className="contact__label">
                      Additional Comments/Requests
                    </label>
                    <textarea
                      name="message"
                      id=""
                      cols="0"
                      rows="7"
                      className="contact__input"
                      required
                    ></textarea>
                  </div>
                  <div className="control">
                    <button type="submit" className="button button--flex">
                      Submit
                      <i className="uil uil-message button__icon"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

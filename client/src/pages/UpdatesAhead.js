import React, { useState } from "react";
import FTFlogo from "../assets/FTFlogo.png";

function UpdatesAhead() {
  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <img
                  src={FTFlogo}
                  alt="food-truck-fix logo"
                  width={"150px"}
                ></img>
              </div>
            </div>

            <div className="is-divider"></div>

            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium updates-ahead__title">
                    <h2 className="subtitle is-4 updates-ahead__title">
                      January 19th, 2022
                    </h2>
                    <h1 className="title updates-ahead__title">Getting Started</h1>
                    <p className="">
                      This year, Food Truck Fix and its developers have big
                      plans.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns is-variable is-8">
                <div className="column is-5 is-offset-1 ">
                  <div className="content is-medium updates-ahead__title">
                    {/* <h2 className="subtitle is-5 has-text-grey">
                      December 23, 2022
                    </h2> */}
                    <h1 className="title is-3 updates-ahead__title">App Customization</h1>
                    <p className="has-text-dark">
                      Provide even more customization options for our clients to
                      build an app designed with specific needs or requirements.
                    </p>
                  </div>
                </div>
                <div className="column is-5">
                  <div className="content is-medium updates-ahead__title">
                    {/* <h2 className="subtitle is-5 has-text-grey">
                      December 25, 2022
                    </h2> */}
                    <h1 className="title is-3 updates-ahead__title">Live App Preview</h1>
                    <p className="has-text-dark">
                      Add a live preview in our customization options to allow
                      clients to see how their application looks as they
                      customize it.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="is-divider"></div>

            <section className="section">
              <div className="columns is-variable is-8">
                <div className="column is-5 is-offset-1">
                  <div className="content is-medium updates-ahead__title">
                    {/* <h2 className="subtitle is-5 has-text-grey">
                      December 25, 2022
                    </h2> */}
                    <h1 className="title updates-ahead__title is-3">Analytics Page</h1>
                    <p className="has-text-dark">
                      Our commitment to help food truck owners keep track of
                      data that will help their business run more efficiently
                      and increase sales.
                    </p>
                  </div>
                </div>
                <div className="column is-5">
                  <div className="content is-medium updates-ahead__title">
                    {/* <h2 className="subtitle is-5 has-text-grey">
                      December 25, 2022
                    </h2> */}
                    <h1 className="title updates-ahead__title is-3">Location Tracking</h1>
                    <p className="has-text-dark">
                      What better than to know where your favorite Food-Truck is
                      at and get your GRUB ON!!
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="container has-text-centered is-fluid">
              <div className="hero is-light">
                <div className="hero-body">
                  <h2 className="title is-4">Sign up for our newsletter</h2>
                  <div className="column is-6 is-offset-3">
                    <div className="field has-addons has-addons-centered">
                      <div className="control is-expanded">
                        <input
                          className="input "
                          type="text"
                          placeholder="Email address"
                        />
                      </div>
                      <div className="control">
                        <a className="button login__button">Subscribe</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UpdatesAhead;

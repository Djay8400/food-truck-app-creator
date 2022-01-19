import React, { useState } from "react";
import FTFlogo from "../assets/FTFlogo.png";

function UpdatesAhead() {
  return (
    <div>
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <img
                  src={FTFlogo}
                  alt="food-truck-fix logo"
                  width={"150px"}
                ></img>
              </div>
            </div>

            <div class="is-divider"></div>

            <section class="section">
              <div class="columns">
                <div class="column is-8 is-offset-2">
                  <div class="content is-medium">
                    <h2 class="subtitle is-4 updates-ahead__subtitle">
                      January 19th, 2022
                    </h2>
                    <h1 class="title updates-ahead__title">Getting Started</h1>
                    <p>
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

      <section class="hero ">
        <div class="hero-body">
          <div class="container">
            <section class="section">
              <div class="columns is-variable is-8">
                <div class="column is-5 is-offset-1 ">
                  <div class="content is-medium">
                    {/* <h2 class="subtitle is-5 has-text-grey">
                      December 23, 2022
                    </h2> */}
                    <h1 class="title has-text-black is-3">App Customization</h1>
                    <p class="has-text-dark">
                      Provide even more customization options for our clients to
                      build an app designed with specific needs or requirements.
                    </p>
                  </div>
                </div>
                <div class="column is-5">
                  <div class="content is-medium">
                    {/* <h2 class="subtitle is-5 has-text-grey">
                      December 25, 2022
                    </h2> */}
                    <h1 class="title has-text-black is-3">Live App Preview</h1>
                    <p class="has-text-dark">
                      Add a live preview in our customization options to allow
                      clients to see how their application looks as they
                      customize it.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div class="is-divider"></div>

            <section class="section">
              <div class="columns is-variable is-8">
                <div class="column is-5 is-offset-1">
                  <div class="content is-medium">
                    {/* <h2 class="subtitle is-5 has-text-grey">
                      December 25, 2022
                    </h2> */}
                    <h1 class="title has-text-black is-3">Analytics Page</h1>
                    <p class="has-text-dark">
                      Our commitment to help food truck owners keep track of
                      data that will help their business run more efficiently
                      and increase sales.
                    </p>
                  </div>
                </div>
                <div class="column is-5">
                  <div class="content is-medium">
                    {/* <h2 class="subtitle is-5 has-text-grey">
                      December 25, 2022
                    </h2> */}
                    <h1 class="title has-text-black is-3">Location Tracking</h1>
                    <p class="has-text-dark">
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

      <section class="section">
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <div class="container has-text-centered is-fluid">
              <div class="hero is-light">
                <div class="hero-body">
                  <h2 class="title is-4">Sign up for our newsletter</h2>
                  <div class="column is-6 is-offset-3">
                    <div class="field has-addons has-addons-centered">
                      <div class="control is-expanded">
                        <input
                          class="input "
                          type="text"
                          placeholder="Email address"
                        />
                      </div>
                      <div class="control">
                        <a class="button login__button">Subscribe</a>
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

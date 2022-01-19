import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column has-text-centered">
            <h1 className="services__title">FTF Services</h1>
          </div>
        </div>
        <div id="app" className="row columns is-multiline">
          <div className="column is-4">
            <div className="card large">
              <div className="card-image">
                <figure className="image is-16by9">
                  <img src="./images/servicesImg1.jpg" alt="" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4 no-padding">Standard Package</p>
                  </div>
                </div>
                <div className="content">
                  <p>This is what is provided with our Standard package.</p>
                </div>
                <div className="content">
                  {/* // Here we will Link to our page with form fields to create FoodTruck */}
                  <button className="button">Start Now</button>
                </div>
              </div>
            </div>
          </div>
          <div v-for="card in cardData" key="card.id" className="column is-4">
            <div className="card large">
              <div className="card-image">
                <figure className="image is-16by9">
                  <img src="./images/servicesImg2.jpg" alt="" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4 no-padding">Deluxe Package</p>
                  </div>
                </div>
                <div className="content">
                  <p>This is what is provided with our Deluxe package.</p>
                </div>
                <div className="content">
                  {/* // Here we will Link to our page with form fields to create FoodTruck */}
                  <button className="button">Start Now</button>
                </div>
              </div>
            </div>
          </div>
          <div v-for="card in cardData" key="card.id" className="column is-4">
            <div className="card large">
              <div className="card-image">
                <figure className="image is-16by9">
                  <img src="./images/servicesImg3.gif" alt="" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4 no-padding">Premium Package</p>
                  </div>
                </div>
                <div className="content">
                  <p>This is what is provided with our Premium Package.</p>
                </div>
                <div className="content">
                  {/* // Here we will Link to our page with form fields to create FoodTruck */}
                  <button className="button">Start Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

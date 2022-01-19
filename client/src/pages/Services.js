import React from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import Auth from "../utils/auth";
import StripeCheckout from "react-stripe-checkout";
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Services = () => {
  const makePayment = (token) => {
    const body = {
      token,
      //product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch("http://localhost:3001/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE ", response);
        const { status } = response;
        console.log("STATUS ", status);
      })
      .catch((err) => console.log(err));
  };

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
                  {Auth.loggedIn() ? (
                    <StripeCheckout
                      stripeKey={
                        "pk_test_51KHBZnDLG1yx92htZ80kTOdpuI3muXW2c11aYwghcctZ8Av6TM3BNrzkVqrytVsPS7g11fRnPiMi5LvWbTKNCvfI00pcq75slU"
                      }
                      token={makePayment}
                      name="Standard Package"
                      amount={10000}
                    >
                      <button className="button">
                        <Link to="/packageInput">Start Now</Link>
                      </button>
                    </StripeCheckout>
                  ) : (
                    <button className="button">
                      <Link to="/signup">Sign In to View</Link>
                    </button>
                  )}
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
                {Auth.loggedIn() ? (
                    <StripeCheckout
                      stripeKey={
                        "pk_test_51KHBZnDLG1yx92htZ80kTOdpuI3muXW2c11aYwghcctZ8Av6TM3BNrzkVqrytVsPS7g11fRnPiMi5LvWbTKNCvfI00pcq75slU"
                      }
                      token={makePayment}
                      name="Standard Package"
                      amount={10000}
                    >
                      <button className="button">
                        <Link to="/packageInput">Start Now</Link>
                      </button>
                    </StripeCheckout>
                  ) : (
                    <button className="button">
                      <Link to="/signup">Sign In to View</Link>
                    </button>
                  )}
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
                {Auth.loggedIn() ? (
                    <StripeCheckout
                      stripeKey={
                        "pk_test_51KHBZnDLG1yx92htZ80kTOdpuI3muXW2c11aYwghcctZ8Av6TM3BNrzkVqrytVsPS7g11fRnPiMi5LvWbTKNCvfI00pcq75slU"
                      }
                      token={makePayment}
                      name="Standard Package"
                      amount={10000}
                    >
                      <button className="button">
                        <Link to="/packageInput">Start Now</Link>
                      </button>
                    </StripeCheckout>
                  ) : (
                    <button className="button">
                      <Link to="/login">Log In to View</Link>
                    </button>
                  )}
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

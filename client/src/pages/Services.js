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
                  <img src="./images/standard.png" alt="" />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <p className="title is-4 no-padding services__subtitle">
                    Standard Package
                  </p>
                </div>

                <div className="content services__content">
                  <p>* Fully functioning payment processing</p>
                  <p>* 10 Menu items with fully custom cards</p>
                  <p>* One month subscription to FTF</p>
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
                      <button className="button services__button">
                        <Link to="/packageInput" className="services__button">
                          Purchase
                        </Link>
                      </button>
                    </StripeCheckout>
                  ) : (
                    <button className="button services__button">
                      <Link to="/signup" className="services__button">
                        Log In to View
                      </Link>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div v-for="card in cardData"className="column is-4">
            <div className="card large">
              <div className="card-image">
                <figure className="image is-16by9">
                  <img src="./images/deluxe.png" alt="" />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <p className="title is-4 no-padding services__subtitle">
                    Deluxe Package
                  </p>
                </div>

                <div className="content services__content">
                  <p>* Includes everything from Standard Package, Plus</p>
                  <p>* 5 extra Menu items with fully custom cards</p>
                  <p>* Customized Logo and QR codes</p>
                  <p>* Three months subscription to FTF</p>
                </div>
                <div className="content">
                  {Auth.loggedIn() ? (
                    <StripeCheckout
                      stripeKey={
                        "pk_test_51KHBZnDLG1yx92htZ80kTOdpuI3muXW2c11aYwghcctZ8Av6TM3BNrzkVqrytVsPS7g11fRnPiMi5LvWbTKNCvfI00pcq75slU"
                      }
                      token={makePayment}
                      name="Deluxe Package"
                      amount={20000}
                    >
                      <button className="button services__button">
                        <Link to="/packageInput" className="services__button">
                          Purchase
                        </Link>
                      </button>
                    </StripeCheckout>
                  ) : (
                    <button className="button services__button">
                      <Link to="/signup" services__button>
                        Log In to View
                      </Link>
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
                  <img src="./images/premium.jpg" alt="" />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <p className="title is-4 no-padding services__subtitle">
                    Premium Package
                  </p>
                </div>

                <div className="content services__content">
                  <p>* Includes everything from Deluxe Package, Plus</p>
                  <p>* 20 Extra Menu items with fully custom cards</p>
                  <p>* Social Media Integration with location bursts</p>
                  <p>* One year subscription to FTF</p>
                </div>
                <div className="content">
                  {Auth.loggedIn() ? (
                    <StripeCheckout
                      stripeKey={
                        "pk_test_51KHBZnDLG1yx92htZ80kTOdpuI3muXW2c11aYwghcctZ8Av6TM3BNrzkVqrytVsPS7g11fRnPiMi5LvWbTKNCvfI00pcq75slU"
                      }
                      token={makePayment}
                      name="Premium Package"
                      amount={30000}
                    >
                      <button className="button services__button">
                        <Link to="/packageInput" className="services__button">
                          Purchase
                        </Link>
                      </button>
                    </StripeCheckout>
                  ) : (
                    <button className="button services__button">
                      <Link to="/login" className="services__button">
                        Log In to View
                      </Link>
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

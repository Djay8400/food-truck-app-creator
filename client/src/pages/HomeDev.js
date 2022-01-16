import React from "react";
// import FormCustomization from "../components/Form";
// import FoodItem from "../components/FoodItem";
import Nav from "../components/Nav";
// import Cart from "../components/Cart";
import FTFlogo from "../assets/FTFlogo.png";
import { Link } from "react-router-dom";

const HomeDev = () => {
  return (
    <div className="main-container">
      <img src={FTFlogo} alt="food-truck-fix logo" width={"200px"}></img>
      <img src="https://api.qrserver.com/v1/create-qr-code/?data=Chef Movie&amp;size=100x100" alt="qr code" title="qr code" />
      <h1>Welcome to Food-Truck-Fix</h1>
      <p>
        Do you have a food truck and need a custom app for your customers to
        order from? Food-Truck-Fix is an app builder tailored to help food
        trucks design their own app, fill out one simple form with your signup
        info and app preferences and Food-Truck-Fix will create it for you.
        <br></br>
        We will also provide you with:
      </p>
      <ul>
        <li>a link to share on social media,</li>
        <li>a qr code picture to put on your truck,</li>
        <li>
          whenever a customer clicks on your link or scans your qr code they are
          taken to your order app.
        </li>
        <li>
          You can upload your logo and the color you would like your app to be
          (to match your truck for example),
        </li>
        <li>plus your menu items and their pictures.</li>
        <li></li>
      </ul>
      <p>
        <br></br>I bet you're saying, "Well that's great, but how much is it
        going to cost me?" We have set pricing to be a small %5 of sales that go
        directly through the app. This is not %5 of all sales, it DOES NOT
        include a percentage of sales from walk-ups or phone orders. That makes
        it a very reasonable cost for a custom app that would normally cost tens
        of thousands of dollars. Why do we do this you ask? Because we have
        family that own and operate food trucks, and we built this lovingly for
        them, as well as for you. To Get Started Making Your Custom Food Truck
        App in Five Minutes or Less, Click Start Here.
      </p>
      <div className="button is-primary">
        <Link to="/signup">Start Here</Link>
      </div>
    </div>
  );
};

export default HomeDev;

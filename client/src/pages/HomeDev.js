import React from "react";
// import FormCustomization from "../components/Form";
// import FoodItem from "../components/FoodItem";
import Nav from "../components/Nav";
// import Cart from "../components/Cart";
import FTFlogo from "../assets/FTFlogo.png";
import { Link } from "react-router-dom";
// import modal from "../components/js/modal";

const HomeDev = () => {
  return (
    <div
      className="content is-normal is-mobile has-background-warning"
      style={{ backgroundColor: "#EAC435" }}
    >
      <img src={FTFlogo} alt="food-truck-fix logo" width={"200px"}></img>

      <z
        cursorStyle={{ backgroundColor: "#4454e2", height: "25px" }}
        textStyle={{
          fontWeight: "bold",
          font: "Times New Roman",
          fontSize: "25px",
        }}
        blinkTimeAfterFinish={-1}
      >
        Custom Text Style
      </z>

      <h1
        className="title is-1"
        style={{
          color: "#CA5551",
          fontWeight: "bolder",
          textShadow: "2.5px 2.5px black",
        }}
      >
        Welcome <br />
        <span style={{ fontSize: "2rem" }}>to</span>
        <br /> Food-Truck-Fix
      </h1>
      <div className=" text is-info">
        <p
          className="column is-centered"
          style={{
            // marginLeft: "200px",
            // marginRight: "200px",
            color: "gray",
            fontWeight: "bold",
            padding: "40px",
            textJustify: "inter-word",
            // textAlign: "justify",
          }}
        >
          Do you have a food truck and need a custom app for your customers to
          order from? Food-Truck-Fix is an app builder tailored to help
          food-trucks design their own app, fill out one simple form with your
          signup info and app preferences and Food-Truck-Fix will create it for
          you.
        </p>
        <p
          style={{
            // marginLeft: "200px",
            // marginRight: "200px",
            color: "gray",
            fontWeight: "bold",
            padding: "40px",
            textJustify: "inter-word",
            // textAlign: "justify",
          }}
        >
          We will also provide you with:
        </p>
      </div>
      <div
        className="column is-mobile is-centered list"
        style={{
          color: "gray",
          fontWeight: "bold",
        }}
      >
        <ul>
          <li className="list-item">a link to share on social media,</li>
          <li className="list-item">a qr code picture to put on your truck,</li>
          <li className="list-item">
            whenever a customer clicks on your link or scans your qr code they
            are taken to your order app.
          </li>
          <li className="list-item">
            You can upload your logo and the color you would like your app to be
            (to match your truck for example),
          </li>
          <li className="list-item">
            plus your menu items and their pictures.
          </li>
        </ul>
      </div>
      <p
        className="column is-centered"
        style={{
          marginLeft: "5px",
          marginRight: "10px",
          color: "gray",
          fontWeight: "bold",
        }}
      >
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
      <div className="button" style={{ backgroundColor: "#03CEA4" }}>
        <Link to="/signup">Start Here</Link>
      </div>
    </div>
  );
};

export default HomeDev;

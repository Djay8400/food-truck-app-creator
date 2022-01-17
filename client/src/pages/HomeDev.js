import React from "react";
import truckImg from "../assets/foodtruck.jpg";
// import FormCustomization from "../components/Form";
// import FoodItem from "../components/FoodItem";
// import Nav from "../components/Nav";
// import Cart from "../components/Cart";
import FTFlogo from "../assets/FTFlogo.png";
import { Link } from "react-router-dom";
// import modal from "../components/js/modal";

const HomeDev = () => {
  return (
    <div>
      <section className="hero home-dev__hero is-medium is-bold">
        <div className="hero-head">
          <a className="" href="../">
            <img src={FTFlogo} alt="food-truck-fix logo" width={"200px"}></img>
          </a>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="home-dev__title">
              Looking to take your business to the next level?
            </h1>
            <h2 className="home-dev__subtitle">
              Food Truck Fix is the best way to setup your very own application
              to increase profits and effeciency...
            </h2>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="columns features">
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <i class="uil uil-check nav__icon"></i>
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>Simple</h4>
                  <p>
                    FTF's user-friendly interface allows even first time users
                    to quickly get an application deployed in no time.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <i class="uil uil-dollar-alt nav__icon"></i>
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>Affordable</h4>
                  <p>
                    FTF takes a small percentage of your sales and lets you know
                    ahead of time what to expect. We never have hidden or BS
                    fees.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <i class="uil uil-lightbulb-alt nav__icon"></i>
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>Ingenious</h4>
                  <p>
                    While maintaing its simplicity, FTF allows you to get as
                    complex as you want in your customization.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-3 is-offset-2">
              <h2>
                <strong>Contact</strong>
              </h2>
              <ul>
                <li>
                  <a href="#">github</a>
                </li>
                <li>
                  <a href="#">email</a>
                </li>
              </ul>
            </div>
            <div className="column is-3">
              <h2>
                <strong>Careers</strong>
              </h2>
              <ul>
                <li>
                  <a href="#">Apply</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
              </ul>
            </div>
            <div className="column is-4">
              <h2>
                <strong>Related</strong>
              </h2>
              <ul>
                <li>
                  <a href="#">Food Truck Websites</a>
                </li>
                <li>
                  <a href="#">Food Network </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content has-text-centered">
            <p>
              <a
                className="icon"
                href="https://github.com/Djay8400/food-truck-app-creator"
              >
                <i class="uil uil-github nav__icon"></i>
              </a>
            </p>
            <div className="control level-item">
              <a href="https://github.com/Djay8400/food-truck-app-creator">
                <div className="tags has-addons">
                  <span className="tag is-dark">FTFdevs</span>
                  <span className="tag is-info">MIT license</span>
                </div>
              </a>
            </div>
            <div className="control level-item mt-3">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?data=Chef Movie&amp;size=100x100"
                alt="qr code"
                title="qr code"
              />
            </div>
          </div>
        </div>
        <script src="../js/bulma.js"></script>
      </footer>
    </div>
    // <div className="main-container">
    //   <img src={FTFlogo} alt="food-truck-fix logo" width={"200px"}></img>
    //   <img src="https://api.qrserver.com/v1/create-qr-code/?data=Chef Movie&amp;size=100x100" alt="qr code" title="qr code" />
    //   <h1>Welcome to Food-Truck-Fix</h1>
    //   <p>
    //     Do you have a food truck and need a custom app for your customers to
    //     order from? Food-Truck-Fix is an app builder tailored to help food
    //     trucks design their own app, fill out one simple form with your signup
    //     info and app preferences and Food-Truck-Fix will create it for you.
    //     <br></br>
    //     We will also provide you with:
    //   </p>
    //   <ul>
    //     <li>a link to share on social media,</li>
    //     <li>a qr code picture to put on your truck,</li>
    //     <li>
    //       whenever a customer clicks on your link or scans your qr code they are
    //       taken to your order app.
    //     </li>
    //     <li>
    //       You can upload your logo and the color you would like your app to be
    //       (to match your truck for example),
    //     </li>
    //     <li>plus your menu items and their pictures.</li>
    //     <li></li>
    //   </ul>
    //   <p>
    //     <br></br>I bet you're saying, "Well that's great, but how much is it
    //     going to cost me?" We have set pricing to be a small %5 of sales that go
    //     directly through the app. This is not %5 of all sales, it DOES NOT
    //     include a percentage of sales from walk-ups or phone orders. That makes
    //     it a very reasonable cost for a custom app that would normally cost tens
    //     of thousands of dollars. Why do we do this you ask? Because we have
    //     family that own and operate food trucks, and we built this lovingly for
    //     them, as well as for you. To Get Started Making Your Custom Food Truck
    //     App in Five Minutes or Less, Click Start Here.
    //   </p>
    //   <div className="button is-primary">
    //     <Link to="/signup">Start Here</Link>
    //   </div>
    // </div>
  );
};

export default HomeDev;

//   return (
//     <div
//       className="content is-normal is-mobile "
//       // style={{ backgroundColor: "white" }}
//     >
//       {/* styling test */}
//       <section
//         class="hero is-fullheight"
//         style={{
//           backgroundImage: truckImg,
//         }}
//       >
//         <div class="hero-body">
//           <div class="container">
//             <h1 class="title">Top of Mount Ishizuchi, Ehime, Japan.</h1>
//             <h2 class="subtitle">
//               uploaded by HendrixEesti -
//               http://en.wikipedia.org/wiki/Image:Ishizuchi.jpg
//             </h2>
//           </div>
//         </div>
//       </section>
//       {/* styling test */}{" "}
//       <h1
//         className="title is-1"
//         style={{
//           color: "black",
//           fontWeight: "bolder",
//           textShadow: "2px 2px gray",
//         }}
//       >
//         Welcome to <br />
//       </h1>
//       <img src={FTFlogo} alt="food-truck-fix logo" width={"200px"}></img>
//       <div
//         className="card is-centered"
//         style={{
//           backgroundColor: "royaleblue",
//           opacity: "75%",
//           paddingTop: "50px",
//           fontSize: "1.5rem",
//           color: "gray",
//           fontWeight: "bold",
//           textJustify: "inter-word",
//         }}
//       >
//         <p
//           className="column is-centered"
//           style={
//             {
//               // textAlign: "justify",
//             }
//           }
//         >
//           {/* <img src={truckImg} alt="food-truck" style={{ zIndex: "-1" }}></img> */}
//           Do you have a food truck and need a custom app for your customers to
//           order from? Food-Truck-Fix is an app builder tailored to help
//           food-trucks design their own app, fill out one simple form with your
//           signup info and app preferences and Food-Truck-Fix will create it for
//           you.
//         </p>

//         <p
//           style={{
//             // marginLeft: "200px",
//             // marginRight: "200px",
//             color: "gray",
//             fontWeight: "bold",
//             padding: "40px",
//             textJustify: "inter-word",
//             // textAlign: "justify",
//           }}
//         >
//           We will also provide you with:
//         </p>
//       </div>
//       <div
//         className="column is-mobile is-centered list"
//         style={{
//           color: "gray",
//           fontWeight: "bold",
//         }}
//       >
//         <ul>
//           <li className="list-item">a link to share on social media,</li>
//           <li className="list-item">a qr code picture to put on your truck,</li>
//           <li className="list-item">
//             whenever a customer clicks on your link or scans your qr code they
//             are taken to your order app.
//           </li>
//           <li className="list-item">
//             You can upload your logo and the color you would like your app to be
//             (to match your truck for example),
//           </li>
//           <li className="list-item">
//             plus your menu items and their pictures.
//           </li>
//         </ul>
//       </div>
//       <p
//         className="column is-centered"
//         style={{
//           marginLeft: "5px",
//           marginRight: "10px",
//           color: "gray",
//           fontWeight: "bold",
//         }}
//       >
//         <br></br>I bet you're saying, "Well that's great, but how much is it
//         going to cost me?" We have set pricing to be a small %5 of sales that go
//         directly through the app. This is not %5 of all sales, it DOES NOT
//         include a percentage of sales from walk-ups or phone orders. That makes
//         it a very reasonable cost for a custom app that would normally cost tens
//         of thousands of dollars. Why do we do this you ask? Because we have
//         family that own and operate food trucks, and we built this lovingly for
//         them, as well as for you. To Get Started Making Your Custom Food Truck
//         App in Five Minutes or Less, Click Start Here.
//       </p>
//       <div className="button" style={{ backgroundColor: "#03CEA4" }}>
//         <Link to="/signup">Start Here</Link>
//       </div>
//     </div>
//   );
// };

// export default HomeDev;

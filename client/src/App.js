// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import StripeCheckout from "react-stripe-checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "./App.css";
// import foodTruck from "./assets/foodtruck.jpg";
import { setContext } from "@apollo/client/link/context";
// import { StoreProvider } from "./utils/GlobalState";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [product, setProduct] = useState({
    name: "MMMMM CHEESEBURGER",
    price: 10,
    productBy: "food truck",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
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
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          {/* <StoreProvider> */}
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
          {/* </StoreProvider> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

<<<<<<< HEAD
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// import Home from "./pages/Home";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Nav from "./components/Nav";
// /////////////// Context API ////////////////////////////////////////////
// // import { StoreProvider } from "./utils/GlobalState";
// /////////////// Context API ////////////////////////////////////////////
// import Success from "./pages/Success";
// import OrderHistory from "./pages/OrderHistory";
// ////////////////////////////// Redux ///////////////////////////////////
// import { Provider } from "react-redux";
// import store from "./utils/store";
// ////////////////////////////// Redux ///////////////////////////////////

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("id_token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div>
//           {
//             /////////////// Context API ////////////////////////////////////////////
//           }
//           {/* <StoreProvider> */}
//           {
//             /////////////// Context API ////////////////////////////////////////////
//             ////////////////////////////// Redux ///////////////////////////////////
//           }
//           <Provider store={store}>
//             {/* ////////////////////////////// Redux ///////////////////////////////////
//              */}
//             <Nav />
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <Route exact path="/login" component={Login} />
//               <Route exact path="/signup" component={Signup} />
//               <Route exact path="/success" component={Success} />
//               <Route exact path="/orderHistory" component={OrderHistory} />
//               <Route exact path="/products/:id" component={Detail} />
//               <Route component={NoMatch} />
//             </Switch>
//             {/* ////////////////////////////// Redux ///////////////////////////////////
//              */}
//           </Provider>
//           {
//             ////////////////////////////// Redux ///////////////////////////////////
//             /////////////// Context API ////////////////////////////////////////////
//           }
//           {/* </StoreProvider> */}
//           {
//             /////////////// Context API ////////////////////////////////////////////
//           }
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;
=======
{
  /* <StripeCheckout
  stripeKey={
    "pk_test_51KHBZnDLG1yx92htZ80kTOdpuI3muXW2c11aYwghcctZ8Av6TM3BNrzkVqrytVsPS7g11fRnPiMi5LvWbTKNCvfI00pcq75slU"
  }
  token={makePayment}
  name="Get some grub"
  amount={product.price * 100}
>
  <div className="container">
    <button className="button is-primary">Get Some Grub!</button>
  </div>
</StripeCheckout>; */
}
>>>>>>> main

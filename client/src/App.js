// import logo from "./logo.svg";
import "./App.css";
// import foodTruck from "./assets/foodtruck.jpg";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <div className="App">
//       <Home />
//       <img src={foodTruck} className="truck" alt="logo" />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
/////////////// Context API ////////////////////////////////////////////
// import { StoreProvider } from "./utils/GlobalState";
/////////////// Context API ////////////////////////////////////////////
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";
////////////////////////////// Redux ///////////////////////////////////
import { Provider } from "react-redux";
import store from "./utils/store";
////////////////////////////// Redux ///////////////////////////////////

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
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {
            /////////////// Context API ////////////////////////////////////////////
          }
          {/* <StoreProvider> */}
          {
            /////////////// Context API ////////////////////////////////////////////
            ////////////////////////////// Redux ///////////////////////////////////
          }
          <Provider store={store}>
            {/* ////////////////////////////// Redux ///////////////////////////////////
             */}
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch>
            {/* ////////////////////////////// Redux ///////////////////////////////////
             */}
          </Provider>
          {
            ////////////////////////////// Redux ///////////////////////////////////
            /////////////// Context API ////////////////////////////////////////////
          }
          {/* </StoreProvider> */}
          {
            /////////////// Context API ////////////////////////////////////////////
          }
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

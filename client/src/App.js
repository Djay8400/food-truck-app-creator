// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import HomeDev from "./pages/HomeDev";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "./index.css"
// import foodTruck from "./assets/foodtruck.jpg";
import { setContext } from "@apollo/client/link/context";
import { StoreProvider } from "./utils/GlobalState";
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
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <StoreProvider>
            <Nav />
            <Routes>
              <Route exact path="/" element={<HomeDev />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/menu/:id" element={<Home />} />
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;


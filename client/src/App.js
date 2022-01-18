import React, { useState } from "react";
import "./App.css";
import HomeDev from "./pages/HomeDev";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "./index.css";
import { setContext } from "@apollo/client/link/context";
import { StoreProvider } from "./utils/GlobalState";
import Detail from "./pages/Detail";
// import NoMatch from './pages/NoMatch';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import ExamplePage from "./pages/ExamplePage";
import Success from "./pages/Success";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

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
              <Route exact path="/example" element={<ExamplePage />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/success" element={<Success />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/services" element={<Services />} />
              <Route exact path="/products/:id" element={<Detail />} />
              {/* <Route element={<NoMatch/>} /> */}
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

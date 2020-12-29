import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DeliveryAlert from "./Components/DeliveryAlert.js";
import CovidAlert from "./Components/CovidAlert.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
          <CovidAlert />
          <DeliveryAlert />
          <Checkout />
        </Route>

        <Route path="/">
          <Header />
          <CovidAlert />
          <DeliveryAlert />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

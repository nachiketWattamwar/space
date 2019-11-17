import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import DashboardBar from "./components/DashboardBar";
import Star from "./components/Star";
import Agency from "./components/Agency";

const routing = (
  <Router>
    <div>
      <Route path='/' component={App} />
      <Route exact path='/dashboard' component={DashboardBar} />
      <Route exact path='/Star' component={Star} />
      <Route exact path='/agency' component={Agency} />
      {/* <Route path="/contact" component={Contact} /> */}
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

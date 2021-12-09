import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <div>
                <News key="general" category="general" />
              </div>
            </Route>
            <Route exact path="/science">
              <div>
                <News key="science" category="science" />
              </div>
            </Route>
            <Route exact path="/health">
              <div>
                <News key="health" category="health" />
              </div>
            </Route>
            <Route exact path="/business">
              <div>
                <News key="business" category="business" />
              </div>
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </>
    );
  }
}

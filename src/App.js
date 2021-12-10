import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {

  state={
    progressbar: 0,
  }

  setProgress =(progress)=>{
    this.setState({progressbar:progress})
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progressbar}
          />
          <Switch>
            <Route exact path="/">
              <div>
                <News setprogressbar ={this.setProgress}  key="general" category="general" />
              </div>
            </Route>
            <Route exact path="/science">
              <div>
                <News setprogressbar ={this.setProgress} key="science" category="science" />
              </div>
            </Route>
            <Route exact path="/health">
              <div>
                <News setprogressbar ={this.setProgress} key="health" category="health" />
              </div>
            </Route>
            <Route exact path="/business">
              <div>
                <News setprogressbar ={this.setProgress} key="business" category="business" />
              </div>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

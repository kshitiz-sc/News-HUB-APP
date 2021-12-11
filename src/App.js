import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

const App = ()=>{

  const [progressbar, setprogressbar] = useState(0);
  const setProgress =(progress)=>{
    setprogressbar(progress);
  }

    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={progressbar}
            height={'4px'}
          />
          <Switch>
            <Route exact path="/">
              <div>
                <News setprogressbar ={setProgress}  key="general" category="general" />
              </div>
            </Route>
            <Route exact path="/science">
              <div>
                <News setprogressbar ={setProgress} key="science" category="science" />
              </div>
            </Route>
            <Route exact path="/health">
              <div>
                <News setprogressbar ={setProgress} key="health" category="health" />
              </div>
            </Route>
            <Route exact path="/business">
              <div>
                <News setprogressbar ={setProgress} key="business" category="business" />
              </div>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  
}

export default App;
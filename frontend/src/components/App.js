import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import Home from "./home/Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from './auth/Login'
import Signup from './auth/Signup'

import store from '../store';

import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-select.min.css";
import "../assets/css/line-awesome.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/jquery.fancybox.min.css";
import "../assets/css/daterangepicker.css";
import "../assets/css/animated-headline.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/flag-icon.min.css";
import "../assets/css/style.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            {/* AUTH */}
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            {/* <Route path="/listings" exact component={Listings} /> */}
          </Switch>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

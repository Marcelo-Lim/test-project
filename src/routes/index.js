import React from "react";
import { Route } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import NavMenu from "../components/Navmenu";
import Footer from "../components/footer";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Team from "../pages/Team";

const RootRoute = () => {
  return (
    <Router>
      <NavMenu />
        <Route exact path='/' component={Home} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/About' component={AboutUs} />
        <Route exact path='/Contact' component={ContactUs} />
        <Route exact path='/Team' component={Team} />
      <Footer/>  
    </Router>
  );
};

export default RootRoute;

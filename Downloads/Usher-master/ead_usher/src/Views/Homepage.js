import React, { Component } from "react";
import "../App.css";
import Hero from "./Hero";
import About from "./About";
import Booking from "./booking";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Booking />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Homepage;

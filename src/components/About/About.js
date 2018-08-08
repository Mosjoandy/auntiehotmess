import React from "react";
import "./About.css";

const About = () => (
  <div className="about" id="aboutScroll">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="jumbotron aboutBody">
            <div className="aboutTitle">
              <hr />
              <img id="hotmessLogo" src={require("../images/hotmesslogo.png")} alt="hotmesslogo" />
              <hr />
            </div>
            <div className="aboutContent">
              <p>Auntie Hotmess Soaps was founded on the values of preserving nature and reducing waste.
              As a budding Soap-Maker, she strove to create a soap product that was eco-friendly. With
              her friends and family in mind, all her soaps and products are all-natural and plant-based.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="nextComponent">
      <a href="#productScroll"><img id="scrollDown" src={require("../images/arrowdown.png")} alt="downarrowthing" /></a>
    </div>
  </div>
);

export default About;

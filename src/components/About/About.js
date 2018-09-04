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
              <p>Auntie Hotmess Soaps is founded on the values of preserving nature and reducing waste.
              She strives to create body products that are biodegradeable and eco-friendly. With
              her friends and family in mind, her soaps and products are all-natural and plant-based.
              </p>She sources her ingredients from companies that use environmentally
              friendly practices. All her products and cold processed soaps are crafted at
              <span> <a target="_blank" rel="noopener noreferrer" href="http://www.burgeroadfarm.com/">
              The Burge Road Farm</a></span>, a local organic cherry farm known for its popular 
              U-Pick Cherry Event. She can be found wandering other parts of the nation in her converted shortbus
              <span><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bigsirbus/">
              <img id="inlineIco" src={require("../images/instagram.png")} alt="busIg" />Big Sir Bus</a></span>
              .
              <p>

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

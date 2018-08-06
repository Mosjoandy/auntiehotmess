import React from "react";
import "./About.css";

const About = () => (
  <div className="about">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="jumbotron aboutBody">
            <div className="aboutTitle">
              <img id="hotmessLogo" src={require("../images/hotmesslogo.png")} alt="hotmesslogo" />

            </div>
            <div className="aboutContent">
              <p>Auntie Hotmess Soaps was founded on the values of preserving nature and reducing carbon emissions. As budding 
                </p>
              {/* <div className="aboutLeft">
        
              </div>

              <div className="aboutRight">
               
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;

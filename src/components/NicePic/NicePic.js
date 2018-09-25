import React from "react";
import "./NicePic.css";
import { Section } from "../Modules";
// import Fade from "react-reveal/Fade";

const NicePic = () => (
  // <Fade top>
    <Section id="scrollTopTarget">
      <img className="nicePic" src={require("../images/Background1.jpg")} alt="nicePic" />
    </Section>
  // </Fade>
);

export default NicePic;

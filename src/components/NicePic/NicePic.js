import React from "react";
import "./NicePic.css";
import { Section, NextComponent } from "../Modules";

const NicePic = () => (
  <Section>
    <img className="nicePic" src={require("../images/Background1.jpg")} alt="nicePic" />
    <NextComponent href="#productScroll" />
  </Section>
);

export default NicePic;

import React from "react";
import "./NicePic.css";
import { Section, NextComponent } from "../Modules";

const NicePic = () => (
  <Section>
    <img className="nicePic" src="https://res.cloudinary.com/mosjoandy/image/upload/v1533605070/Auntie%20Hotmess%20Soaps/Background1.jpg" alt="nicePic" />
    <NextComponent href="#productScroll" />
  </Section>
);

export default NicePic;

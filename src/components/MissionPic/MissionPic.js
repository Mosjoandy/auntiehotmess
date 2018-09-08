import React from "react";
import "./MissionPic.css";
import { Section, NextComponent } from "../Modules";

const MissionPic = () => (
  <Section>
    <img className="missionPic" src="https://res.cloudinary.com/mosjoandy/image/upload/v1534368062/Auntie%20Hotmess%20Soaps/missionHotness.jpg" id="scrollTopTarget" alt="MissionPic" />
    <NextComponent href="#aboutScroll" />
  </Section>
);

export default MissionPic;

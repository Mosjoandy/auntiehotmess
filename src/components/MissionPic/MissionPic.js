import React from "react";
import "./MissionPic.css";
import { Section, NextComponent } from "../Modules";

const MissionPic = () => (
  <Section>
    <img className="missionPic" src="https://res.cloudinary.com/mosjoandy/image/upload/v1534368062/missionHotness.jpg" alt="MissionPic" />
    <NextComponent href="#aboutScroll" />
  </Section>
);

export default MissionPic;

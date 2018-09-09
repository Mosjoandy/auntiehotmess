import React from "react";
import "./MissionPic.css";
import { Section } from "../Modules";

const MissionPic = () => (
  <Section>
    <img className="missionPic" src={require("../images/MissionPic.jpg")} id="scrollTopTarget" alt="MissionPic" />
    {/* <NextComponent href="#aboutScroll" /> */}
  </Section>
);

export default MissionPic;

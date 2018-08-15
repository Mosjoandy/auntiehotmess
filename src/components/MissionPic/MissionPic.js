import React from "react";
import "./MissionPic.css";

const MissionPic = () => (
  <div>
    <img className="missionPic" src="https://res.cloudinary.com/mosjoandy/image/upload/v1534368062/missionHotness.jpg" alt="MissionPic" />
    <div className="nextComponent">
      <a href="#productScroll"><img id="scrollDown" src={require("../images/arrowdown.png")} alt="downarrowthing" /></a>
    </div>
  </div>
);

export default MissionPic;

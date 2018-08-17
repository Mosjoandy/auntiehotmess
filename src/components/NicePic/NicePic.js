import React from "react";
import "./NicePic.css";

const NicePic = () => (
  <div>
    <img className="nicePic" src="https://res.cloudinary.com/mosjoandy/image/upload/v1533605070/Auntie%20Hotmess%20Soaps/Background1.jpg" alt="nicePic" />
    <div className="nextComponent">
      <a href="#productScroll"><img id="scrollDown" src={require("../images/arrowdown.png")} alt="downarrowthing" /></a>
    </div>
  </div>
);

export default NicePic;

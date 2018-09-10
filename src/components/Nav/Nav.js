import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {

  render() {

    return (

      <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 mx-auto">

            <li className="nav-item">
              <a type="btn" role="button" className="ml-4 mr-4" id="navButton" href="#productScroll">
                <img src={require("../images/buttons/Products.PNG")} id="navButton" alt="productbtn" />
              </a>
            </li>
            <li className="nav-item">
              <a type="btn" role="button" className="ml-4 mr-4" id="navButton" href="#scheduleScroll">
                <img src={require("../images/buttons/Events.PNG")} id="navButton" alt="eventsbtn" />
              </a>
            </li>
            <li className="nav-item">
              <a type="btn" role="button" className="ml-4 mr-4" id="navButton" href="#bioScroll">
                <img src={require("../images/buttons/Bio.PNG")} id="navButton" alt="biobtn" />
              </a>
            </li>
            <li className="nav-item">
              <a type="btn" role="button" className="ml-4 mr-4" id="navButton" href="#contactScroll">
                <img src={require("../images/buttons/Contact.PNG")} id="navButton" alt="contactbtn" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

    );
  };
};

export default Nav;

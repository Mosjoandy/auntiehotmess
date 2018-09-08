import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 mx-auto">
            <li className="nav-item">
              <a type="btn" role="button" className="btn btn-secondary mr-2" id="navButton" href="#aboutScroll">About</a>
            </li>
            <li className="nav-item">
              <a type="btn" role="button" className="btn btn-secondary mr-2" id="navButton" href="#productScroll">Products</a>
            </li>
            <li className="nav-item">
              <a type="btn" role="button" className="btn btn-secondary mr-2" id="navButton" href="#scheduleScroll">Schedule</a>
            </li>
            <li className="nav-item">
              <a type="btn" role="button" className="btn btn-secondary mr-2" id="navButton" href="#contactScroll">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
};

export default Nav;

import React from "react";
import "./Nav.css";

const Nav = () => (

  <nav className="navbar navbar-expand-lg navbar-light bg-secondary" id="scrollTopTarget">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarToggler">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0 mx-auto">
        <li className="nav-item">
          <a className="btn btn-light mr-3" type="button" href="#aboutScroll">About</a>
        </li>
        {/* <li className="nav-item">
          <a className="btn btn-light mr-3" type="button" href="#missionScroll">Mission</a>
        </li> */}
        <li className="nav-item">
          <a className="btn btn-light mr-3" type="button" href="#productScroll">Products</a>
        </li>
        <li className="nav-item">
          <a className="btn btn-light mr-3" type="button" href="#scheduleScroll">Schedule</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;

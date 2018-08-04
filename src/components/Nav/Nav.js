import React from "react";
import "./Nav.css";

const Nav = () => (

  <nav className="navbar navbar-expand-lg navbar-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarToggler">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0 mx-auto">
        <li className="nav-item">
          <a className="button btn-blue mr-3" type="btn" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="button btn-blue mr-3" type="btn" href="/">Mission</a>
        </li>
        <li className="nav-item">
          <a className="button btn-blue mr-3" type="btn" href="/">Products</a>
        </li>
        <li className="nav-item">
          <a className="button btn-blue mr-3" type="btn" href="/">Schedule</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;

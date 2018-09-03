import React from "react";
import "./Contact.css";
// import Map from "../Map";

const Contact = () => (
  <div className="contact" id="contactScroll">
    <div className="container">

      <hr />
      <div className="row">
        <div className="col-sm-7">
          <div className="contactTitle">
            Co-Op
            </div>
          <hr />
          <div className="justify-content-center d-flex">
            <h4><a target="_blank" rel="noopener noreferrer" href="http://www.burgeroadfarm.com/">
              <img id="burge" className="rounded-circle justify-content-center d-flex" src={require("../images/burge.png")} alt="burge" /></a>
              <div className="justify-content-center d-flex">
                <a className="badge badge-pill badge-secondary" target="_blank" rel="noopener noreferrer" href="http://www.burgeroadfarm.com/">
                  <span>Burge Road Farm</span></a>

              </div>
              <div className="justify-content-center d-flex" id="socialMedia">
                <a className="rounded-circle" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/burgeroadfarm/">
                  <img id="instagram" src={require("../images/instagram.png")} alt="ig" /></a>
                <a className="rounded-circle" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/burgeroadfarm/">
                  <img id="facebook" src={require("../images/facebook.png")} alt="fb" /></a>
              </div>
            </h4>
          </div>
          <hr />
        </div>
        <div className="col-sm-5">

          <div className="contactTitle">
            Contact
          </div>
          <hr />
          <p><b>Want to talk? Send us an email!</b></p>

          <h4><a className="rounded-circle" target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=info@auntiehotmess.com">
            <img id="email" src={require("../images/email.png")} alt="mail" /></a>
            <a className="badge badge-pill badge-secondary" target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=info@auntiehotmess.com">
              <span>info@auntiehotmess.com</span></a>
          </h4>
          <br />
          <div id="ahmIG">
            <h4><a className="rounded-circle" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/auntiehotmesssoap/">
              <img id="instagram" src={require("../images/instagram.png")} alt="ig" /></a>
              <a className="badge badge-pill badge-secondary" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/auntiehotmesssoap/">
                <span>Auntie Hotmess Soaps</span></a>
            </h4>

          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Contact;

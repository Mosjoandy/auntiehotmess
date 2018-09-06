import React from "react";
import "./Contact.css";
import { Container, Row, Col, Title, Section } from "../Modules";


const Contact = () => (
  <Section id="contactScroll">
    <Container>
      <Row>
        <Col size="sm-7">
          <Title>
            Co-Op
          </Title>
          <div className="row justify-content-center d-flex">
            <div className="justify-content-center d-flex">
              <h4>
                <img id="burge" className="rounded-circle justify-content-center d-flex" src={require("../images/burge.png")} alt="burge" />
                <div className="justify-content-center d-flex" id="socialMedia">
                  <a className="rounded-circle" target="_blank" rel="noopener noreferrer" href="http://www.burgeroadfarm.com/">
                    <img id="homepage" src={require("../images/homepage.png")} alt="homies" /></a>
                  <a className="rounded-circle" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/burgeroadfarm/">
                    <img id="instagram" src={require("../images/instagram.png")} alt="ig" /></a>
                  <a className="rounded-circle" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/burgeroadfarm/">
                    <img id="facebook" src={require("../images/facebook.png")} alt="fb" /></a>
                </div>
              </h4>
            </div>
            <div className="justify-content-center d-flex align-items-center">
              <h4>
                <img id="sprig" className="rounded-circle justify-content-center d-flex" src={require("../images/sprig.png")} alt="sprig" />

                <div className="justify-content-center d-flex" id="socialMedia">
                  <a className="rounded-circle" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sprigandstock/">
                    <img id="instagram" src={require("../images/instagram.png")} alt="ig" /></a>
                </div>
              </h4>
            </div>
          </div>
          <hr />
        </Col>
        <Col size="sm-5">
          <Title>
            Contact
          </Title>
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
        </Col>
      </Row>
    </Container>
  </Section>
);

export default Contact;

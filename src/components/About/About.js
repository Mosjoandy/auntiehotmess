import React from "react";
import "./About.css";
import { Container, Row, Col, Section } from "../Modules";
import MissionPic from "../MissionPic";

const About = () => (
  <Section>
    <Container>
      <Row>
        <Col size="sm-12">
          <div className="aboutBody">
            <Row>
              <Col size="sm-6">
              <img id="aboutHotmessLogo" className="d-flex justify-content-center rounded" src={require("../images/hotmesslogo.png")} alt="auntie hotmess logo" />
                <div className="aboutContent">

                <p>Auntie Hotmess believes in making all-natural, plant-based, and eco-friendly body products. 
                Her philosophy embraces preserving nature and reducing waste. Her hand-crafted goods are 
                package-free and responsibly sourced; using high-quality, organically-grown, biodegradeable materials. 
                </p>
            </div>
              </Col>
              <Col size="sm-6">
                <MissionPic />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </Section>
);

export default About;

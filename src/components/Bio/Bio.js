import React from "react";
import "./Bio.css";
import { Container, Row, Col, Section, Title } from "../Modules";

const Bio = () => (
  <Section id="bioScroll">
    <Container>
      <Row>
        <Col size="sm-12">
          <div className="bioBody">
            <Row>
              <Col size="sm-12">
                <Title>
                  Bio
              </Title>
                <div className="bioContent">
                  <p>Auntie Hotmess Soaps is founded on the values of preserving nature and reducing waste.
                    She strives to create body products that are biodegradeable and eco-friendly. With
                    friends and family in mind, her soaps and products are all-natural and plant-based.
                  </p>She sources ingredients from companies that use environmentally
                  friendly practices. Every product and cold processed soap is hand-crafted at
                  <span> <a target="_blank" rel="noopener noreferrer" href="#contactScroll">
                    The Burge Road Farm</a></span>, a local organic cherry farm known for its popular
                    U-Pick Cherry Event. She can be found wandering other parts of the nation in her converted shortbus
                  <span><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bigsirbus/">
                    <img id="inlineIco" src={require("../images/instagram.png")} alt="Big Sir Bus Instagram" />Big Sir Bus</a></span>
                  .
            </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </Section>
);

export default Bio;

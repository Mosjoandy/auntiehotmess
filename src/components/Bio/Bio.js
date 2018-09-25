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
                <div>
                  Auntie Hotmess was created in the summer of 2014. After
                  realizing that most products used for her body care were
                  incapable of living up to the labels they came with.
                  Expensive and wasteful too, she thought, "why? I am still
                  ashy and now itchy". At that moment she referred to the
                  saying, "if you don't like it; you can do it yourself."
                  It took her 2 years to perfect her recipes to what it is
                  today.
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

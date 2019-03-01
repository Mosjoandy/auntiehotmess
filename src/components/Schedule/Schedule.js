import React from "react";
import "./Schedule.css";
import Events from "./Events"
import { Container, Row, Col, Title, Section } from "../Modules";
import Fade from "react-reveal/Fade";

const Schedule = () => (
  <Section id="scheduleScroll">
    <Container>
      <Row>
        <Col size="sm-12">
          {/* Crazy wierd CSS interaction, won't allow :hover or become clickable in productcards.js or products.js */}
          <a href="#productScroll"><img id="productScrollTop" src={require("../images/arrowup.png")} alt="arrowupthing" /></a>
          <Fade bottom>
            <Title>
              Schedule of Events
          </Title>
          </Fade>
        </Col>
      </Row>
      <Row>
        <Col size="sm-12">
          <div className="scheduleBody">
            <Fade delay={1200} bottom>
            {/* <h1 className="text-center">Currently No Upcoming Events</h1> */}
              <Events />
              {/* Calendar Format for events.json
              event text=Name+goes+here
              date dates=YYYYMMDD
              time T2400
              where location=City+State,+#+Street+Name+,+City,+STATE+Zip */}
            </Fade>
          </div>
        </Col>
      </Row>
    </Container>
  </Section>
);

export default Schedule;

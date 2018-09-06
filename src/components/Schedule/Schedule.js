import React from "react";
import "./Schedule.css";
import Events from "./Events"
import { Container, Row, Col, Title } from "../Grid";

const Schedule = () => (
  <div className="schedule" id="scheduleScroll">
    <Container>
      <Row>
        <Col size="sm-12">
          {/* Crazy wierd CSS interaction, won't allow :hover or become clickable in productcards.js or products.js */}
          <a href="#productScroll"><img id="productScrollTop" src={require("../images/arrowup.png")} alt="arrowupthing" /></a>

          <Title>
            Schedule
          </Title>
        </Col>
      </Row>
      <Row>
        <Col size="sm-12">
          <div className="scheduleBody">
            <Events />
            {/* Calendar Format for events.json
            event text=Name+goes+here
            date dates=YYYYMMDD
            time T2400
            where location=City+State,+#+Street+Name+,+City,+STATE+Zip */}
          </div>
        </Col>
      </Row>
    </Container>
    <div className="nextComponent">
      <a href="#contactScroll"><img id="scrollDown" src={require("../images/arrowdown.png")} alt="downarrowthing" /></a>
    </div>
  </div>
);

export default Schedule;

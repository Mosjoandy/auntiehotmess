import React from "react";
import "./Product.css";
import ProductCards from './ProductCards';
import { Container, Row, Col, Title, Section } from "../Modules";
import Fade from "react-reveal/Fade";

const Product = () => (
  <Fade bottom>
    <Section id="productScroll">
      <Container>
        <Row>
          <Col size="sm-12">
            <Title>
              Products
          </Title>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <div className="productbody">
              <ProductCards />
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </Fade>
);

export default Product;

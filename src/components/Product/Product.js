import React from "react";
import "./Product.css";
import ProductCards from './ProductCards';
import { Container, Row, Col, Title, Section } from "../Modules";

const Product = () => (
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
);

export default Product;

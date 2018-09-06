import React from "react";
import "./Product.css";
import ProductCards from './ProductCards';
import { Container, Row, Col, Title } from "../Grid";

const Product = () => (
  <div className="product" id="productScroll">
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
  </div>
);

export default Product;

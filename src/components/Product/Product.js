import React from "react";
import "./Product.css";
import ProductCards from './ProductCards';

const Product = () => (
  <div className="product" id="aboutScroll">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="productTitle">
            <hr />
            Products
            <hr />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="productbody text-center">
            <ProductCards />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Product;

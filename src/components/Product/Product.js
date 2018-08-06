import React from "react";
import "./Product.css";
import ProductCards from './ProductCards';

const Product = () => (
  <div className="product">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="productbody">
            <ProductCards />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Product;

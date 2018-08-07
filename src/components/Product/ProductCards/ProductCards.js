import React, { Component } from "react";
import "./ProductCards.css";
import productcards from './productcards.json';

class ProductCards extends Component {
    render() {

        return (
            <div className="card-columns">

                {productcards.map(productcards => (
                    <div className="card border-dark">
                        <img className="card-img-top" src={productcards.image} alt={productcards.imageName} />
                        <div className="card-body card-info">
                            <h4 className="card-title text-center">{productcards.name}</h4>
                            <p className="card-text">{productcards.ingredients}</p>
                        </div>
                    </div>
                ))}

            </div>

        )
    };
};

export default ProductCards;

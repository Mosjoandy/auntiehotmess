import React, { Component } from "react";
import "./ProductCards.css";
import productcards from './productcards.json';

class ProductCards extends Component {
    render() {

        return (
            <div className="card-deck mx-auto">

                {productcards.map(productcards => (
                    <div classname="card sup">
                        <img class="card-img-top" src={productcards.image} alt={productcards.imageName} />
                        <div class="card-body">
                            <h5 class="card-title">{productcards.name}</h5>
                            <p class="card-text">{productcards.ingredients}</p>
                        </div>
                    </div>
                ))}

            </div>
        )
    };
};

export default ProductCards;

import React, { Component } from "react";
import "./ProductCards.css";
import productcards from './productcards.json';

class ProductCards extends Component {
    

    render() {

        return (
            
            <div className="card-columns">

                {productcards.map(productcards => (
                    <div className="card border-dark" key={productcards.id}>
                        <img className="card-img-top" src={productcards.image} alt={productcards.imageName} />
                        <div className="card-body card-info">
                            <hr />
                            
                            {/* <img id="sliderTrigger" data-box={productcards.id} className="productSlider" src={require("../../images/arrowdown.png")} alt="downarrowthing" /> */}
                            <div className="slideUp" id={productcards.id}>
                           
                                <h4 className="card-title text-center">{productcards.name}</h4>
                                <p className="card-text text-left"><b>Natural Ingrdients:</b> {productcards.ingredients}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        );
    };
};

export default ProductCards;

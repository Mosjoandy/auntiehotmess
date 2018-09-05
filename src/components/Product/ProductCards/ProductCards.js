import React, { Component } from "react";
import "./ProductCards.css";
import productcards from './productcards.json';

class ProductCards extends Component {
    constructor() {
        super();

        this.state = {
            toggle: true
        }
    }

    changeColor() {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        let toggle = this.state.toggle ? "toggleOn" : "toggleOff";

        return (
            <div>
                <p>
                    {/* <a className="badge badge-pill badge-secondary" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="soap bath face">All</button> */}
                    <a type="btn"
                        onClick={this.changeColor.bind(this)}
                        role="button"
                        id={toggle}
                        className=" btn btn-secondary mr-2"
                        data-toggle="collapse"
                        aria-pressed="true"
                        data-target="#soap"
                        aria-expanded="false"
                        aria-controls="soap"
                    >Soap</a>
                    <a type="btn"
                        role="button"
                        className="btn btn-secondary mr-2"
                        data-toggle="collapse"
                        aria-pressed="true"
                        data-target="#face"
                        aria-expanded="false"
                        aria-controls="face"
                    >Face</a>
                    <a type="btn"
                        role="button"
                        className="btn btn-secondary mr-2"
                        data-toggle="collapse"
                        aria-pressed="true"
                        data-target="#bath"
                        aria-expanded="false"
                        aria-controls="bath"
                    >Bath</a>
                </p>
                <div className="card-columns">

                    {productcards.map(productcards => (
                        <div className="collapse multi-collapse" key={productcards.id} id={productcards.dataid}>
                            <div className="card border-dark" >
                                <img className="card-img-top" src={productcards.image} alt={productcards.imageName} />
                                <div className="card-body card-info">

                                    {/* <img id="sliderTrigger" data-box={productcards.id} className="productSlider" src={require("../../images/arrowdown.png")} alt="downarrowthing" /> */}
                                    <div className="slideUp" id={productcards.id}>

                                        <h4 className="card-title text-center">{productcards.name}</h4>
                                        <p className="card-text text-left"><b>Natural Ingrdients:</b> {productcards.ingredients}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        );
    };
};

export default ProductCards;

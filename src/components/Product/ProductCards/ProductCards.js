import React, { Component } from "react";
import "./ProductCards.css";
import productcards from './productcards.json';

class ProductCards extends Component {
    constructor() {
        super();

        this.state = {
            toggleSoap: true,
            toggleBath: true,
            toggleFace: true
        }
    }

    changeColorSoap() {
        this.setState({ toggleSoap: !this.state.toggleSoap })
    }

    changeColorBath() {
        this.setState({ toggleBath: !this.state.toggleBath })
    }

    changeColorFace() {
        this.setState({ toggleFace: !this.state.toggleFace })
    }

    render() {
        let toggleSoap = this.state.toggleSoap ? "toggleOn btn btn-secondary mr-2" : "toggleOff btn mr-2";
        let toggleFace = this.state.toggleFace ? "toggleOn btn btn-secondary mr-2" : "toggleOff btn mr-2";
        let toggleBath = this.state.toggleBath ? "toggleOn btn btn-secondary mr-2" : "toggleOff btn mr-2";

        return (
            <div>
                <div className="d-flex justify-content-center" id="productNavi">
                    <button type="btn"
                        onClick={this.changeColorSoap.bind(this)}
                        className={toggleSoap}
                        data-toggle="collapse"
                        data-target="#soap"
                        aria-expanded="false"
                        aria-controls="soap"
                    >Soap</button>
                    <button type="btn"
                        onClick={this.changeColorFace.bind(this)}
                        className={toggleFace}
                        data-toggle="collapse"
                        data-target="#face"
                        aria-expanded="false"
                        aria-controls="face"
                    >Face</button>
                    <button type="btn"
                        onClick={this.changeColorBath.bind(this)}
                        className={toggleBath}
                        data-toggle="collapse"
                        data-target="#bath"
                        aria-expanded="false"
                        aria-controls="bath"
                    >Bath</button>
                </div>
                <div className="card-columns">

                    {productcards.map(productcards => (
                        <div className="collapse multi-collapse" key={productcards.id} id={productcards.dataid}>
                            <div className="card border-dark">
                                <img className="card-img-top" src={productcards.image} alt={productcards.imageName} />
                                <div className="card-body card-info">

                                    <div id={productcards.id}>

                                        <h4 className="card-title text-center">{productcards.name}</h4>
                                        <p className="card-text text-left"><b>Natural Ingrdients:</b> {productcards.ingredients}</p>
                                        <p className="text-right">Tags: #{productcards.dataid}</p>
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

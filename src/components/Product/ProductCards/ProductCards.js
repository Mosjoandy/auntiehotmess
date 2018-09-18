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
        };
    };

    changeColorSoap() {
        if (this.state.toggleSoap === true) {
            this.setState({
                toggleSoap: false,
                toggleAll: true
            });
        } else {
            this.setState({
                toggleSoap: true
            });
        };
    };

    changeColorBath() {
        this.setState({
            toggleBath: !this.state.toggleBath
        });
    };

    changeColorFace() {
        if (this.state.toggleFace === true) {
            this.setState({
                toggleFace: false,
                toggleAll: true
            });
        } else {
            this.setState({
                toggleFace: true
            });
        };
    };

    render() {
        let toggleSoap = this.state.toggleSoap ? "toggleOn" : "toggleOff";
        let toggleFace = this.state.toggleFace ? "toggleOn" : "toggleOff";
        let toggleBath = this.state.toggleBath ? "toggleOn" : "toggleOff";

        return (
            <div>
                <div className="d-flex justify-content-center" id="productNavi">

                    {/* <button type="btn"
                        onClick={this.changeColorAll.bind(this)}
                        className={toggleAll}
                        data-toggle="collapse"
                        data-target="#soap, #face, #bath"
                        aria-expanded="false"
                        aria-controls="soap"
                    >All Products</button> */}

                    {/* Desktop Buttons */}
                    <div className="card" id="cardButtons">
                        <a type="btn"
                            onClick={this.changeColorSoap.bind(this)}
                            className={toggleSoap}
                            data-toggle="collapse"
                            data-target="#soap"
                            aria-expanded="false"
                            aria-controls="soap">
                            <img id="outerPic" className="rounded" src="https://res.cloudinary.com/mosjoandy/image/upload/ar_1:1,c_fill,g_auto,e_art:hokusai/v1533598784/Auntie%20Hotmess%20Soaps/Lavender.jpg" alt="soap button" />
                            <div className="card-img-overlay">
                                <p><img id="innerPic2" className="rounded" src={require("../../images/buttons/Soaps.PNG")} alt="soap button" /></p>
                            </div>
                        </a>
                    </div>

                    <div className="card" id="cardButtons">
                        <a type="btn"
                            onClick={this.changeColorFace.bind(this)}
                            className={toggleFace}
                            data-toggle="collapse"
                            data-target="#face"
                            aria-expanded="false"
                            aria-controls="face">
                            <img id="outerPic" className="rounded" src="https://res.cloudinary.com/mosjoandy/image/upload/ar_1:1,c_fill,g_auto,e_art:hokusai/v1536563895/Auntie%20Hotmess%20Soaps/Bentonite_Clay_Mask_Small.jpg" alt="face button" />
                            <div className="card-img-overlay">
                                <p><img id="innerPic" className="rounded" src={require("../../images/buttons/Face.PNG")} alt="face button" /></p>
                            </div>
                        </a>
                    </div>

                    <div className="card" id="cardButtons">
                        <a type="btn"
                            onClick={this.changeColorBath.bind(this)}
                            className={toggleBath}
                            data-toggle="collapse"
                            data-target="#bath"
                            aria-expanded="false"
                            aria-controls="bath">
                            <img id="outerPic" className="rounded" src="https://res.cloudinary.com/mosjoandy/image/upload/ar_1:1,c_fill,g_auto,e_art:hokusai/v1533598789/Auntie%20Hotmess%20Soaps/Bath_Salts_Small.jpg" alt="bath button" />
                            <div className="card-img-overlay">
                                <p><img id="innerPic" className="rounded" src={require("../../images/buttons/Bath.PNG")} alt="bath button" /></p>
                            </div>
                        </a>
                    </div>

                    {/* Mobile buttons */}
                    {/* <div>
                        <a type="btn"
                            onClick={this.changeColorSoap.bind(this)}
                            className={toggleSoap}
                            data-toggle="collapse"
                            data-target="#soap"
                            aria-expanded="false"
                            aria-controls="soap"
                            id="mobileProductButton"
                        ><img id="innerPic2" className="rounded" src={require("../../images/buttons/Soaps.PNG")} alt="soap button" />
                        <img id="outerPic" className="rounded" src="https://res.cloudinary.com/mosjoandy/image/upload/ar_1:1,c_fill,g_auto,e_art:hokusai/v1533598784/Auntie%20Hotmess%20Soaps/Lavender.jpg" alt="soap button" />
                        </a>
                    </div>

                    <button type="btn"
                        onClick={this.changeColorFace.bind(this)}
                        className={toggleFace}
                        data-toggle="collapse"
                        data-target="#face"
                        aria-expanded="false"
                        aria-controls="face"
                        id="mobileProductButton"
                    > <p><img id="innerPic" className="rounded" src={require("../../images/buttons/Face.PNG")} alt="face button" /></p>
                    </button>

                    <button type="btn"
                        onClick={this.changeColorBath.bind(this)}
                        className={toggleBath}
                        data-toggle="collapse"
                        data-target="#bath"
                        aria-expanded="false"
                        aria-controls="bath"
                        id="mobileProductButton"
                    > <p><img id="innerPic" className="rounded" src={require("../../images/buttons/Bath.PNG")} alt="bath button" /></p>
                    </button> */}

                </div>

                <div className="card-deck">

                    {productcards.map(productcards => (
                        <div className="collapse multi-collapse generatedCards" key={productcards.id} id={productcards.dataid}>
                            <div className="card border-dark" >
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

import React, { Component } from "react";
import "./ProductCards.css";
import productcards from './productcards.json';

class ProductCards extends Component {
    constructor() {
        super();

        this.state = {
            // toggleAll: true,
            toggleSoap: true,
            toggleBath: true,
            toggleFace: true
        };
    };

    // changeColorAll() {
    //     if (this.state.toggleAll === true) {
    //         this.setState({
    //             toggleAll: false,
    //             toggleSoap: false,
    //             toggleBath: false,
    //             toggleFace: false
    //         });
    //     };

    //     if (this.state.toggleAll === false ) {
    //         this.setState({
    //             toggleAll: true,
    //             toggleSoap: true,
    //             toggleBath: true,
    //             toggleFace: true
    //         });
    //     };
    //     // default toggleAll will set toggleSoap/Bath/Face as false

    //     // clicking toggleAll will setState as false, changing the color of the button

    //     // clicking any of the other buttons (soap, face, bath) will set toggleAll state as true

    //     // if toggleSOap, toggleBath, and toggleFace are false, set toggleAll state as false


    //     // this.setState({ toggleAll: !this.state.toggleAll })
    //     // if (this.state.toggleBath === false && this.state.toggleSoap === false && this.state.toggleFace === false) {
    //     //     this.setState({ toggleAll: !this.state.toggleAll })
    //     // }
    // };

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
        // if (this.state.toggleBath === false && this.state.toggleSoap === false && this.state.toggleFace === false) {
        //     this.setState({ 
        //         toggleAll: false 
        //     });
        // };

    };

    changeColorBath() {
        this.setState({
            toggleBath: !this.state.toggleBath
        });

        // if (this.state.toggleBath === true) {
        //     this.setState({
        //         toggleBath: false,
        //         toggleAll: true
        //     });
        // } else { 
        //     this.setState({
        //         toggleBath: true
        //     });
        // };
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
        // let toggleAll = this.state.toggleAll ? "toggleOn btn btn-secondary mr-2" : "toggleOff btn mr-2";
        let toggleSoap = this.state.toggleSoap ? "toggleOn btn btn-secondary mr-2" : "toggleOff btn mr-2";
        let toggleFace = this.state.toggleFace ? "toggleOn btn btn-secondary mr-2" : "toggleOff btn mr-2";
        let toggleBath = this.state.toggleBath ? "toggleOn btn btn-secondary mr-2" : "toggleOff btn mr-2";

        return (
            <div>
                <p className="text-center">Tags #:</p>
                <div className="d-flex justify-content-center" id="productNavi">

                    {/* <button type="btn"
                        onClick={this.changeColorAll.bind(this)}
                        className={toggleAll}
                        data-toggle="collapse"
                        data-target="#soap, #face, #bath"
                        aria-expanded="false"
                        aria-controls="soap"
                    >All Products</button> */}
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

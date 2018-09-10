import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import About from './components/About';
import Product from './components/Product';
import Schedule from './components/Schedule';
import NicePic from './components/NicePic';
// import Bio from './components/Bio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Headroom from 'react-headroom';

class App extends Component {

  render() {

    return (
      <div>
        <Headroom>
          <Nav />
        </Headroom>
        <NicePic />
        <img id="hotmessLogo" className="sticky-top" src={require("./components/images/hotmesslogo.png")} alt="auntie hotmess logo" />
        <About />
        <Product />
        <Schedule />
        {/* <Bio /> */}
        <Contact />
        <Footer />
        <a href="#scrollTopTarget"><img id="scrollTop" src={require("./components/images/arrowup.png")} alt="arrowupthing" /></a>
      </div>
    );
  };
};

export default App;

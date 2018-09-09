import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import About from './components/About';
import Product from './components/Product';
import Schedule from './components/Schedule';
import NicePic from './components/NicePic';
// import MissionPic from './components/MissionPic';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {

  render() {

    return (
      <div>
        <Nav />
        <img id="hotmessLogo" className="sticky-top" src={require("./components/images/hotmesslogo.png")} alt="auntie hotmess logo" />
        {/* <MissionPic /> */}
        <About />
        <NicePic />
        <Product />
        <Schedule />
        <Contact />
        <Footer />
        <a href="#scrollTopTarget"><img id="scrollTop" src={require("./components/images/arrowup.png")} alt="arrowupthing" /></a>
      </div>
    );
  };
};

export default App;

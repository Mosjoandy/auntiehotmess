import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import Nav from './components/Nav'; 
import About from './components/About';
import Mission from './components/Mission';
import Product from './components/Product';
import Schedule from './components/Schedule';

class App extends Component {

  render() {

    return (
      <div>
        <Nav />
        <About /> 
        <Mission />
        <Product />
        <Schedule />
      </div>
    );
  };
};

export default App;

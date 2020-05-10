import React, { Component } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './frontend/Navbar';
import Home from './frontend/Home';
import Cart from './frontend/Cart';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    )
  }
}

export default App;
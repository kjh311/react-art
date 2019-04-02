import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Nav from './nav';
import Heading from './heading';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Heading />
      </div>
    );
  }
}

export default App;

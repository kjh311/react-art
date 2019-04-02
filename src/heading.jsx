import React, { Component } from 'react';
// import logo from './logo.svg';
import './heading.scss';
// import Nav from './components/nav';

class Heading extends Component {
  render() {
    return (
      <div className="heading">
        <h1>Welcome to Art Prompt!</h1> 
        <h5>Have Artist Block? Randomize an art prompt or create your own to get those creative juices flowing.</h5> 
      </div>
    );
  }
}

export default Heading;
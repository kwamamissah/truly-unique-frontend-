import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Generator from './containers/Generator'

class App extends Component {
  render() {
    return (
      <div>
        <Generator />
      </div>
    );
  }
}

export default App;

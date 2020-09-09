import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
    };
  }

  render() {
    return <h1>React Countries</h1>;
  }
}

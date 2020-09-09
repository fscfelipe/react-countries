import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
    };
  }

  async componentDidMount() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();

    //console.log(json);
  }

  render() {
    return <h1>React Countries</h1>;
  }
}

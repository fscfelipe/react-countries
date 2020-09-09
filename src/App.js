import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
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

    const allCountries = json.map(({ name, numericCode, flag, population }) => {
      return { name, id: numericCode, flag, population };
    });

    this.setState({
      allCountries: allCountries,
    });
  }

  render() {
    const { allCountries } = this.state;

    return (
      <div className="container">
        <h1>React Countries</h1>
      </div>
    );
  }
}

import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filteredPopulation: 0,
      filter: ''
    };
  }

  async componentDidMount() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();

    const allCountries = json.map(({ name, numericCode, flag, population }) => {
      return { name, filterName: name.toLowerCase(), id: numericCode, flag, population };
    });

    const filteredPopulation = this.calculateTotalPopulation(allCountries);

    this.setState({
      allCountries: allCountries,
      filteredCountries: Object.assign([], allCountries),
      filteredPopulation
    });
  }

  calculateTotalPopulation = (countries) => {

    const totalPopulation = countries.reduce((acc, curr) => {
      return acc + curr.population;
    }, 0)

    return totalPopulation;

  }

  handleChangeFilter = (newText) => {

    this.setState({
      filter: newText
    })

    const filterLowerCase = newText.toLowerCase();

    const filteredCountries = this.state.allCountries.filter(country => {
      return country.filterName.includes(filterLowerCase);
    })

    const filteredPopulation = this.calculateTotalPopulation(filteredCountries);


    this.setState({
      filteredCountries,
      filteredPopulation
    })

  }

  render() {
    const { filteredCountries, filter, filteredPopulation } = this.state;

    return (
      <div className="container">
        <Header
          filter={filter}
          countryCount={filteredCountries.length}
          totalPopulation={filteredPopulation}
          onChangeFilter={this.handleChangeFilter}
        />
        <Countries countries={filteredCountries} />
      </div>
    );
  }
}

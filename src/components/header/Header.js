import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers';

import css from './header.module.css'

export default class Header extends Component {


  handleInputChange = (event) => {
    const newText = event.target.value;

    this.props.onChangeFilter(newText);

  }

  render() {

    const { filter, countryCount, totalPopulation } = this.props;

    return (
      <div>
        <input type="text" value={filter} onChange={this.handleInputChange} />
        <div className={css.flexRow}>
          <span>Países: <strong>{countryCount}</strong></span>
          <span className={css.marginLeft} >População: <strong>{formatNumber(totalPopulation)}</strong></span>
        </div>
      </div>

    )
  }
}

import React, { Component } from 'react'

import css from './countries.module.css'

export default class Country extends Component {
  render() {

    const { country } = this.props;
    console.log(country)

    return (
      <div className={`${css.borda} ${css.pais}`}>
        <span className={css.nomePais}>{country.name}</span>
        <img className={css.bandeira} src={country.flag} alt={country.name} />
      </div>
    )
  }
}

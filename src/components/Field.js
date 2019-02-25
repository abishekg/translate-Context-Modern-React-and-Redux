import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext';

export class Field extends Component {
  //Should be called only context type

  static contextType = LanguageContext;
  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Naam';
    return (
      <div className="ui field" >
        <label>{text}</label>
        <input />
      </div>
    )
  }
}

export default Field

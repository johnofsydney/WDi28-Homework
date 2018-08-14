import React, { Component } from 'react';

class SearchForm extends Component {
  constructor() {
    super();

    // bind event handlers
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

    // state
    this.state = { q: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.q );
  }

  _handleInput(e) {
    this.setState( { q: e.target.value });
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" required onInput={ this._handleInput } />
        <input type="submit" />
      </form>
    )
  }
}

export default SearchForm;
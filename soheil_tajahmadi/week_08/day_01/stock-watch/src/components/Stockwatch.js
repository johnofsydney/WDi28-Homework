import React, { Component } from 'react';
import jsonp from 'jsonp-es6';



// in Stockwatch component we need to nest the search form and also the search results
class Stockwatch extends Component {
  constructor() {
    super();
    this.state = {
      sector: "",
      symbol: "",
      closePrice: 0,
      change: 0,
      marketCap: 0
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote(symbol) {

    const requestURL = "https://api.iextrading.com/1.0/stock/"+symbol+"/book";

    jsonp(requestURL).then((results) => {
      console.log(results.quote);
      this.setState( {
        sector: results.quote.sector,
        symbol: results.quote.symbol,
        closePrice: results.quote.close,
        change: results.quote.change,
        marketCap: results.quote.marketCap
      })
    }).catch((error) => {console.log(error);})


  }

  render() {
    return (
      <div>
        <h4>Look up your Stocks</h4>
        <Stocksearch onSubmit={ this.getQuote }/>
        <Stockresults sector = {this.state.sector} symbol = {this.state.symbol}
          closePrice = {this.state.closePrice} change = {this.state.change}
          marketCap = {this.state.marketCap}/>
      </div>
    )
  }
}


//the search component definition

class Stocksearch extends Component {

  constructor() {
    super();
    this.state = {
      query: ""
    }
    this._handleInput = this._handleInput.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }


  _handleInput(event) {
    this.setState ({ query: event.target.value })
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.query)
  }


  render() {
    return (
      <div>
        <h4>search form here</h4>
        <form onSubmit= { this._handleSubmit }>

          <input type="search" placeholder="stock symbol" required onInput={ this._handleInput}/>
          <input type="submit" value="search" />

        </form>
      </div>
    )
  }
}


//the search result component

class Stockresults extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.symbol}</h4>
        <p>{this.props.sector}</p>
        <p>{this.props.closePrice}</p>
        <p>{this.props.change}</p>
        <p>{this.props.marketCap}</p>

      </div>
    )
  }
}







export default Stockwatch

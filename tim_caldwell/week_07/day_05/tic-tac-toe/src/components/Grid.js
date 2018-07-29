import React, { Component } from 'react'
import Square from './Square'

class Grid extends Component {
  constructor() {
    super();

    // bind event handlers
    this._takeOwnership = this._takeOwnership.bind(this);

    // set state
    this.state = {
      squares: new Array(9),
      player: 0,
      turns: 0
    }
  }

  checkForWin( player, squareID ) {
    const winScenarios = [ "012", "345", "678", "048", "246","036", "147", "258" ];
    const win = winScenarios.some((e) => {
      if (e.includes(squareID)) {
        return e.split('').every((sqr) => {
          return this.state.squares[sqr] === player 
        })
      } else {
        return false;
      }
    });

    return win;
  }


  _takeOwnership(square, callback) {
    // swap player from 0 to -1 and vise versa
    const nextPlayer = (this.state.player * -1) - 1;
    const oldPlayer = this.state.player;
    const newSquares = this.state.squares;
    newSquares[square] = this.state.player;
    callback(this.state.player);

    const newState = {
      squares: newSquares, 
      player: nextPlayer,
      turns: this.state.turns + 1
    }

    this.setState(newState);

    if (newState.turns >= 5) {
      if (this.checkForWin( oldPlayer, square )) {
        alert("we have a winner!", oldPlayer)
      }
    }

    
  }

  makeSquares() {
    let squares = [];
    for (let i = 0; i < this.state.squares.length; i++) {
      squares.push( <Square key={i} squareID={i} click={ this._takeOwnership } /> );
    }

    return squares
  }

  render() {
    return (
      <div className="tic-tac-toe-grid" >
        { this.makeSquares() }
      </div>
    )
  }
}

export default Grid
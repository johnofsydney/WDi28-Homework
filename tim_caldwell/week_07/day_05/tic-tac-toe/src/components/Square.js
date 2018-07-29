import React, { Component } from 'react'


class Square extends Component {
  constructor() {
    super();

    // bind events
    this._setOwner = this._setOwner.bind(this);

    // set state
    this.state = {
      owner: null
    };
  }

  _setOwner(owner) {
    this.setState( { owner: owner } );
  }

  render() {
    return (
      <div className="square" onClick={() => this.props.click(this.props.squareID, this._setOwner) }>
        { this.state.owner }
      </div>
    )
  }
}

export default Square;
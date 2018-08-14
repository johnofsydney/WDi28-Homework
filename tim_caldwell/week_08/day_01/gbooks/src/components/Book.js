import React, { Component } from 'react'


class Book extends Component {

  render() {
    const { thumbUrl, title, link } = this.props.book;
    return (
      <a href={ link } target="_blank" >
        <img src={ thumbUrl } alt={ title } />
      </a>
    )
  }
}

export default Book;
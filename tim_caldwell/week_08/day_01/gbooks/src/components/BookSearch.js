import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Book from './Book';

class BookSearch extends Component {
  constructor() {
    super();
    // bind functions
    this.fetchBooks = this.fetchBooks.bind(this);

    // state
    this.state = { books: [] };
  }

  fetchBooks(q) {
    const booksUrl = "https://www.googleapis.com/books/v1/volumes?q=" + q

    window.simpleXhr('get', booksUrl, 'JSON').done( (result) => {
      let books = result.items.map( (book) => {
        let i = book.volumeInfo
        return {
          title: i.title,
          thumbUrl: i.imageLinks.thumbnail,
          link: i.infoLink
        }
      })
      
      this.setState( { books: books } );
    });
  }
  
  render() {
    return (
      <div>
        <h1>Google Books Search</h1>
        <SearchForm onSubmit={ this.fetchBooks }/>
        <output>
          { this.state.books.map( (b, i) => <Book book={b} key={i} /> )}
        </output>
      </div>
    )
  }
}

export default BookSearch
const GoogleAPIURL = 'https://www.googleapis.com/books/v1/volumes?q='

const ajaxRequest = function (method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("loadend", callback);
  xhr.open(method, url);
  xhr.send();
}

const updateDOM = function () {
  // get data from response
  let data = JSON.parse(this.responseText);
  let volumeInfo = data.items[0].volumeInfo;

  // create new elements
  let book = document.createElement('div');
  let title = document.createElement('h3');
  let cover = document.createElement('img');
  let link = document.createElement('a');

  // set elements data
  title.innerText = volumeInfo.title;
  cover.src = volumeInfo.imageLinks.thumbnail;
  link.href = volumeInfo.infoLink;

  // append elements
  link.appendChild(cover)
  book.appendChild(title);
  book.appendChild(link)

  // add book to document
  document.getElementById('output').appendChild(book);
};

const getNewBook = function () {
  query = document.getElementById('searchinput').value
  if (query !== "") {
    return ajaxRequest('get', GoogleAPIURL + query, updateDOM);
  } else {
    return null;
  }
}

document.addEventListener('readystatechange', () => {

  // wait for document to be ready before adding event listener.
  if (document.readyState === 'complete') {

    document.getElementById('search').addEventListener('submit', (e) => {
      e.preventDefault(); // stop form from submitting and changing page
      getNewBook();
    });
  }
});
const fetchBook = function () {
  const xhr = new XMLHttpRequest();
  const key_word = document.getElementById('key_word').value

  xhr.onreadystatechange = function () {
    // Ignore all readyStates except 4.
    if (xhr.readyState !== 4) {
      return;
    }

    const info = JSON.parse( xhr.responseText );

    // When we get here, the responseText should have a value from the remote server.
    for (var i = 0; i < info['items'].length; i++) {
      let p = document.createElement("img");
      p.setAttribute('src', info['items'][i]['volumeInfo']['imageLinks']['thumbnail']);
      document.body.appendChild( p );
    }
  };

  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:'+key_word);
  xhr.send(); // Asynchronous: runs in the background
};

document.getElementById('search').addEventListener('click', fetchBook);

const fetchFact = function () {
  const xhr = new XMLHttpRequest();
  let title = document.getElementById('ask').value

  xhr.onreadystatechange = function () {

    // Ignore all readyStates except 4.
    if (xhr.readyState !== 4) {
      return;
    }
    const info = JSON.parse( xhr.responseText );
    const cover = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
    const title = info["items"][0]["volumeInfo"]["title"];
    
    console.log( info );
    // debugger;
    const p = document.createElement('p');
    p.innerHTML = '<h2>' + title + '</h2>';
      p.innerHTML += `<img src=${ cover }>`;
      document.body.appendChild( p );

  };

  xhr.open('GET',  `https://www.googleapis.com/books/v1/volumes?q=title: ${ title }`)

   xhr.send();
}

document.getElementById('fetch').addEventListener('click', fetchFact);
// fetchFact();

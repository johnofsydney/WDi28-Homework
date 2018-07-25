const fetchFact = function () {

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }

    const info = JSON.parse( xhr.responseText );
    console.log(info.value);

    // create our paragraph to add to the document
    const p = document.createElement('p');

    // store the value in our paragrph
    p.innerHTML = '<strong>' + info.value + '</strong>';

    // get the div with id 'result'
    // const resultsDiv = document.getElementById( 'results' );

    // clear old result immediately before replacing with new result
    $('#results').empty();

    // append the paragraph 'p' to the body
    // resultsDiv.appendChild( p );

    // jquery version
    $('#results').append( p )


  };
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.send();
};
document.getElementById('fetch').addEventListener('click', fetchFact);

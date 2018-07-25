console.log('HELLO LUCAS');

const fetchFact = function () {

  const googleB = new XMLHttpRequest();

  googleB.onreadystatechange = function () {
    if (googleB.readyState !== 4) {
      return;
    }

    const info = JSON.parse(googleB.responseText);
    console.log(info);
    // debugger;


    const p = document.createElement('p');
    p.innerHTML = '<strong>' + info.number + '</strong>: ' + info.text;
    document.body.appendChild( p );
    };




    googleB.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=jaws');
    googleB.send(); // Asynchronous: runs in the background

    // debugger;

};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact();

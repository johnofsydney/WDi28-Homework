// console.log('is this on?');

const fetchBook = function() {
  // let url = "https://www.googleapis.com/books/v1/volumes?q=" + title; //defining the url with title as params. This is another way

  const req = new XMLHttpRequest();
  //making a HTTP request. Create an instance of an objecgt with the necessary functionality.
  //after making a request, need to tell the XMLHttp request object which JS function will handle the response by setting the onreadystatechange property of the object and naming it after the function to call when the request changes state. JS technique defining functions on the fly - anon functions

  req.onreadystatechange = function() {
    if (req.readyState !== 4) {
      return;
      //this checks the request's state 4 = done aka full server response was received and it's OK for you to continue processing it.
    }

    const info = JSON.parse(req.responseText);
    //otherwise
    //responseText to access the data sent from the server, transform JSON into JS object

    //display image of book cover
    const img = document.createElement('img') //creating img element
    img.src = info.items[0].volumeInfo.imageLinks.thumbnail; //getting img src
    document.body.appendChild( img );

    const p = document.createElement('p')// creating p element
    p.innerHTML = info.items[0].volumeInfo.description; //putting data into p element
    document.body.appendChild( p ); //appending

  };

  const title = document.getElementById('userInput').value; //getting user input from form

  req.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${title}`); //makes the HTTP request (method), url you're sending the request to. Using interpolation.

  req.send(); //parameter can be any data you want to send to the server if POST-ing the request. Form data should be sent in a format that the server can parse like a query string.

};

document.getElementById('fetch').addEventListener('click', fetchBook);
fetchBook();

const getTitle = function () {

  // (1) create an instance of the XMLHttpRequest object:
  const xhr = new XMLHttpRequest();
  //need user input from form:
  const title = document.getElementById('userInput').value;

  //then setting var of URL to take actual books url plus the title input by user
  let url = "https://www.googleapis.com/books/v1/volumes?q=" + title;



  //(4) the onreadystate() function can losten for changes to the readyState of a request:

  xhr.onreadystatechange = function() {
    //(5) console log below makes it print number between 0 and 4 depending on the state of the request. once we have the number we take it out.
    //console.log('Ready state: ' + xhr.readyState);

    //(6) If the ready state is 4...
    if (xhr.readyState !== 4) {
      return;
    }

    const info = JSON.parse(xhr.responseText);

    //creating image tag to show image in browser:
    const img = document.createElement('img');
    img.src = info.items[0].volumeInfo.imageLinks.thumbnail;
    document.body.appendChild(img);
      //(7) ...store the reponse in a variable called 'recieved_data', and....
      // let recieved_data = xhr.responseText;
      //(8)... append that to the body element of the page..
      document.body.appendChild(img);

    }

  //(2) open a HTTP request(on the instance)
  xhr.open("GET", url);
  //(3) send the request
  xhr.send();
}; //end of gettitle function

document.getElementById('fetch').addEventListener('click', getTitle);
getTitle();

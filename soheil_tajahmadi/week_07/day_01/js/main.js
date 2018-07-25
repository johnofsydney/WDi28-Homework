console.log('connected');

const grabBook = function() {
  let query = document.getElementById('query').value;
  const xhr = new XMLHttpRequest;
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4 ) {
      return
    }
    let  searchResult = JSON.parse (xhr.responseText)["items"]
    console.log(searchResult);

    let resultTag = document.createElement('div');
    resultTag.className = "results";
    for (var i = 0; i < searchResult.length; i++) {
      let title = searchResult[i]["volumeInfo"]["title"];
      let image = searchResult[i]["volumeInfo"]["imageLinks"]["thumbnail"];

      let titleTag = document.createElement('p');
      let imageTag = document.createElement('img');
      // debugger;
      titleTag.innerHTML =  title;
      imageTag.src = image;
      let box = document.createElement('div');
      box.className = "book";
      box.appendChild(imageTag);
      box.appendChild(titleTag);
      resultTag.appendChild(box);
      // debugger;
    }
    document.body.appendChild(resultTag);
  }

  let httpQuery = 'https://www.googleapis.com/books/v1/volumes?q=title:' + query
  // debugger;
  xhr.open('GET',httpQuery)
  xhr.send();

  // debugger;
}

document.getElementById('getbook').addEventListener('click', grabBook)

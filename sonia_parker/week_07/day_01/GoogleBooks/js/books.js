console.log("connected!");
const fetchBook = function() {
  const userInput = document.getElementById("search").value
  console.log(userInput);
  // const url = "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyC1EK8UHAZEehu3sPvGKAinKLGF3TTNkIE"
  const url = "https://www.googleapis.com/books/v1/volumes?q=" + userInput + "&key=AIzaSyC1EK8UHAZEehu3sPvGKAinKLGF3TTNkIE"
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {

    if (xhr.readyState !== 4) {
      return;
    }
    const info = JSON.parse(xhr.responseText);

    const t = document.createElement('p');
    t.innerHTML = info.items[0].volumeInfo.title

    document.body.appendChild(t);

    const a = document.createElement('p');
    a.innerHTML = info.items[0].volumeInfo.authors

    document.body.appendChild(a);

    //displaying the cover image
    const img = new Image();
    img.src = info.items[0].volumeInfo.imageLinks.thumbnail;
    img.setAttribute("class", "banner-img");
    img.setAttribute("alt", "book cover");
    document.getElementById("img-container").appendChild(img);
  };
  xhr.open("GET", url);
  xhr.send(); //async - runs in the background
};
document.getElementById("fetch").addEventListener("click", function() {
  fetchBook();
});
//API KEY AIzaSyC1EK8UHAZEehu3sPvGKAinKLGF3TTNkIE
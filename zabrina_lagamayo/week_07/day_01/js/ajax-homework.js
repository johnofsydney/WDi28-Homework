


const fetchFact = function() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {

    if (xhr.readyState !== 4){
      return;
    }
    const info = JSON.parse(xhr.responseText);
    const img = document.createElement('img')
    img.src = info.items[0].volumeInfo.imageLinks.thumbnail;
    document.body.appendChild(img);
  }
  const input = document.getElementById('input').value

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${input}`)
  xhr.send();

}
document.getElementById('button').addEventListener('click', fetchFact);

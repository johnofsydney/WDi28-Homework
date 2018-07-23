// console.log('this shit is working');
const getBook = () => {

  const xhr = new XMLHttpRequest();

  const title = document.getElementById("title").value;
  const url = "https://www.googleapis.com/books/v1/volumes?q=title:" + title;
  console.log(url);

  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) {
      return;
    }
    const info = JSON.parse(xhr.responseText);
    // debugger;
    const h1 = document.createElement('h1');
    h1.innerHTML = info.items[0].volumeInfo.title;
    document.body.appendChild(h1);
    const p = document.createElement('p');
    p.className = 'p-container';
    p.innerHTML = info.items[0].volumeInfo.description;
    document.body.appendChild(p);

    const cover = document.getElementById("cover");
    cover.className = 'cover';
    cover.src = info.items[0].volumeInfo.imageLinks.thumbnail;
  };

  xhr.open("GET", url);
  xhr.send();
};

const button = document.getElementById("search_button");
button.addEventListener("click", getBook);

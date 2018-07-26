const searchBook = function() {
    const book = new XMLHttpRequest();
    const title = document.getElementById('title').value;
    book.open('GET','https://www.googleapis.com/books/v1/volumes?q=title:' + title);
    book.send();

    book.onreadystatechange = function() {
      if (book.readyState === 4) {

        let received_data = JSON.parse(book.responseText);
        console.log(received_data.items[0].volumeInfo.imageLinks.thumbnail);

        const img = document.createElement("img");
        img.src = received_data.items[0].volumeInfo.imageLinks.thumbnail;
        document.body.appendChild(img);
      }
      return;
    }
};

document.getElementById('searchBook').addEventListener('click', searchBook);

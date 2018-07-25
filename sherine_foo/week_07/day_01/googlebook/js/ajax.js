console.log('Google Book');
//1
const fetchData =function () {
  const books = new XMLHttpRequest();
    const title = document.getElementById('title').value;
  //2
    books.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:'+title);
    //3
    books.send();

    books.onreadystatechange = function () {
      if (books.readyState !==4 ) {
        return;
      }
      let info = JSON.parse(books.responseText);
      const book_info = info.items[0].volumeInfo.imageLinks.thumbnail

      const h1 = document.createElement('h1');
      h1.innerHTML = info.items[0].volumeInfo.title;
      document.body.appendChild( h1 );

      const h3 = document.createElement('h3');
      h3.innerHTML = '<p> Author : ' + info.items[0].volumeInfo.authors[0] + '</p>';
      document.body.appendChild( h3 );

      const h5 = document.createElement('h5');
      h5.innerHTML = '<p> Details : ' + info.items[0].volumeInfo.description + '</p>';
      document.body.appendChild( h5 );

      const img = document.createElement("img");
      img.src = book_info;
      console.log(img);
      document.body.appendChild( img );
    }
};
//4
document.getElementById('fetch').addEventListener('click', fetchData);

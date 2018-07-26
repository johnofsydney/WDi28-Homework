console.log('rffrffv')
const fetchBook = function(event){
   event.preventDefault();

   const query = $('#query').val();

    $.getJSON(`https://www.googleapis.com/books/v1/volumes?q=${ query }&key=AIzaSyAAiCRdJuc3KbZmfKzLhPkm4DAoG5-7lcA`).done(function (info) {
    const rob = info.items[0].volumeInfo.authors
    const cover = info.items[0].volumeInfo.description
    const photo = info.items[0].volumeInfo.imageLinks.thumbnail;

    console.log(info);
    $('body').append(`<p> ${rob}</p>`)
    $('body').append(`<p> ${cover}</p>`)
    $('#photo').attr('src', photo);
  });


}
$(document).ready(function () {
  $('#symbol-search').on('submit', fetchBook);
})

/*The Reading List
Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'*/

console.log("connected");

const library = [
  {title: 'The Gulag Archipelago', author: 'Aleksandr Solzhenitsyn', alreadyRead: true},
  {title: 'Hyperion', author: 'Dan Simmons', alreadyRead: false},
  {title: 'Player Of Games', author: 'Iain M Banks', alreadyRead: true},
];

for (let i = 0; i < library.length; i++) {
  const book = library[i];
  const bookInfo = `${ library.title } by ${ library.author }`;

  if (book.alreadyRead) {
    console.log( ' You already read ' + book.title );
  } else {
    console.log( ' You still need to read ' + book.title );
  }
}

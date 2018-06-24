//this is creating a variable called img and assigning it a value of the first image on our html page
const img = document.getElementsByTagName('img')[0];
//this is starting our image on the left side of our page starting at 0px;
img.style.position ='absolute';
img.style.left = '0px';
// img.style.right = '0px';
let maxWidth = window.innerWidth -296; //cat is just under 300 so this has cat stop on edge of screen as window.innerWidth finds width of screen
let newRight = maxWidth; //here creating a variable that takes info from maxWidth above so when we employ newRight it has same rules as maxWidth
let newLeft = 0;
let moveRight;
let moveLeft; //declaring empty variable for later use

//this is calling back our image
const catWalk = function () {
//this is creating var to store the cats position as a number instead of a string
  // let left = parseInt(img.style.left);
//this is taking out start number from above and adding one to it and storing it as our next position on screen or our next pixel along and calling it 'nextStart'
  newLeft = newLeft + 10;
//this is brining back the info we have on the cats start poisition (the number we made and assigning it the value of her next position (nextStart) as a pixel value)
  img.style.left = newLeft + 'px';

  //if statement to help the cat reset

  if (parseInt(img.style.left) >= maxWidth) {

  // img.style.left = '-300px';
  moveRight = setInterval(revWalk, 100); //this function is defined below
  clearInterval(moveLeft);
  }
};

const revWalk = function() {
  newLeft = newLeft - 10;
  img.style.left = newLeft + 'px';
if (parseInt(img.style.left) === 0) {
  clearInterval(moveRight);
}

};

if (parseInt(img.style.left) === -10) {
  clearInterval(moveLeft)
}

//setting interval on our function to have it run every 10 milliseconds. setting a var as timerId with the setInterval function inside stores a number that relates to how many times the function has run and uses that number to stop the function running.


moveLeft = window.setInterval(catWalk, 100);
// window.setInterval(revWalk, 100)
// const timerId = setInterval(catWalk, 100); <-- need something here that will maybe run a loop and when the loop has run a few times the cat stops?

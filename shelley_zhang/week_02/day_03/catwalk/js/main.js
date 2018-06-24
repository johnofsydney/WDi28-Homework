console.log('testing');

//create variable to store a reference to the images
const img = document.getElementsByTagName('img')[0];

//change the style of the img to have a 'left' of '0px', so that it starts at the left hand of the screens - already done.

img.style.left = '0px';


//window.innerwidth

//create a function so that the cat moves 10 pixels to the right from its starting point

// const catWalk = function() {
//   const startingPoint = parseInt(img.style.left);
//   const newLoc = startingPoint + 10;
//   img.style.left = newLoc + 'px';
//   if (newLoc > window.innerWidth) {
//     img.style.left = '0px';
//   }
// };

// setInterval(catWalk, 1000); //how many times you call function 1000 = 1sec, 500 = .5 sec

//Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// const direction = true;  //define newloc > window.innerWidth; condition for newloc < 0

let change = +10; //defining variable outside function

  const catWalk = function() {
  const startingPoint = parseInt(img.style.left);
  const newLoc = startingPoint + change;
  img.style.left = newLoc + 'px';
  if (newLoc >= window.innerWidth) {
    change = -10;
  } else if (newLoc === 0) { //
    change = +10;
  }
};

setInterval(catWalk, 1);

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

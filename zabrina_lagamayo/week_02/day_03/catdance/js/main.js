// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
const image = document.getElementsByTagName('img')[0];
const poop = document.getElementsByTagName('img')[1];


let direction = 'forward'


// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
image.style.left = '0px';
image.style.top = '150px';

poop.style.top = '300px';
poop.style.left = '-100px';
poop.style.height = "100px";

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
const catWalk = function () {
  if (direction === 'forward') {
    walkForward()
  } else {
    walkBackward()
  }
}

const walkForward = function () {
  const oldLeft = parseInt(image.style.left);
  let newLeft = oldLeft + 1;
  image.style.left = newLeft +'px';

  const dropPoop = newLeft - window.innerWidth%5;
  poop.style.left = dropPoop + 'px';
  if (newLeft > parseInt(window.innerWidth) - 296) {
    direction = 'backward'
    image.style.transform = "scaleX(-1)";

 }


}

const walkBackward = function () {
  const oldLeft = parseInt(image.style.left);
  let newLeft = oldLeft - 1;
  image.style.left = newLeft +'px';
  const dropPoop = newLeft - window.innerWidth%5;
  poop.style.left = dropPoop + 'px';
  if (newLeft < -80) {
    direction = 'forward'
    image.style.transform = "scaleX(1)";
 }
}
setInterval(catWalk, 0.005);

// const poopFall = function () {
//   const oldTop = parseInt (poop.style.top);
//   let newTop = oldTop + 1;
//   poop.style.top = newTop + 'px';
// }
//
// setInterval(poopFall , 0.002)

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.

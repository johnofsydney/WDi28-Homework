console.log("cat walking");


// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!


const img = document.getElementsByTagName('img')[0];

img.style.left = '0px';
let change = +1;

const catWalk = function() {
  const oldLoc = parseInt(img.style.left);
  const newLoc = oldLoc + change;

  img.style.left = newLoc + 'px';


  // center location is not working
  if (newLoc === window.innerWidth/2) {
     document.getElementsByTagName('img').src="http://russellmarkolson.blogspot.com/2014/04/supehero-dance-party-wolverine.htmlhttp://2.bp.blogspot.com/-7j4emU-2SJ0/U1a46mQY8CI/AAAAAAAADlc/ejFjLbTDH2E/s1600/wolverine.gif";


  } else if (newLoc >= window.innerWidth) {
    // BONUS#1 img.style.left = "0px"; move this back to initial loc
    change = -1;
    img.style.webkitTransform= "scaleX(-1)";

  } else if (newLoc === 0) {
    change = +1;
    img.style.webkitTransform= "scaleX(+1)";
}
  // } else if (newLoc === 400) {
  //    document.getElementsByTagName('img').src="http://russellmarkolson.blogspot.com/2014/04/supehero-dance-party-wolverine.html";

    //http://russellmarkolson.blogspot.com/2014/04/supehero-dance-party-wolverine.html

  };


setInterval(catWalk,1);


// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

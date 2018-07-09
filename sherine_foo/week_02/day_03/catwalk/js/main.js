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
img.style.top =  (window.innerHeight - 300 ) + "px";
let change = + 1;

const catWalk = function()
{
  const oldLoc = parseInt(img.style.left);
  const newLoc = oldLoc + change;
  img.style.left = newLoc + 'px';

  if (newLoc >= window.innerWidth)
    {
      // BONUS#1 img.style.left = "0px"; move this back to initial loc
      change = -1;
      img.style.webkitTransform= "scaleX(-1)";

    } if (newLoc === 0)
    {
    change = + 1;
    img.style.webkitTransform= "scaleX(+1)";
    }
  //   else if (newLoc === (window.innerWidth/2))
  //   {
  //    document.getElementsByTagName('img').src="http://russellmarkolson.blogspot.com/2014/04/supehero-dance-party-wolverine.html";
  //
  //   // http://russellmarkolson.blogspot.com/2014/04/supehero-dance-party-wolverine.html
  //   };
}
setInterval(catWalk,1);

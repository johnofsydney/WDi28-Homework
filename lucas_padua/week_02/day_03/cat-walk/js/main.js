console.log(`hello cat`)

const img = document.getElementsByTagName('img')[0];

img.style.position = 'absolute';
img.style.left = '0px';
let move = +1;

const catWalk = function() {
  const oldLeft = parseInt(img.style.left);
  const newLeft = oldLeft + move;
  img.style.left = newLeft + 'px';

  // if ( newLeft > 1200) {
  if (newLeft >= window.innerWidth) {
    // img.style.left = "0px"
    move = -1;
    img.style.webkitTransform = "scaleX(-2)";

  } else if (newLeft === 0) {

    move = +1
    img.style.webkitTransform = "scaleX(+3)";
  }
};

setInterval(catWalk, .1);

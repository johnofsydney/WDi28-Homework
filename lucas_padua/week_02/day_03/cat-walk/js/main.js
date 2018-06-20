console.log(`hello cat`)

const img = document.getElementsByTagName('img')[0];

img.style.position = 'absolute';
img.style.left = '0px';
let move = +1;

const catWalk = function() {
  let oldLeft = parseInt(img.style.left);
  let newLeft = oldLeft + move;
  img.style.left = newLeft + 'px';

  // if ( newLeft > 1200) {
    if(newLeft>=window.innerWidth) {
    // img.style.left = "0px"
    move = -1;
    img.style.webkitTransform ="scaleX(-1)";

  }else if  (newLeft === 0){

     move = +1
     img.style.webkitTransform ="scaleX(+1)";
  }
};

setInterval(catWalk, 1);

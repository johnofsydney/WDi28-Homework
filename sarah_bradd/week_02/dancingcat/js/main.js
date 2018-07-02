console.log("connected");

//var start = document.querySelector('#start-button');
//var go faster = document.querySelector('#speed-button');
//var stop = document.querySelector('#stop-button');

//start.addEventListener('click', startCatWalk);
//start.addEventListener{'click',}
//}


var movePixels = 1;
var delayMs = 50;
var catTimer = null;

var img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
var walkForwards = true;
function catWalk() {
  var currentLeft = parseInt(img.style.left);

  if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
    walkForwards = false;
  }
  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }

  if (walkForwards) {
    img.style.left = (currentLeft + 10) + 'px';
  } else {
    img.style.left = (currentLeft - 10) + 'px';
  }
}
window.setInterval(catWalk, 50);

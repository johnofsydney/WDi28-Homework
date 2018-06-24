var img = document.getElementsByTagName('img')[0];



img.style.position = 'absolute';
img.style.left = '0px';
img.style.top = '250px';

var walkRight = true;
function catWalk() {
  var currentLeft = parseInt(img.style.left);

  if (walkRight && (currentLeft > (window.innerWidth-img.width))) {
    walkRight = false;
  }
  if (!walkRight && (currentLeft <= 0)) {
    walkRight = true;
  }

  if (walkRight) {
    img.style.left = (currentLeft + 1) + 'px';
  } else {
    img.style.left = (currentLeft - 1) + 'px';
  }
}
window.setInterval(catWalk, 10);



console.log("connected");

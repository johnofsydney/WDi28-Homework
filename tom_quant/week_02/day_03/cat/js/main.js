var walkForwards = true
var img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';
var background = document.getElementsByTagName('body')[0]

var audio = document.getElementById("myAudio");
function playAudio() {
    audio.play();
}
function pauseAudio() {
    audio.pause();
}


var catMove = function() {
  console.log(window.innerWidth)
  var Pos = parseInt(img.style.left);
  if (walkForwards && (Pos > (window.innerWidth - 100))) {
    walkForwards = false
  }
  if (!walkForwards && (Pos <= 0)) {
    walkForwards = true
  }
  if(Pos === (Math.ceil((window.innerWidth/2) / 10) * 10)- 100){
    window.clearInterval(timer)
    catDance()
    // Math.ceil(N / 10) * 10;
  }
  if (walkForwards) {
    img.style.webkitTransform = "scaleX(1)"
    img.style.left = (Pos + 10) + 'px';
    console.log(walkForwards + "g")
  } else {
    // reverseImg()
    img.style.webkitTransform = "scaleX(-1)"
    img.style.left = (Pos - 10) + 'px'
    console.log(Pos)
  }
}
var timer = window.setInterval(catMove, 20);

const catDance = function () {
  playAudio()
  window.setTimeout(startAgain, 3000);
  img.style.visibility = 'hidden'
  document.body.style.background = 'url("https://media.giphy.com/media/hiJKdFbxA5aDK/giphy.gif") no-repeat'
  document.body.style.backgroundSize = 'cover'


// img.width = 1000;
// img.height = 1000;
}

const startAgain = function () {
  img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif'
  img.style.visibility = 'visible'
  pauseAudio()
  document.body.style.background = 'white'
  timer = window.setInterval(catMove, 40)
}

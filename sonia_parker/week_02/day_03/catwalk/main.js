console.log("connected");
let img = document.getElementById('kitty');


img.style.left = '0px';
let count = 100;

const catWalk = function() {
  let oldPosition = parseInt(img.style.left);
  //  console.log(oldPosition);
  let newPosition = parseInt(oldPosition + 10);
  //  console.log(newPosition);
  img.style.left = newPosition + 'px';


}



setInterval(catWalk, 50);
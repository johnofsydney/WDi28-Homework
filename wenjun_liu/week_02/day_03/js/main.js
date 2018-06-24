const cat = document.getElementById('cat');
cat.style.left = '0px';
cat.style.top = '0px';
let returnWidth = window.innerWidth -296;
let returnHeight = window.innerHeight -296;
let animateright;
let oldLeft, newLeft, oldTop, newTop;
const  catWalk = function(){
  oldLeft = parseInt(cat.style.left);
  oldTop = parseInt(cat.style.top);
  newLeft = oldLeft + 10;

  //here needs more work for bouncing up and down
  if(parseInt(cat.style.top) >= returnHeight){
    newTop = oldTop - 5;
  } else {
    newTop = oldTop + 5;
  }
  
  cat.style.left = newLeft + 'px';
  cat.style.top = newTop + 'px';
  if(parseInt(cat.style.left) >= returnWidth){
    cat.style.webkitTransform ="scaleX(-1)";
    cat.style.msTransform="scaleX(-1)";
    cat.style.transform = "scaleX(-1)";
    animateright = setInterval(walkBack,100);
    clearInterval(animate);
  }

};

const walkBack = function() {
    newLeft = newLeft - 10;
    cat.style.left = newLeft + 'px';
      if(parseInt(cat.style.left) === 0){
        cat.style.webkitTransform ="scaleX(1)";
        cat.style.msTransform="scaleX(1)";
        cat.style.transform = "scaleX(1)";
        animate = setInterval(catWalk,100);
        clearInterval(animateright);
      }
}
let animate = setInterval(catWalk,100);

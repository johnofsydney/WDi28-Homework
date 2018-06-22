
const img = document.getElementsByTagName('img')[0];
img.style.left = 0;
img.style.right = 0;
let newleft = 0
let maxWidth = window.innerWidth -300; //296 is the length od the cat
let newRight =maxWidth;
let right;

const  catWalk = function(){

    newleft +=  10;
    img.style.left = newleft + 'px';

    if(parseInt(img.style.left) >= maxWidth)
    {
       // clearInterval(animate);
        img.style.webkitTransform ="scaleX(-1)";
        img.style.msTransform="scaleX(-1)";
        img.style.transform = "scaleX(-1)";
        right = setInterval(walkBack,100);
        clearInterval(animate);
    }

};

const walkBack = function() {
 //console.log('walking back')
  newleft = newleft-10;
  img.style.left = newleft + 'px';
  if(parseInt(img.style.left) === 0){
  clearInterval(right);
    }
}
var animate = setInterval(catWalk,100);

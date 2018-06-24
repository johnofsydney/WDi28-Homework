console.log("connected");

var img = document.getElementsByTagName('img')[0];
img.style.left = 0;
img.style.right = 0;
var newleft = 0
var maxWidth = window.innerWidth -296; //296 is the length of the cat
var newRight =maxWidth;
var animateright;

var  catWalk = function(){

   newleft +=  5;
   img.style.left = newleft + 'px';
   if(parseInt(img.style.left) >= maxWidth)
   {
      // clearInterval(animate);
       img.style.webkitTransform ="scaleX(-1)";
       img.style.msTransform="scaleX(-1)";
       img.style.transform = "scaleX(-1)";
       animateright = setInterval(walkBack,50);
       clearInterval(animate);
   }

};


var walkBack = function() {
console.log('walking back')
   newleft = newleft-5;
   img.style.left = newleft + 'px';
     if(parseInt(img.style.left) === 0){
       clearInterval(animateright);
       //clearInterval(animate);
     }


}
var animate = setInterval(catWalk,50);
// var animateright = setInterval(walkBack,30);



// window.screen.availWidth

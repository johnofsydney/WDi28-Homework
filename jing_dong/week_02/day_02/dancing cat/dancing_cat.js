var img = document.getElementsByTagName('img')[0];
img.style.left = 0;

var newleft = 0
var maxWidth = window.innerWidth -296; //296 is the length od the cat



var  catWalk = function(){

    newleft +=  10;
    img.style.left = newleft + 'px';
    if(parseInt(img.style.left) >= maxWidth)
    {

        img.style.webkitTransform ="scaleX(-1)";
        img.style.msTransform="scaleX(-1)";
        img.style.transform = "scaleX(1)";//把1改成-1，猫咪会回头
    }

};



 var animate = setInterval(catWalk,100);


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
///////////////////Joe way clik button////////

const Numbers = function(){
  let number = document.getElementById('test').value;
  if(number > 0)document.getElementById('result').innerHTML="number plus";
};
const button = document.getElementById(('t'));
button.addEventListener('click',Numbers);


const Numbers1 = function(){
  let robnum = document.getElementById('rob1').value;
  if(robnum > 0)document.getElementById('wynik').innerHTML="nowy number";
};
const button1 = document.getElementById(('r'));
button1.addEventListener('click',Numbers1);

const Number2 = function(){
  let robertnumbers = document.getElementById('robcik').value;
  if(robertnumbers > 0)
  document.getElementById('wyplut').innerHTML="magic number";
};
const button2 = document.getElementById(('robo'));
button2.addEventListener('click', Number2);

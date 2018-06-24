// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.






const img = document.getElementById("cat")[0];
const dog = document.getElementById("duck-hunts");

dog.style.position = "absolute";
dog.style.right = "300px";
dog.style.bottom = "0px";
cat.style.position = "absolute";
cat.style.top = "200px";
cat.style.left = "0px";
let walkBack = true;
let UpAndDown = true;


const catWalk = function() {
  const currentLeft = parseInt(cat.style.left);

//conditional to make cat loop from right to left adding a scale rotation to the image
  if (walkBack && (currentLeft > (window.innerWidth - cat.width))) {
    walkBack = false;
    cat.style.webkitTransform = "scaleX(-1)";
    cat.style.msTransform = "scaleX(-1)";
    cat.style.transform = "scaleX(-1)";
  }
  if (!walkBack && (currentLeft <= 0)) {
    walkBack = true;
    cat.style.webkitTransform = "scaleX(1)";
    cat.style.msTransform = "scaleX(1)";
    cat.style.transform = "scaleX(1)";
  }

  if (walkBack) {
    cat.style.left = (currentLeft + 10) + 'px';
  } else {
    cat.style.left = (currentLeft - 10) + 'px';
  }


};

///duck hunt dog moves from bottom to top

// const currentBottom = parseInt(dog.style.bottom);
const dogAppears = function() {
  const currentBottom = parseInt(dog.style.bottom);
  if (UpAndDown && (currentBottom > (window.innerHeight - dog.height))) {
    UpAndDown = false;
    dog.style.webkitTransform = "scaleX(-1)";
    dog.style.msTransform = "scaleX(-1)";
    dog.style.transform = "scaleX(-1)";
  }
  if (!UpAndDown && (currentBottom <= 0)) {
    UpAndDown = true;
    dog.style.webkitTransform = "scaleX(1)";
    dog.style.msTransform = "scaleX(1)";
    dog.style.transform = "scaleX(1)";
  }

  if (UpAndDown) {
    dog.style.bottom = (currentBottom + 10) + 'px';
  } else {
    dog.style.bottom = (currentBottom - 10) + 'px';
  }
///////////////////////////////////////////////////////////////////////////////
  // const halfway = Math.ceil(((window.innerHeight/2)-(dog.height/2))/walkBack)*walkBack;
  // if(currentBottom === halfway) {
  // let oldbottom = parseInt(dog.style.bottom);
  // let newbottom = oldbottom + 1;
  // dog.style.bottom = newbottom + "px";
///////////////////////////////////////////////////////////////////////////////
};


let timer = window.setInterval(catWalk, 50);
let timer1 = window.setInterval(dogAppears, 100);

//////////////////////////////////////////////////////////////////////////////
// const body = document.body;
// const tonyMontana = document.createElement("img");
// tonyMontana.src = "img/tonyMontana.gif";
// tonyMontana.style.border = "1px solid black";
// tonyMontana.style.width = "100%";
// body.appendChild(tonyMontana);

//////////////////////////////////////////////////////////////////////////

// const imgButton = document.getElementById('tony-button');
const tony = document.getElementById("imgChange");
tony.addEventListener("click", function() {
  if (this.classList.contains("changed")) {
    this.src = 'img/tonyMontana.gif';
    this.className = "";
  } else {
    this.className = "changed";
    this.src = "img/tony2.gif";
  }
});

// imgButton.addEventListener('click', tony);

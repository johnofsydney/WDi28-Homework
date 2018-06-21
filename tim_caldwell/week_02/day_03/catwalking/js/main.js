// constants
const DEFAULTIMAGE = "res/cat-walk.gif";
const DANCINGCAT = "res/dancingcat.gif";
const MOVEINTERVAL = 10; //milliseconds

const img = document.createElement( 'img' );
img.setAttribute( 'src', DEFAULTIMAGE );
img.style.position = 'absolute';
img.style.left = "0";
img.style.top = "40px";
img.className = 'moveright';
document.body.appendChild(img);

const buttons = document.getElementsByClassName('buttons')[0].children;

const setActive = function () {
  for (let i = 0; i < buttons.length; i++ ) {
    buttons[i].removeAttribute( 'class' )
  }
  this.className = 'active';
}

for (let i = 0; i < buttons.length; i++ ) {
  buttons[i].addEventListener( 'click', setActive );
}

// variables
let moveRate = 1 //pixels
let status = 0;

// main walk function
const walk = function () {
  const active = document.getElementsByClassName('active')[0];
  const id = active.id

  switch (id) {
    case 'bonus1':
      pacman();
      break;
    case 'bonus2':
      leftToRight();
      break;
    case 'bonus3':
      dancingCat();
      break;
    case 'bonus4':
      pawPrints();
      break;
    default:
      pacman()
  }

  let pawPrintImg = document.querySelectorAll( '.pawprintleft, .pawprintright' )
    for (let i = 0; i < pawPrintImg.length; i++ ) {
      if (pawPrintImg[i].style.opacity > 0) {
        pawPrintImg[i].style.opacity -= 0.008;
      }
    }
}

// cat walking left to right - Bonus #1
const pacman = function () {
  let left = parseInt( img.style.left )
  if ( img.className !== 'moveright' ) {
    img.className = 'moveright';
  }

  if( left >= window.innerWidth ) {
    left = 0 - img.width;
  }

  img.style.left = (left + moveRate) + 'px';


}

// cat alternate directions bonus #2
const leftToRight = function () {
  const left = parseInt( img.style.left );

  if ( img.className === 'moveright' ) {
    img.style.left = ( left + moveRate ) + 'px'
  }

  if ( img.className === 'moveleft'){
    img.style.left = ( left - moveRate ) + 'px'
  }

  if( left >= window.innerWidth ) {
    img.className = 'moveleft'

  } else if ( left <= -img.width ) {
    img.className = 'moveright'
  }
}

// BONUS #3
const dancingCat = function () {
  if (status === 0){
    leftToRight();
    //console.log('img', parseInt(parseInt(img.style.left) - img.width/2));
    //console.log('middle',parseInt(window.innerWidth / 2));
    if (parseInt(parseInt(img.style.left) + img.width/2 ) === parseInt(window.innerWidth / 2)) {
      console.log('dancingcat');
      status = 1;
      img.src = DANCINGCAT;
      setTimeout( function () { img.src = DEFAULTIMAGE; status = 0 }, 10000);
    }
  }
}

let ms = 0;
let msLimit = 1200;

const step1 = document.createElement('img');
const step2 = document.createElement('div');
const step3 = document.createElement('div');
const step4 = document.createElement('div');

step1.className = 'pawprintright'
step2.className = 'pawprintright'
step3.className = 'pawprintright'
step4.className = 'pawprintright'

let stepMultiplier = 0;

step1.style.opacity = 0;
step2.style.opacity = 0;
step3.style.opacity = 0;
step4.style.opacity = 0;

document.body.appendChild( step1 );
document.body.appendChild( step2 );
document.body.appendChild( step3 );
document.body.appendChild( step4 );

let mouseLocation;


const getMouseLocation = function (mouseEvent) {
  mouseLocation = mouseEvent;
  //console.log( mouseLocation );
}

window.addEventListener( 'mousemove', getMouseLocation );

// to run on each frame
const lerp = function(position, targetPosition, moveRate) {
// update position by 20% of the distance between position and target position
  let difX = (targetPosition.x - position.x)
  let difY = (targetPosition.y - position.y)
  position.x += difX / Math.abs(difX) * moveRate
  position.y += difY / Math.abs(difY) * moveRate

  return position;
}

const walkToMouse = function () {
  const currentPos = {
    x: img.offsetLeft,
    y: img.offsetTop
  }

  const targetPos = {
    x: mouseLocation.clientX,
    y: mouseLocation.clientY
  }

  if ( currentPos.x > targetPos.x ) {
    img.className = 'moveleft';
    if (img.getAttribute('src') !== DEFAULTIMAGE) {img.src = DEFAULTIMAGE; ms=0}
  } else if ( (currentPos.x === targetPos.x || currentPos.x + img.width) && currentPos.y === targetPos.y ) {
    if (img.getAttribute('src') !== DANCINGCAT) {img.src = DANCINGCAT; ms=msLimit+1;}
    return;
  } else {
    img.className = 'moveright';
    if (img.getAttribute('src') !== DEFAULTIMAGE) {img.src = DEFAULTIMAGE; ms=0;}
  }
  newPos = lerp( currentPos, targetPos, moveRate )

  img.style.top = newPos.y + 'px'
  img.style.left = newPos.x + 'px'

}

// BONUS #4
const pawPrints = function() {
  walkToMouse();

  const left = parseInt( img.style.left );
  if( img.className === 'moveleft' ) {
    step1.className = 'pawprintleft'
    step2.className = 'pawprintleft'
    step3.className = 'pawprintleft'
    step4.className = 'pawprintleft'

  } else if ( img.className === 'moveright' ) {
    step1.className = 'pawprintright'
    step2.className = 'pawprintright'
    step3.className = 'pawprintright'
    step4.className = 'pawprintright'
  }

  ms += 10;
  if (ms === 270) {
    if ( step1.className === 'pawprintright') {
      step1.style.left = parseInt(img.style.left) + 200 + 'px';
    } else {
      step1.style.left = parseInt(img.style.left) + 76 + 'px';
    }

    step1.style.opacity = 1
    step1.style.top = parseInt(img.style.top) + 257 + 'px';
  } else if (step1.style.opacity > 0) {
    step1.style.opacity -= 0.008;
  }

  if (ms === 660) {
    if ( step2.className === 'pawprintright') {
      step2.style.left = parseInt(img.style.left) + 67 + 'px';
    } else {
      step2.style.left = parseInt(img.style.left) + 209 + 'px';
    }

    step2.style.opacity = 1
    //step2.style.left = parseInt(img.style.left) + 67 + 'px';
    step2.style.top = parseInt(img.style.top) + 250 + 'px';

  } else if (step2.style.opacity > 0) {
    step2.style.opacity -= 0.008;
  }

  if (ms === 900) {
    if ( step3.className === 'pawprintright') {
      step3.style.left = parseInt(img.style.left) + 155 + 'px';
    } else {
      step3.style.left = parseInt(img.style.left) + 121 + 'px';
    }

    step3.style.opacity = 1
    // step3.style.left = parseInt(img.style.left) + 155 + 'px';
    step3.style.top = parseInt(img.style.top) + 260 + 'px';

  } else if (step3.style.opacity > 0) {
    step3.style.opacity -= 0.008;
  }

  if (ms === 1100) {
    if ( step4.className === 'pawprintright') {
      step4.style.left = parseInt(img.style.left) + 116 + 'px';
    } else {
      step4.style.left = parseInt(img.style.left) + 160 + 'px';
    }

    step4.style.opacity = 1
    //step4.style.left = parseInt(img.style.left) + 116 + 'px';
    step4.style.top = parseInt(img.style.top) + 250 + 'px';

  } else if (step4.style.opacity > 0) {
    step4.style.opacity -= 0.008;
  }

  if (ms === msLimit) {
    ms = 0;
  }

}


let interval = setInterval( walk, MOVEINTERVAL );

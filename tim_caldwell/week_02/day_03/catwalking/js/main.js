
const DEFAULTIMAGE = "res/cat-walk.gif"
let MOVERATE = 1 //pixels
const MOVEINTERVAL = 10 //milliseconds
const img = document.createElement( 'img' );
img.setAttribute( 'src', DEFAULTIMAGE )
img.style.position = 'absolute';
img.style.left = 0;
img.style.top = 0;
img.className = 'moveleft'
document.body.appendChild(img);

/// cat walking left to right
const walk = function () {
  const left = parseInt( img.style.left )
  if (img.className === 'moveleft' ) {
    img.style.left = (left + MOVERATE) + 'px'
  } else {
    img.style.left = (left - MOVERATE) + 'px'
  }

  if( left >= window.innerWidth ) {
    img.className = 'moveright'

  } else if ( left <= 0 ) {
    img.className = 'moveleft'
  }
}


setInterval( walk, MOVEINTERVAL );

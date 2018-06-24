const theCat = document.getElementsByTagName('img')[0];

theCat.style.position = 'absolute';
theCat.style.width='100px';
theCat.style.left = '0px';
theCat.style.top = '400px';

const changeGif = function() {
  theCat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
}

const danceNow = function() {

  theCat.src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/7/7d/Dancing-cat.gif";
  window.setTimeout(changeGif,3000)
}

const walk = function() {

  var catLeft = theCat.style.left;

  if (parseInt(catLeft) === parseInt(parseInt(window.innerWidth) / 2) ) {
      danceNow();
  }


  if (theCat.style.transform !== 'scaleX(-1)') {
    theCat.style.left = parseInt(catLeft) + 1 + 'px';
    if (parseInt(theCat.style.left) > parseInt(window.innerWidth - 100)) {
      theCat.style.transform = 'scaleX(-1)'
      return;
    }
  }
  else if (theCat.style.transform === 'scaleX(-1)') {
    theCat.style.left = parseInt(catLeft) - 1 + 'px';
  }
    if (parseInt(theCat.style.left) < 0 ) {
      theCat.style.transform = 'scaleX(1)'
  };
};

var walkId = setInterval(walk, 10);

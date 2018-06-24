const cat = document.getElementsByTagName('img')[0];
document.body.style.background = "url('https://nerdist.com/wp-content/uploads/2018/03/Hello-Kitty-Universal-Studios-feature-03092018.jpg')";

cat.style.left = "0px";
cat.style.top = "300px";

const catMoving = function () {
  var oldleft = parseInt(cat.style.left);
  var newleft = oldleft + 1;
  cat.style.left = newleft + 'px';

  if (newleft === 1400) {
    cat.style.left = 0;
  }
}


setInterval(catMoving, 5);

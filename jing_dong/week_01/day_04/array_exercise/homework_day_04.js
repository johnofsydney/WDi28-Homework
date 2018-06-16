// 1
const rainbowColors = [];

rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push('green', 'blue', 'indigo', 'violet');

console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length - 1]);
console.log(rainbowColors.indexOf('blue'));

// 2
const twoColors = [rainbowColors[1], rainbowColors[3]];

// 3
var nums = [0,1,2,2,2,3,3,4,5];

var res = nums.filter(function(n, i) {
  return nums.lastIndexOf(n) === i;
});

// 4
var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

console.log(arrOfArrs[0][0]);
const lastInnerArray = arrOfArrs[arrOfArrs.length - 1];
console.log(lastInnerArray[lastInnerArray.length - 1]);

// 5
const topFive = ['dogs', 'books', 'presidents', 'cats', 'toys'];

topFive.forEach(function(x, i) {
  console.log('My #' + i + ' choice is ' + x);
});

// 6
function maxOfTwoNumber(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

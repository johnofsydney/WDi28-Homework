;po/*Given the following a rectangle object like the one below,
write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle*/

/*console.log('running');

const rectangle = {
  length : 4,
  width : 4
};


rectangle.isSquare = function () {
  if (this.length === this.width) {
    return "This is a square!";
  } else {
    return "Not a square.";
  }
};*/

// Rectangle
var rectangle = {
  length: 4,
  width: 4,
  isSquare: function() {
    return (this.length == this.width);
  },
  area: function() {
    return (this.length * this.width);
  },
  perimeter: function() {
    return (this.length * 2 + this.width * 2);
  }
};



// Triangle


/*The Cash Register
Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55  */

/*function cashRegister(cart){
  var items = Object.keys(cart); // array of items by key
  var sum = 0;

  for (var i = 0; i < items.length; i++) {
    var itemName = items[i]; // get the name of the key for the item
    var itemPrice = cart[itemName]; // get the price for the item
    sum += Number.parseFloat(itemPrice); // convert the price to a float and add it to the sum
  }

  return sum;
}*/

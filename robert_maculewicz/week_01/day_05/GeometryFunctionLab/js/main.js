
/*Part 1, Rectangle
Given the following a rectangle object like the one below, write the
following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
*/

 const rectangleA = {        //this is object A
  length: 4,
  width: 4
};

const rectangleB = {        //This is object B
  length: 3,
  width: 2
}                                      //create function for Square
let isSquare = function(rec){
  if ( rec.length === rec.width ) {
    return true;
  } else {
    return false;
  }
};

let area = function(rec){                //create function for area
 return ( rec.length * rec.width );
};

let perimeter = function(rec){              //create function for perimeter
  return(2 * rec.length + 2 * rec.width )
};

 console.log( isSquare(rectangleA) );
 console.log( isSquare(rectangleB));
 console.log(area(rectangleA));
 console.log(perimeter(rectangleB));

 /*Part 2, Triangle
 Given the following a triangle object like the one below, write
 the following functions:

 isEquilateral - Returns whether the triangle is equilateral or not
 isIsosceles - Returns whether the triangle is isosceles or not
 area - Returns the area of the Triangle
 isObtuse - Returns whether the triangle is obtuse or not
*/

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
let Equilateral = function(rec){
  if(rec.sideA === rec.sideB && rec.sideB === rec.sideC && rec.sideA === rec.sideC){
    return true;
  }else {
    return false;
  }
};

let Isosceles = function(rec){
  if(rec.sideA === rec.sideB || rec.sideB === rec.sideC || rec.sideA === rec.sideC){
    return true;
  }else {
    return false;
  }
};
/////////Area function///////////////////////////////////////////
let Area = function(rec){
let p = (rec.sideA + rec.sideB + rec.sideC)/2;
let area = Math.sqrt( p * ( p - rec.sideA ) * ( p - rec.sideB ) * ( p - rec.sideC ) );
return area;
};

console.log(Area(triangleA));
console.log(Equilateral(triangleA));
console.log(Isosceles(triangleA));


/*The Cash Register
Write a function called cashRegister that takes a shopping cart object.
 The object contains item names and prices (itemName: itemPrice).
  The function should return the total price of the shopping cart.
*/

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(cart){
  let total = 0;
  for (let product in cart){                /// WAZNE JAK LICZYC SUME W OBIEKCIE
    total = total + Number(cart[product])
    //return total
  }
  return total
};
console.log(cashRegister(cartForParty)); //60.55
//secend way

const cashRegister1 = function(obj){
  let arr = Object.values(obj);
  let sum = 0;
  for(var i =0; i < arr.length; i++){
    sum = sum + +(arr[i])
  }
  };




// second way
 /*const cashRegister = function(cart){
   let total = 0,
   array = []
    for(var i in cart)
    array.push(cart[i]);
     console.log(array);
}
*/
//

//credit card zadanie
//create function validateCreditCard  that return true or fals
//number must be === 16 digits
//two diffrent digist represent
//last digits be even
//sum of all digist must be greter than 16



/*                 JUST START
let numbers = [];
//let newStr = numbers.replace(/-/g,"");
 const validateCreditCard = function(t){
  for(let i = 0 ; i < t.length; i++){
   numbers.push( Number(t[i]))
   if(numbers === 2){
    // return true;
   }

};
//console.log(validateCreditCard(numbers));
validateCreditCard();
*/
//////////////////////////
//Bank
const bank = {
  accounts: [
    {
      name: "john",
      balance: 1000,
    },
    {
      name: "joel",
      balancs: 2
    }
  ],
  addAccount: function(newName){
    let newAccoount = {
      name: newName,
      balance: 0
    }
    bank.accounts.push(newAccoount)
  },
  deposit: function(name, value){

  },
  withrolmony: function (name, value){

  }
}

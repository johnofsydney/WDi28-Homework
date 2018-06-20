console.log("connected");

// // **********************************************************************

// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not

 const rectanglE = {
   length: 3,
   width: 4,
 };
         const isSquare = function (rect) {
        const rectArray = Object.values(rectanglE);
        if (rectArray[0] === rectArray[1]){
        console.log("Rectangle is square");
        } else
        {
         console.log ("Rectangle is not square");}
        };
         isSquare();

// //******************************************************************************************************************************/
// // // // area - Returns the area of the rectangle
        const rectArea = function ( rect ) {
       const rectArray = Object.values(rectanglE);
       console.log(` The area of rectangle is: ${rectArray[0]*rectArray[1]}`);
      };
      rectArea();
// //******************************************************************************************************************************/
// // perimeter - Returns the perimeter of the rectangle
          const rectPerimeter = function ( rect ) {
         const rectArray = Object.values(rectanglE);
         console.log(`The perimeter of rectangle is: ${(rectArray[0]+rectArray[1]) * 2 }`);
         };
         rectPerimeter();
////**************************************************************************************************************************************/
// /**************************************************************************************************************************************/
// /**************************************************************************************************************************************/
// // // Part 2, Triangle
// // // Given the following a triangle object like the one below, write the following functions:
 const trianglE = {
  sideA: 5,
  sideB: 4,
  sideC: 3,
   };

 // isEquilateral - Returns whether the triangle is equilateral or not
      const isEqui = function (tri) {
    const triArray = Object.values(trianglE);
    if (triArray[0] === triArray[1] && triArray[1] === triArray[2] ){
    console.log("Triangle is equilateral");}
    else {
    console.log ("Triangle is not equilateral");}
    };
    isEqui();
     // /**************************************************************************************************************************************/

  // isIsosceles - Returns whether the triangle is isosceles or not
   const isIso = function (tri) {
  const triArray = Object.values(trianglE);
  if ((triArray[0] === triArray[1] && triArray[1] !== triArray[2])|| (triArray[0] !== triArray[1] && triArray[1] === triArray[2])){
  console.log("Triangle is isosceles");}
  else {
  console.log ("Triangle is not isosceles");}
  };
  isIso();

  // /**************************************************************************************************************************************/
   // area - Returns the area of the Triangle
    const triArea = function (tri) {
   const triArray = Object.values(trianglE);
   const p = (triArray[0]+triArray[1]+triArray[2])/2;
   console.log(`The area of triangle is : ${Math.sqrt(p*(p-triArray[0])*(p-triArray[1])*(p-triArray[2]))}`);
   };
   triArea();
// /**************************************************************************************************************************************/
// //  // // isObtuse - Returns whether the triangle is obtuse or not
    const isObtuse = function (tri) {
   const triArray = Object.values(trianglE);
   const triSideSort = triArray.sort();
   console.log(triSideSort);
   if( Math.pow(triSideSort[2],2) > Math.pow(triSideSort[1],2) + Math.pow(triSideSort[0],2)) {
   console.log("The triangle is obtuse!");
   }
   else { console.log("The triangle is not obtuse!");};
   }
    isObtuse();
//  /**************************************************************************************************************************************/
// // // //  js-homework-5.md
// // // The Cash Register
// // // Write a function called cashRegister that takes a shopping cart object. The object contains item names
// // // and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
// // // //
// // // // // Input
// // const cartForParty = {
// //   banana: "1.25",
// //   handkerchief: ".99",
// //   Tshirt: "25.01",
// //   apple: "0.60",
// //   nalgene: "10.34",
// //   proteinShake: "22.36"
// // };
// // // // // Output
// // // // cashRegister(cartForParty)); // 60.55
// // // //  js-homework-6.md

// sum shopping cart items js

// shopping cart object
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// define a function for getting the sum total of a shopping cart;
   const sumShoppingCart = function ( cart ) { // cart expects an object with key/value pair for items
  // extract values arram from Object:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
  const cartArray = Object.values(cartForParty);
  let cartArrayNumValue = 0 ; // empty variable for final sum
  for (let i = 0; i < cartArray.length; i = i + 1) {
    // accumlating the array of number values
  cartArrayNumValue += Number(cartArray[i]);
  };
  // returning our sum so it can be used elsewhere
  return cartArrayNumValue;
}
// call our sumShoppingCart function and give it the cartForParty to sum. Print the returned sum.
  console.log( sumShoppingCart( cartForParty ) );
// /********************************************************************************************************************** ****************/
// /**************************************************************************************************************************************/
// ///**************************************************************************************************************************************/
///**************************************************************************************************************************************/
// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with
//  a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers
// that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
const validateCreditCard = function(cardNum) {
  ccNum =cardNum.replace(/-/g,"");
  if (ccNum.length !== 16) {
    return false;
  };

  if (ccNum % 2 !== 0) {
    return false;
  };

  let result = 0;
  for (i = 0; i < ccNum.length ; i++) {
    result += Number(ccNum[i]);
  };
  if (result < 16 ) {
    return false;
  };

  for (i = 0; i < ccNum.length ; i++) {
    if (ccNum[0] !== ccNum[i]) {
      break;
    } else if (i === 15) {
      return false;
    };
  };
return true;
};


// //**************************************************************************************************************************************//
//  js-homework-bank.md
// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities
//  that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum
// of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to
// the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change
//  the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions
// console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work
// as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.


console.log("connected");

const bank = [
 {
  owner: "John Smith",
  balance: 144.35
},
 {
  owner: "Mike Owen",
  balance: 2500
},
{
  owner: "Guy Lorenzo",
  balance: 83.74
},
{
  owner: "Lucy Taylor",
  balance: 1000000
}
];
const moneyTotal = function(arr){
  let sum=0;
  for (var i = 0; i < arr.length; i++) {
    let numBalance = arr[i]["balance"];
     sum+=numBalance;
  }
 console.log(`In the beginning, the total money in the bank was ${sum}. The bank had ${bank.length} customers.`);
 return sum;
}
moneyTotal(bank);
const newAccountTest = {
  owner: "George Michael Bluth",
  balance: 12.39
}

const addAccount =function(obj){
  bank.push(obj);
  return bank;
}
addAccount(newAccountTest);
console.log(`Then, ${newAccountTest.owner} opened an account in the bank, with ${newAccountTest.balance} in the account. Now the bank has ${bank.length} customers in total.`);

const depositMoney = function(obj, howMuch){
  let numBalance = obj["balance"];
  let newBalance = numBalance+howMuch;

  let roundedBal = Math.round(newBalance * 100) / 100
   console.log(`Next, ${newAccountTest.owner} decided to top up balance with ${howMuch}, making new balance ${roundedBal}`);
   return roundedBal;
}
console.log(depositMoney(newAccountTest, 8.56));

const withdrawMoney = function(obj, howMuch){
  let numBalance = obj["balance"];
  let newBalance = (numBalance-howMuch);

  let roundedBal = Math.round(newBalance * 100) / 100
  console.log(`Finally, ${newAccountTest.owner} decided to withdraw ${howMuch}, making new balance ${roundedBal}`);
   return roundedBal;
}
console.log(withdrawMoney(newAccountTest, 5));


// //**************************************************************************************************************************************//
// //**************************************************************************************************************************************//
// //**************************************************************************************************************************************//
//
// //
// // JavaScript Bank
// // In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities
//  that you need to write.
// //
// // Bank
// // There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of
// money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array
// of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
// //
// // The bank has many accounts. Accounts should be objects that all share a set of common functionality.
// //
// // Accounts
// // Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the
// balance.
// //
// // There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log()
//  values to help you see your code working.
// //
// // You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected:
// add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
// //
// // Tips
// // Don't overthink this. Shorter code is probably the answer.
// //
// // Bonus
// // Ensure that the accounts cannot have negative values.
// // Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// // Additional
// // Begin exploring the JavaScript Koans. Fork, clone and start trying them.
// // https://github.com/liammclennan/JavaScript-Koans
//
//
//
//
// let bank = {
//   accounts: [],
//   addAccount: function ( accountName, openingBalance ) {
//     accNum = -1 + this.accounts.push({ // -1 since push returns the NEW length of the array.
//       accountNumber: this.accounts.length,
//       accountName: accountName,
//       balance: parseInt(openingBalance)
//     });
//
//     console.log( `Account creation successful. Your new account number is ${ accNum }`);
//
//     return accNum;
//   },
//
//   accountBalance: function ( accountNumber ) {
//     return this.accounts[ accountNumber ].balance;
//   },
//
//   withdraw: function ( accountNumber, amount ) {
//     if ( amount > this.accountBalance( accountNumber ) ) {
//       console.log( `Insufficient Balance` );
//       return false;
//     } else {
//         this.accounts[ accountNumber ].balance -= amount;
//         console.log( `${ this.accounts[ accountNumber ].accountName }'s After Withdrawal
//         Balance: $${ this.accountBalance( accountNumber ) }`);
//         return true;
//     }
//   },
//
//   deposit: function ( accountNumber, amount ) {
//     this.accounts[ accountNumber ].balance += amount;
//     console.log( `${ this.accounts[ accountNumber ].accountName }'s After Deposit
//     Balance: $${ this.accountBalance( accountNumber ) }`);
//     return;
//   },
//
//   transfer: function ( fromAccount, toAccount, amount ) {
//     if ( this.withdraw( fromAccount, amount ) ) { //withdraw returns true if successful
//       this.deposit( toAccount, amount );
//       console.log( 'Transfer successful' );
//       return true;
//     } else {
//       console.log( 'Transfer failed' );
//       return false;
//     }
//   }
// };
//

// //**************************************************************************************************************************************//
// //**************************************************************************************************************************************//

// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is
// getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example,
//   this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll
//   have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt()
// later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


const nLine = ['Time Square' , "34th", "28th", "23rd" , "Union Square", "8th"];
const lLine = ["8th" , "6th", "Union Square", "3rd" , "1st"];
const sixLine = ["33rd" , "28th" , "23rd" , "Union Square" , "Astor Place"];

const planTrip = function (lineA , getOn, lineB, getOff) {
  let line;
  let endLine;
  if (lineA === "N"){
     line = nLine;
  } else if (lineA ==="L") {
    line = lLine;
  } else {
    line = sixLine;
  }

  if (lineB === "N"){
    endLine = nLine;
  } else if (lineB ==="L") {
    endLine = lLine;
  } else {
    endLine = sixLine;
  }

  let stops;
  let travel;
  let nextTravel
  const location = line.indexOf(getOn);
  const destination = endLine.indexOf(getOff);
  if(line === endLine) {
  stops = location - destination;
  const currentStops = endLine.slice(location, destination);
  console.log(`You must travel through the following stops on the ${lineA}: ${currentStops}`);
  }
  else {
    const changeLine = line.indexOf('Union Square');
    if (location < changeLine) {
      travel = line.slice(location+1, changeLine+1);
    }else  {
      travel = line.slice(changeLine, location);
    }
    const nextLine = endLine.indexOf('Union Square');
       if (nextLine < destination) {
      nextTravel = endLine.slice(nextLine+1, destination+1);    
    }
      else {
      nextTravel = endLine.slice(destination, nextLine);
    }
    stops = Math.abs(location - changeLine) + Math.abs(nextLine - destination);
   console.log(`You must travel through the following stops on the ${lineA}: ${travel}`);
    console.log(`Change at Union Square.`);
    console.log (`Your journey continues through the following stops: ${nextTravel}`);
  }
  console.log(`${stops} stops in total.`)
};

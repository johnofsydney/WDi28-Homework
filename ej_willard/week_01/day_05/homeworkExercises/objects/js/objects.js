/*Geometry Function Lab
Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not//
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle

  const rectangleA = {
    length: 4,
    width: 4
  }; */

const rectangleA = {
  length: 6,
  width: 4
};

const isSquare = function (r) {

  if (r.length === r.width) {
    return true;
  } else {
    return false;
  }

};
  console.log('...................IS SQUARE?.............');
  console.log(isSquare(rectangleA));

  const area = function (r) {
    return (r.length * r.width);
  };
  console.log('..............AREA of RECTANGLE..............')
  console.log(area(rectangleA));

  const perimeter = function (r) {
    return 2*(r.length + r.width);
  };
  console.log('..................PERIMETER...............')
  console.log(perimeter(rectangleA));

  //////////////PART TWO TRIANGLE/////////////////////////////////////
  /*Part 2, Triangle
Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not all sides equal
isIsosceles - Returns whether the triangle is isosceles or not two sides equal
area - Returns the area of the Triangle -
isObtuse - Returns whether the triangle is obtuse or not - all different sides*/

  const triangleA = {
    sideA: 5,
    sideB: 3,
    sideC: 4
  };

  const isEquilateral = function (t) {
    if (t.sideA === t.sideB && t.sideA === t.sideC) {
      return true;
    } else {
      return false;
    }
  };
  console.log('.............equilateral triangle..............');
  console.log(isEquilateral(triangleA));


  const isIsosceles = function (t) {
    if ((t.sideA === t.sideB) || (t.sideA === t.sideC) || (t.sideB === t.sideC)) {
      return true;
    } else {
      return false;
    }
  };
  console.log('...............isosceles triangle................');
  console.log(isIsosceles(triangleA));

  const isObtuse = function (t) {
    if ((t.sideA !== t.sideB) && (t.sideA !== t.sideC) && (t.sideB !== t.sideC)) {
      return true;
    } else {
      return false;
    }
  };
  console.log('................Obtruse triangle................')
  console.log(isObtuse(triangleA));

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
cashRegister(cartForParty)); // 60.55*/

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function (cart) {
  let prices = Object.values(cart);
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum += +prices[i];
  }
  return sum;
}
console.log('...............Cart for Party.............');
console.log(cashRegister(cartForParty));

console.log('............Credit Card Validation...............');

/*Credit Card Validation
You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
Example
validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

{ valid: true, number: 'a923-3211-9c01-1112' }
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.*/

const validateCreditCard = function(cardNum) {


   cardNum = cardNum.split('-').join('');
    if (cardNum.length !== 16) {
      return false;
    }

   if (isNaN(+cardNum)) {
      return false;
    }

    if (cardNum[15] %2 !== 0) {
      return false;
    }

    let sum = 0;
    for (var i = 0; i < cardNum.length; i++) {
      sum += +cardNum[i];
    }
    if (sum < 16) {
      return false;
    }

    let areDiff = false;
    for (var i = 0; i < cardNum.length - 1; i++) { // here the loop is running and checking through all the numbers and stops at -1 so it doesnt keep checking.
      if (cardNum[i] !== cardNum[i + 1]) { //here we are saying if cardNum 0 is not equal to the second number then change our areDif let to 'true' because we WANT them to be different in order to have a valid card.
        areDiff = true;
        break; //if we have found two different numbers then we want to break out of the loop because we dont need it anymore.
      }
    }
    if (areDiff === false) { //here we are checking is areDiff has changed. if areDiff stayed false that means we found no different numbers in our loop and the card is false, it's not valid and we retrun false to exit the loop because we have our answer, none are different.
      return false;
    }

  return `Card Number: ${cardNum} is a valid card number`;

};

let variable = validateCreditCard("1999-9911-1112-9912");
console.log(variable);

console.log('...............Javascript Bank....................')
/*JavaScript Bank
In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank
There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts
Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips
Don't overthink this. Shorter code is probably the answer.

Bonus
Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
Additional
Begin exploring the JavaScript Koans. Fork, clone and start trying them.*/

//one bank with array of accounts
const bank = [
  {name: 'Melanie Sills',
  currentBalance: 500,
  },

  {name: 'Susan Oram',
  currentBalance: 100
  },

  {name: 'Paul Adams',
  currentBalance: 500
  },
  {name: 'Brendan Bullock',
  currentBalance: 10
  }

];
console.log('.........current accounts in bank............');
console.log(bank);


///////////making deposits///////////////
//fix this all so it has messages like the below `you now have X in your account... type thing`
const deposit = function(bank, money) {
     bank.currentBalance += money;
    return `You now have $${bank.currentBalance} in your account.`;
};
console.log('........making deposit......');
console.log('.........Current balance.......');
console.log(bank[2].currentBalance);
console.log('adding $50 to account')
console.log(deposit(bank[2],50));

////////withdrawal////////

const withdraw = function(bank, money) {
     bank.currentBalance -= money;
    return bank.currentBalance;
};
console.log('.......withdrawing money..........');
// console.log(withdraw(bank[2],50));

///put in function to sum up account balances
let summingBank = function(bank) {
  let bankSum = 0;
  for (var i = 0; i < bank.length; i++) {
    bankSum += bank[i].currentBalance;
  }
  return bankSum;
};
console.log('.......sum up account balanaces in bank.......')
// console.log(summingBank(bank));

//put in method to add new account -- It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts.
let addAccount = function(newName, newBalance){
  bank.push({
    name: newName,
    currentBalance: newBalance,
  })
return bank;
};
console.log('........adding new accounts to bank........');
// console.log(addAccount("Atsuko Wantanabe", 1000));
// console.log(addAccount("Brenda Barr", 10));
console.log('.............summing up new bank total with new accounts...........')
console.log(summingBank(bank));

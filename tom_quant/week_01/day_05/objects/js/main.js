// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};
const isSquare = function(input) {
  if (input.length === input.width) {
    return true
  } else {
    return false
  }
}
const area = function(input) {
  console.log(input.length * input.width)
}
const perimiter = function(input) {
  console.log((input.length + input.width) * 2)
}
// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

// p	 (	p	−	a	) 	(	p	−	b	)	 (	p	−	c	)
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function(triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
    return true
  } else {
    return false
  }
}
const isIsosceles = function(triangle) {
  if (triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideA === triangle.sideC) {
    return true
  } else {
    return false
  }
}
const areaTri = function(triangle) {
  const a = triangle.sideA
  const b = triangle.sideB
  const c = triangle.sideC
  const p = (a + b + c) / 2
  console.log(p, a, b, c)
  const area = (p * ((p - a) * (p - b) * (p - c)))
  const areaSquared = Math.sqrt(area)
  console.log(areaSquared)
}
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
const cashRegister = function(cart) {
  var price = 0
  var price2 = 0
  for (var key in cart) {
    price = Number(cart[key])
    console.log(price)
    price2 = price + price2
  }
  console.log(price2)
}

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
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
// /^[a-zA-Z0-9]{8}$/;
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// const validateCreditCard = function (card) {
//   if (!/^[0-9]{19}$/) {
//     return false
//   }
// else {
//   console.log('valid')
// }
// }
const remove = function(num) {
  var num = num.replace(/[^0-9]/g, '')
  return num
}


const validateCreditCard = function(card) {
  card = remove(card)
  console.log(card);

  if (isNaN(card)) {
    console.log(length);
    console.log('wrong needs all numbers')
    return false
  }
  if (card.length !== 16) {
    console.log(card.length);
    console.log('wrong needs to be 16');
    return false
  }
  var count = 0
  for (var i = 1; i < card.length; i++) {
    if (card[i] === card[0]) {
      count = count + 1
    }
  }
  console.log(count)

  if (count === 15) {
    console.log('wrong cant all be same numbers');
    return false
  }
  if (card.slice(-1) % 2 !== 0) {
    console.log('wrong last number must be equal');
    return false

  }

  const arr = card.split('');
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + +arr[i];
  }

  if (sum < 17) {
    console.log('wrong numbers need to add to  more than 16')
    return false
  }
  console.log(sum)

  return true
}



const bank = {
  totalMoney: 0,
  accounts: [],
  addAccount: (balance, owner) => {
    const account = {
      currentBalance: (balance),
      owner: (owner),
    }
    bank.accounts.push(account)
  },
  searchForAccount: (nameKey) => {
      for (var i=0; i < bank.accounts.length; i++) {
          if (bank.accounts[i].owner === nameKey) {
              return bank.accounts[i];
          }
      }
  },
  totalTheMoney: () => {
    var tot = 0
    for (var i = 0; i < bank.accounts.length; i++) {
      tot = tot + bank.accounts[i].currentBalance
    }
    return bank.totalMoney = tot
  },
  depositMoney: (owner, amount) => {
    const newAmount =  bank.searchForAccount(owner).currentBalance +=  amount
    console.log(`You have deposited $${amount} into ${owner}s account, there is now $${newAmount} in this account`);
    return newAmount
  },
  withdrawMoney: (owner, amount) => {
    if(amount >  bank.searchForAccount(owner).currentBalance){
      console.log('sorry you do not have the required funds to withdraw this much')
    }
    else {
      bank.searchForAccount(owner).currentBalance -= amount
      console.log(`You have withdrawn $${amount} from ${owner}s account, there is now $${bank.searchForAccount(owner).currentBalance} in this account`);
    }
  },
  transferMoney: (owner1, owner2, amount) => {
    if(amount >  bank.searchForAccount(owner1).currentBalance){
      console.log('sorry you do not have the required funds to withdraw this much')
    }
    else {
    bank.searchForAccount(owner2).currentBalance += amount
    bank.searchForAccount(owner1).currentBalance -= amount
    console.log(`$${amount} has been transferred from ${owner1} to ${owner2}s account`)
  }
  }
}
bank.addAccount(2000, 'tom')
bank.addAccount(1500, 'lisa')
bank.addAccount(3000, 'steve')




// const addAccount = function (balance, owner){
//   const accounts = {
//     currentBalance: (balance),
//     owner: (owner),
//   }
//     bank.push(accounts)
// }

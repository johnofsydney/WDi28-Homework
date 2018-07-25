console.log(`Hello Lucas`)

/*
Credit Card Validation
You're starting your own credit card business.
You've come up with a new way to validate credit cards with a simple function
called validateCreditCard that returns true or false.

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
*/


const validateCreditCard = function(creditCardNum){

  //Remove dashes
  let ccNumberNoDashes = '';
  for (let i = 0; i < creditCardNum.length; i++) {
    if(creditCardNum[i] !== '-'){
      ccNumberNoDashes += creditCardNum[i];
    }
  }

  // The credit card number must be 16 digits in length
  if(ccNumberNoDashes.length !== 16){
    return false;
  }

  // All of the digits must be numbers
  for(let i = 0; i < ccNumberNoDashes.length; i++){
    if(!Number.isInteger(Number(ccNumberNoDashes[i]))){
      return false;
    }
  }

  // The credit card number must be composted of at least two different digits (i.e. all of the digits cannot be the same)
  const obj = {};
  for(let i = 0; i < ccNumberNoDashes.length; i++){
    obj[ccNumberNoDashes[i]] = true;
  }
  if(Object.keys(obj).length < 2){
    return false;
  }

  // The final digit of the credit card number must be even
  if(ccNumberNoDashes[ccNumberNoDashes.length - 1] % 2 !== 0){
    return false;
  }

  // The sum of all the digits must be greater than 16
  let sum = 0;
  for(let i = 0; i < ccNumberNoDashes.length; i++){
    sum += Number(ccNumberNoDashes[i]);
  }
  if(sum <= 16){
    return false;
  }

  return true;
};

/**** :-) *****/
console.log(validateCreditCard('9999-9999-8888-0000')); //true
console.log(validateCreditCard('6666-6666-6666-1666')); //true
console.log(validateCreditCard('a923-3211-9c01-1112')); //false
console.log(validateCreditCard('4444-4444-4444-4444')); //false
console.log(validateCreditCard('1211-1111-1111-1112')); //true

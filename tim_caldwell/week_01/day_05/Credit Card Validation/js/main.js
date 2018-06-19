// console.log('hello world');
// Credit Card Validation
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
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
//
const isOnlyDigits = function ( cardNumberStr ) {
  let regex = /^(\d{4}\-){3}\d{4}/ //regular expression for ####-####-####-####

  return regex.test( cardNumberStr );
};

const getDigitsOnly = function ( cardNumberStr ) {
  let digits = [];
  for ( let i = 0; i < cardNumberStr.length; i++ ) {
    if ( cardNumberStr[i] !== '-' ) {
      // console.log( `digit ${i} is a number` );
      digits.push( parseInt(cardNumberStr[i]) ); //make sure the digit is a number and push into array.
    }
  }

  return digits; //digits should be in the form ################
};

const isSumValid = function ( digits ) { //digits = array of digits
  let sum = 0;
  for ( let i = 0; i < digits.length; i++ ) {
    sum += digits[i];
  }

  if ( sum >= 16 ) {
    return true;
  } else {
    return false;
  }

};

const isFinalDigitEven = function ( digits ) { //digits = array of digits
  return ( digits[ digits.length-1 ] % 2 === 0 );
};

const isDifferentDigits = function ( digits ) { //digits = array of digits
  const numbersUsed = [];
  let atLeastTwo = false;
    for ( let i = 0; i < digits.length; i++ ) {
      if ( !numbersUsed.includes( digits[i] ) ) {
        numbersUsed.push( digits[i] );
      }

      if ( numbersUsed.length === 2 ) { //break the loop and set our return value to true
        atLeastTwo = true;
        break;
      }
    }

    return atLeastTwo;
};

const validateCreditCard = function ( cardNumber ) {
  let digits = [],
      isValid = true,
      reason = '';

  if ( isOnlyDigits( cardNumber ) ) { //check to see if only digits first so rest of checks don't break
    digits = getDigitsOnly( cardNumber );
    //console.log(`${ digits } is digits only!`);

    if ( !isDifferentDigits( digits ) ) {
      isValid = false;
      reason = 'only_one_number';
    } else if ( !isFinalDigitEven( digits ) ) {
      isValid = false;
      reason = 'final_digit_odd';
    } else if ( !isSumValid( digits ) ) {
      isValid = false;
      reason = 'sum_less_than_16';
    }

  } else {
    isValid = false;
    reason = 'contains_letters';
  }

  // make final card Object
  let cardObj = {
    digits: cardNumber,
    isValid: isValid,
    reason: reason
  }

  return cardObj;

};


console.log (
  validateCreditCard('9999-9999-8888-0000'), // Returns: true
  validateCreditCard('a923-3211-9c01-1112'), // Returns: false -- contains letters
  validateCreditCard('0000-0000-0000-0000'), // Returns: false -- all the same / sum < 16
  validateCreditCard('1111-1111-1111-1111'), // Returns: false -- all the same, sum > 16
  validateCreditCard('0000-0000-0000-9999')  // Returns: false -- final digit odd
)

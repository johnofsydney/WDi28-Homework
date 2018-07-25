const validateCreditCard = ( cardNum ) => {

  const result = {
    valid: true,
    number: cardNum,
  };
  const newNum = cardNum.split('-').join('');

  if (newNum.length !== 16) {
    result.valid = false;
    result.error = "wrong_length"
    return result;
  };

  if ( isNaN(newNum)) {
    result.valid = false;
    result.error = "invalid_character"
    return result;
  };

  if ( (newNum[15]) %2 !== 0 ) {
    result.valid = false;
    result.error = "odd_final_number"
    return result;
  };

  const arr = newNum.split('');
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + +arr[i];
  };
  if (sum < 17) {
    result.valid = false;
    result.error = "sum_less_than_16"
    return result;
  };

  let same = true
  for (var i = 0; i < newNum.length; i++) {
    if ( newNum[i] !== newNum[0] ) {
      same = false;
    }
  }
  if (same === true) {
    result.valid = false;
    result.error = "only_one_type_of_number"
    return result;
  }

  return result;
}

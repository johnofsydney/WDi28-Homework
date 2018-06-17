console.log ("TestArray");


const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log(maxOfTwoNumbers(5,500));



const maxOfThree = function (n1, n2, n3) {
  let result
  if (n1 > n2 && n1 > n3) {
    result = n1;
  } if(n2 > n1 && n2 > n3) {
    result = n2;
  } else {
    result = n3;
  }
  console.log(result);
}

maxOfThree(1,2,3);



const findVowel = function (char) {
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
}
    return false;
};


findVowel("t");
findVowel("a");

//const inputArray = [];

    // get each input array as a index
    // get first index of the inputar to add the secon index input array
    // store the reuslt in a envelop

const sumArray = function (inputArray) {
  let result = 0;
    for (var i = 0; i < inputArray.length; i++) {
      result = inputArray[i] + result;
    }
    console.log(result);
};

sumArray([2,3,4,5]);

//const multipleArray = function ()

//Strings
//Dr Evil
const evil = function(amount){
  let result = amount + " " + "dollars";
//  console.log(result);
  if (amount == "1000000"){
    result += " (pinky)";
    console.log(result);
  } else {
    console.log(result);
  }
  // console.log(result);
return result;

}
evil(10);
evil(1000000);
//

//Mix Up
//I started with experimenting with just one string, maybe create a function so it does the same for the second string as a refactor?
const mixUp = function(str1){
  //split string into array
  const arr1 = str1.split('');
  console.log(arr1);
//   const arr2 = str2.split('');
// console.log(arr2);
//slice out two first letters
const slicedArr1 = arr1.slice(0,2);
console.log(slicedArr1);
//reverse those symbols
const reversedArr1 = slicedArr1.reverse();
console.log(reversedArr1);
//join two symbols and the rest of the array in one, starting after index 2
const concatArr1 = reversedArr1.concat(arr1.slice(2));
console.log(concatArr1);
//return a string via join method
const joinedResult = concatArr1.join("");
console.log(joinedResult);
return joinedResult;
}
mixUp("raymond");

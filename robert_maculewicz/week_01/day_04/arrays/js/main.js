// Starting with an empty array called rainbowColors:
//
// Add "orange" to the end of the array
// Add "red" to the start of the array
// Add "yellow" to the end

let rainbowColors = ['orange','red','yellow'];

console.log(rainbowColors);

//Add "green", "blue", "indigo", and "violet" to the end of the array
// Try and do this using one method

rainbowColors.push('green','blue','indigo','violet');
console.log(rainbowColors);

//Log out the length of the array
console.log(rainbowColors.length);

//Log out the second item

//Log out the last item (make this flexible/dynamic!)
console.log(rainbowColors[rainbowColors.length -1]);

// Log out the index of the string "blue"
console.log(rainbowColors.indexOf ("blue"));

//Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
let twoColors = rainbowColors.splice(1, 3);
console.log(twoColors);

//Create an array to hold your top five choices of something (dogs, books, presidents, whatever). If you choose movies, the right top choice is "Satantango".
//For each choice, log to the screen a string like: "My #1 choice is blue."
let choiceCity = ['Sydney','Perth','Darwin','Canberra','Cronulla'];
for(let i = 0; i < choiceCity.length ; i++){
  console.log(`My number ${i + 1} is ${choiceCity[i]}`);
}
//Array and Functions Bonus Material
//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
//Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

let maxOfTwoNumbers = function(num1, num2){
if(num1 > num2){
  console.log(`Largest number from ${num1} and ${num2} is ${num1}`)
}else{
console.log(`Largest number from ${num1} and ${num2} is ${num2}`)
}
};
maxOfTwoNumbers(100, 300);
 //easy way

 let maxOfTwoNumbers1 = function (num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
 };
 console.log(`The greater number of 5 and 10 is ${ maxOfTwoNumbers1(5, 10) }.`);
 console.log(`The greater number of 15 and 30 is ${ maxOfTwoNumbers1(15, 30) }.`);


//Define a function maxOfThree that takes three numbers as arguments and returns
//the largest of them. NOT WORK

let maxOfThree = function(num1, num2, num3){
  if(num1 > num2 >num3){
    return num1;
    //console.log(` From ${num1} ${num2} and ${num3} the bigest is ${num1}`)
  }else if(num2 > num1 > num3){
    return num2;
  }else{
    return num3
  }
};
maxOfThree(10, 100, 3);
//console.log(`The largest number from 134, 110, 5 is ${maxOfThree(134, 110, 5)}.`);

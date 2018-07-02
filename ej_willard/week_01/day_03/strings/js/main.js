//DrEvil
const DrEvil = function (amount) {
  if (amount === 1000000) {
    return `${amount} Dollars (Pinky)`;
  } else {
    return `${amount} Dollars`;
  }
};
DrEvil(10);


//MixUp
const mixUp = function (str1, str2) {
  const newY = str1.slice(0,2) + str2.slice(2, str2.length);
  const newX = str2.slice(0,2) + str1.slice(2, str1.length);
  console.log(newY, newX);
};
mixUp('mix', 'pod');

//FixStart
const fixStart = function(string) {
  const splitter = string.split("");
for (var i = 1; i < string.length; i++) {
  if (splitter[i] === string[0]) {
    splitter[i] = '*';
  }
}
 const join = splitter.join("");
 console.log(join);
};

/*Toms solution
const fixStart = function (stringFix) {
let output = stringFix[0]
for(var i = 1; i < stringFix.length; i++) {
if (stringFix[i] === stringfix[0])
output = output + '*';
else
output = output + stringFix[i];
}
return output;
};*/

//Verbing - think i need a loop but now idea how to put in. //THIS DOESN't WORK.
//first creat function
//in function need to search/identify if the word in verbing ends in ing - if yes && its over 3 letters then add ly
//else if verbing is over 3 letters and doesn't end in ing add ing
//else leave as is. --> look for ends with function....
const verbing = function(string) { //step one
  const sea = string.search('ing');
  for (var i = 1; i < string.length; i++);
  if (sea[i] === 'ing' && string.length >= 3) {
  return `${string}ly`;
} else if (string.length >= 3) {
  return `${string}ing`;
} else {
  return `${string}`;
}
verbing('swim');
};


//not bad - COULDNT FINISH

const notBad = function(string) {
  var nb = string.search('not', 'bad');

}

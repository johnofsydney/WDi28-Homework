//DrEvil

const DrEvil = function(amount) {
  if (amount === 1000000) {
      return amount + " dollars" + " (pinky)";
  } else {
    return amount + " dollars";
  }
};

DrEvil(100);

//mixUp

const mixUp = function(string1, string2) {
 const new1 = string1.slice(0,2) + string2.slice(2, string2.length);
 const new2 = string2.slice(0,2) + string1.slice(2, string1.length);
 console.log(new1, new2);
}

mixUp("Dogger", "Catter");

//fixStart

const fixStart = function(string) {
  const splitter = string.split(""); //splitting the array up into letters
for (var i = 1; i < string.length; i++) {
  if (splitter[i] === string[0]) {
<<<<<<< HEAD
    splitter[i] = "*";
=======
    splitter[i] = "*"; //strings cannot be changed, you can only add and remove
>>>>>>> ac228c35c0a230efef84c409ab3163c93a28398b
  }
}
const combine = splitter.join("");
console.log(combine);
return combine;
};

fixStart("bobby");

//verbing

const verbing = function(string) {
  if (string.length < 3) {
    console.log(string);
  } else if (string.endsWith("ing")) {
    const ly = string + "ly";
    console.log(ly);
  } else {
    const ing = string + "ing";
    console.log(ing);
  }
};

verbing("swimming");
verbing("swimm");
verbing("go");

//Not Bad

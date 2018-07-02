const DrEvil = function(amount) {
  if (amount === 1000000) {
    console.log (amount + " dollars (pinky)");
  } else {
    console.log(amount + " dollars");
  }
};

<<<<<<< HEAD
=======
//let msg = amount + "dollars"
// msg += "(pinky)"

>>>>>>> 3fb37484a642d78b3ddb4b1056cba2fdb111dec4

DrEvil(10);
DrEvil(1000000);


const mixUp = function (str1, str2) {
  const newX = str1.slice(0,2) + str2.slice(2, str2.length);
  const newY = str2.slice(0,2) + str1.slice(2, str1.length);
  console.log(newY, newX);
  return (newY, newX);
};

mixUp("mix", "pod");


const fixStart = function (str) {
  const splitter = str.split("");
  for (var i = 1 ; i < str.length; i++) {
      if (splitter[i] === str[0]) {
        splitter[i] = "*" ;
      }
  }
 const result = splitter.join("");
 console.log(result);
};

 fixStart("babble");



 const verbing = function (str) {
   const lastThree = str.substr(str.length - 3);
   //console.log("lastThree is " + lastThree);
<<<<<<< HEAD
   if (str.length >= 3 && lastThree === "ing"); {
      const result = str + "ly";
      console.log (result);
      //return result; // why can't i just use return and remove console.log? Just using return the result will not show.
        }
   if (str.length >= 3 && lastThree !== "ing" ) {
      const result = str + "ing";
      console.log (result);
      //return result; // why can't i just use return and remove console.log? Just using return the result will not show.
        }
     if (str.length < 3 ) {
       const result = str;
       console.log(result);
       //return result;
     }
   };
=======
   let result;
   if (str.length >= 3 && lastThree === "ing") {
      result = str + "ly";
      //console.log (result);
      //return result; // why can't i just use return and remove console.log? Just using return the result will not show.
        }
   if (str.length >= 3 && lastThree !== "ing" ) {
      result = str + "ing";
      //console.log (result);
      //return result; // why can't i just use return and remove console.log? Just using return the result will not show.
        }
     if (str.length < 3 ) {
       result = str;
       //return result;
     }
     console.log(result);
};
>>>>>>> 3fb37484a642d78b3ddb4b1056cba2fdb111dec4
//not getting adding "ly" part correct :(
   verbing("swim");
   verbing("go");
   verbing("swimming");


<<<<<<< HEAD
const notBad = function (str, strArray){
  for (var i = 0; i < strArray.length; i++) {
    if (strArray[i].match(str)) return i;
    const result =
    console.log()
  }
  return -1;
};

notBad("not", "This dinner is not that bad!");


// var str = 'For more information, see Chapter 3.4.5.1';
// var re = /see (chapter \d+(\.\d)*)/i;
// var found = str.match(re);
//
// console.log(found);
=======

const notBad = function (str){
  str.indexOf('not')
};

notBad("It's not a bad ")
>>>>>>> 3fb37484a642d78b3ddb4b1056cba2fdb111dec4

console.log("connected");

//Why pay a fortune teller when you can just program your fortune yourself?
//Store the following into variables: number of children, partner's name, geographic location, job title.


const numKids  = 3;
const partner  = 'Peter';
const geoLocation = 'Germany';
const jobTitle = 'retail';
//Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
const future = ( 'You will be a ' + jobTitle + ' in ' + geoLocation + '' and married to ' +
   partner ' + ' with ' + numKids + ' kids.';
console.log( 'future');

//Want to find out how old you'll be? Calculate it!
//Store your birth year in a variable.
//JOHN! When i try const age = function { the code does not work - are you able to explain??}
const birthYear = 1985;
//Store a future year in a variable.
const futureYear = 2018;
const age = ('futureYear' - 'birthYear');
//Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.
console.log('I will be either ' + age + ' or ' + (age - 1));
//Calculate your 2 possible ages for that year based on the stored values.
//For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.


//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//Store your current age into a variable.
const currentAge = 32;
//Store a maximum age into a variable.
const maxAge = 90;
//Store an estimated amount per day (as a number).
const estAmount = 2;
//Calculate how many you would eat total for the rest of your life.
const totalNeeded = ('estAmount * 360') - ('maxAge - currentAge');
//Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
console.log( 'You will need' + totalNeeded  +  ' cups of tea to last you until the ripe old age of ' + maxAge );

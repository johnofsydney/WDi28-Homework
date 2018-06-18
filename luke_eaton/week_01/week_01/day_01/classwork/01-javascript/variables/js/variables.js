/* Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
*/


const numkids = 3;
const partnerName = 'Glenn';
const geoLocation = 'London';
const jobTitle = 'window cleaner';
// const fortune = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' , and married to ' + partnerName + ' with ' + numkids + ' kids. ';

const fortune = (`You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ partnerName } with ${ numkids } kids.`);

console.log( fortune );

/* Forgot how old someone is? Calculate it!

Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: "They are either NN or NN", substituting the values.
*/


const numKids = 2;
const partnerName = 'Peter';
const geoLocation = 'Sydney';
const jobTitle = 'Nurse';
const fortune = `You will be a ${ jobTitle } in  ${ geoLocation } and married to
${ partnerName } with ${ numKids } kids.`;
console.log("23");
console.log( fortune );



const currentAge = 39;
const maximumAge = 55;
const amountPerDay = 4;
const amountPerYear = amountPerDay * 365.25; //including leap years
const yearsRemaining = maximumAge - currentAge;
const amountRequired = amountPerDay * yearsRemaining;

console.log(`You will need ${ amountRequired } to last you until the ripe old age of  ${ maximumAge }`);


const radius =10;
const diameter = radius * 2;
const circumference = diameter * Math.PI;
console.log(`The circumference is ${ circumference }`);

const area = Math.PI * radius * radius; //pi * r^2
console.log(`The area is ${ area }`);

let celsius = 17;
const fahrenheit = celsius * 1.8 + 32;
console.log(`${ celsius } C is ${ fahrenheit } F`);
console.log(`${ fahrenheit } F is ${ celsius } C`);




const calculateDogAge = function (dogage, conversionRate) {
const conversionRate = 7;
    const dogYears = dogage * conversionRate;
    console.log("Your dog is " + dogYears + " years old in dog years!");
};
calculateDogAge(2, 7);
calculateDogAge(1, 7);
calculateDogAge(6, 7);

calculateDogAge(1, 9);

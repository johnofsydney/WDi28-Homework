console.log("connected");
//leap years
const isLeapYear = function(year){
  //check if year is evenly divisible by 4,400, but not by 100
 return ((year%4===0) && (year%100!==0)) || (year%400===0);
}
console.log(isLeapYear(1997));
console.log(isLeapYear(1996));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));

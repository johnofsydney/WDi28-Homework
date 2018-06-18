console.log('connected');
const bank = [
 {
  owner: "John Smith",
  balance: 144.35
},
 {
  owner: "Anna Parker",
  balance: 2500
},
{
  owner: "Poor Guy",
  balance: 83.74
},
{
  owner: "Lucky Joe",
  balance: 1000000
}
];
const moneyTotal = function(arr){
  let sum=0;
  for (var i = 0; i < arr.length; i++) {
    let numBalance = arr[i]["balance"];
     sum+=numBalance;
  }
 console.log(`In the beginning, the total money in the bank was ${sum}. The bank had ${bank.length} customers.`);
 return sum;
}
moneyTotal(bank);
// console.log(moneyTotal(bank));
//addAccount: enrol new account into array of accounts
const newAccountTest = {
  owner: "George Michael Bluth",
  balance: 12.39
}

const addAccount =function(obj){
  bank.push(obj);
  return bank;
}
addAccount(newAccountTest);
console.log(`Then, ${newAccountTest.owner} opened an account in the bank, with ${newAccountTest.balance} in the account. Now the bank has ${bank.length} customers in total.`);
//deposits money provided its a number only!
const depositMoney = function(obj, howMuch){
  let numBalance = obj["balance"];
  let newBalance = numBalance+howMuch;
  //rounding to only 2 decimals
  let roundedBal = Math.round(newBalance * 100) / 100
   console.log(`Next, ${newAccountTest.owner} decided to top up balance with ${howMuch}, making new balance ${roundedBal}`);
   return roundedBal;
}
console.log(depositMoney(newAccountTest, 8.56));

//withdraws money provided its a number only!
const withdrawMoney = function(obj, howMuch){
  let numBalance = obj["balance"];
  let newBalance = (numBalance-howMuch);
  //rounding to only 2 decimals
  let roundedBal = Math.round(newBalance * 100) / 100
  console.log(`Finally, ${newAccountTest.owner} decided to withdraw ${howMuch}, making new balance ${roundedBal}`);
   return roundedBal;
}
console.log(withdrawMoney(newAccountTest, 5));

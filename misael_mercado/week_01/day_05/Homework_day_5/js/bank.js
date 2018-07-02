// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.


/////////you must change the index.html js link in order to see all the homework by file (js folder)///////

const bank = {

  // array to store new object account, empty by default
  accounts: [],

  // property function that takes a number as an argument, return the balance of the account which has the index of that number.
  showBalance: function(acc) {
    return bank.accounts[acc].balance;
  },

  // property function that add the amount to the specific account
  deposit: function(acc, amount) {
    return (bank.accounts[acc].balance += amount);
  },

  // property function that withdraw the amount from the specific account
  withdraw: function(acc, amount) {

    // check if the user is trying to withdraw more than the available balance
    if (bank.accounts[acc].balance - amount >= 0) {
      return (bank.accounts[acc].balance -= amount);
    } else {
      return "Not enough funds to complete this transaction";
    }
  },

  // property function to add a new account, it returns the index of the the new account in the array
  addAccount: function(specificAcc) {

    // when add an element to an array, it returns the new length of the array. If we want the index of that new element, we need to return that number minus 1
    return (bank.accounts.push(specificAcc) - 1);
  },

  // property function to get the total amount of all accounts' balance
  getSum: function() {
    let sum = 0;
    for (let i = 0; i < bank.accounts.length; i++) {
      sum += bank.accounts[i].balance;
    }
    return sum;
  }
};

// account object
const firstAccount = {
  owner: "Misael M",
  balance: 2000

};

const secAccount = {
  owner: "Isabel Rouch",
  balance: 5000

};



// position of the newAccount in the array
 const index = [
   bank.addAccount(firstAccount), bank.addAccount(secAccount) ];


console.log(`The account holder: ${bank.accounts[index[1]].owner} has a balance of ${bank.accounts[index[1]].balance} in the bank.`);

bank.deposit(index[1], 250);

console.log(`The account holder:${bank.accounts[index[1]].owner} has a balance of  ${bank.accounts[index[1]].balance} in the bank.`);

bank.withdraw(index[1], 180);

console.log(`The account holder: ${bank.accounts[index[1]].owner} has a balance of  ${bank.accounts[index[1]].balance} in the bank.`);

console.log(`The bank has a total balance of ${bank.getSum()}`);


console.log(`The account holder:${bank.accounts[index[1]].owner} has a balance of ${bank.withdraw(index[1], 450)} in the bank`);

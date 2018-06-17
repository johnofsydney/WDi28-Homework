console.log("Connected to the Bank of Dank");



// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
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

let tot = 0;
const bank = {
  //empty array of accounts
  accounts: [],

//add account function pushing into the empty accounts array.
  addAccount: function (name, money) {

    let newAccount = {
      accountName: name,
      balance: money,
    }
    bank.accounts.push(newAccount);
  },

//total sum of accounts in bank
  total: function () {
    for (let i = 0; i < bank.accounts.length; i++) {
      tot = tot + bank.accounts[i].balance;
    }
    return tot;
  },

  //withdraw
  withdraw: function(amount, accountID) {
    let moneyIn = bank.accounts[accountID].balance - amount;
    bank.accounts[accountID].balance = moneyIn;
    console.log(`You have ${moneyIn} dollars left.`);
  }

}

bank.addAccount("Caleb", 2322);
bank.addAccount("John", 5344);
bank.addAccount("Glen", 3453);

console.log(`The total is ${bank.total()}`);

console.log("The account registered to: " + bank.accounts[0].accountName + " has $" + bank.accounts[0].balance + " in it");
bank.withdraw(500, 0);

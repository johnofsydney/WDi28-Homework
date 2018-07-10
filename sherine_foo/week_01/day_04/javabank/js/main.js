console.log("JavaBank");

// JavaScript Bank
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
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.

// my psuedocode
// create const bank with one name and balance
// create sum function to loop balance from bank accounts and add all them to get the sum of all balance
// create add account functions where add new name and new balance
// create deposite function where locate name and balance, add amount deposite in the balance
// show update balance
// create withdraw function where locate name and balance, substract amount wihtdraw from balance, and show update balance
// when amount withdraw is more than balance, access denied
// create transfer function
//  - input name and amount to transfer, chekc if amount transfer is less than balance
//  - run transfer function - get name1 and balance 1, transfer to name 2 , balance 2.
//                - deduct from balance 1 and added transfer amount to balance 2
//                - update both balance amounts




function Account(name, balance)
  {
    this.name = name;     // property
    this.balance = balance;  // property
    // this.bankAccounts = bankAccounts; // runction create list of accounts (will replace this wtih addAccount function)
    // this.addAccount = addAccount;  // function
    // // this.sumAccount = sumAccount; // function
    // // this.deposit = deposit; // function
    this.withdraw = withdraw; // function
    // // this.tansfer = transfer;  // function
  }

function bankAccounts(arr)
  {
      for (let i = 0; i < arr.length; ++i)
      {
          console.log(arr[i].name + ", " + arr[i].balance);
      }
  };

let acc1 = new Account("John Smith", 200);
let acc2 = new Account("Sandra Bullock", 1000000);
let acc3 = new Account("Ryan Reunold", 800000);
let acc4 = new Account("Sherine Foo", 8888888888);

let account_array = [acc1, acc2, acc3, acc4];


bankAccounts(account_array);


function addAccount(bank, name, balance)
  {
    let addAcc = new Account(name, balance);
    bank.push(addAcc);
    return bank;
  };

function sum_of_Accounts(arr)
  {
    let sum = 0;

    for (var i = 0; i < arr.length; i++)
    {
      sum = sum + arr[i].balance;
    }
    console.log('the total of the balances is: '+ sum);
    return sum;
  }

function deposit(bank, name, amount)
  {
    for (var i = 0; i < bank.length; i++)
    {
      if ( name === bank[i].name )
      {
        bank[i].balance += amount;
      }
    }
  };

  // function acc_deposit(acc,amount)
  //   {
  //       acc.balance = acc.balance + amount;
  //
  //   };


function withdraw(bank, name, amount)
{
  for (var i = 0; i < bank.length; i++)
  {
    if (name === bank[i].name)
    {
      bank[i].balance -= amount;
    }
  }
};

function transfer(bank, name1, amount, name2)
{
    if (bank[name1] >= amount)
    {
      bank[name1] -= amount;
      bank[name2] += amount;
      console.log(bank[name1]);
      return (`${name1} :` + bank[name1] + "/n" + `${name2} :` + bank[name2] );
    }
    return "Overdraft is not allow"
}

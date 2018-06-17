// console.log('hello world');
//
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
// https://github.com/liammclennan/JavaScript-Koans




let bank = {
  accounts: [],
  addAccount: function ( accountName, openingBalance ) {
    accNum = -1 + this.accounts.push({ // -1 since push returns the NEW length of the array.
      accountNumber: this.accounts.length,
      accountName: accountName,
      balance: parseInt(openingBalance)
    });

    console.log( `Account creation successful. Your new account number is ${ accNum }`);

    return accNum;
  },

  accountBalance: function ( accountNumber ) {
    return this.accounts[ accountNumber ].balance;
  },

  withdraw: function ( accountNumber, amount ) {
    if ( amount > this.accountBalance( accountNumber ) ) {
      console.log( `Insufficient Balance` );
      return false;
    } else {
        this.accounts[ accountNumber ].balance -= amount;
        console.log( `${ this.accounts[ accountNumber ].accountName }'s After Withdrawal Balance: $${ this.accountBalance( accountNumber ) }`);
        return true;
    }
  },

  deposit: function ( accountNumber, amount ) {
    this.accounts[ accountNumber ].balance += amount;
    console.log( `${ this.accounts[ accountNumber ].accountName }'s After Deposit Balance: $${ this.accountBalance( accountNumber ) }`);
    return;
  },

  transfer: function ( fromAccount, toAccount, amount ) {
    if ( this.withdraw( fromAccount, amount ) ) { //withdraw returns true if successful
      this.deposit( toAccount, amount );
      console.log( 'Transfer successful' );
      return true;
    } else {
      console.log( 'Transfer failed' );
      return false;
    }
  }
};

// ************** STORY! *************
// Tim enrolls in GA - WDI course.

// Pre-story setup
const empireAccountNo = bank.addAccount( 'The Empire', 1000000000 ); // That's no moon!
const rebelsAccountNo = bank.addAccount( 'The Rebel Alliance', 1000000 ); // One Million Dollars! (pinky)
const timsAccountNo = bank.addAccount( 'Tim', 0 ); //I'm so poor! boo-hoo T_T;

console.log( "A long time ago in a galaxy far far away..." );

console.log( "\r\nThe empire made Tim redundant leaving him looking for the next \r\n grand adventure. Tim decided to use his redundancy package to join\r\nthe GA rebellion..." )

console.log ( "Act One, Scene One: Tim becomes redundant" ); // clock wipe effects!! | / - \ |
bank.transfer( empireAccountNo, timsAccountNo, 50000 ) //at least they pay well...


console.log( "Tim joins the rebel alliance. they require a $500 deposit..." );
bank.transfer( timsAccountNo, rebelsAccountNo, 500 );

console.log( "Tim is accepted into the alliance, but only after finishing paying the full joining fee..." );
bank.transfer( timsAccountNo, rebelsAccountNo, 14500 );

console.log( "Tradgedy strikes! The empire tries to reclaim the redundancy money from Tim" );
bank.transfer( timsAccountNo, empireAccountNo, 50000 );

console.log( "The Empire is unable to afford their new Super Weapon, the Death Planet.\r\nThe Rebellion succeeds and balance is restored to the Galaxy...");

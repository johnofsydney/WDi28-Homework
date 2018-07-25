$(document).ready( function() {

  const toDouble = function ( a ) {
    return parseFloat(parseFloat( a ).toFixed(2))
  }


  const updateAccount = function ( $accnt, balance ) {

    const numBal = parseInt( balance.toString().trim().replace(/$/, ''));

    $accnt.children( '.balance' ).html( '$' + numBal );

    if ( numBal === 0) {
      $accnt.addClass( 'zero' );
    } else {
      $accnt.removeClass( 'zero' );
    }
  }

  const transact = function () {
    const txType = $( this ).val() //should return Deposit or Withdraw
    const $acct = $( this ).parent()
    const accType = $acct.attr('id') // should be checking or savings
    let amnt = $( this ).siblings( `#${ accType }-amount` ).val()
    const $bal = $( this ).siblings( '.balance' ) // should be balance of current account

    amnt = toDouble( amnt ); // should be entered value to 2 dec place

    if (amnt !== +amnt) {
      $bal.effect( 'shake' );
      updateAccount( $acct, $bal.html() );
      return;
    }

    // get account number from accType
    let accNo, otherAccNo;
    switch ( accType ) {
      case 'checking':
        accNo = checkAccount;
        otherAccNo = savingAccount;
        $otherAccNode = $( '#savings' )
        break;
      case 'savings':
        accNo = savingAccount;
        otherAccNo = checkAccount;
        $otherAccNode = $( '#checking' )
        break;
    }

    const result = talkToBank( txType, accNo, amnt );

    if ( result.returnCode ) {
      //console.log($acct);
      updateAccount( $acct, result.balance );
    } else if (txType === 'Withdraw') {

      // overfraft protection - withdraw from both accounts
      const remainingBalance = result.balance;
      const otherAccBalance = bank.accountBalance( otherAccNo );

      // total balance of both accounts
      const totalBal = remainingBalance + otherAccBalance;

      // if there's enough money in both accounts, overdraft
      if ( amnt <= totalBal ) {
        const otherAccountWithdraw = amnt - remainingBalance;

        const resultOD1 = talkToBank( txType, accNo, remainingBalance );

        const resultOD2 = talkToBank( txType, otherAccNo, otherAccountWithdraw);

        updateAccount( $otherAccNode, resultOD2.balance )
        updateAccount( $acct, resultOD1.balance )

      } else {
        $bal.effect( 'shake' );
      }
    }
  }

  const talkToBank = function ( txType, accNo, amnt ) {
    // perform transaction based on txType
    let result;
    switch ( txType ) {
      case 'Deposit':
        result = bank.deposit( accNo, amnt )
        break;
      case 'Withdraw':
        result = bank.withdraw( accNo, amnt )
        break;
    }

    return result;
  }

  // add click event listener to each button.
  $( "input[type='button']" ).on( 'click', transact );


});

// setup bank;
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
      return {
        returnCode: false,
        balance: this.accountBalance( accountNumber )
      }
    } else {
        this.accounts[ accountNumber ].balance -= amount;
        // console.log( `${ this.accounts[ accountNumber ].accountName }'s After Withdrawal Balance: $${ this.accountBalance( accountNumber ) }`);
        return {
          returnCode: true,
          balance: this.accountBalance( accountNumber )
        }
    }
  },

  deposit: function ( accountNumber, amount ) {
    this.accounts[ accountNumber ].balance += amount;
    // console.log( `${ this.accounts[ accountNumber ].accountName }'s After Deposit Balance: $${ this.accountBalance( accountNumber ) }`);
    return {
      returnCode: true,
      balance: this.accountBalance( accountNumber )
    };
  },

  transfer: function ( fromAccount, toAccount, amount ) {
    if ( this.withdraw( fromAccount, amount ).returnCode ) { //withdraw returns true if successful
      this.deposit( toAccount, amount );
      console.log( 'Transfer successful' );
      return true;
    } else {
      console.log( 'Transfer failed' );
      return false;
    }
  }
};


// create starter accounts
const checkAccount = bank.addAccount('checking',0);
const savingAccount = bank.addAccount('savings',0);

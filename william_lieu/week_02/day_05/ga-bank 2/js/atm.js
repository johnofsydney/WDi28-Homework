// const balance = {
//   saving: 0,
//   checking: 0,
// }
//
// const updateScreen = function (bankBalance) {
//   console.log(bankBalance);
//   $('#checking-balance').html(bankBalance.checking)
//   $('#savings-balance').html(bankBalance.saving)
// }
//
// const deposit = function (ammount,account) {
//   balance[account] = balance[account] + ammount
//   updateScreen(balance);
//   }
//
// const withdraw = function (ammount,account) {
//   balance[account] = balance[account] + ammount
//   console.log(balance);
//   }
//
// $('#checking-deposit').on('click',function() {
//   let num = parseInt($('#checking-amount').val())
//   console.log(num);
//   deposit(num,"checking")
//
// $('savings-deposit').on('click'),function() {
//   let num = parseInt($('#savings-deposit').val())
//   console.log(num);
//   deposit(num,"savings")
// }
//
//
// //////////////////

const checkForZero = function () {
  // get the checking balance
  const checkingBalance = +$('#checking-balance').text().slice(1);
  // if it's checkForZero
  if (checkingBalance <= 0) {
    $('#checking-balance').addClass('zero');
  }

const savingsBalance = +$('#savings-balance').text().slice(1);
  if (savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
  }
};

$(document).ready(function() {
checkForZero();

$('#checking-deposit').on('click', function) {
console.log('click');
});

// find the amount deposited
const amount = + $('#checking-amount').val();

// add the amount to the balances
// Strip the $ from the balance and convert to a number.
const currentBalance = +$('#checking-balance').text().slice(1);
const newBalance = currentBalance + amount;
//update the screen
$('#checking-balance').text('$'+ newBalance);
});

$('#checking-withdraw').on('click', function) {
const amount = + $('#checking-amount').val();
// Strip the $ from the balance and convert to a number.
const currentBalance = +$('#checking-balance').text().slice( 1 );

const otherBalance =+$('#savings-balance').text().slice( 1 );

const totalBalance = currentBalance + otherBalance;
debugger;
const newBalance = currentBalance - amount;
//if sufficient funds in this account
if(newBalance >=0) {
  $('#checking-balance').text('$'+ newBalance);
} else if ( amount <= totalBalance);


  // update the updateScreen
// else if sufficient fund in both accounts
} else if (amount < (currentBalance + otherBalance))
  // widthdraw from both accounts
  $('#checking-balance').text('$0');

// else {
    // insufficient funds
// update screen
  }



//update the screen

if ( newBalance < 0) {
  return;
}
// Update the screen
  $('#checking-balance').text('$'+ newBalance);

});


$('#savings-deposit').on('click', function) {
console.log('click');
});

// find the amount deposited
const amount = + $('#savings-amount').val();

// add the amount to the balances
// Strip the $ from the balance and convert to a number.
const currentBalance = +$('#checking-balance').text().slice(1);
const otherBalance = +$('#savings-balance').text().slice( 1 );
const totalBalance = currentBalance + otherBalance;

const newBalance = currentBalance + amount;
//update the screen
$('#checking-balance').text('$'+ newBalance);
});

$('#checking-withdraw').on('click', function) {
const amount = + $('#checking-amount').val();
// Strip the $ from the balance and convert to a number.
const currentBalance = +$('#checking-balance').text().slice(1);
const newBalance = currentBalance + amount;
//update the screen

if ( newBalance < 0) {
  return;
}
// Update the screen
  $('#checking-balance').text('$'+ newBalance);
  $('savings-balance').text('$'+ (otherBalance + newBalance))
});


})




/////////////////////////////////////////////
//SECOND SOLUTION

const accounts = {
  checkingBalance: 0,
  savingsBalance: 0,


  total:function () {
    return  this.checkingBalance + this.savingsBalance;
  },

  checkingDeposit: function (amount) {
    this.checkingBalance += +amount;
  },

  checkingwithdraw: function (amount) {
    amount = +amount; //Ensure amount is a number,not a string
    if (amount <= this.checkingBalance) {
      this.checkingBalance -= amount;
    } else if ( amount <= this.total()) {
      const differenc = amount - this.checkingBalance;
      this.checkingBalance = 0;
      this.savingsBalance -= difference;
    }
  };

  savingsDeposit: function (amount) {
    this.savingsBalance += +amount;
  },

  savingswithdraw: function (amount) {
    amount = +amount; //Ensure amount is a number,not a string
    if (amount <= this.checkingBalance) {
      this.checkingBalance -= amount;
    } else if ( amount <= this.total()) {
      const differenc = amount - this.checkingBalance;
      this.checkingBalance = 0;
      this.savingsBalance -= difference;
    }
  };



///////////////////////////////////////////


const render = function () {}
  $('#checking-balance').text('$' + accounts.checkingBalance)
  $('#savings-balance').text('$' + accounts.checkingBalance)


  if (accounts.checkingBalance <= 0) {
    $('#checkingBalance').addClass('zero');

  }

  if ( accounts.savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
  }



$(document).ready(function() {
  $('#checking-deposit').on('click', function (){
    const amount = $ ('#checking-amount').val();
    accounts.checkingDeposit( amount);
    render();
  });

  $('#checking-withdraw').on('click',function () {
    const amount = $('#checking-amount').val();
      accounts.checkingwithdraw( amount);
    render();
  } );


  $('#savings-deposit').on('click', function (){
    const amount = $ ('#savings-amount').val();
    accounts.savingsDeposit( amount);
    render();
})

  $('#savings-withdraw').on('click',function () {
    const amount = $('#savings-amount').val();
      accounts.savingswithdraw( amount);
    render();
} );
});

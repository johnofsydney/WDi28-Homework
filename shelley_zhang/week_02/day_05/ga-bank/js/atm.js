// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
// * What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?


const balance = { //creating object to store value
  savings: 0,
  checking: 0
}

const updateScreen = function() { //function to update screen with amount
  $('#checking-balance').html(balance.checking);
  $('#savings-balance').html(balance.savings);

  if (balance.savings === 0) {
    $('#savings').addClass('balancezero');
  } else {
    $('#savings').removeClass('balancezero');
  }

  if (balance.savings > 0) {
    $('#savings').addClass('balancewithmoney');
  } else {
    $('#savings').removeClass('balancewithmoney');
  }

  if (balance.checking === 0) {
    $('#checking').addClass('balancezero');
  } else {
    $('#checking').removeClass('balancezero');
  }

  if (balance.checking > 0) {
    $('#checking').addClass('balancewithmoney');
  } else {
    $('#checking').removeClass('balancewithmoney');
  }
};

const deposit = function(amount, account) {
  balance[account] += parseInt(amount); //the parseInt will need to convert the amount of the displayed in the account into a number
  updateScreen();
};

const withdraw = function(amount, account) {

if (amount <= balance[account]) {
    balance[account] -= parseInt(amount); //x = x - y
  } else if (amount < balance.checking + balance.savings) {
    console.log("hello");
    let overdraft = balance.checking - parseInt(amount)
    let newBalance = balance.savings - overdraft;
  }
    updateScreen();
};

$(document).ready(function() {

  updateScreen();

$('#checking-deposit').on('click', function() {
    let num = $('#checking-amount').val()
    deposit (num, "checking");
});

$('#checking-withdraw').on('click', function() {
  let num = $('#checking-amount').val()
  withdraw (num, "checking");
});

$('#savings-deposit').on('click', function() {
  let num = $('#savings-amount').val()
  deposit (num, "savings");
});

$('#savings-withdraw').on('click', function() {
  let num = $('#savings-amount').val()
  withdraw (num, "savings");
});

});  // closing document ready


//  if ( withdraw < balance )
//    withdraw();
// else if ( withdraw <  balance + otherbalance )
//    overdraftamnt = withdraw - balance; // amount to withdraw from other account
//    withdraw balance from account;
//    withdraw overdraftamnt from other account;
// else
//    not enough money

 // } else if (balance[account] < 0) {
 // balance[account] - balance[account + parseInt(amount);

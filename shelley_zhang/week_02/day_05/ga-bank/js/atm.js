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

//use an object, functions need to work before we can work with the DOM

const balance = { //creating object to store value
  savings: 0,
  checking: 0
}

const updateScreen = function() { //function to update screen with amount
  $('#checking-balance').html(balance.checking);
  $('#savings-balance').html(balance.savings);
  console.log(balance);
  if ((balance.savings && balance.checking) === 0) {
    $('.account').addClass("account-changed");
  }
  // if balance = 0
  // $('.account')

}

const deposit = function(amount, account) {
  balance[account] = balance[account] + parseInt(amount); //the parseInt will need to convert the amount of the displayed in the account into a number
  const result = updateScreen();
  return result;
}

const withdraw = function(amount, account) {
  if (balance[account] > 0) {
  balance[account] = balance[account] - parseInt(amount);
  const result = updateScreen();
  return result;
  }
}

$(document).ready(function() {
  console.log("ready"); //only those functions needing the document ready function will need to go here

$('#checking-deposit').on('click', function() {
  // console.log("goodbye");
    let num = $('#checking-amount').val()
    deposit (num, "checking"); //function within a function, jquery

});

$('#checking-withdraw').on('click', function() {
  // console.log('hello');
  let num = $('#checking-amount').val()
  withdraw (num, "checking");

});

$('#savings-deposit').on('click', function() {
  // console.log('hello');
  let num = $('#savings-amount').val()
  deposit (num, "savings");
});

$('#savings-withdraw').on('click', function() {
  let num = $('#savings-amount').val()
  withdraw (num, "savings");
});



});  // closing document ready

// $('#checking-amount').val() {

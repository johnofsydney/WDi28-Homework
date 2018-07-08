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


const balance = { //creating object to store values of accounts
  savings: 0,
  checking: 0
}

const updateScreen = function() { //function to update screen with amount. Using html() method to set the contents of all elements with class of 'checking-balance' and 'savings-balance' with the property values from balance object

  $('#checking-balance').html(balance.checking);
  $('#savings-balance').html(balance.savings);

//when update screen is run, the below will check whether the conditions are true and add/remove the class defined in css e.g. add or remove the colour red

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

//deposit function passes the amount & account arguments based on user input



const deposit = function(amount, account) {
  balance[account] += parseInt(amount); //the parseInt will need to convert the amount of the displayed in the account into a number
  updateScreen(); //run updatescreen function to display new balance after deposit
};

//Withdraw function & overdraft protection rules
const withdraw = function(amount, account) {
debugger;
if (amount <= balance[account]) { //normal withdrawal when amount is < savings or checking account
    balance[account] -= parseInt(amount); //x = x - y parseInt can also be +
  } else if (amount < balance.checking + balance.savings) { //overdraft kicks in when amount < total balance in both accs
    let overdraftAmt = balance[account] - parseInt(amount); //amount to be overdraft
    balance[account] = 0 //let the overdrawn account = 0
    if (balance.checking === 0) { //two scenarios here - if balance.checking account is 0 then take the overdraft amount defined above from the balance.savings account and vice versa for the other account
      balance.savings += overdraftAmt;
    } else if (balance.savings === 0){
      balance.checking += overdraftAmt;
    }
  } else {
    alert("insufficient funds"); //display alert if amount > balance[account] OR > total balance
  }
    updateScreen(); //update screen with values calculated from above function
};

$(document).ready(function() { //start of document ready containing jquery functions, make sure the DOM is ready

  updateScreen(); //first run update screen to apply everything above

$('#checking-deposit').on('click', function() { //when user clicks on deposit button
    let num = $('#checking-amount').val() //grab value from html with #checking-amount class / find the amount deposited and add the amount to the balance and update the screen
    deposit (num, "checking"); //run deposit function for amount calculated above
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


//you can separate the two js files - logic for bank and jquery/DOM js file.

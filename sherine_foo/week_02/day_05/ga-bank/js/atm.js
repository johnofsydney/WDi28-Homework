console.log(("GA ATMaaa"));


// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?



// * Keep track of the checking and savings balances somewhere
const balance = {
  savings: 0,
  checking: 0
}

// * Add functionality so that a user can deposit money into one of the bank accounts.
// action : when user deposite money to savings or checking account, add amount to balance on each account
const deposit = function (amount, account) {
  if ( (balance[account] + amount) >= 0 ) {
    balance[account] = balance[account] + amount;
    $('#savings-balance').css('background-color', '#E3E3E3');
//    $('#checking-balance').css('background-color', '#E3E3E3');
    updateScreen(balance);
  }
}

const withdraw = function (amount, account) {

  if ( (balance[account] - amount) >= 0 ) {
    balance[account] = (balance[account] - amount);
    updateScreen(balance);
  } else {
    if (balance[account] >= 0 ) {
    $('#savings-balance').css('background-color', 'red');

    }
  }
}
//  console.log(balance);

// * Make sure you are updating the display and manipulating the HTML of the page

// action: input#checking-amount add in to balance when user click input#checking-deposit  ===    .checking-amount = amount
// than you display the input amount + account balance to display #checking-balance

$('#checking-deposit').on('click', function() {
    let num = $('#checking-amount').val();
    num = +num;
    deposit(num, "checking");
});

$('#checking-withdraw').on('click', function() {
  let num = $("#checking-amount").val();
  num = +num;
  withdraw(num, "checking");
})

$('#savings-deposit').on('click', function() {
  let num = $('#savings-amount').val()
  num = +num;
  deposit (num, "savings");
})

$('#savings-withdraw').on('click', function() {
  let num = $('#savings-amount').val()
  num = +num;
  withdraw (num, "savings");
})

// get updated amount into display
const updateScreen = function (bankBalance) {
  $('#checking-balance').html(bankBalance.checking);
  $('#savings-balance').html(bankBalance.savings);
}


// }); // from  $(document).ready(function(){

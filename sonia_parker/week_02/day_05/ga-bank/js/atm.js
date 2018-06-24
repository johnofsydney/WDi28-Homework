$(document).ready(function() {
  // console.log("ready!");

  const balance = {
    savings: 0,
    checking: 0
  }

  const refreshAccounts = function() {
    // Update checking account balance
    $("#checking-balance").html(balance.checking);

    // Update savings account balance
    $("#savings-balance").html(balance.savings);
  }

  const deposit = function(amount, account) {
    balance[account] += amount;
  }

  const withdraw = function(amount, account) {
    balance[account] -= amount;
  }

  //write a function, when a btn-transaction class elemetns are clicked, we store the account and transaction type in variables
  $(".btn-transaction").on("click", function() {

    // inside this functio - $(this) refers to the button that was clicked
    let account = $(this).attr('data-account');

    let transaction = $(this).attr('data-transaction');

    let amount = parseInt(jQuery("#" + account + "-amount").val());

    console.log(transaction + " " + amount + " with " + account + " account");

    if (transaction === "deposit") {
      deposit(amount, account);
    } else {
      withdraw(amount, account);
    }

    refreshAccounts();
  });

  // When the page loads, refresh the balance for each account
  // This way, the starting balance is defined in the object at the top of
  // script. No data is saved in the HTML page.
  refreshAccounts();
});
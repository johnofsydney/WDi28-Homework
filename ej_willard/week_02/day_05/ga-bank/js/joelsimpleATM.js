//NOTE JOEL SAYS THIS ONE SHOULD JUST BE USER INTERFACE - put accounts in another js file that is seperate from the DOM.........

//making things red! can make it outside document reayd

const checkForZero = function () {
  $(".zero").removeClass('zero'); //reoving this everytime we call the function so that it's classless and then the if statements figure it all out.
  //get checking balances
  const checkingBalance = +$("#checking-balance").text().slice(1);
  //if its zero
  if (checkingBalance <= 0) {
    //add red style
    $("#checking-balance").addClass('zero');
}
    //get checking balances
    const savingsBalance = +$("#savings-balance").text().slice(1);
    //if its zero
    if (savingsBalance <= 0) {
      //add red style
      $("#savings-balance").addClass('zero');
    }
};

//going to use the dom as a data store
$(document).ready(function() {
  checkForZero();



/////////CHECKING DEPOSIT
$('#checking-deposit').on('click', function() {
  //find the amount deposited
  const amount = + $("#checking-amount").val(); //the plus here is turning it into a number

  //add the amount to the balances
  const currentBalance = + $("#checking-balance").text().slice(1); //want to get it's value but because it isnt an input you cant use val, you need it's text or html. BUT cos $ in there we need to do something extra //need to strip $ from balancr and convert to a number

  const newBalance = currentBalance + amount;
  //then update screen
  $("#checking-balance").text('$' + newBalance);
  checkForZero();
});

///CHECKING WITHDRAW
$('#checking-withdraw').on('click', function() {
  const amount = + $("#checking-amount").val();
  const currentBalance = + $("#checking-balance").text().slice(1);
  const otherBalance = + $("#savings-balance").text().slice(1);
  const totalBalance = currentBalance + otherBalance;
  const newBalance = currentBalance - amount;
  //if  sufficient funds in this accounts
  if (newBalance >= 0) {
    $("#checking-balance").text("$" + newBalance);
  } else if (amount < totalBalance) {
      //withdraw from both accounts
      $("#checking-balance").text("$0");
      $("#savings-balance").text("$" + (otherBalance + newBalance));
        checkForZero();
  };
});

//SAVINGS DEPOSIT
$('#savings-deposit').on('click', function() {
  //find the amount deposited
  const amount = + $("#savings-amount").val(); //the plus here is turning it into a number

  //add the amount to the balances
  const currentBalance = + $("#savings-balance").text().slice(1); //want to get it's value but because it isnt an input you cant use val, you need it's text or html. BUT cos $ in there we need to do something extra //need to strip $ from balancr and convert to a number
  const newBalance = currentBalance + amount;
  //then update screen
  $("#savings-balance").text('$' + newBalance);
    checkForZero();
});

////////SAVINGS WITHDRAW

$('#savings-withdraw').on('click', function() {
  const amount = + $("#savings-amount").val();
  const currentBalance = + $("#savings-balance").text().slice(1);
  const otherBalance = + $("#checking-balance").text().slice(1);
  const totalBalance = currentBalance + otherBalance;
  const newBalance = currentBalance - amount;
  // prevent neg balance.
  if (newBalance >= 0) {
    $("#savings-balance").text('$' + newBalance);
  } else if (amount <= totalBalance){
    $("#savings-balance").text("$0");
    $("#checking-balance").text("$" + (otherBalance + newBalance));
      checkForZero();
  };
});


}); // ending document ready tag

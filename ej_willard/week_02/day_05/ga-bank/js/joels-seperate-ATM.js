const render = function () { //this is updating screen function
  $("#checking-balance").text("$" + accounts.checkingBalance);
  $("#savings-balance").text("$" + accounts.savingsBalance);

  //here changing to red.... first we remove class of zero so the page doesnt assume it's zero, then it checks for zero and assigns class if zero.
  $('.zero').removeClass('zero');

  if (accounts.checkingBalance <= 0) {
    $("#checking-balance").addClass('zero');
  }
  if (accounts.savingsBalance <= 0) {
    $("#savings-balance").addClass('zero');
  }
}; //end of render function

//this file ONLY has DOM stuff in it and no logic about account..... logic about accounts is in another file.
$(document).ready(function () {
  render();
  //CHECKING DEP
  $("#checking-deposit").on("click", function () {
    //get amount from DOM
    const amount = $("#checking-amount").val();
      //call the appropriate accounts method. - we dont need to make decisions we just give this to library responsible for accounts.
    accounts.checkingDeposit(amount);
    //update screen
    render();
  });
  //CHECKINGS WITHDRAW - all logic has been worked out in other file... this is just dom stuff.
  $("#checking-withdraw").on("click", function () {
    const amount = $("#checking-amount").val();
    accounts.checkingWithdraw(amount);
    render();
  })
  ////SAVINGS DEP
$("#savings-deposit").on('click', function () {
  const amount = $("#savings-amount").val();
  accounts.savingsDeposit(amount);
  render();
})

//SAVINGS WITHDRAW
$("#savings-withdraw").on("click", function () {
  const amount = $("#savings-amount").val();
  accounts.savingsWithdraw(amount);
  render();
})
}); //DOCUMENT READY FUNCTION

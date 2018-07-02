$(document).ready(() => {
  ////////////////////////Checkings/////////////////////

  // when the button is clicked and the amount is enter, we will sum up and change the number on the screen//
  $("#checking-deposit").on("click", function() {
    let $amount = $("#checking-amount").val();
    $amount = parseInt($amount);
    // We storage the balance on a function so we can use it later
    let $balanceCheck = $("#checking-balance").html();

    // We remove the dollar sign, so it does not keep adding it//
    $balanceCheck = parseInt($balanceCheck.slice(1));
    // now the amount the user enters will be add to the balance//

    $balanceCheck += $amount;

    // update the screen with new balance
    $("#checking-balance").html(`$ ${$balanceCheck}`);
    // clear the input text after clicking deposit button
    $("#checking-amount").val("");
    // When the values is equal to empty string show alert and go back to $0.// not working!//
    // if ($("#checking-amount").val() === "") {
    //   alert("Input can not be left blank");
    //   $("#checking-balance").html("$0");
    // }
    // if the cheking balance is not $0, keep the colour gray //
    if ($("#checking-balance").html() !== "$0") {
      $("#checking-balance").css({
        backgroundColor: "#E3E3E3",
        color: "#1a1818"
      });
    }
  });
  // if the user clicks the withdraw button  on the checking account it will do the same as the function above but substracting the amount enter//
  $("#checking-withdraw").on("click", function() {
    let $amount = $("#checking-amount").val();
    $amount = parseInt($amount);
    let $balanceCheck = $("#checking-balance").html();

    // We remove the dollar sign, so it does not keep adding it//
    $balanceCheck = parseInt($balanceCheck.slice(1));

    // Now we diplay the updated number on the screen if the user does not withdraw more than the checking balance
    if ($amount <= $balanceCheck) {
      $balanceCheck -= $amount;
      $("#checking-balance").html(`$ ${$balanceCheck}`);
    }

    // else if the user tries to withdraw more money than the checking balance //
    else {

      // store the savings balance so que can pass it to a number //

      // We get rid off the dollar sign //
      const savingsMinusDollar = parseInt($("#savings-balance").html().slice(1));
      // if the user tries to withdraw less than the checking balance and the savings //
      if ($amount <= $balanceCheck + savingsMinusDollar) {

        const balanceDiff = $amount - $balanceCheck;
        const newSavBalance = savingsMinusDollar - balanceDiff;

        //  change the balance on screen //
        $("#checking-balance").html("$0");
        $("#savings-balance").html(`$ ${newSavBalance}`);

      } else {
        alert("Sorry for the inconvenience! But you are trying to withdraw more than your remaining balance.");
      };
    };

    // clear the imput text after clicking the withdraw button
    $("#checking-amount").val("");
    // if either the checking balance or the savings balance is $0, change the background colour to "tomato" (red).
    if ($("#checking-balance").html() === "$0") {
      $("#checking-balance").addClass("zero");
    }
    if ($("#savings-balance").html() === "$0") {
      $("#savings-balance").addClass("zero");
    }


  });


  /////////////////////Savings////////////////////////////

  // We repeat the same methods for the savings account, but we change the attr and invert the values //
  $("#savings-deposit").on("click", function() {
    let $amount = $("#savings-amount").val();
    $amount = parseInt($amount);
    // We storage the balance on a function so we can use it later
    let $savingsBalance = $("#savings-balance").html();

    // We remove the dollar sign, so it does not keep adding it//
    $savingsBalance = parseInt($savingsBalance.slice(1));
    // now the amount the user enters will be add to the balance//

    $savingsBalance += $amount;

    // update the screen with new balance
    $("#savings-balance").html(`$ ${$savingsBalance}`);
    // clear the input text after clicking deposit button
    $("#savings-amount").val("");
    // if the cheking balance is not $0, keep the colour gray

    if ($("#savings-balance").html() !== "$0") {
      $("#savings-balance").css({
        backgroundColor: "#E3E3E3",
        color: "#1a1818"
      });
    }
  });


  // when the user clicks 'withdraw' button on the savings account //
  $("#savings-withdraw").on("click", function() {
    let $amount = $("#savings-amount").val();
    $amount = parseInt($amount);
    let $savingsBalance = $("#savings-balance").html();

    // We remove the dollar sign, so it does not keep adding it//
    $savingsBalance = parseInt($savingsBalance.slice(1));

    // Now we diplay the updated it number on the screen if the user does not withdraw more than the checking balance
    if ($amount <= $savingsBalance) {
      $savingsBalance -= $amount;
      $("#savings-balance").html(`$ ${$savingsBalance}`);
    }

    // else if the user tries to withdraw more money than the checking balance //
    else {

      // store the savings balance so que can pass it to a number //

      // We get rid off the dollar sign //
      const checkingMinusDollar = parseInt($("#checking-balance").html().slice(1));
      // if the user tries to withdarw less than the checking balance and the savings //
      if ($amount <= $savingsBalance + checkingMinusDollar) {

        const balanceDiff = $amount - $savingsBalance;
        const newCheckingBalance = checkingMinusDollar - balanceDiff;

        //  change the balance on screen //
        $("#savings-balance").html("$0");
        $("#checking-balance").html(`$ ${newCheckingBalance}`);

      } else {
        alert("Sorry for the inconvenience! But you are trying to withdraw more than your remaining balance.");
      };
    };

    // clear the imput text after clicking the withdraw button
    $("#savings-amount").val("");
    // if either the checking balance or the savings balance is $0, change the background colour to "tomato" (red).
    if ($("#savings-balance").html() === "$0") {
      $("#savings-balance").addClass("zero");
    }

    if ($("#checking-balance").html() === "$0") {
      $("#checking-balance").addClass("zero");
    }


  });


  // Keep colour tomato (red) if both accounts have a remaining of "$0"
  if ($("#checking-balance").html() === "$0") {
    $("#checking-balance").addClass("zero");
  }

  if ($("#savings-balance").html() === "$0") {
    $("#savings-balance").addClass("zero");
  }


}); //end of document.ready tag

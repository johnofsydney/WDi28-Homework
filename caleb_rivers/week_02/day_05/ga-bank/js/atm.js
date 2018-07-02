$(function() {
  console.log("Connected");

//Starting the bank ballances in a object
  let bank = {
    checking: 0,
    savings: 0,
  }

//Getting the click from the Checking deposit button amount and adding it to the bank
  $("#checking-deposit").on('click', function () {
    let $amount = $("#checking-amount").val()
    console.log($amount);
    bank.checking = bank.checking + parseInt($amount);
    $("#checking-balance").html(`$${bank.checking}`);

    if (bank.checking === 0 ) {
      $("#checking").css("background-color", "red");
    }
    if (bank.checking > 0) {
      $("#checking").css("background-color", "#6C9A74");

    }

  })

  //gettings the values from the box and adding it to the savings account
  $("#savings-deposit").on('click', function () {
    let $amount = $("#savings-amount").val()
    console.log($amount);
    bank.savings = bank.savings + parseInt($amount);
    $("#savings-balance").html(`$${bank.savings}`);
      
    if (bank.checking === 0 ) {
      $("#checking").css("background-color", "red");
    }
    if (bank.checking > 0) {
      $("#checking").css("background-color", "#6C9A74");

    }
  })

//minusing from the checking account and making it visible on screen
  $("#checking-withdraw").on('click', function () {
    let $amount = $("#checking-amount").val()
    console.log($amount);
    bank.checking = bank.checking - parseInt($amount);
    $("#checking-balance").html(`$${bank.checking}`);
  })

//minusing from the savings accoutn and making it visible on screen.
  $("#savings-withdraw").on('click', function () {
    let $amount = $("#savings-amount").val()
    console.log($amount);
    bank.savings = bank.savings - parseInt($amount);
    $("#savings-balance").html(`$${bank.savings}`);
  })


})

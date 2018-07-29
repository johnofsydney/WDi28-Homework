$(document).ready(function() {

let balance = {
  savings: 0,
  checking: 0
};

//trying to use function for both accs to go red when on $0
//TIMS SUGGESTION
// $(".balance").each(function() {
//   let account = $( this ).parent().attr('id'); // this refers to the balance div, parent() refers to the account, the account has an id of checking/savings that we can use
//   if $(balance[account] === 0) {
//     $("div .balance").addClass('empty');
//    } else {
//     $("div .balance").removeClass('empty');
//   }
// });

// $("balance[]").each(function(account) {
// if $(balance[account] === 0) {
//   $("div .balance").addClass('empty');
//    } else {
//     $("div .balance").removeClass('empty');
//   }
// });


const updateScreen = function (balance) {
  $('#checking-balance').html("$" + balance.checking)
  $('#savings-balance').html("$" + balance.savings) //this it trying to update screen/dom remeber to change these strings into numbers... at the moment it is just adding the strings together
};

const deposit = function (amount, account){
  balance[account] = balance[account] + amount;
  updateScreen(balance); //calling function from above that will update the screen/dom
};

const withdraw = function (amount, account) {
balance[account] = balance[account] - amount
updateScreen(balance);
}
//for dom stuff you have to pick up info from input box after a click event.

//CHECKING DEPOSIT - was trying to work out how to update object with new sum so that it would turn from red to grey
//
// $("#checking-deposit").on("click", function() {
//   let $plusBalance = $(parseInt(balance['checking'])).val() + $(parseInt('#checking-amount')).val();
//
//   deposit(+$plusBalance, "checking");
//   balance['checking'] = parseInt($plusBalance);
//   $("#checking-amount").val('');
//   console.log(balance);
// });
// console.log(balance);
$("#checking-deposit").on("click", function() {
  let plusBalance = $("#checking-amount").val() + $("#checking-balance").val();
  let newBalance = deposit(+plusBalance, "checking");
  $(balance['checking']).html(function() {
    return balance['checking'] = newBalance;
  });
  $("#checking-amount").val('');

  console.log(balance);
  });


//CHECKING WITHDRAW
$("#checking-withdraw").on("click", function() {
  let minusBalance = $("#checking-balance").val() - $("#checking-amount").val();
  deposit(+minusBalance, "checking");
  $("#checking-amount").val('');
});

//SAVINGS DEPOSIT

$("#savings-deposit").on("click", function() {
  let plusBalance = $("#savings-amount").val() + $("#savings-balance").val();
  deposit(+plusBalance, "savings");
  $("#savings-amount").val('');
});

//SAVINGS WITHDRAW - NOTE DOESNT WORK trying to make it so it cant go into minus number
$("#savings-withdraw").on("click", function() {
    let minusBalance = $("#savings-balance").val() - $("#savings-amount").val();
  if (balance['savings'] < minusBalance) {
    return alert("You don't have enough money to perform that withdrawal");
  } else {
  deposit(+minusBalance, "savings");
  $("#savings-amount").val('');
};
});

//making balance box RED on both accs
  const zeroBalanceSav = function() {
  if (balance['savings'] === 0) {
    $("#savings-balance").addClass('empty');
  } else if (balance['savings'] >= 0.01){
    $("#savings-balance").removeClass('empty');
  }
};
zeroBalanceSav();

const zeroBalanceChe = function() {
if (balance['checking'] === 0) {
  $("#checking-balance").addClass('empty');
} else if (balance['savings'] >= 0.01){
  $("#checking-balance").removeClass('empty');
}
};
zeroBalanceChe();


}); //end of document.ready tag

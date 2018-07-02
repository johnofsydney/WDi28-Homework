
console.log(`Hello Lucas`)

// * Keep track of the checking and savings balances somewhere
/////
const balance = {
  saving: 0,
  checking: 0,
}
const updateScreen = function (bankBalance){
  console.log(balance)
  $('#checking-balance').html(bankBalance.checking)
  $('#savings-balance').html(bankBalance.saving)
}

const deposit = function (ammount, account){
  balance[account] = balance[account] + ammount
   console.log(balance);
  updateScreen (balance)
}
const withdraw = function (ammount, account){
  // (balance[account] = balance[account] - ammount

   if ((balance[account] - ammount) >= 0 ){
     balance[account] = (balance[account] - ammount);
     updateScreen(balance);
   }else {
     if (balance[account]>= 0){
  $('#checking-balance').css('background-color', 'red');
    }
   }
}
////////
$(document).ready(function () {
////////
  $('#checking-deposit').on('click', function (){
    console.log("hello");
  let num = $('#checking-amount').val();
  num = +num;
    deposit(num, "checking");
  })

////////////withdraw checking//////////

$('#checking-withdraw').on('click', function(){
  let num3 = $('#checking-amount').val()
  withdraw(num3,"checking")
})
/////////////updateScreen///

const updateScreen = function (bankBalance){
  console.log(balance)
  $('#checking-balance').html(bankBalance.checking)
  $('#savings-balance').html(bankBalance.savings)
}
/////////////Savings/////////////////????? not ready

$('#savings-deposit').on('click', function(){
    let num2 = $('#savings-amount').val()
    num2 = +num2
    deposit(num2, "saving")
})
////updateScreen savings ???????? not ready

const updateScreenSavings = function (bankBalanceSav){
  console.log(balance)
  $('#savings-balance').html(bankBalanceSav.savings)
  $('#savings-balance').html(bankBalanceSav.savings)
}
////////////withdraw//////////

$('#savings-withdraw').on('click', function(){
  let num3 = $('#savings-amount').val()
  withdraw(num3,"saving")
})


});/// end of ready function

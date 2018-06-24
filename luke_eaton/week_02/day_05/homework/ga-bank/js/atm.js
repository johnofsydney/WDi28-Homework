console.log("connected");


  const balance = {
  savings: 0,
  checking: 0 
}


//COLOR CHANGES
//////////////////////////////////////////////////////////

  const updateScreen = function (bankBalance) {
  $('#checking-balance').html(bankBalance.checking)
  $('#savings-balance').html(bankBalance.savings)

  if ( balance.checking <= 0 ) {
    $('#checking').addClass('zero');
    $('#checking').removeClass('cash');
  } else  {
    $('#checking').removeClass('zero');
    $('#checking').addClass('cash');
  }

  if ( balance.savings <= 0 ) {
    $('#savings').addClass('zero');
    $('#savings').removeClass('cash');
  } else {
    $('#savings').removeClass('zero');
    $('#savings').addClass('cash');
  }



  }


////////////////////////////////////////////////////////

  const deposit = function (ammount, account) {
  balance[account] = balance[account] + ammount
  updateScreen(balance)
}

  const withdraw = function(ammount, account) {
  balance[account] = balance[account] - ammount
  updateScreen(balance)
}
// BUTTON ACTIONS
//////////////////////////////////////////////////////////

$(document).ready( function() {
  $("#checking-deposit").on('click', function () {
    let num = $('#checking-amount').val()
    num = +num
    deposit( num, "checking" )
  })

  $("#savings-deposit").on('click', function () {
    let num = $('#savings-amount').val()
    num = +num
    deposit( num, "savings" )
  })

  $("#checking-withdraw").on('click', function () {
    let num = $('#checking-amount').val()
    num = -num
    withdraw( -num, "checking" )
  })

  $("#savings-withdraw").on('click', function () {
    let num = $('#savings-amount').val()
    num = -num
    withdraw( -num, "savings" )
  })



})

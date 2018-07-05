const balance = {
  savings: 0,
  checking: 0
}
const updateBal = function() {
  $('#savings-balance').html("$" + balance.savings);
  $('#checking-balance').html("$" + balance.checking);
  colourChange();
}
const colourChange = function() {
  if (balance.savings === 0) {
    $('#savings-balance').addClass('zero')
  } else {
    $('#savings-balance').removeClass('zero');

  }

  if (balance.checking === 0) {
    $('#checking-balance').addClass('zero');
  } else {
    $('#checking-balance').removeClass('zero');
  }
}
$(document).ready(function() {

  $('#checking-deposit').on('click', function() {
    const depositInput = parseInt($('#checking-amount').val());
    balance.checking = depositInput + balance.checking;
    updateBal();
  })
  $('#savings-deposit').on('click', function() {
    const depositInput = parseInt($('#savings-amount').val());
    balance.savings = balance.savings + depositInput;
    updateBal();
  })

  $('#checking-withdraw').on('click', function() {
    const withdrawInput = parseInt($('#checking-amount').val());
    if (balance.checking >= withdrawInput) {
      balance.checking = balance.checking - withdrawInput;
      updateBal();
    } else if (balance.checking < withdrawInput && balance.savings !== 0) {
      balance.checking = balance.checking - withdrawInput;
      balance.savings = balance.checking + balance.savings;
      balance.checking = 0;
      updateBal();
    }
  })
  $('#savings-withdraw').on('click', function() {
    const withdrawInput = parseInt($('#savings-amount').val());
    if (balance.savings >= withdrawInput) {
      balance.savings = balance.savings - withdrawInput;
      updateBal();
    } else if (balance.savings < withdrawInput && balance.checking !== 0) {
      balance.savings = balance.savings - withdrawInput;
      balance.checking = balance.checking + balance.savings;
      balance.savings = 0;
      updateBal();
    }
  })
  colourChange();
})

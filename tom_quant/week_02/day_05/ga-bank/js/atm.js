$(document).ready(
  function() {
    //checking
    var checkingAmount = 0
    $('div.account').addClass('red')
    $('#checking-deposit').on('click', function() {
      var amount = $('#checking-amount').val()
      checkingAmount += +(amount)
      $('#checking-balance').text(checkingAmount)
      if (checkingAmount !== 0) {
        $('div#checking').removeClass('red')
      }
    })
    $('#checking-withdraw').on('click', function() {
      var amount = $('#checking-amount').val()
      if ((checkingAmount) - amount >= 0) {
        checkingAmount -= +(amount)
        $('#checking-balance').text(checkingAmount)
        if (checkingAmount === 0) {
          $('div#checking').addClass('red')
        }
      } else if ((checkingAmount + savingsAmount) >= amount) {
        var temp1 = (checkingAmount - amount)
        checkingAmount = 0
        $('#checking-balance').text(checkingAmount)
        savingsAmount += temp1
        $('#savings-balance').text(savingsAmount)
        $('div#checking').addClass('red')
      } else {
        alert('not sufficient funds')
      }
    })
    //savings
    var savingsAmount = 0
    $('div.account').addClass('red')
    $('#savings-deposit').on('click', function() {
      var amount2 = $('#savings-amount').val()
      savingsAmount += +(amount2)
      $('#savings-balance').text(savingsAmount)
      if (savingsAmount !== 0) {
        $('div#savings').removeClass('red')
      }
    })
    $('#savings-withdraw').on('click', function() {
      var amount2 = $('#savings-amount').val()
      if ((savingsAmount) - amount2 >= 0) {
        savingsAmount -= +(amount2)
        $('#savings-balance').text(savingsAmount)
        if (savingsAmount === 0) {
          $('div#savings').addClass('red')
        }
      } else if ((checkingAmount + savingsAmount) >= amount2) {
        var temp2 = (savingsAmount - amount2)
        savingsAmount = 0
        $('#savings-balance').text(savingsAmount)
        checkingAmount += temp2
        $('#checking-balance').text(checkingAmount)
        $('div#savings').addClass('red')
      } else {
        alert('not sufficient funds')
      }
    })
  }
);

const bank = {
  checkingAmount: 0,
  savingsAmount: 0
};

$(document).ready(function() {


//update bank function updates the html with the latest account balances
  const updateBank = function() {
    $('#checking-balance').text('$'+bank.checkingAmount);
    $('#savings-balance').text('$'+bank.savingsAmount);

    if (bank.checkingAmount === 0) {
        $("#checking-balance").addClass("zero");
    } else {
        $("#checking-balance").removeClass("zero");
    };

    if (bank.savingsAmount === 0) {
        $("#savings-balance").addClass("zero");
    } else {
        $("#savings-balance").removeClass("zero");
    };
  }


$("#checking-deposit").on('click',function() {
  bank.checkingAmount += parseInt($("#checking-amount").val());
  updateBank();
});

$("#savings-deposit").on('click',function() {
  bank.savingsAmount += parseInt($("#savings-amount").val());
  updateBank();
});


$("#checking-withdraw").on('click', function () {
  let totalBank = bank.checkingAmount + bank.savingsAmount;
  let amount = parseInt($("#checking-amount").val());
  if (amount <= bank.checkingAmount) {
    bank.checkingAmount -= amount;
    updateBank();
  } else if (amount <= totalBank) {
    amount -= bank.checkingAmount;
    bank.checkingAmount = 0;
    bank.savingsAmount -= amount;
    updateBank();
  }
});

$("#savings-withdraw").on('click', function () {
  let totalBank = bank.checkingAmount + bank.savingsAmount;
  let amount = parseInt($("#savings-amount").val());
  if (amount <= bank.savingsAmount) {
    bank.savingsAmount -= amount;
    updateBank();
  } else if (amount <= totalBank) {
    amount -= bank.savingsAmount;
    bank.savingsAmount = 0;
    bank.checkingAmount -= amount;
    updateBank();
}

});


updateBank();

})

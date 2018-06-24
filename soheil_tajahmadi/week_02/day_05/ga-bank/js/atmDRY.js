const bank = {
  checking: 0,
  savings: 0
};



$(document).ready(function() {


//update bank function updates the html with the latest account balances
  const updateBank = function() {

    let accountId = "";
    for (key in bank) {

      if ( key === "checking") {
        accountId = "#checking-balance";
      } else {
        accountId = "#savings-balance";
      }

      $(accountId).text('$'+bank[key]);

      if (bank[key] === 0) {
          $(accountId).addClass("zero");
      } else {
          $(accountId).removeClass("zero");
      };
    }

  }
//withdraws money from available balance
  const withdrawal = function () {
    console.log('withdrawal called');
    let totalBank = bank.checking + bank.savings;

    let amount = parseInt($($(this).prevAll("input")[1]).val());
    let accountType = $(this).parent().attr("id");
    let supportAccount = "";


    if (accountType === 'checking') {
      supportAccount = 'savings';
    } else {
      supportAccount = 'savings';
    };

    console.log(supportAccount);

    if (amount <= bank[accountType]) {
      bank[accountType] -= amount;
      updateBank();
    } else if (amount <= totalBank) {
      amount -= bank[accountType];
      bank[accountType] = 0;
      bank[supportAccount] -= amount;
      updateBank();
  }
};

$("#checking-deposit").on('click',function() {
  bank.checking += parseInt($("#checking-amount").val());
  updateBank();
});

$("#savings-deposit").on('click',function() {
  bank.savings += parseInt($("#savings-amount").val());
  updateBank();
});

$("#checking-withdraw").on('click', withdrawal);

$("#savings-withdraw").on('click', withdrawal);

updateBank();

})

const validator = (number) => {
  return number >= 0;
}

const deposit = (amount, subAccount) => {
  bank[subAccount] += amount;
}

const savingsWithdrawal = (amount) => {
  if(bank.savings < amount) return;
  bank.savings -= amount;
}

const checkingWithdrawal = (amount) => {
  if(bank.checking < amount){
    if(bank.savings + bank.checking < amount) return;
    if(bank.checking === 0 ){
      bank.savings -= amount;
    } else {
      bank.savings -= bank.checking;
      bank.checking = 0;
    }
  } else {
    bank.checking -= amount;
  }
}

const updateScreen = (subAccount) => {
  $(`#${subAccount}-balance`).html('$'+bank[subAccount]);
  checkZeroBalance(subAccount);
}

const checkZeroBalance = (subAccount) => {
  if(bank[subAccount] > 0 ){
    $(`#${subAccount}-balance`).removeClass( "zero" )
    return;
  }
  $(`#${subAccount}-balance`).addClass( "zero" )
}

const fetchInput = (subAccount) => {
  const amount = parseInt($(`#${subAccount}-amount`).val());
  return validator(amount)? amount : 0;
}

const bank = {
  checking: 0,
  savings: 0
}

$( document ).ready(function() {
  for (key in bank){
    let subAccount = key;
    checkZeroBalance(subAccount);
    $(`#${subAccount}-deposit`).on('click', function(){
      deposit(fetchInput(subAccount), subAccount);
      updateScreen(subAccount);
    });
    $(`#${subAccount}-withdraw`).on('click', function(){
      if(subAccount === 'savings'){
        savingsWithdrawal(fetchInput(subAccount));
      } else if (subAccount === 'checking'){
        checkingWithdrawal(fetchInput(subAccount));
        updateScreen('savings');
      }
      updateScreen(subAccount);
    });
  }
});

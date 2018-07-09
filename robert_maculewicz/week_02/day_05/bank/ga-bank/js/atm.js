
const balance = {                                        //create object balance for both account
  saving:   0,
  checking: 0
}
  $('#checking-balance').css('background-color', 'red')   //modyficate defult color be red;
  $('#savings-balance').css('background-color', 'red')

  const updateScreen = function(bankBalance){
     $('#checking-balance').html(parseInt(bankBalance.checking));   //conection with my html
      if(bankBalance.checking > 0){                                //condition for grey color
       $('#checking-balance').css('background-color', 'grey')
       }else{
       $('#checking-balance').css('background-color', 'red')
       }

  $('#savings-balance').html(parseInt(bankBalance.saving));   //for second account
   if(bankBalance.saving > 0){
    $('#savings-balance').css('background-color', 'grey')
    }else{
    $('#savings-balance').css('background-color', 'red')
    }
};

const deposit = function(amount, account){                 //create logic deposit function
  balance[account] = balance[account] + parseInt(amount)   // parseInt change from string to number
  updateScreen(balance);
};
$('#checking-deposit').on('click',function(){          //conect function with bottons
  let num = $('#checking-amount').val()
  deposit(num, "checking")
})

const withdraw = function(amount, account){
  if(balance[account] >= parseInt(amount)){         //account can't go negative,ignore transaction//
  balance[account] = balance[account] - parseInt(amount)
  }
  updateScreen(balance)
};
$('#checking-withdraw').on('click',function(){
  let num1 = $('#checking-amount').val()
  withdraw(num1, "checking")
})

                                                  /* Savings-account*/
$('#savings-deposit').on('click',function(){
  let num2 = $('#savings-amount').val()
  deposit(num2, "saving")
})

$('#savings-withdraw').on('click',function(){
  let num3 = $('#savings-amount').val()
  withdraw(num3, "saving")
})
/* NO TIME FOR REST */
/* What happens when the user wants to withdraw more money from the checking
account than is in the account? These accounts have overdraft protection, so if
a withdrawal can be covered by the balances in both accounts, take the checking
balance down to $0 and take the rest of the withdrawal from the savings account.
If the withdrawal amount is more than the combined account balance, ignore it.
* Make sure there is overdraft protection going both ways.*/

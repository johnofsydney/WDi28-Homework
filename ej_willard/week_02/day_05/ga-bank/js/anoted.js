//using an object to store account its easier to identify positions and stuff.

const balance = {
  saving: 0,
  checking: 0
}

const updateScreen = function (bankBalance) {
  $('#checking-balance').html(bankBalance.checking) //this it trying to update screen/dom
  $('#savings-balance').html(bankBalance.savings) //this it trying to update screen/dom remeber to change these strings into numbers... at the moment it is just adding the strings together
}

const deposit = function (amount, account){ //amount we are putting in and the account we are putting it into
  balance[account] = balance[account] + amount //you have passed in two variable in the argument/function above... if the thing we are using as the key to our object, if in itself it is a variable we have to put it in square brackets.
  // console.log(balance);//testing REPLACE with something that updates the dom
  //to test it you would put deposit(100, 'saving') in the console window or log.
  updateScreen(balance); //calling function from above that will update the screen/dom
}

const withdraw = function (amount, account) { //can pretty much copy what's above. just change to - instead of +
balance[account] = balance[account] - amount
console.log(balance);
}
//for dom stuff you have to pick up info from input box after a click event.

$('#checking-deposit').on('click', function() { //cant say $('button').on cos there is more than one... need the ID of the one you are changing
  let num = $('#checking-amount').val(); //this is how we get the value (val) from an input field, we are saving it in a variable because we don't want to keep typing the whole thing out.... now we can just refer to it as num
  deposit(num, "checking"); //it gets entered as a string because whatever is entered in input box gets entered as a string..

});

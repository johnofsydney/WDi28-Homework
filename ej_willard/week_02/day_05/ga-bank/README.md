
logic - need to make it work so that it doesnt go into overdrawn
most complicated part is

#Title: ATM App


###Type:
- Lab

###Summary
- This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
- You'll be selecting elements, manipulating HTML, and manipulating style along
with building out the logic using JavaScript.

###Objectives:
- DOM selection, appending, removal, updating

###Specification:

* Keep track of the checking and savings balances somewhere --> this is an important decision you need to make, where you are going to put these things. //DONE in OBJECT

* Add functionality so that a user can deposit money into one of the bank accounts. //DONE

* Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change. // DONE, i think... didnt use .html though

* Add functionality so that a user can withdraw money from one of the bank accounts. //DONE

* Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change. // DONE, i think.... didnt use .html though

* Make sure the balance in an account can't go negative. If a user tries to
withdraw more money than exists in the account, ignore the transaction.

* When the balance of the bank account is $0 the background of that bank account
should be red. It should be gray when there is money in the account. //DONE but need to turn into function so that i can call it on both accounts. //also doesnt update when i put new value in form

* What happens when the user wants to withdraw more money from the checking
account than is in the account? These accounts have overdraft protection, so if
a withdrawal can be covered by the balances in both accounts, take the checking
balance down to $0 and take the rest of the withdrawal from the savings account.
If the withdrawal amount is more than the combined account balance, ignore it. -- if you have 50 in each you can withdraw $100 from one but it will take $50 from both and both then go to $0
* Make sure there is overdraft protection going both ways.


----

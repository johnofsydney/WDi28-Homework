//this is purely JS logic, no DOM stuff

const accounts = {
  checkingBalance: 0,
  savingsBalance: 0,
  total: function() {
    return this.checkingBalance + this.savingsBalance;
  },
  checkingDeposit: function(amount) {
    this.checkingBalance += +amount;

  },
  ///////CHECKINGS FUNCTIONS!
  checkingWithdraw: function (amount) {
    amount = +amount; //ensure amount is a number, not a string
    if (amount <= this.checkingBalance) {
      this.checkingBalance -= amount;
    } else if (amount <= this.total()) {
      const difference = amount - this.checkingBalance;
      this.checkingBalance = 0;
      this.savingsBalance -= difference; //withdrawing difference from other account.
    }

  },

  ///////// SAVINGS functions!!
  savingsDeposit: function(amount) {
    this.savingsBalance += +amount;
  },
  
  savingsWithdraw: function (amount) {
    amount = +amount; //ensure amount is a number, not a string
    if (amount <= this.savingsBalance) {
      this.savingsBalance -= amount;
    } else if (amount <= this.total()) {
      const difference = amount - this.savingsBalance;
      this.savingsBalance = 0;
      this.checkingBalance -= difference; //withdrawing difference from other account.
    }

  }
}; //closing function tag

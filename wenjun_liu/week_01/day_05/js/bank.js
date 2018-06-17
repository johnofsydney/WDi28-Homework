//check nagetive
const checkNegativeBalance = (money) => {
  if(money<0){
    alert('negative amount!');
  };
}

class bankAccount {
  constructor(balance){
    this.balance = balance;
    checkNegativeBalance(this.balance);
  };

  deposit(amount){
    this.balance += amount;
    checkNegativeBalance(this.balance);
  };

  withdrawal(amount){
    this.balance -= amount;
    checkNegativeBalance(this.balance);
  };
};

const bank = {};

const sum = () => {
  let total = 0;
  for (account in bank){
    total += bank[account].balance;
  }
  return total;
};

const addAccount = (name, amount) => {
  bank[name] = new bankAccount(amount);
};

const deposit = (account, amount) => {
  account.deposit(amount);
};

const withdrawal = (account, amount) => {
  account.withdrawal(amount);
};

const transfer = (accountFrom, accountTo, amount) => {
  accountFrom.withdrawal(amount);
  accountTo.deposit(amount);
};

(function () {
  class Account {
    balance: number = 0;
    withdrawLimit: number = 1000;
    constructor(balance: number) {
      this.balance = balance;
    }

    addMoney(money: number) {
      this.balance += money;
    }

    withdrawMoney(money: number) {
      console.log("---- Withdrawing money - ", money, "$");
      if (this.withdrawLimit <= money) {
        console.log(
          "Your withdraw request exceeded the current withdraw limit on the account"
        );
      } else {
        if (this.balance >= money) {
          this.balance -= money;
          console.log("Withdraw", money, "$ from your account");
        } else {
          console.log("You don`t have enough money to withdraw");
        }
      }
    }

    currentAccountBalance() {
      console.log("Current account balance: ", this.balance, "$");
    }
  }
  class WithdrawalHandler {
    account: Account;

    constructor(account: Account) {
      this.account = account;
    }
    public withdraw(balance: number) {
      this.account.withdrawMoney(balance);
      this.account.currentAccountBalance();
      return this;
    }
  }

  const account = new Account(0);
  account.addMoney(5000);
  const withdrawalHandler = new WithdrawalHandler(account);
  withdrawalHandler
    .withdraw(2000)
    .withdraw(500)
    .withdraw(500)
    .withdraw(3000)
    .withdraw(999);
})();

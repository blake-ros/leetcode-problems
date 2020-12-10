/* exported Bank */
function Bank() {
  this.accounts = [];
  this.nextAccountNumber = 1;
}

Bank.prototype.openAccount = function(holder, balance) {
  if(balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number
  } else {
    return null;
  }
}

Bank.prototype.getAccount = function(number) {
  var accounts = this.accounts;
  for(var i = 0; i < accounts.length; i++) {
    if(accounts[i].number === number) {
      return accounts[i]
    }
  }
  return null;
}

Bank.prototype.getTotalAssets = function() {
  var accounts = this.accounts;
  var assets = 0;
  for(var i = 0; i < accounts.length; i++) {
    assets += accounts[i].getBalance();
  }
  return assets
}

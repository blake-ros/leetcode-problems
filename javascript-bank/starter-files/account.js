/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder
  this.transactions = [];
}

Account.prototype.deposit = function(amount) {
  if(amount > 0) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  } else {
    return false;
  }
}

Account.prototype.withdraw = function(amount) {
  if(amount > 0) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  } else {
    return false;
  }
}

Account.prototype.getBalance = function() {
  var transactions = this.transactions;
  var deposits = null;
  var withdrawals = null;

  for(var i = 0; i < transactions.length; i++) {
    if(transactions[i].type === 'deposit') {
      deposits += transactions[i].amount;
    } else if(transactions[i].type === 'withdrawal') {
      withdrawals += transactions[i].amount;
    }
  }

  if(transactions === []) {
    return 0;
  }

  if(deposits <= withdrawals) {
    return 0
  } else {
    return (deposits - withdrawals);
  }
}

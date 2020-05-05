// Question:

// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction(i.e., buy one and sell one share of the stock),

// design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.






// Answer:

var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      if (profit > maxProfit) {
        maxProfit = profit
      }
    }
  }
  return maxProfit
};

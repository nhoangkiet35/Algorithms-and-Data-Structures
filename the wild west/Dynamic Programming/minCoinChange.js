function coinChange(coins, amount) {
    // Sort coins in descending order
    coins.sort((a, b) => b - a);

    let coinCount = 0;
    let i = 0;

    while (amount > 0 && i < coins.length) {
        if (coins[i] <= amount) {
            const numCoins = Math.floor(amount / coins[i]);
            coinCount += numCoins;
            amount -= numCoins * coins[i];
        }
        i++;
    }

    if (amount === 0) {
        return coinCount;
    } else {
        // If the amount cannot be made with available coins
        return -1;
    }
}

// Example usage:
const denominations = [1, 5, 10, 25, 50];
const changeAmount = 63;
const minimumCoins = coinChange(denominations, changeAmount);
console.log(`Minimum number of coins needed: ${minimumCoins}`);

/*
Write a function called coinChange which accepts two parameters: an array of denominations and a value. 
The function should return the number of ways you can obtain the value from the given collection of denominations. 
You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.
*/
function coinChange(denominations, value) {
    // add whatever parameters you deem necessary - good luck!
    const ways = new Array(value + 1).fill(0);
    ways[0] = 1;

    denominations.forEach((coin) => {
        for (let amount = coin; amount <= value; amount++) {
            ways[amount] += ways[amount - coin];
        }
    });

    return ways[value];
}

/*
This function, coinChange, uses bottom-up dynamic programming to build up the solution by calculating the number of ways 
to make change for each value from 0 to the target value. 
The ways array keeps track of the number of ways to make change for each value from the given denominations.
*/
// Examples:

const denominations = [1, 5, 10, 25];

console.log(coinChange(denominations, 1)); // 1
console.log(coinChange(denominations, 2)); // 1
console.log(coinChange(denominations, 5)); // 2
console.log(coinChange(denominations, 10)); // 4
console.log(coinChange(denominations, 25)); // 13
console.log(coinChange(denominations, 45)); // 39
console.log(coinChange(denominations, 100)); // 242
console.log(coinChange(denominations, 145)); // 622
console.log(coinChange(denominations, 1451)); // 425663
console.log(coinChange(denominations, 14511)); // 409222339

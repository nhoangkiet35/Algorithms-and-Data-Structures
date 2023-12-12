// This problem can be solved using a dynamic programming approach known as the "Min Cost Climbing Stairs" problem.
function minCostClimbingStairs(cost) {
    // const n = cost.length;

    // // Create a DP array to store the minimum cost to reach each step
    // const dp = new Array(n + 1);
    // dp[0] = 0;
    // dp[1] = 0;

    // for (let i = 2; i <= n; i++) {
    //     // Calculate the minimum cost to reach the current step
    //     dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    // }

    // // The minimum cost to reach the top floor is the cost of reaching the last step or the step before it
    // return dp[n];

    const dp = Array(cost.length);
    for (let i = 0; i < cost.length; i++) {
        dp[i] = Math.min(dp[i - 2] || 0, dp[i - 1] || 0) + cost[i];
    }
    return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
}

// Example usage:
let cost = [10, 15, 20];
let minCost = minCostClimbingStairs(cost);
console.log("Minimum cost to reach the top floor:", minCost);

cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
minCost = minCostClimbingStairs(cost);
console.log("Minimum cost to reach the top floor:", minCost);

/*

Explanation:

1. The minCostClimbingStairs function takes an array cost representing the cost of each step on the staircase.
2. It initializes a DP (dynamic programming) array dp to store the minimum cost to reach each step.
3. The base cases are dp[0] = 0 and dp[1] = 0 because there's no cost to start from step 0 or step 1.
4. It iterates through the steps starting from the third step up to the top floor (represented by n).
5. For each step, it calculates the minimum cost to reach that step by considering the cost of the current step plus the minimum cost of reaching the previous two steps.
6. Finally, it returns the minimum cost to reach the top floor, which is the minimum of the cost of reaching the last step (dp[n]) or the step before it (dp[n - 1]).

This algorithm efficiently calculates the minimum cost required to reach the top of the floor by considering the costs of each step and using dynamic programming to store and compute the minimum costs to reach each step.

*/

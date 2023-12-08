function findSignatures(M, N, P, costs) {
    const INF = 1e9; // Infinity value
    const dp = Array.from({ length: M }, () => Array(N).fill(INF));
    const path = Array.from({ length: M }, () => Array(N).fill(-1));

    // Base case: Initialize costs for the first floor
    for (let j = 0; j < N; j++) {
        dp[0][j] = costs[0][j];
    }
    console.log(dp);

    // Dynamic programming to find minimum cost
    for (let i = 1; i < M; i++) {
        for (let j = 0; j < N; j++) {
            for (let k = 0; k < N; k++) {
                if (j !== k) {
                    let currentCost = costs[i][j];

                    if (k === P - 1) {
                        currentCost += dp[i - 1][k];
                    } else if (k > 0 && k < N - 1 && j === P - 1) {
                        currentCost += Math.min(
                            dp[i - 1][k - 1],
                            dp[i - 1][k + 1],
                        );
                    } else {
                        currentCost += dp[i - 1][k];
                    }

                    if (currentCost < dp[i][j]) {
                        dp[i][j] = currentCost;
                        path[i][j] = k;
                    }
                }
            }
        }
    }

    // Finding the minimum cost and its path
    let minCost = INF;
    let minIndex = -1;
    for (let j = 0; j < N; j++) {
        if (dp[M - 1][j] < minCost) {
            minCost = dp[M - 1][j];
            minIndex = j;
        }
    }

    // Reconstructing the path
    const result = [];
    for (let i = M - 1; i >= 0; i--) {
        result.push([i + 1, minIndex + 1]);
        minIndex = path[i][minIndex];
    }

    result.reverse();
    return [minCost, result.length, result];
}

// Sample input
const M = 3;
const N = 4;
const P = 4;
const costs = [
    [10, 10, 1, 10],
    [2, 2, 2, 10],
    [1, 10, 10, 1],
];

// Finding signatures
const [totalCost, steps, path] = findSignatures(M, N, P, costs);
console.log(totalCost, steps);
console.log("--------------------------------");
path.forEach((step) => console.log(step.join(" ")));

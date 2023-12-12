/*
1) trivial examples:

Q: Does cost[] include the cost of the top of the stairs? i.e.) is the last element of cost[] the highest step before the top of the staircase? -> Yes.

cost = [1, 1]

output: 1

either step from index 1 to top by taking 1 steps, paying (1) or:
       step from index 0 to top by taking 2 steps, paying (1)


2) simple example: 

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.

this example illustrates that as long as there are no massive values twice in a row, you can always avoid stepping on them

3) formal definition:

given a cost[] array, where the first element represents the cost of the first step in the staircase, and the last element the last cost, produce the total cost required to reach the top by taking either 1 step or 2 steps each turn.

4) brute force solution: 

Like many other brute force DP solutions, you can just run a recursive function to check all paths and return the lowest cost one. This will be O(2^n) to explore the whole tree with no memoization, where (n) is the size of cost. At each node (i.e. position on the staircase), we have 2 options: take 1 step forward or 2 steps forward.

5) smarter solution:

This is very similar to the default climbing stairs problem, except that we need to check for the cost of climbing from each stair at each step. You can still visualize the decision tree of the choices like a binary tree:

          4
        /   \
      3      2
     / \    / \
    2   1  1   0
   / \    / \
  1   0  0  -1
 / \
0  -1

except now the nodes represent the index, which in turn details your position on the staircase. The edges would represent the cost required to climb up from whichever staircase you're on: so the edge from (0) to (1) or (0) to (2) always costs the same, cost[0].

 */

let memArray = [];

var minCostClimbingStairsHelper = function (cost, currIndex) {
    if (currIndex === 0) {
        // base case: index = 0
        return cost[0];
    } else if (currIndex === 1) {
        //base case: index = 1
        return cost[1];
    } else if (memArray[currIndex]) {
        // answer already memoized, return it
        return memArray[currIndex];
    }

    result = Math.min(
        minCostClimbingStairsHelper(cost, currIndex - 1) + cost[currIndex],
        minCostClimbingStairsHelper(cost, currIndex - 2) + cost[currIndex],
    );

    memArray[currIndex] = result;

    return result;
};

var minCostClimbingStairs = function (cost) {
    // initialize memoization global array
    for (let i = 0; i < cost.length; i++) {
        memArray[i] = null;
    }

    // cost.length is at minimum 2, so this won't cause index out of bounds issues.
    return Math.min(
        minCostClimbingStairsHelper(cost, cost.length - 1),
        minCostClimbingStairsHelper(cost, cost.length - 2),
    );
};

let cost = [10, 15, 20];
let minCost = minCostClimbingStairs(cost);
console.log("Minimum cost to reach the top floor:", minCost);

cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
minCost = minCostClimbingStairs(cost);
console.log("Minimum cost to reach the top floor:", minCost);

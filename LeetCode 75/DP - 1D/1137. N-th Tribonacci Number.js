// To find the value of the Tribonacci sequence at index n, you can create a JavaScript function that generates the sequence based on the given formula
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
function tribonacci(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let t0 = 0,
        t1 = 1,
        t2 = 1,
        tn;

    for (let i = 3; i <= n; i++) {
        tn = t0 + t1 + t2;
        t0 = t1;
        t1 = t2;
        t2 = tn;
    }

    return tn;

    // dynamic programming
    // let t = [0, 1, 1];
    // for (let i = 3; i <= n; i++) {
    //     t.push(t[i - 3] + t[i - 2] + t[i - 1]);
    // }

    // return t[n];

    // recursive
    // if (memo[n]) return memo[n];
    // if (n === 0) {
    //     return 0;
    // } else if (n === 2 || n === 1) {
    //     return 1;
    // }
    // return (memo[n] =
    //     tribonacci(n - 1, memo) +
    //     tribonacci(n - 2, memo) +
    //     tribonacci(n - 3, memo));
}

// Example usage:
let n = 25;
let result = tribonacci(n);
console.log(`The value of T${n} in the Tribonacci sequence is:`, result);

/*

Explanation:

1. The tribonacci function takes an index n as input and calculates the value of the Tribonacci sequence at that index.
2. It handles special cases: for n = 0, the value is 0, and for n = 1 or n = 2, the value is 1 (as defined in the sequence).
3. For indices greater than 2, it iterates from 3 up to n using a for loop to calculate the Tribonacci value.
4. Inside the loop, it uses three variables t0, t1, and t2 to keep track of the last three values of the sequence and calculates the next value tn using the formula Tn+3 = Tn + Tn+1 + Tn+2.
5. It updates these variables in each iteration to progress through the sequence until it reaches the desired index n, at which point it returns the calculated value.

This function efficiently computes the value of the Tribonacci sequence at a given index by iteratively applying the sequence definition while keeping track of the last three values.

*/

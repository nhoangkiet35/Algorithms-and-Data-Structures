/*
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, 
and where every number thereafter is equal to the sum of the previous two numbers.
*/

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
// F 0 = 0
// F 1 = 1
// F 2 = F 1 + F 0 = 1 + 0 = 1
// F 3 = F 2 + F 1 = 1 + 1 = 2
// F 4 = F 3 + F 2 = 2 + 1 = 3
// F 5 = F 4 + F 3 = 3 + 2 = 5

function fib(n) {
    // add whatever parameters you deem necessary - good luck!
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

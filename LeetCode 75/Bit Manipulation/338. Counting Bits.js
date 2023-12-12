// You can create a function in JavaScript that takes an integer n and
// generates an array ans where ans[i] represents the number of 1's in the binary representation of i.
function countBits(n) {
    const ans = [0]; // Initialize the array with 0 at index 0
    // let offset = 1;
    for (let i = 1; i <= n; i++) {
        // To count the number of 1's in the binary representation of i,
        // use the bit manipulation technique of counting bits (Brian Kernighan's Algorithm)
        // It involves using i & (i - 1) to unset the rightmost set bit and counting the number of times this operation is performed
        ans[i] = ans[i >> 1] + (i & 1); // Dịch phải i một bit (tương đương với i / 2)
        /*
        Trong JavaScript, >> là toán tử dịch phải (right shift operator) một số nhị phân một số lượng bit được chỉ định. Khi sử dụng i >> 1, nó dịch phải giá trị của biến i đi một bit.
        ans[i >> 1] có thể được sử dụng để truy cập phần tử trong một mảng ans với chỉ số là giá trị của biến i được dịch phải một bit (tương đương với việc chia giá trị của i cho 2 và lấy phần nguyên). 
        Điều này thường được sử dụng để giảm đáng kể giá trị chỉ số mảng. Ví dụ, nếu i có giá trị là 6, thì i >> 1 sẽ trở thành 3, và ans[3] sẽ truy cập phần tử thứ ba của mảng ans.
        */
        // if (i === offset * 2) {
        //     offset = i;
        // }
        // arr[i] = arr[i - offset] + 1;
    }
    return ans;
}

// Example usage:
let n = 5; // Set the value of n
let result = countBits(n); // Call the function with n
console.log(result); // Output the resulting array

// n = 2; // Set the value of n
// result = countBits(n); // Call the function with n
// console.log(result);
/*

0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101

Explanation:

1. The function countBits takes an integer n.
2. It initializes an array ans with the first element as 0.
3. It iterates from 1 to n inclusive, using a loop.
4. For each i from 1 to n, it calculates the number of set bits (1's) in the binary representation of i using the bit manipulation technique.
5. The expression i & (i - 1) helps in unsetting the rightmost set bit in i. By counting the number of times this operation is performed, we can determine the number of set bits in i.
6. The resulting count is stored in the ans array at index i.
7. Finally, it returns the ans array containing the counts of set bits for each number from 0 to n.

For instance, if n is 5, the resulting array will be [0, 1, 1, 2, 1, 2], representing the counts of 1's in the binary representations of numbers from 0 to 5.

*/

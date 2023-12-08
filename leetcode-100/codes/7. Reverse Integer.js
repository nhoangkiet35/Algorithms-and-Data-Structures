/*
Certainly! You can achieve this by manipulating the integer as a string and reversing it, while considering the constraints of a 32-bit signed integer. 
Here's a JavaScript function to do that:
*/
function reverseInteger(x) {
    const isNegative = x < 0;
    let numString = Math.abs(x).toString();
    let reversedString = numString.split("").reverse().join("");

    let result = isNegative
        ? -parseInt(reversedString)
        : parseInt(reversedString);
    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
        return 0;
    }
    return result;
}

// Test cases
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(120)); // Output: 21
/*
Trước tiên, hàm này xác định xem số nguyên đầu vào có âm hay không, 
sau đó chuyển đổi nó thành một chuỗi, đảo ngược chuỗi bằng các phương thức tách`split`, 
đảo ngược`reverse` và nối`join` và cuối cùng chuyển đổi nó trở lại thành một số nguyên, có xét đến dấu. 
Nó kiểm tra xem số nguyên đảo ngược có nằm trong phạm vi số nguyên có dấu 32 bit hay không và 
trả về 0 nếu không.
*/

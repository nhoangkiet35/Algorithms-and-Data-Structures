const romanNumerals = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
};

function intToRoman(num) {
    const values = Object.keys(romanNumerals).sort((a, b) => b - a);
    let result = "";

    for (let index = 0; index < values.length; index++) {
        while (num >= values[index]) {
            result += romanNumerals[values[index]];
            num -= values[index];
        }
    }

    return result;
}

// Test cases
console.log(intToRoman(3)); // Output: "III"
console.log(intToRoman(58)); // Output: "LVIII"
console.log(intToRoman(1994)); // Output: "MCMXCIV"

/*
Hàm intToRoman này lấy một số nguyên làm đầu vào và lặp qua các khóa của đối tượng romanNumerals, 
trừ giá trị chữ số lớn nhất có thể từ số đầu vào trong khi xây dựng cách biểu diễn chữ số La Mã theo từng bước.
*/

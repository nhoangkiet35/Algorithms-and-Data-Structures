const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayB = [2, 3];

const sum = arrays.reduce((acc, cur) => {
    if (arrayB.some((num) => cur % num === 0)) return acc + cur;
    return acc;
}, 0);

console.log(sum, 45 - 1 - 5 - 7);

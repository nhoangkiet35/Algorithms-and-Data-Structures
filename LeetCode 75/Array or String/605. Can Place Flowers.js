function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    let i = 0;

    while (i < flowerbed.length) {
        if (
            flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
        ) {
            flowerbed[i] = 1; // Place a flower
            count++; // Increment count of planted flowers
        }
        i++;
    }
    console.log(flowerbed);

    return count >= n;
}

// Example usage:
let flowerbed = [1, 0, 0, 0, 1],
    n = 1;
let result = canPlaceFlowers(flowerbed, n);
console.log(result); // Output: true

(flowerbed = [1, 0, 0, 0, 1]), (n = 2);
result = canPlaceFlowers(flowerbed, n);
console.log(result); // Output: true

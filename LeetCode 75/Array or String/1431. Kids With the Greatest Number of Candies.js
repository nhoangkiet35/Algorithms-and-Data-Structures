function kidsWithCandies(candies, extraCandies) {
    const maxCandies = Math.max(...candies); // Find the maximum number of candies

    // Compare each kid's candies with the maximum after adding extra candies
    return candies.map((candyCount) => candyCount + extraCandies >= maxCandies);
}

// Example usage:
const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
const result = kidsWithCandies(candies, extraCandies);
console.log(result); // Output: [true, true, true, false, true]

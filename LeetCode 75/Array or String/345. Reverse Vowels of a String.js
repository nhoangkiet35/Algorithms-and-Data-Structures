function reverseVowels(s) {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    const arr = s.split("");
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(arr[left])) {
            left++;
        }
        while (left < right && !vowels.has(arr[right])) {
            right--;
        }

        if (left < right) {
            // Swap the vowels
            const temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    return arr.join("");
}

// Example usage:
const s = "holle werld";
const reversed = reverseVowels(s);
console.log(reversed); // Output: "holle werld"

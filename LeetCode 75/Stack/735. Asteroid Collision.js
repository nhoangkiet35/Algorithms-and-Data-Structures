function asteroidCollision(asteroids) {
    const stack = [];

    for (const asteroid of asteroids) {
        // Handle positive asteroid or asteroids moving right
        if (asteroid > 0) {
            stack.push(asteroid);
        } else {
            const absAsteroid = Math.abs(asteroid);
            let sameSize;
            // Handle negative asteroid or asteroids moving left
            while (stack.length > 0 && stack[stack.length - 1] > 0) {
                // Compare the absolute values of asteroids
                if (stack[stack.length - 1] < absAsteroid) {
                    stack.pop(); // Destroy the smaller asteroid moving right
                    continue;
                } else if (stack[stack.length - 1] === absAsteroid) {
                    sameSize = stack.pop(); // Destroy both asteroids if they are of the same size
                }
                break; // If the left-moving asteroid is smaller or equal, no collision occurs
            }
            if (
                (stack.length === 0 || stack[stack.length - 1] < 0) &&
                sameSize !== absAsteroid
            ) {
                stack.push(asteroid); // If no more right-moving asteroids or the current asteroid is left-moving
            }
        }
    }

    // for (let i = 0; i < asteroids.length; i++) {
    //     const current = asteroids[i],
    //         last = stack[stack.length - 1];
    //     if (!stack.length || current > 0 || last < 0) {
    //         stack.push(current);
    //     } else if (current + last === 0) {
    //         stack.pop();
    //     } else if (Math.abs(last) < Math.abs(current)) {
    //         stack.pop();
    //         i--;
    //     }
    // }

    return stack;
}

// Test cases
console.log(asteroidCollision([5, 10, -5, -10])); // Output: [5]
console.log(asteroidCollision([8, -8])); // Output: []
console.log(asteroidCollision([10, 2, -5])); // Output: [10]
console.log(asteroidCollision([-2, -1, 1, 2])); // Output: [-2,-1,1,2]
console.log(asteroidCollision([-2, -2, 1, -2])); // Output: [-2,-2,-2]
console.log(asteroidCollision([-2, -2, 1, -1])); // Output: [-2,-2,-1]

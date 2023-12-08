class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const now = Date.now();
        if (this.cache.has(key) && this.cache.get(key).expiration > now) {
            this.cache.set(key, { value, expiration: now + duration });
            return true;
        } else {
            this.cache.set(key, { value, expiration: now + duration });
            return false;
        }
    }

    get(key) {
        const now = Date.now();
        if (this.cache.has(key) && this.cache.get(key).expiration > now) {
            return this.cache.get(key).value;
        } else {
            return -1;
        }
    }

    count() {
        const now = Date.now();
        let count = 0;
        for (const [key, value] of this.cache) {
            if (value.expiration > now) {
                count++;
            }
        }
        return count;
    }
}

// Example usage:
const cache = new TimeLimitedCache();

// Example 1
console.log(cache.set(1, 42, 100)); // Output: false
console.log(cache.get(1)); // Output: 42
console.log(cache.count()); // Output: 1
console.log(cache.get(1)); // Output: -1

// Example 2
console.log(cache.set(1, 42, 50)); // Output: false
console.log(cache.set(2, 422, 50)); // Output: false
console.log(cache.set(1, 50, 1)); // Output: true
console.log(cache.get(1)); // Output: 50
console.log(cache.get(1)); // Output: 50
console.log(cache.get(2)); // Output: -1
console.log(cache.count()); // Output: 0

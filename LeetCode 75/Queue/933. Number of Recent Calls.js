class RecentCounter {
    constructor() {
        this.requests = [];
    }

    ping(t) {
        /*
        To exclude the times that are not included within the range of t - 3000,
        we remove the first element from the stream while it is less than the calculated range 
        */
        // Remove requests that fall outside the time frame [t - 3000, t]
        while (this.requests[0] < t - 3000) {
            this.requests.shift();
        }

        // Everytime we recieve a ping, add the time to the stream of integers
        this.requests.push(t); // Add the new request timestamp

        // When the loop ends the length of calls will be the length of the array
        // Return the number of requests within the time frame
        return this.requests.length;
    }
}

// Example usage:
const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1)); // Output: 1
console.log(recentCounter.ping(100)); // Output: 2
console.log(recentCounter.ping(3001)); // Output: 3
console.log(recentCounter.ping(3002)); // Output: 3

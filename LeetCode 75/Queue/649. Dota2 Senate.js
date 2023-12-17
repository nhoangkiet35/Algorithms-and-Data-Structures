// here's a JavaScript implementation using a queue to simulate the voting process according to the described rules:
function predictPartyVictory(senate) {
    if (!senate.includes("R")) {
        return "Dire";
    } else if (!senate.includes("D")) {
        return "Radiant";
    }

    let radiantQueue = [];
    let direQueue = [];
    const n = senate.length;

    for (let i = 0; i < n; i++) {
        if (senate[i] === "R") radiantQueue.push(i);
        else direQueue.push(i);
    }

    while (radiantQueue.length > 0 && direQueue.length > 0) {
        const radiantIndex = radiantQueue.shift();
        const direIndex = direQueue.shift();

        if (radiantIndex < direIndex) {
            radiantQueue.push(radiantIndex + n); // Ban the dire senator by updating its index
        } else {
            direQueue.push(direIndex + n); // Ban the radiant senator by updating its index
        }
    }

    return radiantQueue.length > 0 ? "Radiant" : "Dire";
}

// Test cases
console.log(predictPartyVictory("RD")); // Output: "Radiant"
console.log(predictPartyVictory("RDD")); // Output: "Dire"
console.log(predictPartyVictory("DRDR")); // Output: "Dire"

/*
This code first initializes two queues, radiantQueue and direQueue, to keep track of the indices of senators from each party. 
Then it loops through the senate string to populate these queues based on party affiliation.

After that, it enters a loop where it simulates the voting process. 
Senators from each party take turns "banning" the next senator from the opposing party by pushing their updated index to the respective queue. 
The process continues until one of the parties' queues becomes empty.

Finally, it checks which queue still has senators and returns the corresponding party as the predicted winner.

*/

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {
        this.queue.push({ element, priority });
        this.sort();
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.queue.shift().element;
        }
        return null;
    }

    sort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

function findMinCostPath(M, N, P, fees) {
    const INF = 1e9; // Infinity value for unreachable rooms
    const dp = Array.from({ length: M }, () => Array(N).fill(INF)); // Initialize DP array for costs
    const path = Array.from({ length: M }, () => Array(N)); // Store the path
    const pq = new PriorityQueue();
    // console.log(dp);
    // console.log(path);

    dp[0][P - 1] = fees[0][P - 1];
    pq.enqueue({ floor: 0, room: P - 1 }, fees[0][P - 1]);

    // console.log(dp);
    // console.log(pq.queue);

    while (!pq.isEmpty()) {
        // console.log(pq);
        const { floor: floorM, room: roomM } = pq.dequeue();
        // Define the possible movements
        const moves = [
            { dx: 0, dy: -1 }, // Move up
            { dx: 0, dy: 1 }, // Move down
            { dx: 1, dy: 0 }, // Move right
            { dx: -1, dy: 0 }, // Move left
        ];

        for (const move of moves) {
            const nx = floorM + move.dx;
            const ny = roomM + move.dy;

            if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
                const cost = dp[floorM][roomM] + fees[nx][ny];
                if (cost < dp[nx][ny]) {
                    dp[nx][ny] = cost;
                    path[nx][ny] = { floor: floorM, room: roomM };
                    pq.enqueue({ floor: nx, room: ny }, cost);
                }
            }
        }
    }
    console.log(dp);
    console.log(path);
    console.log(pq.queue);
    let minCost = dp[M - 1][0];
    let endRoom = 0;
    // console.log(minCost);

    // Find the minimum cost among the rooms in the last floor
    for (let i = 1; i < N; i++) {
        if (dp[M - 1][i] < minCost) {
            minCost = dp[M - 1][i];
            endRoom = i;
        }
    }

    const roomsPath = [];
    let curFloor = M - 1;
    let curRoom = endRoom;

    // Backtrack to get the path
    while (curFloor > 0) {
        roomsPath.push({ floor: curFloor, room: curRoom });
        const { floor, room } = path[curFloor][curRoom];
        curFloor = floor;
        curRoom = room;
    }

    return {
        cost: minCost,
        rooms: roomsPath.reverse(),
    };
}

// Example usage:
const input = `3 4 4
10 10 1 10
2 2 2 10
1 10 10 1`;
const lines = input.split("\n");
const [M, N, P] = lines[0].split(" ").map(Number);
const fees = lines.slice(1).map((line) => line.split(" ").map(Number));

const result = findMinCostPath(M, N, P, fees);
// console.table([
//     ["cost", "length"],
//     [result.cost, result.rooms.length],
//     ["-----", "-----"],
//     ...result.rooms.map((room) => {
//         return [room.floor + 1, room.room + 1];
//     }),
// ]);

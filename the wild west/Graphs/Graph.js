class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // this function should add a node to the graph and place a new key in the adjacency list with the value of an empty array.
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // this function should add an edge between two nodes in the graph and place each value of the nodes in each array for the value of the node in the adjacency list.
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    // this function should accept two nodes and remove the edge between them. It should modify the adjacency list to ensure that both values are not in each array for the two nodes which no longer contain the edge.
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (v) => v !== vertex2,
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            (v) => v !== vertex1,
        );
    }

    // this function should remove the node in the array of nodes and also remove all edges that the removed node previously contained.
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    depthFirstSearchRecursive(start) {
        const visited = {};
        const result = [];

        const dfs = (vertex) => {
            if (!vertex) return null;

            visited[vertex] = true;
            result.push(vertex);

            this.adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        };

        dfs(start);
        return result;
    }

    depthFirstSearchIterative(start) {
        const visited = {};
        const result = [];
        const stack = [start];

        while (stack.length) {
            const currentVertex = stack.pop();

            if (!visited[currentVertex]) {
                visited[currentVertex] = true;
                result.push(currentVertex);

                this.adjacencyList[currentVertex].forEach((neighbor) => {
                    if (!visited[neighbor]) {
                        stack.push(neighbor);
                    }
                });
            }
        }

        return result;
    }

    // this function should return an array of nodes visited using DFS.
    // You can do this iteratively(using a stack) or recursively, but note the order of the results will be different.
    // The test cases should accommodate this.
    depthFirstSearch(start, useRecursive = true) {
        if (useRecursive) {
            return this.depthFirstSearchRecursive(start);
        } else {
            return this.depthFirstSearchIterative(start);
        }
    }

    // this function should return an array of vertices visited using BFS.
    breadthFirstSearch(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

// Test Case
var graph = new Graph();

graph.addVertex("S");
graph.addVertex("P");
graph.addVertex("U");
graph.addVertex("X");
graph.addVertex("Q");
graph.addVertex("Y");
graph.addVertex("V");
graph.addVertex("R");
graph.addVertex("W");
graph.addVertex("T");

graph.addEdge("S", "P");
graph.addEdge("S", "U");

graph.addEdge("P", "X");
graph.addEdge("U", "X");

graph.addEdge("P", "Q");
graph.addEdge("U", "V");

graph.addEdge("X", "Q");
graph.addEdge("X", "Y");
graph.addEdge("X", "V");

graph.addEdge("Q", "R");
graph.addEdge("Y", "R");

graph.addEdge("Y", "W");
graph.addEdge("V", "W");

graph.addEdge("R", "T");
graph.addEdge("W", "T");

console.log(graph.depthFirstSearch("S", true)); // Recursive version
console.log(graph.depthFirstSearch("S", false)); // Iterative (stack) version

/**
 * results:
 *
 * ["S", "P", "X", "U", "V", "W", "Y", "R", "Q", "T"] // recursive version
 * ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"] // iterative (stack) version
 *
 **/

console.log(
    graph.breadthFirstSearch("S"), // ["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"]
);

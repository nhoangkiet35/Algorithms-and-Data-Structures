class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    // The insert operation in a max binary heap involves adding a new element to the heap and rearranging the heap to maintain the max-heap property.
    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    // The insert function adds the value to the end of the values array and then calls bubbleUp to compare
    // the new element with its parent, swapping it upwards until the max - heap property is restored.
    // This implementation ensures that the root node of the heap(values[0]) always holds the maximum value.
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];

            if (element <= parent) break;

            // Swap values
            this.values[parentIdx] = element;
            this.values[idx] = parent;

            idx = parentIdx;
        }
    }

    // The extractMax operation in a max binary heap involves removing the root node (maximum value) and reorganizing the heap to maintain the max-heap property.
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }
    /*
    The extractMax function removes the root node (maximum value) from the heap, then reorders the heap using the sinkDown method to maintain the max-heap property. 
    The sinkDown operation compares the root node with its children and swaps values to ensure the maximum element is at the root.
    */
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            // Swap values
            this.values[idx] = this.values[swap];
            this.values[swap] = element;

            idx = swap;
        }
    }
}

// Test cases
const binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
console.log(binaryHeap.values); // [1]

binaryHeap.insert(2);
console.log(binaryHeap.values); // [2, 1]

binaryHeap.insert(3);
console.log(binaryHeap.values); // [3, 1, 2]

binaryHeap.insert(4);
console.log(binaryHeap.values); // [4, 3, 2, 1]

binaryHeap.insert(5);
console.log(binaryHeap.values); // [5, 4, 2, 1, 3]

binaryHeap.insert(6);
console.log(binaryHeap.values); // [6, 4, 5, 1, 3, 2]

console.log(binaryHeap.extractMax()); // 6
console.log(binaryHeap.values); // [5, 4, 3, 1, 2]

console.log(binaryHeap.extractMax()); // 5
console.log(binaryHeap.values); // [4, 2, 3, 1]

console.log(binaryHeap.extractMax()); // 4
console.log(binaryHeap.values); // [3, 2, 1]

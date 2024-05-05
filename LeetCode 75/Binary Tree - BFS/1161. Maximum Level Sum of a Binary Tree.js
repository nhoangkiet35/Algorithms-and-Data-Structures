class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function maxLevelSum(root) {
    if (!root) {
        return 0;
    }

    let maxLevel = 1;
    let maxSum = root.val;

    const queue = [root];
    let level = 1;

    while (queue.length > 0) {
        const levelSize = queue.length;
        let currentSum = 0;

        // Iterate through the current level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentSum += node.val;

            // Enqueue the child nodes for the next level
            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        // Update maxSum and maxLevel if the currentSum is greater
        if (currentSum > maxSum) {
            maxSum = currentSum;
            maxLevel = level;
        }

        level++;
    }

    return maxLevel;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(7);
root.right = new TreeNode(0);
root.left.left = new TreeNode(7);
root.left.right = new TreeNode(-8);

console.log(maxLevelSum(root)); // Output: 2

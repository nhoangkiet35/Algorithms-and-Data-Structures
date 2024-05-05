class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function pathSum(root, targetSum) {
    if (!root) {
        return 0;
    }

    // Helper function to perform DFS
    function dfs(node, currentSum, targetSum, prefixSums) {
        if (!node) {
            return 0;
        }

        currentSum += node.val;
        let count = prefixSums[currentSum - targetSum] || 0;

        // Update the prefixSums map
        prefixSums[currentSum] = (prefixSums[currentSum] || 0) + 1;

        // Recursively search in the left and right subtrees
        count +=
            dfs(node.left, currentSum, targetSum, prefixSums) +
            dfs(node.right, currentSum, targetSum, prefixSums);

        // Remove the current sum from the prefixSums map to backtrack
        prefixSums[currentSum]--;

        return count;
    }

    return dfs(root, 0, targetSum, { 0: 1 }); // Start with an empty prefixSums map
}

// Example usage:
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(-3);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(2);
root.right.right = new TreeNode(11);
root.left.left.left = new TreeNode(3);
root.left.left.right = new TreeNode(-2);
root.left.right.right = new TreeNode(1);

const targetSum = 8;

console.log(pathSum(root, targetSum)); // Output: 3

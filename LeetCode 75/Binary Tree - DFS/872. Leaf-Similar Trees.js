class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function getLeafSequence(root, sequence = []) {
    if (!root) {
        return;
    }
    if (!root.left && !root.right) {
        sequence.push(root.val);
        return;
    }
    getLeafSequence(root.left, sequence);
    getLeafSequence(root.right, sequence);
}

function leafSimilar(root1, root2) {
    const sequence1 = [];
    const sequence2 = [];

    getLeafSequence(root1, sequence1);
    getLeafSequence(root2, sequence2);

    // Check if the leaf value sequences are equal
    if (sequence1.length !== sequence2.length) {
        return false;
    }

    for (let i = 0; i < sequence1.length; i++) {
        if (sequence1[i] !== sequence2[i]) {
            return false;
        }
    }

    return true;
}

// Example usage:
// Create two binary trees
let root1 = new TreeNode(3);
root1.left = new TreeNode(5);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(6);
root1.left.right = new TreeNode(2);
root1.right.left = new TreeNode(9);
root1.right.right = new TreeNode(8);
root1.left.right.left = new TreeNode(7);
root1.left.right.right = new TreeNode(4);

let root2 = new TreeNode(3);
root2.left = new TreeNode(5);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(6);
root2.left.right = new TreeNode(7);
root2.right.left = new TreeNode(4);
root2.right.right = new TreeNode(2);
root2.right.right.left = new TreeNode(9);
root2.right.right.right = new TreeNode(8);

// Check if the trees are leaf-similar
console.log(leafSimilar(root1, root2)); // Output will be true or false

root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);

root2 = new TreeNode(1);
root2.left = new TreeNode(3);
root2.right = new TreeNode(2);
console.log(leafSimilar(root1, root2));

/*

Explanation:

1. The TreeNode class represents the structure of a node in the binary tree.
2. The getLeafSequence function performs a depth-first search (DFS) to collect the leaf node values in an array.
3. The leafSimilar function obtains leaf sequences for both trees using getLeafSequence and then compares the sequences to check if they are equal. If the sequences are the same, it returns true; otherwise, it returns false.

This approach ensures that the leaf value sequences of both trees are compared and returns true if they match, indicating that the trees are leaf-similar.

*/

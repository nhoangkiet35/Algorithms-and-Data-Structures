// To find a node in a Binary Search Tree (BST) with a given value, you can perform a simple traversal based on
// the property of BSTs—nodes in the left subtree are smaller than the current node, and nodes in the right subtree are larger.
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function searchBST(root, val) {
    // Bread First Search (BFS)
    if (!root) {
        return null; // If the tree is empty or val is not found
    }

    if (root.val === val) {
        return root; // Found the node with the given value
    } else if (val < root.val) {
        return searchBST(root.left, val); // Traverse left subtree
    } else {
        return searchBST(root.right, val); // Traverse right subtree
    }

    // while (root !== null && root.val !== val) {
    //     root = val < root.val ? root.left : root.right;
    // }

    // return root;
}

// Example usage:
// Create a BST
let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

// Find the node with value 2
let val = 2;
let resultNode = searchBST(root, val);

// Print the subtree rooted at the node with value 2
console.log(resultNode); // Output the node val 2

val = 5;
resultNode = searchBST(root, val);

// Print the subtree rooted at the node with value 2
console.log(resultNode); // Output the node not found

/*

Explanation:

1. The TreeNode class represents the structure of a node in the binary search tree.
2. The searchBST function recursively searches for a node with the given value in the BST.
3. At each step, it compares the current node's value with the given value and traverses either left or right accordingly 
until it finds the node with the specified value or reaches a null node if the value is not found in the BST.

This function returns the subtree rooted at the node with the given value if it exists; otherwise, it returns null.

*/

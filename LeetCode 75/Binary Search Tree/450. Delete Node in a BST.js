class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/*
To delete a node with a given key in a Binary Search Tree (BST), you need to follow two stages:

1. Search for the Node to Remove:

    Traverse the BST to find the node with the given key.
    If the key is less than the current node's key, move to the left subtree. If it's greater, move to the right subtree.
    If the key is equal to the current node's key, you have found the node to remove.

2. Delete the Node:

    There are three cases to consider when deleting a node:
        If the node has no children, simply remove it.
        If the node has one child, replace the node with its child.
        If the node has two children, find the node's in-order successor (or predecessor), copy its value to the current node, and then recursively delete the in-order successor.

*/

function deleteNode(root, key) {
    if (!root) {
        return null; // Node not found
    }

    if (key < root.val) {
        // If the key is smaller, move to the left subtree
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        // If the key is larger, move to the right subtree
        root.right = deleteNode(root.right, key);
    } else {
        // Node with the key is found, perform deletion
        if (!root.left) {
            // Case 1: Node with only right child or no child
            return root.right;
        } else if (!root.right) {
            // Case 2: Node with only left child
            return root.left;
        }

        // Case 3: Node with two children
        // Find the in-order successor (smallest node in the right subtree)
        root.val = findMinValue(root.right);

        // Delete the in-order successor from the right subtree
        root.right = deleteNode(root.right, root.val);
    }

    return root;
}

function findMinValue(node) {
    // Helper function to find the smallest value in a BST
    while (node.left) {
        node = node.left;
    }
    return node.val;
}

// Example usage:
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(8);

const keyToDelete = 5;
const newRoot = deleteNode(root, keyToDelete);
console.log(newRoot);

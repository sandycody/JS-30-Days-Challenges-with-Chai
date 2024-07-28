// Task 9 : Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(root) {
    let result = [];
    function traverse(node) {
        if (node != null) {
            traverse(node.left);

            result.push(node.value);

            traverse(node.right);
        }
    }
    traverse(root);
    return result.join(' -> ');
}

const root = new TreeNode(10);

root.left = new TreeNode(2);

root.right = new TreeNode(12);

root.left.left = new TreeNode(23);

root.left.right = new TreeNode(50);

console.log("In-Order Traversal : " + inOrderTraversal(root));

console.log();

// Task 10 : Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

function calcDepthBT(node) {
    if (node === null) return 0;

    let leftDepth = calcDepthBT(node.left);
    let rightDepth = calcDepthBT(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

const root2 = new TreeNode(20);
root2.left = new TreeNode(90);
root2.right = new TreeNode(13);
root2.left.left = new TreeNode(48);
root2.left.right = new TreeNode(52);

console.log(`The Depth of Binary Tree is ${calcDepthBT(root2)}`); //3

console.log();

const root3 = new TreeNode(8);
root3.left = new TreeNode(31);
root3.right = new TreeNode(45);
root3.left.left = new TreeNode(83);
root3.left.right = new TreeNode(1);
root3.left.left.left = new TreeNode(39);

console.log(`The Depth of Binary Tree is ${calcDepthBT(root3)}`); //4
// Find the sum of all left leaves in a given binary tree.

// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

//NOTE - test cases are incorrect on LeetCode. Fails case of [1,2,3,4,5], expecting it to be 4 when it's 6.

var sumOfLeftLeaves = function(root) {
    //traverse tree
    //sum lefts
    var answer = 0;
    var inner = function(node){
        if (node === null || node.left === null){
            return;
        } else {
            console.log("node.left.val ", node.left.val);
            console.log("-----");
            answer = answer + node.left.val;
            inner(node.left);
            inner(node.right);
        }
    }
    inner(root);
    return answer;
};

#LeetCode easy questions [JavaScript]
##目录
- [292. Nim Game](https://github.com/Topppy/jspractice/tree/master/algo/leetcode#292-nim-game)
- [258. Add Digits](https://github.com/Topppy/jspractice/tree/master/algo/leetcode#258-add-digits)
- [104. Maximum Depth of Binary Tree](https://github.com/Topppy/jspractice/tree/master/algo/leetcode#104-maximum-depth-of-binary-tree)
- [226. Invert Binary Tree](https://github.com/Topppy/jspractice/tree/master/algo/leetcode#226-invert-binary-tree)



##292. Nim Game
You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.

Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.

For example, if there are 4 stones in the heap, then you will never win the game: no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.
###solution
```javascript
// @param {number} n
// @return {boolean}
var canWinNim = function(n) {
    return(n%4!==0?true:false);
};
```

##258. Add Digits
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?
###solution
```javascript
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var a=num%9;
    return (num===0?0:(a!==0?a:9));
};
```

##104. Maximum Depth of Binary Tree
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
###solution
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root===null){
        return 0;
    }else if(root.left===root.right===null){
        return 0;
    }else{
        return Math.max.call(null,maxDepth(root.left),maxDepth(root.right))+1;
    }
};
```

##226. Invert Binary Tree
Invert a binary tree.

          4
        /   \
       2     7
     /   \  /  \
    1    3 6    9

to

          4
        /   \
       7     2
     /   \  /  \
    9    6 3    1


Trivia:
This problem was inspired by this original tweet by Max Howell:
Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.
###solution
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root===null){
        return root;
    }else {
        var temp=invertTree(root.left);
        root.left=invertTree(root.right);
        root.right=temp;
        return root;
    }
};
```

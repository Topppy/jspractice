#LeetCode easy questions [JavaScript]

- [292.Nim Game](https://github.com/Topppy/jspractice/edit/master/algo/leetcode#292.Nim Game)



## 292.Nim Game
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
## 258. Add Digits
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

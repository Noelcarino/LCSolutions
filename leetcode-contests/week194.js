/*
    June 20, 2020

    5440. XOR Operation in an Array

    Given an integer n and an integer start.

    Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.

    Return the bitwise XOR of all elements of nums.

    Example:
        Input: n = 5, start = 0
        Output: 8
        Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
            Where "^" corresponds to bitwise XOR operator.

*/

var xorOperation = function(n, start) {
    var nums = [];
    for (var i = 0; i < n; i++){
        nums.push(start + (2*i));
    }
    var check = nums[0];
    for (var j = 1; j < nums.length; j++){
        check = check ^ nums[j];
    }
    return check;
};
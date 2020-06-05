/****************************************************************
    Date: 05/22/2020 
    LC: #0011 - Medium - Container With Most Water
    Description:
        Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

        Note: You may not slant the container and n is at least 2.

    Example: 
        Input: [1,8,6,2,5,4,8,3,7]
        Output: 49

****************************************************************/

//Attempt 1 - Faster than 5.02% of online JavaScript solutions
var maxArea = function(height) {
    var maxArea = 0;
    var check;
    for (var i = 0; i < height.length ; i++){
        for (var j = 1; j < height.length; j++){
            if (height[i] > height[j]){
                check = height[j] * (Math.abs(i - j));
                if (check > maxArea){
                    maxArea = check;
                    check = undefined;;
                }
            }
            
            if (height[j] > height[i]){
                check = height[i] * (Math.abs(i -j));
                if (check > maxArea){
                    maxArea = check;
                    check = undefined;
                }
            }
          
            if (height[j] === height[i]){
                check = height[j] * (Math.abs( i -j));
                if (check > maxArea){
                  maxArea = check;
                  check = undefined;
                }
            }
          
            if ((i - j === 1|| j - i === 1)){
                if (height[j] < height[i]){
                  check = height[j] * 1;
                } else {
                  check = height[i] * 1;
                }
                if (check > maxArea){
                  maxArea = check;
                  check = undefined;
                }
            }
        }
    }
    return maxArea;
};

/****************************************************************
    Date: 06/02/2020
    LC: #0034 - Find First and Last Position of Element in Sorted Array
    Description:
        Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

        Your algorithm's runtime complexity must be in the order of O(log n).

        If the target is not found in the array, return [-1, -1].
    
    Example :
        Input: nums = [5,7,7,8,8,10], target = 8
        Output: [3,4]
****************************************************************/

var searchRange = function(nums, target) {
    var returnIndex = [];
    var first = false;
    for (var i = 0; i < nums.length; i++){
        if (!first && nums[i] === target){
            first = true;
            returnIndex.push(i);
        }
        if (first && nums[i] !== target && returnIndex.length == 1){
            returnIndex.push(i-1);
        }
        if (i === nums.length -1 && nums[i] === target && returnIndex.length === 1){
            returnIndex.push(i);
        }
    }
    if (returnIndex.length === 0) return [-1,-1];
    if (returnIndex.length === 1) return returnIndex.concat(returnIndex[0]);
    return returnIndex;
};

/****************************************************************
    Date: 06/04/2020
    LC: #0056 - Medium - Merge Intervals
    Description:
        Given a collection of intervals, merge all overlapping intervals.

    Example:
        Input: [[1,3],[2,6],[8,10],[15,18]]
        Output: [[1,6],[8,10],[15,18]]
        Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

****************************************************************/

var merge = function(intervals) {
    intervals.sort(function(a,b){ return a[0] - b[0]})
    for (var i = 0; i < intervals.length - 1; i++){
        if (intervals[i][1] > intervals[i+1][0] || intervals[i][1] === intervals[i+1][0]){
            if (intervals[i][1] < intervals[i+1][1]) intervals[i][1] = intervals[i+1][1];
            intervals.splice(i+1,1);
            --i;
        }
    }
    return intervals;
};

/****************************************************************
    Date: 06/03/2020
    LC: #0073 - Medium - Set Matrix Zeroes
    Description:
        Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

        Input:
            [
                [1,1,1],
                [1,0,1],
                [1,1,1]
            ]
        Output: 
            [
                [1,0,1],
                [0,0,0],
                [1,0,1]
            ]
****************************************************************/
var setZeroes = function(matrix) {
    
    var column = [];
    // good for rows how about columns?
    for (var i = 0; i < matrix.length; i++){
        if (matrix[i].includes(0)){
            for (var j = 0; j < matrix[i].length; j++){
                if (matrix[i][j] === 0) column.push(j)
                matrix[i][j] = 0;
            }
        }
    }
    
    for (var k = 0; k < matrix.length; k++){
        for (var l = 0; l < matrix[k].length; l++){
            if (column.includes(l))matrix[k][l] = 0
        }
    }
   return matrix;
};

/****************************************************************
    Date: 06/02/2020
    LC: #0144 - Medium - Binary Tree Preorder Traversal
    Description:
        Given a binary tree, return the preorder traversal of its nodes' values.

    Example:
        Input: [1,null,2,3]
            1
                \
                2
                /
            3

        Output: [1,2,3]
****************************************************************/

var preorderTraversal = function(root) {
    if (!root) return [];
    var result = [];
    var stack = [root];
    while(stack.length){
        var node = stack.pop();
        result.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return result;
};

/****************************************************************
    Date: 05/31/2020
    LC: #0152 - Medium - Maximum Product Subarray
    Description:
        Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.
    
    Example:
        Input: [2,3,-2,4]
        Output: 6
            Explanation: [2,3] has the largest product 6.
****************************************************************/
var maxProduct = function(nums) {
    if (nums.length === 0) return -1;

    var current_max = nums[0];
    var current_min = nums[0];
    var final_max = nums[0];

    for (var i = 1; i < nums.length; i++){
        var temp = current_max;
        current_max = Math.max( Math.max( current_max* nums[i], current_min * nums[i]), nums[i]);
        current_min = Math.min( Math.min( temp * nums[i], current_min * nums[i]), nums[i]);
        
        if (current_max > final_max) final_max = current_max;
    }

    return final_max;
};

/****************************************************************
    Date: 05/31/2020
    LC: #0162 - Medium - Find Peak Element
    Description:
        A peak element is an element that is greater than its neighbors.

        Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

        The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

        You may imagine that nums[-1] = nums[n] = -∞.

    Example 1:
        Input: nums = [1,2,3,1]
        Output: 2
        Explanation: 3 is a peak element and your function should return the index number 2.

    Example 2:
        Input: nums = [1,2,1,3,5,6,4]
        Output: 1 or 5 
        Explanation: Your function can return either index number 1 where the peak element is 2, 
                    or index number 5 where the peak element is 6.

****************************************************************/

var findPeakElement = function(nums) {
    if (nums.length === 1) return 0;
    if (nums.length === 2) return nums.indexOf(Math.max(...nums));
    var peakElement = 0;
    
    for (var i = 1; i < nums.length; i++){
        if (nums[i] > nums[i-1] && nums[i] > nums[i+1]){
            peakElement = i;
        }
        if (i === nums.length -1 && nums[i] > nums[i-1]) peakElement = i;
    }
    return peakElement;
};

/****************************************************************
    Date: 06/03/2020
    LC: #0287 - Find Duplicate Numbers
    Description:
        Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

    Example:
        Input: [1,3,4,2,2]
        Output: 2
****************************************************************/

var findDuplicate = function(nums) {
    var duplicates = {};
    for (var i = 0; i < nums.length; i++) {
        if(duplicates.hasOwnProperty(nums[i])) {
            duplicates[nums[i]].push(i);
        } else if (nums.lastIndexOf(nums[i]) !== i) {
            duplicates[nums[i]] = [i];
        }
    }

    return parseInt(Object.keys(duplicates)[0]);
};

/****************************************************************
    Date: 05/22/2020
    LC: #0442 - Medium - Find All Duplicates in an Array
    Description:
        Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

        Find all the elements that appear twice in this array.

        Could you do it without extra space and in O(n) runtime?

    Example:
        Input:
        [4,3,2,7,8,2,3,1]

        Output:
        [2,3]
****************************************************************/

//Attempt 1 - Faster than 8.59% of online JavaScript Solutions
var findDuplicates = function(nums) {
    var check = [];
    nums.sort(function(a, b){return a-b});
    
    for (var i = 0; i < nums.length; i++){
        if (nums[i] === nums[i+1]){
            if (!check.includes(nums[i+1])){
                check.push(nums[i+1]);
            }
            nums.splice(i,1)
            --i;
        }    
    }
    
    return check;
};

/****************************************************************
    Date: 05/22/2020
    LC: #1395 - Medium - Count Number of Teams
    Description:
        There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

        You have to form a team of 3 soldiers amongst them under the following rules:

        Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
        A team is valid if:  (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
        Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

    Example 1:
        Input: rating = [2,5,3,4,1]
        Output: 3
        Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 

    Example 2:
        Input: rating = [2,1,3]
        Output: 0
        Explanation: We can't form any team given the conditions.

    Example 3:
        Input: rating = [1,2,3,4]
        Output: 4

****************************************************************/

// Attempt 1 - Faster than 5.11% of online JavaScript Submissionss

var numTeams = function(rating) {
    var teams = [];
    var soldiers = [];
    
        for (var i = 0; i < rating.length - 2; i++){
        for (var j = 0; j < rating.length; j++){
            for (var k = 0; k < rating.length; k++){
                if (i < j && j < k && i < k){
                    
                    if (rating[i] > rating[j] ){
                        if (rating[j] > rating[k]){
                          if (rating[i] > rating[k]){
                            
                            soldiers.push(rating[i]);
                            soldiers.push(rating[j]);
                            soldiers.push(rating[k]);
                            teams.push(soldiers);
                            soldiers = [];
                          }
                        }
                    }
                    
                }   
              if (k > j && j > i && k > i){
                
                    if (rating[k] > rating[j] ){
                      if (rating[j] > rating[i]){
                        if (rating[k] > rating[i]){
                        soldiers.push(rating[k]);
                        soldiers.push(rating[j]);
                        soldiers.push(rating[i]);
                        teams.push(soldiers);
                        soldiers = [];
                        }
                      }
                    }
              }
            }
        }
    }
    return teams.length;
};

/****************************************************************
    Date: 5/27/2020
    LC: #1451 - Medium - Rearrange Words in a Sentence
    Description:
        Given a sentence text (A sentence is a string of space-separated words) in the following format:

        First letter is in upper case.
        Each word in text are separated by a single space.
        Your task is to rearrange the words in text such that all words are rearranged in an increasing order of their lengths. If two words have the same length, arrange them in their original order.

        Return the new text following the format shown above.

    Example 1:
        Input: text = "Leetcode is cool"
        Output: "Is cool leetcode"
            Explanation: There are 3 words, "Leetcode" of length 8, "is" of length 2 and "cool" of length 4.
            Output is ordered by length and the new first word starts with capital letter.

    Example 2:
        Input: text = "Keep calm and code on"
        Output: "On and keep calm code"
        Explanation: Output is ordered as follows:
            "On" 2 letters.
            "and" 3 letters.
            "keep" 4 letters in case of tie order by position in original text.
            "calm" 4 letters.
            "code" 4 letters.
****************************************************************/

//Attempt 1 - Faster than 73.42% of JavaScript online submissions
var arrangeWords = function(text) {
    var splitText = text.split(' ');
    var arrayIndex = [];
    for (var i = 0; i < splitText.length; i++){
       splitText[i] = splitText[i].toLowerCase();
       arrayIndex.push([i,splitText[i].length, splitText[i]]);
    }
  
    arrayIndex.sort(function(a,b){return a[1] - b[1]})
    
    for (var j = 0; j < arrayIndex.length; j++){
      splitText[j] = arrayIndex[j][2];
    }

    splitText = splitText.join(' ');
    return splitText.charAt(0).toUpperCase() + splitText.slice(1);
};


// // function threeSum(array){
// //     var possiblePermutations = [];
// //     var zeroSumPermutations = [];
// //     var finalArray = [];

// //     // Final all posible perumations
// //     for (var i = 0; i < array.length; i++){
// //         for (var j = 0; j < array.length; j++){
// //             for (var k = 0; k < array.length; k++){
// //                 if (i !== j && i !== k && j !==k ){
// //                     possiblePermutations.push([array[i], array[j], array[k]])
// //                 }
// //             }
// //         }
// //     }

// //     // final permutations that add up to zero
// //     for (var l = 0; l < possiblePermutations.length; l++){
// //         if (possiblePermutations[l][0] + possiblePermutations[l][1] + possiblePermutations[l][2] === 0) zeroSumPermutations.push(possiblePermutations[l]);
// //     }

// //     // compare zeroSumPermutations to  ALL elements in intialized FINAL ARRAY
// //     // if count === 0, push that zerosum permutation to final array;

// //     var count = 0;
// //     var combinationCount = 0;
    
// //     for (var m = 0; m < zeroSumPermutations.length; m++){


// //         for (var n = 0; n < zeroSumPermutations.length; n++){
// //             zeroSumPermutations[m].sort(function(a,b){return a-b});
// //             zeroSumPermutations[n].sort(function(a,b){return a-b});
// //             if (m !== n){
// //                 if (zeroSumPermutations[m][0] === zeroSumPermutations[n][0]) count++;
// //                 if (zeroSumPermutations[m][1] === zeroSumPermutations[n][1]) count++;
// //                 if (zeroSumPermutations[m][2] === zeroSumPermutations[n][2]) count++;
// //                 // if each element comparison adds up to 3, increment the combinationCount and reset the counter
// //                 if (count === 3){
// //                     combinationCount++;
// //                     count = 0;
// //                     console.log("combination found " + m + " - " + n + " comboCount - " +combinationCount);
// //                 }
// //                 count = 0;
// //             }
// //         }
// //         // After comparing the current perumation to the rest of its counterparts
// //         // if combination count === 1 , we push the current permuation [m] to final array
// //         // reset combination count


// //         console.log('outside of inner forloop - '+  combinationCount + " " +zeroSumPermutations[m]);
// //         if (combinationCount === 11) {
// //             finalArray.push(zeroSumPermutations[m]);
// //             combinationCount = 0;
// //         }
// //         combinationCount = 0;
// //     }
// //     return finalArray;
// // }

// // console.log(threeSum([-1, 0, 1, 2, -1, -4]));


// // /*

// //     CURRENTLY YOU ARE APPROACHING THIS THE WRONG WAY OBVIOUSLY. STOP FOR A SECOND
// //     YOU NEED TO FIND THE MANY DIFFERENT COMBOS WITHOUT REPEATING IT
// //     1ST COMBO IS OKAY
// // */



// function primePalindrome(num){

//     let newNum = num + 1;
//     function checkIfPalindrome(number){
//         // return number.split('');
//         return false;
//     }
//     // check if its a prime; if not, return '';
//     for (var i = newNum; ; i++){
//         if (newNum % 1 === 0 && newNum % newNum === 0){
//             if (!checkIfPalindrome(newNum)) return newNum;
//         }
//     }

//     while (newNum % 1 == 0 && newNum % newNum === 0){
//         if (newNum === 101){
//             return newNum;
//         }
//         newNum++;
//     }
// }

// console.log(primePalindrome(7));


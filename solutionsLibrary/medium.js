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


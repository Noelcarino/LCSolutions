

/****************************************************************
    Date: 1/25/2020
    LC: #001 - Easy - Two Sum
    Description:
        Given an array of integers, return indices of the two numbers 
        such that they add up to a specific target.

        You may assume that each input would have exactly one solution,
        and you may not use the same element twice.

    Example:
        Given nums = [2, 7, 11, 15], target = 9,

        Because nums[0] + nums[1] = 2 + 7 = 9,
        return [0,1].
****************************************************************/
function twoSum(nums,target){
    var twoElements = [];
    for (var i = 0; i < nums.length; i++){
        for (var j = 0; j < nums.length; j++){
            if (i !== j){
                if(nums[i] + nums[j] == target){
                    twoElements.push(i);
                    twoElements.push(j);
                    return twoElements;
                }
            }
        }
    }
    return false;
}


/****************************************************************
    Date: 1/20/2020
    LC: #125 - Easy - Valid Palindrome
    Description:
        Given a string, determine if it is a palindrome, considering only 
        alphanumeric characters and ignoring cases

        Note: For the purpose of this problem, we define empty string as 
        valid palindrome.

    Example 1:
        Input: "A man, a plan, a canal: Panama"
        Output: true

    Example 2:
        Input: "race a car"
        Output: false
****************************************************************/
function validPalindrome(string){
    var newString = string.split(' ')
                          .join()
                          .replace(/[^\w\s]/gi,'')
                          .split('')
                          .join('')
                          .split('');
    for (var i = 0; i < newString.length; i++){
        if (newString[i].toLowerCase() !== newString.reverse()[i].toLowerCase()) return false;
    }
    return true;
}

/****************************************************************
    Date: 1/25/2020
    LC: #136 - Easy - Single Number
    Description:
        Given a non-empty array of integers, every element appears twice except for one.
        Find that one single one.

        Note: Your algorithm shoud have a linear runtime complexity.
        Could you implement it without using extra memory?

    Example 1:
        Input: [2,2,1]
        Output: 1

    Example 2:
        Input: [4,1,2,1,2]
        Output: 4
****************************************************************/

function singleNumber(nums){
    nums.sort()
    for (var i = 0; i < nums.length; i+=2){
        if(nums[i] !== nums[i+1]) return nums[i];
    }
    return false;
}

/****************************************************************
    Date: 1/25/2020
    LC: # 217 - Easy - Contains Duplicate
    Description:
        Given an array of integers, find if the array contains any duplicates

        Your function should return true if any values appear at least twice
        in the array, and it should return false if every element is distinct.
    
    Example 1:
        Input: [1,2,3,1]
        Outuput: true

    Example 2:
        Input: [1,2,3,4]
        Output: false

    Example 3:
        Input: [1,1,1,3,3,4,3,2,4,2]
        Output: true
****************************************************************/

function containsDuplicate(nums){
    nums.sort()
    for (var i = 0; i < nums.length; i++){
        if (nums[i] === nums[i+1]) return true;
    }
    return false;
}

/****************************************************************
    Date: 1/25/2020
    LC: #268 - Easy - Missing Number
    Description:
        Given an array containing n distinct number taken from 0, 1, 2, ..., n,
        find the one that is missing from the array.

    Example 1:
        Input: [3, 0, 1]
        Ouput: 2

    Example 2:
        Input: [9, 6, 4, 2, 3, 5, 7, 0, 1]
        Output: 8
****************************************************************/
 
function missingNumber(nums){
    nums.sort(function(a,b){return a-b});
    if ((nums.length >= 1 && nums[0] == 1)) return nums[0] - 1;
    if (nums.length == 1 && nums[0] == 0) return nums[0] + 1;
    for (var i = 0; i < nums.length-1; i++){
        if (Math.abs(nums[i] - nums[i+1]) !== 1) return nums[i+1] - 1;
    }
    return nums[nums.length-1]+1;
}


/*
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
*/

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


/*
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
*/
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
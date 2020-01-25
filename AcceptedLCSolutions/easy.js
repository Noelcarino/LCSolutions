

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

/****************************************************************
    Date: 1/25/2020
    LC: #344 - Easy - Reverse String
    Description:
        Write a function that reverse a string. The input string is given
        as an array of characters char[].

        Do not allocate extra space for another array, you must do this by
        modifying the input array in-place with O(1) extra memory.

        You may assume all the character consist of printable ascii characters

    Example 1:
        Input: ["h", "e", "l", "l", "o"]
        Output: ["o", "l", "l", "e", "h"]

    Example 2:
        Input: ["H", "a", "n", "n", "a", "h"]
        Output: ["h", "a", "n", "n", "a", "H"]
****************************************************************/

function reverseString(s) {
    var newArray = [];
    for (var i = s.length - 1; i >=0; i--){
        newArray.push(s[i]);
    }
    for (var i = 0; i < s.length; i++){
        s[i] = newArray[i];
    }
    return newArray;
}

/****************************************************************
    Date: 1/25/2020
    LC: #371 - Easy - Sum of Two Integers
    Description:
        Calculate the sum of two integers a and b, but you are not allowed
        to use the operator + and -.

    Example 1:
        Input: a = 1, b = 2
        Output: 3

    Example 2:
        Input: a = -2, b = 3
        Output: 1
****************************************************************/

function sumOfTwoIntegers(a,b){
    var sum = a ^ b;
    var carry = a & b;
    while (carry != 0) {
        carry = carry << 1;
        var prevSum = sum;
        sum = sum ^ carry;
        carry = prevSum & carry;
    }
    return sum;
}

/****************************************************************
    Date: 1/25/2020
    LC: #412 - Easy - Fizz Buzz
    Description:
        Write a program that outputs the string representation of numbers from 1 to n.
        
        But for the multiples of 3 it should output "Fizz" instead of the number
        and for the multiples of five output "Buzz". For numbers which are multiples 
        of both three and five output "FizzBuzz"

    Example:
        n = 15,
        Return:
            [
                "1",
                "2",
                "Fizz",
                "4",
                "Buzz",
                "Fizz",
                "7",
                "8",
                "Fizz",
                "Buzz",
                "11",
                "Fizz",
                "13",
                "14",
                "FizzBuzz"
            ]
****************************************************************/

function fizzBuzz(n){
    let string = [];
    for (var i = 1; i <= n ; i++){
        if (i % 3 === 0 && i % 5 === 0) string.push("FizzBuzz")
        else if (i % 3 === 0) string.push("Fizz")
        else if (i % 5 === 0) string.push("Buzz")
        else string.push(i.toString())
    }
    return string;
}
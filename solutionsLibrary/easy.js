
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
    LC: #007 - Easy - Reverse Integer
    Description:
        Given a 32-bit signed integer, reverse digits of an integer.

    Example 1:
        Input: 123
        Output: 321

    Example 2:
        Input: -123
        Output: -321

    Example 3:
        Input: 120
        Output: 21
****************************************************************/

function reverseInteger(integer){   
    let positiveCheck = Math.pow(2,31);
    let negativeCheck = Math.pow(-2,31)
    if (integer === 0) return 0;
    if (integer > 0) {
        let check =  parseInt(integer.toString().split('').reverse().join(''));
        if (check > positiveCheck) return 0;
        return check;
    } 
    if (integer < 0) { 
        let check =  parseInt(integer.toString().slice(1).split('').reverse().join('')) * -1;
        if (check < negativeCheck) return 0;
        return check;
    }
}

/****************************************************************
    Date: 1/25/2020
    LC: #0009 - Easy - Palindrome Number
    Description:
        Determine whether an integer is a palindrome. 
        An integer is a palindrome when it reads the same backward as forward.
****************************************************************/

function palindromeNumber(integer){
    let reversedInteger =  integer.toString().split('').reverse();
    let splitInteger = integer.toString().split('');
    for (var i = 0; i < reversedInteger.length; i++){
        if (reversedInteger[(splitInteger.length -1) - i] !== splitInteger[(splitInteger.length - 1) - i]) return false;
    }
    return true;
}

/****************************************************************
    Date: 05/20/2020
    LC: #0026 - Easy - Remove Duplicates from Sorted Array
    Description:
        Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

    Example 1:
        Given nums = [1,1,2],

        Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

        It doesn't matter what you leave beyond the returned length.
    
    Example 2:
        Given nums = [0,0,1,1,1,2,2,3,3,4],

        Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

        It doesn't matter what values are set beyond the returned length.
****************************************************************/

// Attempt 1 - Faster than 14.53% of JavaScript online submissions
var removeDuplicates = function(nums) {
    for (var i = 0; i < nums.length; i++){
        if (nums[i] === nums[i+1]){
            nums.splice(i,1);
          --i;
        }
    }
    return nums.length;
};

/****************************************************************
    Date: 05/24/2020 
    LC: #0035 - Easy - Search Insert Position
    Description:
        Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

        You may assume no duplicates in the array.
    
    Example 1:
        Input: [1,3,5,6], 5
        Output: 2
****************************************************************/
//Attempt 1 - Faster than 19.11% of online JavaScript submissions
var searchInsert = function(nums, target) {
    if (nums.includes(target)){
        return nums.indexOf(target);
    } else {
        nums.push(target);
        nums.sort(function(a,b){return a-b});
        return nums.indexOf(target);
    }
};

/****************************************************************
    Date: 1/27/2020
    LC: #0058 - Easy - Length of Last Word
    Description:
        Given a string s consists of upper/lower-case alphabets and 
        empty space characters ' ', return the length of last word 
        (last word means the last appearing word if we loop from left to right) in the string.

    If the last word does not exist, return 0.

    Note: A word is defined as a maximal substring consisting of non-space characters only.

    Example:

    Input: 
        "Hello World"
    Output: 
        5
****************************************************************/

function lengthOfLastWord(str){
    for (var i = str.split(' ').length - 1; i >= 0; i--){
        if (str.split(' ')[i].length !== 0) return str.split(' ')[i].length;
    }
    return 0;
}

/****************************************************************
    Date: 1/27/2020
    LC: #0066 - Easy - Plus One
    Description:
        Given a non-empty array of digits representing a non-negative integer, 
        plus one to the integer.

    The digits are stored such that the most significant digit is at the head of the list, 
    and each element in the array contain a single digit.

    You may assume the integer does not contain any leading zero, except the number 0 itself.
****************************************************************/

function plusOne(digits){
    for (var i = digits.length - 1; i >=0; i--){
        if(++digits[i] > 9) digits[i] = 0;
        else return digits;
    }
    digits.unshift(1);
    return digits;
}

/****************************************************************
    Date: 1/26/2020
    LC: #0083 - Easy - Remove Duplicates from Sorted List
    Description:
        Given a sorted linked list, delete all duplicates such that
        each element appear only once.

    Example 1:
        Input:
            1 -> 1 -> 2
        Output:
            1 -> 2

    Example 2:
        Input:
            1 -> 1 -> 2 -> 3 -> 3
        Output:
            1 -> 2 -> 3
****************************************************************/
function removeDuplicatesFromSortedList(head){
    let current = head;
    while (current !== null && current.next !== null){
        if (current.next.val == current.val){
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}
/****************************************************************
    Date: 2/17/2020
    LC: #0118 - Easy - Pascal's Triangle
    Description:
        Given a non-negative integer numRows, generate the first numRows
        of Pascal's triangle.
    
    Example:
        Input: 5
        Output: 
            [
                [1],
                [1,1],
                [1,2,1],
                [1,3,3,1],
                [1,4,6,4,1]
            ]
****************************************************************/
function pascalsTriangle(numRows){
    var array1 = [[1]];
    var array2 = [[1],[1,1]];
    if (numRows === 0) return [];
    if (numRows === 1) return array1;
    if (numRows === 2) return array2;
    
    // if numRows > 3;
    var newRow = [1];
    for (var i = 1; i < numRows -1; i++){
        for (var j = 0; j < array2[i].length -1; j++){
            newRow.push(array2[i][j] + array2[i][j+1]);
        }
        newRow.push(1);
        array2.push(newRow);
        newRow =[1];
    }
    return array2;
};

/****************************************************************
    Date: 05/23/2020
    LC: #0121 - Easy - Best Time to Buy and Sell Stock
    Description:
        Say you have an array for which the ith element is the price of a given stock on day i.

        If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

        Note that you cannot sell a stock before you buy one.
    
    Example 1:
        Input: [7,1,5,3,6,4]
        Output: 5
        Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
                    Not 7-1 = 6, as selling price needs to be larger than buying price.

****************************************************************/

// Attempt 1 - Faster than 5.07% of JavaScript online Submissions
var maxProfit = function(prices) {
    var profit = 0;
    for (var i = 0; i < prices.length; i++){
        for (var j = 0; j < prices.length; j++){
            if (j > i){
                if (prices[i] < prices[j]){
                    if (prices[j] - prices[i] > profit){
                        profit = prices[j] - prices[i];
                    }
                }
            }
        }
    }
    return profit;
};

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
    Date: 05/25/2020 
    LC: #167 - Easy - Two Sum - Input Array is sorted
    Description:
        Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

        The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

    Example: 
        Input: numbers = [2,7,11,15], target = 9
        Output: [1,2]
        Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

****************************************************************/
var twoSum = function(numbers, target) {
    var output = [];
    for (var i = 0; i < numbers.length - 1; i++){
        for (var j = 1; j < numbers.length; j++){
            if (i < j && numbers[i] + numbers[j] === target){
                return [i + 1, j + 1];
            }
        }
    }
};

/****************************************************************
    Date: 05/24/2020
    LC: #189 - Easy Rotate Array
    Description:
        Given an array, rotate the array to the right by k steps, where k is non-negative.

    Note:
        Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
        Could you do it in-place with O(1) extra space?

    Example 1:
        Input: nums = [1,2,3,4,5,6,7], k = 3
        Output: [5,6,7,1,2,3,4]
        Explanation:
        rotate 1 steps to the right: [7,1,2,3,4,5,6]
        rotate 2 steps to the right: [6,7,1,2,3,4,5]
        rotate 3 steps to the right: [5,6,7,1,2,3,4]

****************************************************************/

//Attempt 1 - Faster than 21.51% of JavaScript online submissions
var rotate = function(nums, k) {
    for (var i = 0; i < k; i++){
        nums.unshift(nums[nums.length-1]);
        nums.pop();
    }
    return nums;
};

/****************************************************************
    Date: 1/25/2020
    LC: #217 - Easy - Contains Duplicate
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
    Date: 05/20/2020
    LC: #219 - Easy - Contains Duplicate II
    Description:
        Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
    
    Example 1:
        Input: nums = [1,2,3,1], k = 3
        Output: true
    
    Example 2:
        Input: nums = [1,0,1,1], k = 1
        Output: true
    
    Example3:
        Input: nums = [1,2,3,1,2,3], k = 2
        Output: false
****************************************************************/

// Attempt 1 - Faster than 8.16% of JavaScript solutions
var containsNearbyDuplicate = function(nums, k) {
    var initial = false;
    
    for (var i = 0; i < nums.length; i++){
        for (var j = 0; j < nums.length; j++){
            if (i !== j){
                if (nums[i] === nums[j] && (Math.abs(i - j) <= k)){
                    initial = true;
                }
            }
        }
    }
    
    return initial;
};
/****************************************************************
    Date: 2019
    LC: #242 - Easy - Valid Anagram
    Description:
        Given two strings s and t, write a function to determine if t is an anagram of s.


    Example 1: 
        Input: s = "anagram", t = "nagaram"
        Output: true

    Example 2:
        Input: s = "rat", t = "car"
        Output: false
****************************************************************/

function validAnagram(s,t){
    return s.split('').sort().join('') === t.split('').sort().join('');
}

/****************************************************************
    Date: 05/26/2020
    LC: #243 - Easy - Shortest Word Distance
    Description:
        Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

    Example:
        Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
    
    Input: word1 = “coding”, word2 = “practice”
    Output: 3

    Input: word1 = "makes", word2 = "coding"
    Output: 1
****************************************************************/

var shortestDistance = function(words, word1, word2) {

    var distance;
    
    for (var i = 0; i < words.length; i++){
        for (var j = 0; j < words.length; j++){
            if (words[i] === word1 && words[j] === word2){
                if (distance === undefined){
                     distance = Math.abs(i-j);
                } else {
                     if (Math.abs(i - j) < distance){
                         distance = Math.abs(i-j);
                     }
                }
            }
        }
    }
    return distance;
};
/****************************************************************
    Date: 06/01/2020
    LC: #0246 - Easy - Strobogrammatic Number
    Description:
        A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

        Write a function to determine if a number is strobogrammatic. The number is represented as a string.

    Example 1:
        Input:  "69"
        Output: true

    Example 2:
        Input:  "88"
        Output: true
****************************************************************/

var isStrobogrammatic = function(num) {
    var lib = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var falseLib = ['2','3','4','5','7'];

    var check = num.split('').reverse();

    for (var i = 0; i < check.length; i++){
        if (check[i] === '6') check[i] = '9';
        else if (check[i] === '9') check[i] = '6';
        else if (falseLib.includes(num[i])) return false;
    }

    return num === check.join('');
};

/****************************************************************
    TIME TO SOLVE:
        1) 1/28 - 12:41.18

    Date: 1/25/2020
    LC: #263 - Easy - Missing Number
    Description:
        Write a program to check whether a given number is an ugly number.

        Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

    Example 1:
        Input: 
            6
        Output: 
            true
        Explanation: 
            6 = 2 × 3

    Example 2:
        Input: 
            8
        Output: 
            true
        Explanation: 
                8 = 2 × 2 × 2

    Example 3:
        Input: 
            14
        Output: 
            false 
        Explanation: 
            14 is not ugly since it includes another prime factor 7.
****************************************************************/

function uglyNumber(num){
    if (num === 0) return false;
    while (num % 5 === 0 || num % 3 === 0 || num % 2 === 0 || num === 1){
        if (num === 1) return true;
        if (num % 2 === 0) num /= 2;
        if (num % 3 === 0) num /= 3;
        if (num % 5 === 0) num /= 5;
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
    Date: 05/20/2020
    LC: #345 - Easy - Reverse Vowels of a String
    Description:
        Write a function that takes a string as input and reverse only the vowels of a string.

    Example1:
        Input: "hello"
        Output: "holle"

    Example2:
        Input: "leetcode"
        Output: "leotcede"

****************************************************************/

// Attempt 1 - Faster than 90.69% of JavaScript online Submissions
var reverseVowels = function(s) {
    var vowels = ['a','e','i','o','u', 'A','E','I','O','U'];
    var index = [];
    var split = s.split('');
    
    // if the index is a vowel, push that index to index array
    for (var i = 0; i < split.length; i++){
        if (vowels.includes(split[i])) index.push(split[i]);
    }
    
    //reverse index array and replace vowels
    index.reverse();
    var k = 0;
    for (var j = 0; j < split.length; j++){
        if (vowels.includes(split[j])){
            split[j] = index[k];
            k++;
        }
    }
    return split.join('');
};

/****************************************************************
    TIME TO SOLVE
        1) 1/29 - 5:13.16
    
    Date: 1/29/2020
    LC: #367. Valid Perfect Square
    Description:
        Given a positive integer num, write a function which returns 
        True if num is a perfect square else False.

    Note: 
        Do not use any built-in library function such as sqrt.

    Example 1:
        Input: 
            16
        Output: 
            true

    Example 2:
        Input: 
            14
        Output: 
            false
****************************************************************/

function validPerfectSquare(number){
    for (var i = 0; i * i <= number; i++){
        if (i * i === number) return true;
    }
    return false;
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
    TIME TO SOLVE
        1) 1/29 - 27:09.51

    Date: 1/29/2020
    LC: #387 - Easy - First Unique Character in a String
    Description:
        Given a string, find the first non-repeating character in it and return it's index. 
        If it doesn't exist, return -1.

    Examples:
        s = "leetcode"
        return 0.

        s = "loveleetcode",
        return 2.
    
    Note: 
        You may assume the string contain only lowercase letters.
****************************************************************/

function firstUniqueCharacterInAString(s){
    let splitStr = s.split('');
    if (splitStr.length === 1) return 0;
    let position; 
    for (var i = 0; i < splitStr.length; i++){
        for (var j = 0; j < splitStr.length; j++){
            if (i !== j){
                if (splitStr[i] !== splitStr[j]) position = i;
                if (splitStr[i] === splitStr[j]) {
                    position = undefined;
                    j = splitStr.length;
                }
            }
        }
        if (position !== undefined) return position;
    }
    return -1;
}

/****************************************************************
    TIME TO SOLVE
        1) 1/29 - 11:21.15

    Date: 1/29/2020
    LC: #389 - Easy - Find the Difference
    Description:
        Given two strings s and t which consist of only lowercase letters.
        String t is generated by random shuffling string s and then add one more letter at a random position.
        Find the letter that was added in t.

    Example:
        Input:
            s = "abcd"
            t = "abcde"
        Output:
            e
        Explanation:
            'e' is the letter that was added.
****************************************************************/

function findTheDifference(s,t){
    let newArray = s.split('').concat(t.split('')).sort();
    for (var i = 0; i < newArray.length; i+=2){
        if (newArray[i +1] === null) return newArray[i];
        if (newArray[i] !== newArray[i+1]) return newArray[i];
    }
};

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

/****************************************************************
    Date: 5/27/2020
    LC: #0485 - Easy - Max Consecutive Ones
    Description:
        Given a binary array, find the maximum number of consecutive 1s in this array.
    
    Example 1:
        Input: [1,1,0,1,1,1]
        Output: 3
        Explanation: The first two digits or the last three digits are consecutive 1s.
            The maximum number of consecutive 1s is 3.
****************************************************************/

var findMaxConsecutiveOnes = function(nums) {
    var count = 0;
    var check = 0;
    
    for (var i = 0; i < nums.length; i++){
        if (nums[i] === 1) check++;
        if (nums[i] !== 1){
            if (check > count){
                count = check;
            }
            check = 0;
        }
    }
    if (check > count) return check;
    return count;
};

/****************************************************************
    Date: 1/28/2020
    LC: #0500 - Easy - Keyboard Row
    Description:
        Given a List of words, return the words that can be typed using 
        letters of alphabet on only one row's of American keyboard like the image below.

    Example:
        Input: 
            ["Hello", "Alaska", "Dad", "Peace"]
        Output: 
            ["Alaska", "Dad"]
****************************************************************/

function keyboardRow(array){
    var row1 = ['q','w','e','r','t','y','u','i','o','p'];
    var row2 = ['a','s','d','f','g','h','j','k','l'];
    var row3 = ['z','c','v','b','n','m',];
    var emptyArray = [];

    for (var i = 0; i < array.length; i++){
        let elementOne = array[i].split('');
        let row1Count = 0;
        let row2Count = 0;
        let row3Count = 0;
        for (var j = 0; j < elementOne.length; j++){
            if (row1.includes(elementOne[j].toLowerCase())) row1Count++;
            if (row2.includes(elementOne[j].toLowerCase())) row2Count++;
            if (row3.includes(elementOne[j].toLowerCase())) row3Count++;
        }
        if (elementOne.length == row1Count) emptyArray.push(elementOne.join(''));
        if (elementOne.length == row2Count) emptyArray.push(elementOne.join(''));
        if (elementOne.length == row3Count) emptyArray.push(elementOne.join(''));
        row1Count = 0;
        row2Count = 0;
        row3Count = 0;
    }
    return emptyArray;
}

/****************************************************************
    Date: 1/29/2020
    LC: #509 - Easy - Fibonacci Number
    Description:
        The Fibonacci numbers, commonly denoted F(n) form a sequence, 
        called the Fibonacci sequence, such that each number is the sum 
        of the two preceding ones, starting from 0 and 1. That is,

        F(0) = 0,   F(1) = 1
        F(N) = F(N - 1) + F(N - 2), for N > 1.
        Given N, calculate F(N).

    Example 1:
        Input: 
            2
        Output: 
            1
        Explanation: 
            F(2) = F(1) + F(0) = 1 + 0 = 1.
    
    Example 2:
        Input: 
            3
        Output: 
            2
        Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
    
    Example 3:
        Input: 
            4
        Output: 
            3
        Explanation: 
            F(4) = F(3) + F(2) = 2 + 1 = 3.
****************************************************************/

function fibonacciNumber(n){
    if (n === 0) return 0;
    if (n === 1) return 1;
    var fibArray = [0,1];
    for (var i = 2; i <= n; i++){
        let twoBefore = fibArray[i - 2] + fibArray[i - 1];
        fibArray.push(twoBefore);
    }
    return fibArray[fibArray.length -1];
}
/****************************************************************
    Date: 5/27/2020
    LC: #0532 - Easy - K-diff Pairs in an Array
    Description:
        Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.
    
    Example 1:
        Input: [3, 1, 4, 1, 5], k = 2
        Output: 2
        Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
            Although we have two 1s in the input, we should only return the number of unique pairs.r

****************************************************************/

var findPairs = function(nums, k) {
    var kDiffPairs = [];
    
    for (var i = 0; i < nums.length-1; i++){
        for (var j = 1; j < nums.length; j++){
            if (i < j){
                if (Math.abs(nums[i] - nums[j]) === k) kDiffPairs.push([ nums[i], nums[j] ].sort(function(a,b){return a - b}));
            }
        }
    }
    kDiffPairs.sort(function(a,b){return a[0] - b[0]});
    for (var k = 0; k < kDiffPairs.length-1; k++){
        if (kDiffPairs[k].toString() === kDiffPairs[k+1].toString()){
            kDiffPairs.splice(k,1);
            --k;
        }
    }
    return kDiffPairs.length;
};

/****************************************************************
    Date: 5/29/2020
    LC: #605 - Easy - Can Place Flowers
    Description:
        Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

        Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

    Example:
        Input: flowerbed = [1,0,0,0,1], n = 1
        Output: True
****************************************************************/

var canPlaceFlowers = function(flowerbed, n) {
    
    for (var i = 0; i < flowerbed.length; i++){
        if (n === 0) return true;
        if (i == 0 && flowerbed[i] === 0 && flowerbed[i+1] !== 1){
            flowerbed[i] = 1;
            n--;
        }
        if (flowerbed[i] === 0 && flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1){
            flowerbed[i] = 1;
            n--;
        }
        if (flowerbed[i + 1] === undefined && flowerbed[i - 1] !== 1 && flowerbed[i] !== 1){
            flowerbed[i] = 1;
            n--;
        }
    }
    if (n == 0) return true;
    return false;
};

/****************************************************************
    Date: 5/29/2020
    LC: #674 - Easy - Longest Continuous Increasing Subsequence
    Description:
        Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

    Example:
        Input: [1,3,5,4,7]
        Output: 3
            Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
            Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. 
****************************************************************/

var findLengthOfLCIS = function(nums) {
    
    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;
    
    var longest = 1;
    var returnLongest = 1;
    for (var i = 0; i < nums.length; i++){
        if (nums[i] > nums[i-1]) longest++;
        if (nums[i] <= nums[i-1]){
            if (longest > returnLongest) returnLongest = longest;
            longest = 1;
            
        }
    }
    if (longest > returnLongest) return longest;
    return returnLongest;
};

/****************************************************************
    Date: 1/25/2020
    LC: #709 - Easy - To Lower Case
    Description:
        Implement function ToLowerCase that has a string parameter str,
        and returns the same strin gin lowercase.

    Exampel 1:
        Input: "Hello"
        Output: "hello"

    Example 2:
        Input: "here"
        Output: "here"

    Example 3:
        Input: "LOVELY"
        Output: "lovely"
****************************************************************/

function toLowerCase(str){
    return str.toLowerCase();
}

/****************************************************************
    Date: 1/25/2020
    LC: #771 - Easy - Jewels and Stones
    Description:
        You're given strings 'J' representing the types of stones that are
        jewels, and 'S' representing the stones you have. Each character in
        'S' is a type of stone you have. You want to now how many of the stones you have
        are also jewels.

        The letters in 'J' are guranteed distinct, and all characters in 'J' and 'S' are
        letters. Letters are case sensitive, so 'a' is considered a different type of stone
        from 'A'

    Example 1:
        Input: J = 'aA', S = 'aAAbbbb'
        Output: 3

    Example 2:
        Input: J = 'z', S = 'ZZ'
        Output: 0

    Notes:
        - 'S' and 'J' will consist of letters and have length at most 50
        - The characters in 'J' are distinct
****************************************************************/

function jewelsAndStones(jewels, stones){
    var jewelCount = 0;
    for (var i = 0; i < jewels.length;i++) {
      for (var j = 0; j < stones.length; j++){
        if (jewels[i] === stones[j]) jewelCount++;
      }
    }
  return jewelCount;
}

/****************************************************************
    TIME TO SOLVE:
        1) 1/28 - 43:16.06

    Date: 1/28/2020
    LC: #824 - Easy - Goat Latin
    Description:
        A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

        We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

        The rules of Goat Latin are as follows:

        If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
        For example, the word 'apple' becomes 'applema'.
    
        If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
        For example, the word "goat" becomes "oatgma".
    
        Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
        For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
        Return the final sentence representing the conversion from S to Goat Latin. 
****************************************************************/

function goatLatin(string){
    var splitStr = string.split(' ');
    var vowels = ['a','e','i','o','u', 'A','E','I','O','U'];
    let a = 'a';

    for (var i = 0; i < splitStr.length; i++){
        for (var j = 0; j < splitStr[i].length; j++){
            // if first letter vowel
            if (vowels.includes(splitStr[i][j])){
                splitStr[i] += "ma";
                j = splitStr[i].length - 1;
            } else {
            // if first letter consonant
                let holder, firstLetter;
                firstLetter = splitStr[i].slice(0,1);
                holder = splitStr[i].slice(1,splitStr[i].length);
                splitStr[i] = holder.concat(firstLetter) + 'ma';
                j = splitStr[i].length -1;
            }
        }
        splitStr[i] += a;
        a += 'a';
    }
    return splitStr.join(' ');
}

/****************************************************************
    Date: 1/25/2020
    LC: #832 - Easy - Flipping an Image
    Description:
        Given a binary matrix A, we want to flip the image horizontally,
        then invert it, and return the resulting image.

        To flip an image horizontally means that each row of the image is revered.
        For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

        To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
        For example, inverting [0, 1, 1] results in [1, 0, 0].

    Example 1:
        Input: [[1, 1, 0], [1, 0, 1], [0, 0, 0]]
        Output: [[1, 0, 0], [0, 1, 0], [1, 1, 1]]

        Explanation: 
            First Reverse each row:
                [[0, 1, 1], [1, 0, 1], [0, 0, 0]].
            Then, invert the image:
                [[1, 0, 0], [0, 1, 0], [1, 1, 1]].

    Example 2:
        Input: [[1, 1, 0, 0],[1, 0, 0, 1],[0, 1, 1, 1],[1, 0, 1, 0]]
        Output: [[1, 1, 0, 0],[0, 1, 1, 0],[0, 0, 0, 1],[1, 0, 1, 0]]
        Explanation: 
            First reverse each row: 
                [[0, 0, 1, 1],[1, 0, 0, 1],[1, 1, 1, 0],[0, 1, 0, 1]].
            Then invert the image: 
                [[1, 1, 0, 0],[0, 1, 1, 0],[0, 0, 0, 1],[1, 0, 1, 0]].

    Notes:
        - 1 <= A.length = A[0].length <= 20
        - 0 <= A.[i][j] <= 1
****************************************************************/

function flippingAnImage(A){
    var reversedArray = [];
        for (var a = 0; a < A.length; a++){
            reversedArray.push([]);
        }
        for (var k = 0; k < A.length; k++){
            for (var innerK = A[k].length-1; innerK >= 0; innerK--){
                reversedArray[k].push(A[k][innerK]);
            }
        }
        for (var i = 0; i < A.length;i++){
            for (var j = 0; j < A[i].length; j++){
                if (reversedArray[i][j] === 0 ) {reversedArray[i][j] = 1}
                else {reversedArray[i][j] = 0}
            }
        }
        return reversedArray;
}

/****************************************************************
    Date: 1/27/2020
    LC: #905 - Easy - Sort Array by Parity
    Description:
        Given an array A of non-negative integers, return an array consisting of all the even elements of A, 
        followed by all the odd elements of A.

        You may return any answer array that satisfies this condition.

    Example 1:
        Input: 
            [3,1,2,4]
        Output: 
            [2,4,3,1]
        The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
****************************************************************/

function sortArrayByParity(array){
    var oddNumbers = [];
    var evenNumbers = [];
    for (var i = 0; i < array.length; i++){
        if(array[i] % 2 === 0) evenNumbers.push(array[i]);
        else oddNumbers.push(array[i]);
    }
    for (var j = 0; j < oddNumbers.length; j++){
        evenNumbers.push(oddNumbers[j]);
    }
    return evenNumbers;
}

/****************************************************************
    Date: 5/26/2020
    LC: #941 - Easy - Valid Mountain Array
    Description:
        Given an array A of integers, return true if and only if it is a valid mountain array.

        Recall that A is a mountain array if and only if:

        A.length >= 3
        There exists some i with 0 < i < A.length - 1 such that:
        A[0] < A[1] < ... A[i-1] < A[i]
        A[i] > A[i+1] > ... > A[A.length - 1]

    Example 1:
        Input: [2,1]
        Output: false
    
    Example 2:
        Input: [3,5,5]
        Output: false

    Example 3:
        Input: [0,3,2,1]
        Output: true

****************************************************************/

var validMountainArray = function(A) {
    var highestPoint = Math.max(...A);
    var increasing = true;
    
    if (A.length < 3) return false;
    if (A[A.length - 1] === highestPoint) return false;
    for (var i = 1; i < A.length-1; i++){
        if (A[i] === highestPoint) increasing = false;
        if (increasing){
            if (A[i-1] > A[i]) return false;
            if (A[i] === A[i + 1]) return false;
        } else {
            if (A[i+1] > A[i]) return false;
            if (A[i] === A[i + 1]) return false;
        }
    }
    return true;
};

/****************************************************************
    TIME TO SOLVE:
        1) 1/28 - 1:03:30.70

    Date: 1/28/2020
    LC: #976 - Easy - Largest Perimeter Triangle;
    Description:
        Given an array A of positive lengths, return the largest perimeter of a 
        triangle with non-zero area, formed from 3 of these lengths.

        If it is impossible to form any triangle of non-zero area, return 0.

    Example 1:

    Input: 
        [2,1,2]
    Output: 
        5

    Example 2:
        Input: 
            [1,2,1]
        Output: 
            0

    Example 3:
        Input: 
            [3,2,3,4]
        Output: 
            10

    Example 4:
        Input: 
            [3,6,2,3]
        Output: 
            8
****************************************************************/

function largestPerimeterTriangle(a){
    function checkLargest(s1,s2,s3){
        let largestP = s1 + s2;
        if (s1 + s3 > largestP) largestP = s1 + s3;
        if (s2 + s3 > largestP) largestP = s2 + s3;

        if (s1 + s2 <= s3) return 0;
        if (s1 + s3 <= s2) return 0;
        if (s2 + s3 <= s1) return 0;

        return s1 + s2 + s3;
    }

    if (a.length < 3) return 0;
    if (a.length === 3){
        return checkLargest(a[0],a[1],a[2]);
    }
    if (a.length > 3) {
        a.sort(function(a,b){return a-b});
        for (var i = 0; i < a.length - 2; i++){
            if (a[(a.length -1) -i] < a[(a.length-2) -i] + a[(a.length -3) -i]){
                return  checkLargest(a[(a.length -1) -i],a[(a.length-2) -i], a[(a.length -3) -i]) 
            } 
        }
    }
    return 0;
}

/****************************************************************
    Date: 1/27/2020
    LC: #0977 - Easy - Squares of Sorted Array
    Description:
        Given an array of integers A sorted in non-decreasing order, 
        return an array of the squares of each number, also in sorted 
        non-decreasing order.

    Example 1:
        Input: 
            [-4,-1,0,3,10]
        Output: 
            [0,1,9,16,100]

    Example 2:
        Input: 
            [-7,-3,2,3,11]
        Output: 
            [4,9,9,49,121]

****************************************************************/

function squaresOfSortedArray(array){
    for (var i = 0; i < array.length; i++){
        array[i] = Math.pow(array[i],2);
    }
    return array.sort(function(a,b){return a-b});
}

/****************************************************************
    Date: 5/28/2020
    LC: #1010 - Easy - Pairs of Songs with durations divisible by 60
    Description:

        In a list of songs, the i-th song has a duration of time[i] seconds. 

        Return the number of pairs of songs for which their total duration in seconds is divisible by 60.  Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

    Example 1:
        Input: [30,20,150,100,40]
        Output: 3
        Explanation: Three pairs have a total duration divisible by 60:
            (time[0] = 30, time[2] = 150): total duration 180
            (time[1] = 20, time[3] = 100): total duration 120
            (time[1] = 20, time[4] = 40): total duration 60
            
****************************************************************/
var numPairsDivisibleBy60 = function(time) {
    
    var count = 0;
    
    var i = 0;
    
    while (i < time.length -1){
        for (var j = 1; j < time.length; j++){
            if (i < j && (time[i] + time[j]) % 60 === 0) count++;
        }
        i++;
    }

    return count;
};

/****************************************************************
    Date: 5/29/2020
    LC: #1064 - Easy - Fixed Point
    Description:
        Given an array A of distinct integers sorted in ascending order, return the smallest index i that satisfies A[i] == i.  Return -1 if no such i exists.

    Example:
        Input: [-10,-5,0,3,7]
        Output: 3
        Explanation: 
            For the given array, A[0] = -10, A[1] = -5, A[2] = 0, A[3] = 3, thus the output is 3.
****************************************************************/

var fixedPoint = function(A) {
    for (var i = 0; i < A.length; i++){
        if (A[i] === i) return i;
    }
    return -1;
};

/****************************************************************
    Date: 05/24/2020
    LC: #1089 - Easy - Duplicate Zeros
    Description:
        Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

        Note that elements beyond the length of the original array are not written.

        Do the above modifications to the input array in place, do not return anything from your function.

    Example 1:
        Input: [1,0,2,3,0,4,5,0]
        Output: null
        Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

    Example 2:
        Input: [1,2,3]
        Output: null
        Explanation: After calling your function, the input array is modified to: [1,2,3]

****************************************************************/

//Attempt 1 - Faster than 78.30% of online JavaScript solutions
var duplicateZeros = function(arr) {
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === 0){
          arr.splice(i,0,0);
          i++;
          arr.pop();
      }
    }
};

/****************************************************************
    Date: 1/25/2020
    LC: #1108 - Easy - Defanging an IP Address
    Description:
        Given a valid (IPv4) IP 'address', return a defanged version of that IP address

        A defanged IP address replaces every '.' with '[.]'

    Example 1:
        Input: address = '1.1.1.1'
        Output: '1[.]1[.]1[.]1'

    Example 2:
        Input: address = '255.100.50.0'
        Output: '255[.]100[.]50[.]0'

    Constraints:
        - The given 'address' is valid IPv4 address.
****************************************************************/

function defangingAnIpAddress(address){
    var iterateAddress = address.split("");
    var newIP = [];
    for (var i = 0; i < iterateAddress.length; i++){
        if ( iterateAddress[i] === "."){
            newIP[i] = "[.]";
        } else {
            newIP.push(iterateAddress[i]);
        }
    }
    return newIP.join('');
}

/****************************************************************
    Date: 5/19/2020
    LC: # 1119 - Easy - Remove Vowels from a String
    Description:
        Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
    Example 1:
        Input: "leetcodeisacommunityforcoders"
        Output: "ltcdscmmntyfrcdrs"
    Example 2:
        Input: "aeiou"
        Output: "";
****************************************************************/

// Atempt 1 - This solution is faster than 12.98% of online JavaScript submissions
var removeVowels = function(S) {
    var vowels = ['a','e','i','o','u'];
    var newWord = [];
    var splitStr = S.split('');
    for (var i = 0; i < splitStr.length; i++){
        if (!vowels.includes(splitStr[i])) newWord.push(splitStr[i]);
    }
    return newWord.join('');
};

/****************************************************************
    Date: 5/19/2020
    LC: #1165 - Easy - Single-Row Keyboard
    Description:
        There is a special keyboard with all keys in a single row.

        Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25), initially your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i - j|.

        You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.

    Example 1: 
        Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
        Output: 4
        Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
        Total time = 2 + 1 + 1 = 4.

    Example 2:
        Input: keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
        Output: 73

****************************************************************/

// Attempt 1 - This solution is faster than 8.96% of online JavaScript submissions
var calculateTime = function(keyboard, word) {
    var wordIndex = [];
    var i = 0;
    while (wordIndex.length !== word.length){
      wordIndex.push(keyboard.indexOf(word.slice(i,i+1)));
      i++;
    }
    
    var count = 0;
    for (var j = 0; j < wordIndex.length; j++){
      if (j === 0){
          count = wordIndex[j] - count;
      } else {
        count = count + (Math.abs(wordIndex[j-1] - Math.abs(wordIndex[j])));
      }
    }
    return count;
  };
/****************************************************************
    Date: 1/27/2020
    LC: #1281 - Easy - Subtract the Product and Sum of Digits of an Integer
    Description:
        Given an integer number n, return the difference between the 
        product of its digits and the sum of its digits.

    Example 1:
        Input: 
            n = 234
        Output: 
            15 
        Explanation: 
            Product of digits = 2 * 3 * 4 = 24 
            Sum of digits = 2 + 3 + 4 = 9 
            Result = 24 - 9 = 15
****************************************************************/

function subtractTheProductAndSumOfDigitsOfAnInteger(integer){
    var separatedInteger = integer.toString().split('');
    var formatedSI = [];
    var productOfDigits = 1;
    var sumOfDigits = 0;

    for (var i = 0; i < separatedInteger.length; i++){
        formatedSI.push(parseInt(separatedInteger[i]));
    }
    for (var j = 0; j < formatedSI.length; j++){
        sumOfDigits += formatedSI[j];
        productOfDigits *= formatedSI[j];
    }
    return productOfDigits - sumOfDigits;
}

/****************************************************************
    Date: 1/27/2020
    LC: #1295 - Easy - Find Number with Even Number of Digits
    Description:
        Given an array nums of integers, return how many of them contain 
        an even number of digits.

    Example 1:
        Input: 
            nums = [12,345,2,6,7896]
        Output:
            2

****************************************************************/

function findNumberWithEvenNumberOfDigits(arrayOfNums){
    var evenNumberDigitCount = 0;
    for (var i = 0; i < arrayOfNums.length; i++){
        if (arrayOfNums[i].toString().split('').length % 2 === 0) evenNumberDigitCount++;
    }
    return evenNumberDigitCount;
}

/****************************************************************
    Date: 05/26/2020
    LC: #1299 - Easy - Replace Elements with Greatest Element on Right Side
    Description:
        Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

        After doing so, return the array.
 
    Example:
        Input: arr = [17,18,5,4,6,1]
        Output: [18,6,6,6,1,-1]

****************************************************************/

var replaceElements = function(arr) {

    var arrSection = [];
    
    for (var i = 0; i < arr.length; i++){
        for (var j= 0; j < arr.length; j++){
            if (j > i){
                arrSection.push(arr[j]);
            }
        }
        arr[i] = Math.max(...arrSection);
        arrSection = [];
    }
    arr[arr.length -1] = -1;
    return arr;
};

function moveZeroes(array){

    for (var i = 0; i < array.length; i++){
        if (array[i] === 0) {
            let zero = array.slice(0,i+1);
            let rightEnd = array.slice(0, array.length)
            rightEnd.push(zero[0]);
            array = rightEnd;
        }
    }
    return array;
}

console.log(moveZeroes([0,1,0,3,12]))
/****************************************************************
    Date: 05/21/2020
    LC: #1365 - Easy - How many numbers are smaller thn the current number
    Description:
        Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

        Return the answer in an array.

    Example 1:
        Input: 
            nums = [6,5,4,8]
        Output: 
            [2,1,0,3]
 
****************************************************************/
var smallerNumbersThanCurrent = function(nums) {
    var set = [];
    var count = 0;
    for (var i = 0; i < nums.length; i++){
        for (var j = 0; j < nums.length; j++){
            if (j !== i){
                if (nums[j] < nums[i]){
                    count++;
                }
            }
        }
        set.push(count);
        count = 0;
    }
    return set;
};

/****************************************************************
    Date: 05/26/2020
    LC: #1431 - Easy - Kids With the Greatest Number of Candies
    Description:
        Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

        For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

    Example 1:
        Input: candies = [2,3,5,1,3], extraCandies = 3
        Output: [true,true,true,false,true] 
        Explanation: 
            Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
            Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
            Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
            Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
            Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
****************************************************************/

var kidsWithCandies = function(candies, extraCandies) {
    var most = Math.max(...candies);
    
    for (var i = 0; i < candies.length; i++){
        if (candies[i] + extraCandies >= most) candies[i] = true;
        else candies[i] = false;
    }
    return candies;
};

/****************************************************************
    Date: 05/26/2020
    LC: #1450 - Easy - Number of Students doing Homework at a Given Time
    Description:
        Given two integer arrays startTime and endTime and given an integer queryTime.

        The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

        Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

    Example 1:
        Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
        Output: 1
        Explanation: We have 3 students where:
            The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
            The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
            The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.

****************************************************************/
var busyStudent = function(startTime, endTime, queryTime) {
    var studentCount = 0;
    
    for (var i = 0; i < startTime.length; i++){
        if (startTime[i] <= queryTime && endTime[i] >= queryTime) studentCount++;
    }
    
    return studentCount;
};
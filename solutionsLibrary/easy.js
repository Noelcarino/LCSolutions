
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

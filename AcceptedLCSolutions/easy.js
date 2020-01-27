
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

console.log(findNumberWithEvenNumberOfDigits([555,901,482,1771]));
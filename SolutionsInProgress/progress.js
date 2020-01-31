
// function sortNegative(b){
//     var newArray = [];
//     var negativeSorted = [];
//     var positiveSorted = [];
//     for (var i = 0; i < b.length; i++){
//         if (b[i].toString().slice(0,1) === '-') {
//             newArray.push(b[i]);
//         } else {
//             positiveSorted.push(b[i]);
//         }
//     }
//     newArray.sort();
//     positiveSorted.sort();
//     for (var j = newArray.length - 1; j >= 0; j--){
//         negativeSorted.push(newArray[j]);
//     }
//     for (var k = 0; k < positiveSorted.length; k++){
//         negativeSorted.push(positiveSorted[k]);
//     }
//     return negativeSorted;
// }

// function median(a1, a2){
//     sortNegative(a1);
//     sortNegative(a2);
//     for (var i = 0; i < a2.length; i++){
//         a1.push(a2[i]);
//     }
//     var sorted = sortNegative(a1);
//     if (sorted.length % 2 !== 0){
//          return sorted[(sorted.length -1)/2];
//     }
//     if (sorted.length % 2 === 0){
//         var first = sorted[sorted.length/2-1];
//         var second = sorted[sorted.length/2];
//         return (first + second) /2;
//     }
// }

//     var a = [1];
//     var b = [2,-3,4,5,6,7,8,9,10]
  
//   console.log (median(a,b));

// /*

// function median(array1, array2){
  
//     sortNegative(array1);
//     sortNegative(array2);
    
//     var lowest;
//     var highest;
    
//     if (array1.length === 0 || array2.length === 0){
//       if (array1.length !== 0){
//         if (array1.length === 1) return array1[0];
//         lowest = array1[0];
//         highest = array1[array1.length - 1];
//         return (lowest + highest) / 2;
//       }
//       if (array2.length !== 0){
//         if (array2.length === 1) return array2[0];
//         lowest = array2[0];
//         highest = array2[array2.length - 1];
//         return (lowest + highest) / 2;
//       }
//     }
//     lowest = array1[0];
//     if (array2[0] < lowest) lowest = array2[0];

//     highest = array2[array2.length - 1];
//     if (array1[array1.length -1] > highest) highest = array1[array1.length -1];
    
//     console.log("lowest - ",  lowest);
//     console.log("highest - ", highest);
    
//     if (lowest < 0 && highest < 0){
//         console.log("passed - 1");
//       return (lowest + highest) / 2
//     }
    
//     if (lowest < 0 && highest > 0){
//         console.log("passed - 2");
//         return (highest - (lowest))/ 2;
//     }
//     return (lowest + highest) / 2;
//   }



// */


// **************************************************************************************************
// function longestSubStringWithoutRepeatingCharacters(string){
    //     var separatedString = string.split('');
    //     var checkString = [separatedString[0]];
    //     var longestSubString = [];
    
    //     if (separatedString[0] === undefined) return 0;
    //     if (separatedString.length === 1 && separatedString[0] !== "" ) return 1;
    //     for (var i = 1; i < separatedString.length; i++){
    
    //         // Check if current letter inside check string
    //         if (!checkString.includes(separatedString[i])){
    //             // add current letter to check string
    //             checkString.push(separatedString[i])
    //         } else {
    //             // because current letter is in there, reassign check string if longer than longer
    //             // if (checkString.includes(separatedString[i])){
    //             //     i--;
    //             // }
    //             if (checkString.length > longestSubString.length && checkString.includes(separatedString[i])){
    //                 longestSubString = checkString;
    //                 checkString = [];
    //                 i--;
    //             }
    //         }
    
    //     }
    //     if (checkString !== [] && longestSubString.length < checkString.length) return checkString.length;
    //     return longestSubString.length;
    // }
    
    
    // // var test = "au";
    // // var test = "abcabcbb";
    // // var test = "abcabcbb";
    // // var test = "pwwkew";
    // // var test = "";
    // var test = "vdvf";
    // console.log(longestSubStringWithoutRepeatingCharacters(test));




// class Node {
//     constructor(data, next = null){
//         this.data = data;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     insertFirst(data){
//         this.head = new Node(data, this.head);
//         this.size++;
//     }
//     insertLast(data){
//         let node = new Node(data);
//         let current;

//         if(!this.head){
//             this.head = node;
//         } else {
//             current = this.head;

//             while(current.next){
//                 current = current.next;
//             }

//             current.next = node;
//         }
//         this.size++;
//     }
//     insertAt(data, index){
//         if(index > 0 && index > this.size){
//             return;
//         }

//         if (index === 0){
//             this.head = new Node(data, this.head);
//             return;
//         }

//         const node = new Node(data);
//         let current, previous;

//         current = this.head;
//         let count = 0;

//         while(count < index) {
//             previous = current;
//             count++;
//             current = current.next;
//         }
//         node.next = current;
//         previous.next = node;
//         this.size++;
//     }
//     getAt(index) {
//         let current = this.head;
//         let count = 0;

//         while(current) {
//             if( count == index) {
//                 console.log(current.data);
//             }
//             count++;
//             current = current.next;
//         }
//         return null;
//     }
//     removeAt(index){
//         if(index > 0 && index > this.size){
//             return;
//         }

//         let current = this.head;
//         let previous;
//         let count = 0;

//         if(index === 0){
//             this.head = current.next;
//         } else {
//             while (count < index){
//                 count++;
//                 previous = current;
//                 current = current.next;
//             }

//             previous.next = current.next;
//         }

//         this.size--;
//     }
//     cleartList(){
//         this.head = null;
//         this.size = 0;
//     }
//     printListData(){
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
//     removeDuplicates(){
//             let current = this.head;
//             while (current !== null && current.next !== null) {
//                 if (current.next.data == current.data){
//                     current.next = current.next.next;
//                 } else {
//                     current = current.next;
//                 }
//             }
//     }
// }

// const ll = new LinkedList();

// // ll.insertFirst(100);
// // ll.insertFirst(200);
// // ll.insertFirst(300);
// // ll.insertFirst(400);
// // ll.insertFirst(500, 2);


// ll.insertLast(1);
// ll.insertLast(2);
// ll.insertLast(2);
// ll.insertLast(2);
// ll.insertLast(3);


// ll.printListData();

// console.log("");

// ll.removeDuplicates();




/****************************************************************
    Date: 1/27/2020
    LC: #0020 - Easy - Valid Parenthesis
    Description:

****************************************************************/

// function validParenthesis(s){
//     if (s === '') return true;
//     var leftP = '(';
//     var leftB = '[';
//     var leftCB = '{';
//     var rightP = ')';
//     var rightB = ']';
//     var rightCB = '}';
//     var leftPCount = 0;
//     var leftBCount = 0;
//     var leftCBCount = 0;
//     var rightPCount = 0;
//     var rightBCount = 0;
//     var rightCBCount = 0;
    
//     var split =  s.split('');
//     if (split.length % 2 !== 0 ) return false;

//     for (var i = 0; i < split.length; i++){
//         if (split[i] === leftP) leftPCount++;
//         if (split[i] === leftB) leftBCount++;
//         if (split[i] === leftCB) leftCBCount++;
//         if (split[i] === rightP) rightPCount++;
//         if (split[i] === rightB) rightBCount++;
//         if (split[i] === rightCB) rightCBCount++;
//     }

//     if (leftPCount !== rightPCount) return false;
//     if (leftBCount !== rightBCount) return false;
//     if (leftCBCount !== rightCBCount) return false;

//     for (var i = 0; i < split.length; i++){
        
    // }
    // for (var i = 0; i < split.length / 2; i++){
    //   if (split[i] === leftParenthesis){    
    //     if (split[(split.length - 1) - i] !== rightParenthesis) return false;
    //   }
    //   if (split[i] === leftBracket){
    //     if (split[(split.length - 1) -i] !== rightBracket) return false;
    //   }
    //   if (split[i] === leftCurlyBracket){
    //       if(split[(split.lenght - 1) - i] !== rightCurlyBracket) return false; 
    //   }
    //   if (split[i] === rightParenthesis || split[i] === rightBracket || split[i] === rightCurlyBracket) return false;
    // }
    // return true;
// }

// var string = "{}()";
 
// console.log(validParenthesis(string));


// var str = '1';
// function countAndsay(n){
//     if (n === 1) return str;
//     else {
//         let splitStr = str.split('');
//         let holder = [[splitStr[i]],];
//         for (var i = 1; i < splitStr.length; i++){
//             if (splitStr[i] === holder[i][0]){
//                 holder[i].push(splitStr[i]);
//             }
//         }
//         return holder;
//         return str;
//         // let integerCount = 1;
//         // for (var i = 0; i < str.length; i++){
//         //     if (str[i + 1] !== undefined && str[i] === str[i+1]) integerCount++;
//         //     else {
//         //         str += ("" + integerCount + str[i]);
//         //         integerCount = 1;
//         //     }
//         // }
//     }
//     n--;
//     return countAndsay(n);
// }

// console.log(countAndsay(2));






// var array = [-1, 0, 1, 2, -1, -4];

// function threeSum(array){
//     var solutionSet = [];

//     for (var i = 0; i < array.length; i++){
//         for (var j = 0; j < array.length; j++){
//             for (k = 0; k < array.length; k++){
//                 if (i !== j && i !== k && j !==k ){
//                     if (array[i] + array[j] + array[k] === 0){
//                         let tempArray = [array[i], array[j], array[k]];
//                         if (solutionSet.length === 0) solutionSet.push(tempArray);
//                         else {
//                             for (var l = 0; l < solutionSet.length; l++){
//                                 debugger;
//                                 let count = 0;
//                                 for (var m = 0; m < 3; m++){
//                                     if (solutionSet[l].sort(function(a,b){return a-b})[m] === tempArray.sort(function(a,b){return a-b})[m]) count++;
//                                     console.log(solutionSet[l]);
//                                     console.log(tempArray);
//                                 }
//                                 if (count !== 3) solutionSet.push(tempArray);
//                                 count = 0;
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return solutionSet;
// }

// console.log(threeSum(array));





// function factorialTrailingZeroes(n){

//     var factorial = 1;

//     for (var i = factorial; i <= n; i++){
//         factorial *= i;
//         console.log(factorial);
//     }

//     let numberSplit = factorial.toString().split('');
//     var zeroCount = 0;
//     for(var i = numberSplit.length - 1; i >= 0; i--){
//         if (numberSplit[i] === '0') zeroCount++;
//         if (numberSplit[i] !== '0') return zeroCount;
//     }
// }

// console.log(factorialTrailingZeroes(30));
/*

    What do we know?
        1 - facotrial of n 
            n = 1 -> 1 = 1
            n = 2 -> 1 * 2 = 2
            n = 3 -> 1 * 2 * 3 = 6;
            n = 4 -> 1 * 2 * 3 * 4 = 24

    We can take the result and store it in a variable.
        factorial;

    How we will do this?
        We can iterate through a loop.
        Each time we iterate over the loop, we store the new answer in declared variable

    What do we do after we finish loop.
        We can turn this number into a string
        Then we will separate each number

    After separating each number?
        We will check the last digit and see how many zeroes in a row we get
        increase count of zeroes
        if not a zero
        the function will return the final answer


    N = 30 HAS A FACTORIAL THAT IS TOO DAM BIG 
*/


/*

    Arrange coins

    What we know..
        We know from the given diagram, the following step has one more 
        coin than the previous one

    What we can do
        we can make our loop keep track of a coin count
        we can put the first number into the first index
        when we go through our loop
            we must check if the current coin count is greater
            than the previous step

            if its greater than the previous step, add current coin count
            to index

            if its not, increase coin count,
            once we reach the end of the loop, add the remaining coin count
            to the end of the array

        If the loop has ended
            we can check if the last index is greater than the previous

            if its not greater than the previous one, return the previous one
            else return the last index.



THIS SOLUTION TAKES TOO LONG

function arrangingCoins(n){

    if (n === 0) return 0;
    let previousStep = 0;
    let lastStep = 0;
    let coinCount = 0;

    for (var i = 1; i <= n; i++){
        if (previousStep === 0) previousStep = i;
        else {
            coinCount++;
            if (coinCount > previousStep){
                previousStep = coinCount;
                coinCount = 0;
            }
            if (i === n){
                lastStep = coinCount;
                coinCount = 0;
            }
        }
    }

    if (previousStep > lastStep) return previousStep;
    else return lastStep;

}


console.log(arrangingCoins(1957747793));

*/
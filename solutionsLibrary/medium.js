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


/*
    PROBLEM 198 - HOUSE ROBBER
*/
function rob(nums){
    var bankTotalOdd = 0;
    var bankTotalEven = 0;
    for (var i = 0; i < nums.length; i = i + 2){
        if (nums[i] === "undefined"){
            return bankTotalOdd;
        }
        bankTotalOdd+= nums[i];
    }
    for (var i = 1; i < nums.length; i = i + 2){
        if (nums[i] === "undefined"){
            return bankTotalEven;
        }
        bankTotalEven += nums[i];
    }
    if (bankTotalOdd > bankTotalEven){
        return bankTotalOdd;
    } else {
        return bankTotalEven;
    }
    
}
// function rob(nums){
//     var bankTotalOdd = 0;
//     var bankTotalEven = 0;
//     for (var i = 0; i < nums.length; i = i + 2){

//     if (nums[i] === "undefined"){
//         console.log(bankTotalEven);
//         return (bankTotalEven > bankTotalOdd) ? bankTotalOdd : bankTotalEven;
//     }
//     if (nums[i+1] === "undefined"){
//         console.log(bankTotalOdd);
//         return (bankTotalEven > bankTotalOdd) ? bankTotalOdd : bankTotalEven;
//     }

//     bankTotalOdd += nums[i];
//     bankTotalEven += nums[i+1];
//     console.log(bankTotalOdd);
//     console.log(bankTotalEven);
//     }
//         console.log(bankTotalEven);
//     console.log(bankTotalOdd);
//     if (bankTotalEven > bankTotalOdd){
//     return bankTotalEven + "hello";
//     } else {
//     return bankTotalOdd + " hello";
//     }
// }

var arrayNum = [1,4,1];

    
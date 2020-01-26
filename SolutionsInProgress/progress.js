
function sortNegative(b){
    var newArray = [];
    var negativeSorted = [];
    var positiveSorted = [];
    for (var i = 0; i < b.length; i++){
        if (b[i].toString().slice(0,1) === '-') {
            newArray.push(b[i]);
        } else {
            positiveSorted.push(b[i]);
        }
    }
    newArray.sort();
    positiveSorted.sort();
    for (var j = newArray.length - 1; j >= 0; j--){
        negativeSorted.push(newArray[j]);
    }
    for (var k = 0; k < positiveSorted.length; k++){
        negativeSorted.push(positiveSorted[k]);
    }
    return negativeSorted;
}

function median(a1, a2){
    sortNegative(a1);
    sortNegative(a2);
    for (var i = 0; i < a2.length; i++){
        a1.push(a2[i]);
    }
    var sorted = sortNegative(a1);
    if (sorted.length % 2 !== 0){
         return sorted[(sorted.length -1)/2];
    }
    if (sorted.length % 2 === 0){
        var first = sorted[sorted.length/2-1];
        var second = sorted[sorted.length/2];
        return (first + second) /2;
    }
}

    var a = [1];
    var b = [2,-3,4,5,6,7,8,9,10]
  
  console.log (median(a,b));

/*

function median(array1, array2){
  
    sortNegative(array1);
    sortNegative(array2);
    
    var lowest;
    var highest;
    
    if (array1.length === 0 || array2.length === 0){
      if (array1.length !== 0){
        if (array1.length === 1) return array1[0];
        lowest = array1[0];
        highest = array1[array1.length - 1];
        return (lowest + highest) / 2;
      }
      if (array2.length !== 0){
        if (array2.length === 1) return array2[0];
        lowest = array2[0];
        highest = array2[array2.length - 1];
        return (lowest + highest) / 2;
      }
    }
    lowest = array1[0];
    if (array2[0] < lowest) lowest = array2[0];

    highest = array2[array2.length - 1];
    if (array1[array1.length -1] > highest) highest = array1[array1.length -1];
    
    console.log("lowest - ",  lowest);
    console.log("highest - ", highest);
    
    if (lowest < 0 && highest < 0){
        console.log("passed - 1");
      return (lowest + highest) / 2
    }
    
    if (lowest < 0 && highest > 0){
        console.log("passed - 2");
        return (highest - (lowest))/ 2;
    }
    return (lowest + highest) / 2;
  }



*/

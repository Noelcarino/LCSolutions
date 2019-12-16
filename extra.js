

/*
#################
    PROBLEM #1
#################
*/
function letterTranslater(string, number){
    var alphabet = [
        'a','b','c','d','e',
        'f','g','h','i','j',
        'k','l','m','n','o',
        'p','q','r','s','t',
        'u','v','w','x','y',
        'z'
    ];
    var strToArray = string.split('');
    for (var i = 0; i < strToArray.length; i++){
        for (var j = 0; j < alphabet.length; j++){
            if (strToArray[i] === alphabet[j]){
                if (j+number < 0){
                    strToArray[i] = alphabet[alphabet.length + (j+number) ];
                    break;
                } else if ((j+number) > alphabet.length){
                    strToArray[i] = alphabet[(j+number) - alphabet.length];
                    break;
                } else {
                    strToArray[i] = alphabet[j + number];
                    break;
                }
            }
        }
    }
    return strToArray.join('');
}

var string = "day";
var number = -3;
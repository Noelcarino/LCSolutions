


/*
    Date: 1/20/2020
    LC: #125 - Easy - Valid Palindrome
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
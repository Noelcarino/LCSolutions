class EasyLibrary{
    getArray(){
        var array1 = [
                "23 - Palindrome", 
                "40 - Flip and Invert Image", 
                "60 - isLongPressedName", 
                "830 - RockPaperScissors"];

        var array2 = [
                this.palindrome_23,
                this.flipAndInvertImage_40,
                this.isLongPressedName_60,
                this.rockPaperScissors_830
            ];
        return [array1,array2];
    }
    palindrome_23(){
        console.log("Hi, Im a palindrome 23 :D");
    }
    flipAndInvertImage_40(){
        console.log("Hi, Im a flipAndInvertImage 40 :D");
    }
    isLongPressedName_60(){
        console.log("Hello, I'm a isLongPressedName");
    }
    rockPaperScissors_830(){
        console.log("Hello, Wanna play rockpaper Scissors?");
    }
}
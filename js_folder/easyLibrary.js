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
        var div = $("<div>")
                .addClass("container-fluid p-0 mx-auto")
                .append('<img class="img-thumbnail" src="images/pikachu2.png" />');
                // .text("Hi, Im a palindrome 23 :D");
        var targetDiv = $("#stage-two-algorithms")
        div.appendTo(targetDiv.empty());
    }
    flipAndInvertImage_40(){
        var div = $("<div>").addClass("container-fluid p-3 mx-auto").text("Hi, Im a flipAndInvertImage 40 :D");
        var targetDiv = $("#stage-two-algorithms");
        div.appendTo(targetDiv.empty());
    }
    isLongPressedName_60(){
        var div = $("<div>").addClass("container-fluid p-3 mx-auto").text("Hello, I'm a isLongPressedName");
        var targetDiv = $("#stage-two-algorithms");
        div.appendTo(targetDiv.empty());
    }
    rockPaperScissors_830(){
        var div = $("<div>").addClass("container-fluid p-3 mx-auto").text("Hello, Wanna play rockpaper Scissors?");
        var targetDiv = $("#stage-two-algorithms");
        div.appendTo(targetDiv.empty());
    }
}
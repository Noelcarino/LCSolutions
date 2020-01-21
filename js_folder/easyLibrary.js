class EasyLibrary{
    getArray(){
        // var array1 = [
        //         "23 - Palindrome",
        //         "40 - Flip and Invert Image", 
        //         "60 - isLongPressedName", 
        //         "830 - RockPaperScissors"];

        // var array2 = [
        //         this.palindrome_23,
        //         this.flipAndInvertImage_40,
        //         this.isLongPressedName_60,
        //         this.rockPaperScissors_830
        //     ];
        // return [array1,array2];
        var titleArray = [
            "125 - Valid Palindrome"
        ]
        var functionArray = [
            this.validPalindrome125
        ]
        return [titleArray, functionArray];
    }
    validPalindrome125(){
        console.log("hello?");
        var problemStatistics = "Start: 1/19/2020 - 11:45pm \n Finish: 1/20/2020 - 1:19am";
        var problemDescription = "125. Valid Palindrome - Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.";
        var textContainer1 = $("<h2>")
                                .addClass("container-fluid px-5 mb-5 mx-auto")
                                .text(problemStatistics);
        var textContainer2 = $("<h5>")
                                .addClass("container-fluid px-5 mx-auto")
                                .text(problemDescription);
        var div = $("<div>")
                        .addClass("container-fluid px-5 mx-auto")
                        .append(textContainer1,textContainer2,'<img class="img-fluid my-5 px-0 px-md-5" src="../images/123palindrome_1.png" />')
                        .append('<img class="img-fluid px-0 px-md-5" src="../images/123palindrome_2.jpg" />');
        var targetDiv = $("#stage-two-algorithms")
        div.appendTo(targetDiv.empty());
    }
    // palindrome_23(){
    //     var div = $("<div>")
    //             .addClass("container-fluid p-0 mx-auto")
    //             .append('<img class="img-thumbnail" src="images/pikachu2.png" />');
    //             // .text("Hi, Im a palindrome 23 :D");
    //     var targetDiv = $("#stage-two-algorithms")
    //     div.appendTo(targetDiv.empty());
    // }
    // flipAndInvertImage_40(){
    //     var div = $("<div>").addClass("container-fluid p-3 mx-auto").text("Hi, Im a flipAndInvertImage 40 :D");
    //     var targetDiv = $("#stage-two-algorithms");
    //     div.appendTo(targetDiv.empty());
    // }
    // isLongPressedName_60(){
    //     var div = $("<div>").addClass("container-fluid p-3 mx-auto").text("Hello, I'm a isLongPressedName");
    //     var targetDiv = $("#stage-two-algorithms");
    //     div.appendTo(targetDiv.empty());
    // }
    // rockPaperScissors_830(){
    //     var div = $("<div>").addClass("container-fluid p-3 mx-auto").text("Hello, Wanna play rockpaper Scissors?");
    //     var targetDiv = $("#stage-two-algorithms");
    //     div.appendTo(targetDiv.empty());
    // }
}
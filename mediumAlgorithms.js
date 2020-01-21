class MediumAlgorithms{
    loadMediumAlgorithms(){
        var algorithmButtonClass = "btn btn-warning  btn-block text-dark  mb-5 p-2 shadow";
        var algorithmButtons,buttonContainer;
        var algorithmButtonContainerClass = "container-fluid row p-3 mx-auto justify-content-around"
        var algorithmButtonContainer = $("<div>").addClass(algorithmButtonContainerClass);

        for (var i = 1; i <= 14; i++){
            algorithmButtons = $("<button>")
                                    .addClass(algorithmButtonClass)
                                    .attr('id',"algorithm-" + i)
                                    .text(i)
                                    .appendTo(buttonContainer);
            buttonContainer = $("<div>")
                                    .addClass("container-fluid col-3 px-3")
                                    .appendTo(algorithmButtonContainer)


        }
        $("#stage-algorithms").append(algorithmButtonContainer);
    }
    algorithmOne(){
        console.log("Hi Im algorithm 1");
    }
    algorithmTwo(){
        console.log("Hello, I am algorithm 2 ^_^");
    }
}
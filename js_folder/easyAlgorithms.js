class EasyAlgorithms{
    loadEasyAlgorithms(array){
        var algorithmButtonClass = "btn btn-primary btn-block text-light  mb-5 p-2 shadow";
        var algorithmButtons, buttonContainer;
        var algorithmButtonContainerClass = "container-fluid row px-1 py-3 mx-auto justify-content-around"
        var algorithmButtonContainer = $("<div>").addClass(algorithmButtonContainerClass);

        for (var i = 0; i < array[0].length; i++){
            buttonContainer = $("<div>")
                                    .addClass("container-fluid col-12 px-0")
                                    .appendTo(algorithmButtonContainer);
            algorithmButtons = $("<button>")
                                    .addClass(algorithmButtonClass)
                                    .attr('id',"algorithm-" + i)
                                    .on('click', array[1][i])
                                    .text(array[0][i])
                                    .appendTo(buttonContainer);
        }
        $("#stage-algorithms").append(algorithmButtonContainer);
    }
}
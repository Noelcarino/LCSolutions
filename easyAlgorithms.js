class EasyAlgorithms{
    loadEasyAlgorithms(){
        var algorithmButtonClass = "btn btn-dark text-light mb-2 mx-auto";
        var algorithmButtons;

        var algorithmButtonContainerClass = "container-fluid row"
        var algorithmButtonContainer = $("<div>").addClass(algorithmButtonContainerClass);
        for (var i = 1; i <= 4; i++){
            algorithmButtons = $("<button>").addClass(algorithmButtonClass).attr('id',"algorithm-" + i).text(i).appendTo(algorithmButtonContainer)
        }
        $("#stage-algorithms").append(algorithmButtonContainer);
    }
}
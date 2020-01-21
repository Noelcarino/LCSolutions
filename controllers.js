class Controller{
    loadController(){
        this.loadButtons();
        this.loadStage();
        this.eventBinder();
    }
    loadStage(){
        var title = $("<h3>")
                        .addClass("mx-auto mb-0")
                        .text("Algorithms");

        var algorithmTargetClass = "container-fluid bg-info border stage-algorithms-class"
        var algorithmTarget = $("<div>")
                                .attr('id','stage-algorithms')
                                .addClass(algorithmTargetClass, " stage-algorithms-class");

        var stageContainerClass = "container-fluid bg-white shadow border row w-75 mx-auto stage p-3 min-vw-50"
        var stageContainer = $("<div>")
                                    .attr('id', 'stage')
                                    .addClass(stageContainerClass)
                                    .append(title, algorithmTarget);

        $("#bodyTest").append(stageContainer);
    }
    loadButtons(){

        var button3Class = "btn btn-danger mx-auto";
        var button3 = $("<button>")
                            .attr('id', 'button-3')
                            .addClass(button3Class)
                            .text("Hard");

        var button2Class = "btn btn-warning mx-auto"
        var button2 = $("<button>")
                            .attr('id', 'button-2')
                            .addClass(button2Class)
                            .text("Medium");

        var button1Class = "btn btn-primary mx-auto"
        var button1 = $("<button>")
                            .attr('id','button-1')
                            .addClass(button1Class)
                            .text("Easy");

        var buttonContainerClass = "container-fluid bg-light rounded shadow py-3 row w-50 mx-auto mb-5";

        var buttonContainer = $("<div>")
                                .addClass(buttonContainerClass)
                                .append(button1, button2, button3);

        $("#bodyTest").append(buttonContainer);
    }
    test(){
        return $("<div>").addClass("mb-5").text("text?");
    }
    eventBinder(){
        var text1 = this.test;
        var text2 = $("<div>")
                        .addClass("mb-5")
                        .text("text2?");
        var text3 = $("<div>")
                        .addClass("mb-5")
                        .text("test3?");
        $("#button-1").click(function(){
            console.log(this.id);
            $("#stage-algorithms").empty().append(text1);
        })

        $("#button-2").click(function(){
            console.log(this.id);
            $("#stage-algorithms").empty().append(text2);

        })
        
        $("#button-3").click(function(){
            console.log(this.id);
            $("#stage-algorithms").empty().append(text3);

        })
    }
}
class Controller{
    constructor(){
        this.eventBinder = this.eventBinder.bind(this);
    }
    loadController(){
        this.loadButtons();
        this.loadStage();
        this.eventBinder();
    }
    loadStage(){
        var title = $("<h3>")
                        .addClass("mx-auto mb-0")
                        .text("Algorithms");

        var algorithmTargetClass = "container-fluid stage-algorithms-class p-4 mt-4"
        var algorithmTarget = $("<div>")
                                .attr('id','stage-algorithms')
                                .addClass(algorithmTargetClass, " stage-algorithms-class");

        var stageContainerClass = "container-fluid bg-light shadow row w-75 mx-auto stage px-5 pt-4 pb-5"
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

        var buttonContainerClass = "container-fluid bg-light rounded shadow py-4 row w-50 mx-auto mb-5";

        var buttonContainer = $("<div>")
                                .addClass(buttonContainerClass)
                                .append(button1, button2, button3);

        $("#bodyTest").append(buttonContainer);
    }
    loadEasyAlgorithms(){
        // import simpleArray from "./algorithm";


        var easyAlgorithms, easyLibrary, library;
        easyAlgorithms  = new EasyAlgorithms();
        easyLibrary = new EasyLibrary();
        library = easyLibrary.getArray();
        easyAlgorithms.loadEasyAlgorithms(library);
    }
    loadMediumAlgorithms(){
        var mediumAlgorithms;
        mediumAlgorithms = new MediumAlgorithms();
        mediumAlgorithms.loadMediumAlgorithms();
    }
    loadHardAlgorithms(){
        var hardAlgorithms;
        hardAlgorithms = new HardAlgorithms();
        hardAlgorithms.loadHardAlgorithms();
    }
    eventBinder(){
        var clicked = "px-5";
        var text1 = this.loadEasyAlgorithms;
        var text2 = this.loadMediumAlgorithms;
        var text3 = this.loadHardAlgorithms;

        $("#button-1").click(function(){
            $("#button-2").removeClass(clicked);
            $("#button-3").removeClass(clicked);
            $("#button-1").addClass(clicked);
            $("#stage-algorithms").empty().append(text1);
        })

        $("#button-2").click(function(){
            $("#button-1").removeClass(clicked);
            $("#button-3").removeClass(clicked);
            $("#button-2").addClass(clicked);
            $("#stage-algorithms").empty().append(text2);
        })
        
        $("#button-3").click(function(){
            $("#button-1").removeClass(clicked);
            $("#button-2").removeClass(clicked);
            $("#button-3").addClass(clicked);
            $("#stage-algorithms").empty().append(text3);
        })
    }
}
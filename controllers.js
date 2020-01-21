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
        var stageContainerClass = "conatiner-fluid bg-secondary shadow border py-3 px-5 row w-75 mx-auto stage"
        var stageContainer = $("<div>")
                                    .attr('id', 'stage')
                                    .addClass(stageContainerClass)

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
    eventBinder(){
        var text = $("<div>")
                        .addClass("mb-5")
                        .text("text?");
        var text2 = $("<div>")
                        .addClass("mb-5")
                        .text("text2?");
        var text3 = $("<div>")
                        .addClass("mb-5")
                        .text("test3?");

        $("#button-1").click(function(){
            console.log(this.id);
            $("#stage").append(text2);
        })

        $("#button-2").click(function(){
            console.log(this.id);
            $("#stage").append(text);

        })
        
        $("#button-3").click(function(){
            console.log(this.id);
            $("#stage").append(text3);
        })
    }
}
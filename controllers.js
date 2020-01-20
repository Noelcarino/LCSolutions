class Controller{
    constructor(){
        this.eventBinder = this.eventBinder.bind(this);
    }
    loadController(){
        this.loadButtons();
        this.eventBinder();
    }
    loadButtons(){
        var button1Class = "btn btn-success mx-auto"
        var button1 = $("<button>")
                            .attr('id','button-1')
                            .addClass(button1Class)
                            .text("Easy");

        var buttonContainerClass = "container-fluid bg-light border p-5";

        var buttonContainer = $("<div>")
                                .addClass(buttonContainerClass)
                                .append(button1);

        $("#bodyTest").append(buttonContainer);
    }
    eventBinder(){
        $("#button-1").click(function(){
            console.log(this);
        })
    }
}
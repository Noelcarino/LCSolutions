class LeetCode{
    constructor(displayDom) {
        this.dom = {
            container: displayDom
        }
        this.addYellowBlock = this.addYellowBlock.bind(this);
        this.addEventListener = this.addEventListener.bind(this);
    }
    loadPage(){
        this.loadHeader();
        this.loadBody();
        this.addEventListener();
    }
    loadHeader(){
        var headerElementClass = "container-fluid mx-auto py-3 text-light bg-info shadow text-dark";
        var headerText = $("<h1>").text("LeetCode Problems");
        var headerElement = $("<div>")
                                .addClass(headerElementClass)
                                .append(headerText);

        var headerContainerClass = "container-fluid pb-5 bg-light px-0"
        var headerContainer = $("<div>")
                                .addClass(headerContainerClass)
                                .append(headerElement);

        $(this.dom.container).append(headerContainer);

    }
    loadBody(){
        var buttonClass = "btn btn-danger px-3 mx-3";
        var button = $("<button>")
                        .attr('id','buttonTest')
                        .addClass(buttonClass)
                        .text("Load Easy Problems");
        var button2 = $("<button>")
                        .attr('id','buttonTest2')
                        .addClass(buttonClass)
                        .text("Load Medium Problems");
        var button3 = $("<button>")
                        .attr('id','buttonTest3')
                        .addClass(buttonClass)
                        .text("Load Hard Problems");

        var bodyClass = "container-fluid bg-light mx-auto py-5";
        var bodyElement = $("<div>")
                            .attr('id','bodyTest')
                            .addClass(bodyClass)
                            .append(button)
                            .append(button2)
                            .append(button3);

        $(this.dom.container).append(bodyElement);
    }
    addYellowBlock(){
        var yellowButton = $("<button>")
                                .text("yellow button")
                                .addClass("btn btn-warning mb-3")
                                .on("click", function(){
                                    console.log("removed");
                                })
                                
        var yellowBlock = $("<div>")
                                .addClass("container-fluid p-3")
                                .append(yellowButton)
                                .on("click", function(){
                                    $(this).remove();
                                });
        $("#bodyTest").append(yellowBlock);
    }
    addBlueBLock(){
        var yellowButton = $("<button>")
                                .text("blue button")
                                .addClass("btn btn-primary mb-3")
                                .on("click", function(){
                                    console.log("removed");
                                })
                                
        var yellowBlock = $("<div>")
                                .addClass("container-fluid p-3")
                                .append(yellowButton)
                                .on("click", function(){
                                    $(this).remove();
                                });
        $("#bodyTest").append(yellowBlock);
    }
    addGreenBlock(){
        var yellowButton = $("<button>")
                                .text("Green button")
                                .addClass("btn btn-success mb-3")
                                .on("click", function(){
                                    console.log("removed");
                                })
                                
        var yellowBlock = $("<div>")
                                .addClass("container-fluid p-3")
                                .append(yellowButton)
                                .on("click", function(){
                                    $(this).remove();
                                });
        $("#bodyTest").append(yellowBlock);
    }
    addEventListener(){
        $("#buttonTest").on('click', this.addYellowBlock);
        $("#buttonTest2").on('click', this.addBlueBLock);
        $("#buttonTest3").on('click', this.addGreenBlock);
    }
}
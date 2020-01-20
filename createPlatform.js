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
        var buttonClass = "btn btn-danger px-3";
        var button = $("<button>")
                        .attr('id','buttonTest')
                        .addClass(buttonClass)
                        .text("Button Test");
        var bodyClass = "container-fluid bg-light mx-auto py-5";
        var bodyElement = $("<div>")
                            .attr('id','bodyTest')
                            .addClass(bodyClass)
                            .text("hello")
                            .append(button);

        $(this.dom.container).append(bodyElement);
    }
    addYellowBlock(){
        var yellowBlock = $("<div>").addClass("container-fluid p-3").text("yellow block");

        $("#bodyTest").append(yellowBlock);
    }
    addEventListener(){
        $("#buttonTest").on('click', this.addYellowBlock);
    }
}
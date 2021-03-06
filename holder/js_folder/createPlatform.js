class LeetCode{
    constructor(displayDom) {
        this.dom = {
            container: displayDom
        }
    }
    loadPage(){
        this.loadHeader();
        this.loadBody();
    }
    loadHeader(){
        var headerElementClass = "container-fluid mx-auto py-3 text-light bg-info shadow text-dark";
        var headerText = $("<h1>").text("LC Solutions");
        var headerElement = $("<div>")
                                .addClass(headerElementClass)
                                .append(headerText);

        var headerContainerClass = "container-fluid pb-5 bg-dark px-0"
        var headerContainer = $("<div>")
                                .addClass(headerContainerClass)
                                .append(headerElement);

        $(this.dom.container).append(headerContainer);
    }
    loadBody(){
        var bodyClass = "container-fluid bg-dark mx-auto py-4 h-50 b-height row";
        var bodyElement = $("<div>")
                            .attr('id','bodyTest')
                            .addClass(bodyClass)

        $(this.dom.container).append(bodyElement);
    }
    
}
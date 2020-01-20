class LeetCode{
    constructor(displayDom) {
        this.dom = {
            container: $(displayDom)
        }
    }
    loadPage(){
        this.loadHeader();
        this.loadBody();
    }
    loadHeader(){
        var headerElementClass = "container-fluid mx-auto mb-5 p-3 text-light bg-info shadow-lg text-dark";
        var headerText = $("<h1>").text("LeetCode Problems");
        var headerElement = $("<div>")
                                .addClass(headerElementClass)
                                .append(headerText);

        var headerContainerClass = "container-fluid p-2 bg-light"
        var headerContainer = $("<div>")
                                .addClass(headerContainerClass)
                                .append(headerElement);

        $("#js-target").append(headerContainer);
    }
    loadBody(){
        var bodyClass = "container-fluid bg-dark mx-auto my-5";
        var bodyElement = $("<div>")
                            .addClass(bodyClass)
                            .text("hello");

        $("#js-target").append(bodyElement);
    }

}
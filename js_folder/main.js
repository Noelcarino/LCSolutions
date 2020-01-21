var loadDOM;
var controllers;
$(document).ready( startApp );

function startApp(){
    loadDOM = new LeetCode('#js-target');
    controllers = new Controller();
    
    loadDOM.loadPage();
    controllers.loadController();
    
}
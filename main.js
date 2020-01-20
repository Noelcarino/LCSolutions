var loadDOM;
$(document).ready( startApp );

function startApp(){
    loadDOM = new LeetCode('#js-target');
    loadDOM.loadPage();
    // loadDOM.addEventListener();
}
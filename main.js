var loadDOM;
$(document).ready( startApp );

function startApp(){
    loadDOM = new LeetCode('#js-code');
    loadDOM.loadPage();
}
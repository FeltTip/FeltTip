document.onready = function () {
    var opts = {
        lang:'en', // set your language
        styleWithCSS:false,
        height:400,
        toolbar:'maxi'
    };
    // create editor
    $('#content').elrte(opts);

    var get = window.location.search.substr(1).split('=');
    var fileName = get[1];
    var file = JSON.parse(localStorage[fileName]);
    $('#content').elrte('val', file.content);
    $('.save').on('click', function(){
        file.content = $('#content').elrte('val');
        localStorage[fileName] = JSON.stringify(file);
        return false;
    });
};
document.onready = function () {
    var opts = {
        lang:'en', // set your language
        styleWithCSS:false,
        height:400,
        toolbar:'maxi'
    };
    // create editor
    $('#content').elrte(opts);
};
$(document).ready(function(){
    $('#add').on('click', function(){
        chrome.tabs.create({
            active: true,
            url: 'create.html'
        });
        return false;
    });

    if (localStorage.length > 0) {
        for (file in localStorage) {
            $('#files').append('<li>'+file+'</li>');
        }
    }
});
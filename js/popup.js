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
            $('#files').append('<li><a href="#">'+file+'</a></li>');
        }
    }

    $('#files a').on('click', function(){
        chrome.tabs.create({url: 'edit.html?file='+this.text, active: true});
    });
});
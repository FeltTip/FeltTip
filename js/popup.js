$(document).ready(function(){
    $('#add').on('click', function(){
        chrome.tabs.create({
            active: true,
            url: 'create.html'
        });
        return false;
    });
});
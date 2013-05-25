$(document).ready(function(){
    $('#create').on('click', function(){
        var name = $('#name').val();

        if (name == '') {
            alert('Please input file name');
            return false;
        }

        if (createFile(name) != false) {
            chrome.tabs.getCurrent(function(tab){
                chrome.tabs.update(tab.id, {url: 'edit.html'});
            });
        }
    });
});

function createFile(name) {
    if (typeof localStorage[name] === "undefined") {
        var file = JSON.stringify({content: '', quotes: []});

        localStorage[name] = file;
    }
    else {
        alert('File ' + name + ' is already exists');
        return false;
    }

    return true;
}